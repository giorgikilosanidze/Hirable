"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { APIError } from "better-auth/api";
import * as z from "zod";
import type { AuthFormState } from "@/components/auth/types";
import { auth } from "@/lib/auth";
import { consumeAuthAttempt } from "@/lib/rate-limit";

const SignupSchema = z.object({
  name: z.string().min(2, { error: "Enter your full name." }).trim(),
  email: z.email({ error: "That doesn't look like an email address." }).trim(),
  password: z
    .string()
    .min(8, { error: "Use at least 8 characters." })
    // Better Auth rejects anything longer outright — catch it here so it
    // reads as a field error rather than a bare failure banner.
    .max(128, { error: "Keep it under 128 characters." })
    .regex(/[0-9]/, { error: "Include at least one number." }),
});

// Deliberately lax next to SignupSchema: an existing account's password only
// has to match, and telling a returning user their password is malformed
// leaks how it was stored.
const LoginSchema = z.object({
  email: z.email({ error: "That doesn't look like an email address." }).trim(),
  password: z.string().min(1, { error: "Enter your password." }),
});

export async function signup(
  _state: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const fields = SignupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!fields.success) {
    return { errors: z.flattenError(fields.error).fieldErrors };
  }

  // This path calls Better Auth in-process, so its own HTTP rate limiter
  // never sees the request. Throttle it here or the form is an open door.
  const retryAfter = await consumeAuthAttempt("sign-up");
  if (retryAfter) return tooManyAttempts(retryAfter);

  try {
    await auth.api.signUpEmail({ body: fields.data });
  } catch (error) {
    if (error instanceof APIError) {
      // Sign-up returns USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL; the bare
      // USER_ALREADY_EXISTS is a real code too, so match the prefix.
      if (error.body?.code?.startsWith("USER_ALREADY_EXISTS")) {
        return {
          errors: { email: ["An account with this email already exists."] },
        };
      }
      return { message: error.message };
    }
    throw error;
  }

  // Outside the try: redirect() signals by throwing, so a catch would eat it.
  redirect("/onboarding");
}

export async function login(
  _state: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const fields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!fields.success) {
    return { errors: z.flattenError(fields.error).fieldErrors };
  }

  const retryAfter = await consumeAuthAttempt("sign-in");
  if (retryAfter) return tooManyAttempts(retryAfter);

  try {
    await auth.api.signInEmail({
      body: {
        ...fields.data,
        // Unchecked, the cookie expires when the browser closes.
        rememberMe: formData.get("rememberMe") === "on",
      },
    });
  } catch (error) {
    if (error instanceof APIError) {
      // Never say which half was wrong — that confirms an email is registered.
      return error.body?.code === "INVALID_EMAIL_OR_PASSWORD"
        ? { message: "That email and password don't match." }
        : { message: error.message };
    }
    throw error;
  }

  redirect("/dashboard");
}

/**
 * Hands off to Google. Better Auth returns the consent-screen URL rather
 * than redirecting itself, so the redirect happens here — outside any
 * try/catch, since redirect() signals by throwing.
 */
export async function signInWithGoogle() {
  const { url } = await auth.api.signInSocial({
    body: {
      provider: "google",
      callbackURL: "/dashboard",
      // A first-time Google user has no resume yet, so they get onboarding
      // instead of an empty dashboard.
      newUserCallbackURL: "/onboarding",
    },
  });

  if (!url) {
    throw new Error("Google sign-in did not return a redirect URL.");
  }

  redirect(url);
}

/**
 * Attaches Google to the account the caller is already signed into. Safe
 * without email verification precisely because it needs a live session:
 * signing in proved this account, Google proves the other half. Better Auth
 * gates the endpoint on sessionMiddleware, so there is no unauthenticated
 * path to it.
 */
export async function linkGoogle() {
  const { url } = await auth.api.linkSocialAccount({
    body: { provider: "google", callbackURL: "/settings?tab=account" },
    headers: await headers(),
  });

  if (!url) {
    throw new Error("Google account linking did not return a redirect URL.");
  }

  redirect(url);
}

function tooManyAttempts(seconds: number): AuthFormState {
  const wait =
    seconds >= 60
      ? `${Math.ceil(seconds / 60)} minute${seconds >= 120 ? "s" : ""}`
      : `${seconds} seconds`;

  return { message: `Too many attempts. Try again in ${wait}.` };
}

export async function logout() {
  await auth.api.signOut({ headers: await headers() });
  redirect("/login");
}
