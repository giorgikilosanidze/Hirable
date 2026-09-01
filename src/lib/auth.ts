import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
    // Matches the signup form's "At least 8 characters" placeholder.
    minPasswordLength: 8,
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
      // Note on what this does and doesn't do today: with no email sending,
      // a password account is never `emailVerified`, and Better Auth refuses
      // to *implicitly* link into an unverified account — deliberately, since
      // anyone can type anyone's address at signup. So merging happens through
      // the explicit "Connect Google" button in Settings, which requires a
      // live session and is therefore proof enough on its own. Add email
      // verification later and implicit linking starts working for free.
    },
  },
  // Registered only once both halves are present, so the app still boots
  // with the credentials blank instead of failing at startup.
  socialProviders:
    process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          },
        }
      : {},
  session: {
    // The ceiling for "Keep me signed in for 30 days". Sign in without that
    // box ticked and the cookie dies with the browser session instead.
    expiresIn: 60 * 60 * 24 * 30,
    // getSession() reads a signed, tamper-proof cookie instead of hitting
    // Postgres on every call (e.g. the landing page nav on every anonymous
    // visit). Re-verified against the DB once this expires — a stale cache
    // only risks showing the wrong nav button for up to 5 minutes, never a
    // security gap, since requireUser() on actual protected routes doesn't
    // use this cache.
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5,
    },
  },
  rateLimit: {
    // Better Auth only turns this on in production by default. On means we
    // can actually exercise it locally, and dev behaves like prod.
    enabled: true,
    // Counters must outlive a single lambda. In-memory would reset on every
    // cold start and be counted separately per instance on Vercel — which
    // is no limit at all.
    storage: "database",
    // This window must be >= the longest customRule below. Better Auth
    // prunes rows older than max(this, 60s) and does NOT consider custom
    // rules when computing that cutoff — set it shorter and the counters
    // for the rules below get swept mid-window, handing an attacker a free
    // reset every minute.
    window: 300,
    max: 100,
    // Keyed by IP + path. The window/max above is a general traffic guard;
    // these two are the ones that matter for guessing.
    customRules: {
      // ~10 tries per 5 minutes. Room to fat-finger a password, far too slow
      // to work through a wordlist.
      "/sign-in/email": { window: 300, max: 10 },
      // Blunts scripted mass account creation.
      "/sign-up/email": { window: 300, max: 5 },
    },
  },
  // Must stay last — this is what lets a Server Action write the session
  // cookie on its way out.
  plugins: [nextCookies()],
});
