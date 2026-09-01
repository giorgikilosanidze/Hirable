import "server-only";
import { cache } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";
import { prisma } from "./prisma";

/**
 * The authoritative session check — it hits the database, unlike the cookie
 * sniff in proxy.ts. `cache` collapses it to one query per render pass no
 * matter how many components ask.
 */
export const getSession = cache(async () =>
  auth.api.getSession({ headers: await headers() })
);

/**
 * How this user can sign in. Better Auth writes one account row per method,
 * using the provider's id — or "credential" for email and password.
 */
export async function getSignInProviders(userId: string): Promise<string[]> {
  const accounts = await prisma.account.findMany({
    where: { userId },
    select: { providerId: true },
  });

  return accounts.map((account) => account.providerId);
}

/** For anything that cannot render without a signed-in user. */
export async function requireUser() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return session.user;
}

/**
 * For the login/signup pages. Unlike proxy.ts's cookie sniff, this hits the
 * database, so a stale cookie (session deleted server-side but still held by
 * the browser) can't bounce someone back and forth between here and the
 * app shell's own DB check.
 */
export async function redirectIfAuthenticated() {
  const session = await getSession();

  if (session) {
    redirect("/dashboard");
  }
}
