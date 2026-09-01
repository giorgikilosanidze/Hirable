import { PASSWORD_STRENGTH } from "./constants";
import type { PasswordStrength } from "./types";

/**
 * Scores a password for the signup meter. The rungs deliberately mirror
 * SignupSchema, so the bar turns green exactly when the server would accept
 * it — a meter that promises more than the validator delivers is worse than
 * no meter.
 */
export function passwordStrength(password: string): PasswordStrength {
  if (!password) return PASSWORD_STRENGTH[0];
  if (password.length < 8) return PASSWORD_STRENGTH[1];
  if (!/[0-9]/.test(password)) return PASSWORD_STRENGTH[2];
  if (password.length < 12 || !/[^a-zA-Z0-9]/.test(password)) {
    return PASSWORD_STRENGTH[3];
  }
  return PASSWORD_STRENGTH[4];
}
