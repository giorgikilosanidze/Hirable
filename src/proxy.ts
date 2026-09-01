import { getSessionCookie } from "better-auth/cookies";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Optimistic only. This reads the cookie without validating it, so a forged
 * one gets past — every protected screen still goes through the DAL, which
 * checks the session against the database. What this buys is keeping signed
 * out visitors off the app shell without a query on every navigation.
 *
 * The reverse case — bouncing signed-in users off /login and /signup — is
 * deliberately NOT done here on the cookie alone: a stale cookie (session
 * deleted server-side, e.g. a DB reset, but still held by the browser) would
 * ping-pong forever between this optimistic redirect and requireUser()'s
 * authoritative one. Those two pages check the real session themselves
 * instead (see redirectIfAuthenticated in dal.ts).
 */
const APP_ROUTES = [
  "/dashboard",
  "/analyses",
  "/analyze",
  "/tracker",
  "/resume",
  "/letters",
  "/settings",
  "/onboarding",
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const signedIn = Boolean(getSessionCookie(request));

  if (!signedIn && APP_ROUTES.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
