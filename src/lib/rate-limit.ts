import "server-only";
import { headers } from "next/headers";
import { prisma } from "./prisma";

/**
 * Fixed windows, per client IP. Sign-in is the brute-force target; sign-up
 * is throttled to blunt scripted account creation. Both mirror the
 * customRules in auth.ts so the form and the raw endpoint behave alike.
 */
export const AUTH_LIMITS = {
  "sign-in": { window: 300, max: 10 },
  "sign-up": { window: 300, max: 5 },
} as const;

type Action = keyof typeof AUTH_LIMITS;

/**
 * Records an attempt and reports whether it is over the limit.
 *
 * One atomic upsert, so two concurrent requests can't both read a stale
 * count and each decide they're under it. Returns the seconds left when
 * blocked, or null when the caller may proceed.
 */
export async function consumeAuthAttempt(action: Action): Promise<number | null> {
  const { window, max } = AUTH_LIMITS[action];
  const now = new Date();
  const cutoff = new Date(now.getTime() - window * 1000);
  const key = `${action}|${await clientIp()}`;

  const [row] = await prisma.$queryRaw<{ count: number; windowStart: Date }[]>`
    INSERT INTO "authThrottle" ("key", "count", "windowStart")
    VALUES (${key}, 1, ${now})
    ON CONFLICT ("key") DO UPDATE SET
      "count" = CASE
        WHEN "authThrottle"."windowStart" < ${cutoff} THEN 1
        ELSE "authThrottle"."count" + 1 END,
      "windowStart" = CASE
        WHEN "authThrottle"."windowStart" < ${cutoff} THEN ${now}
        ELSE "authThrottle"."windowStart" END
    RETURNING "count", "windowStart"
  `;

  if (row.count <= max) return null;

  const resetsAt = row.windowStart.getTime() + window * 1000;
  return Math.max(1, Math.ceil((resetsAt - now.getTime()) / 1000));
}

/**
 * Vercel sets x-forwarded-for; the first entry is the client. Locally there
 * is usually no proxy header at all, so every caller shares one bucket —
 * fine for a dev machine, and it fails closed rather than open.
 */
async function clientIp(): Promise<string> {
  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for");

  if (forwarded) return forwarded.split(",")[0].trim();

  return headerList.get("x-real-ip") ?? "unknown";
}
