import type { SessionUser } from "./types";

/**
 * "Alex Chen" → "AC". Takes the first and last word so middle names don't
 * win, and falls back to the email when a name is a single word.
 */
export function initialsFrom(user: SessionUser): string {
  const words = user.name.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) return user.email.slice(0, 2).toUpperCase();
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();

  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}
