export type AuthMode = "login" | "signup";

/** What the signup/login Server Actions hand back to `useActionState`. */
export type AuthFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      /** Whole-form failure — bad credentials, provider down. */
      message?: string;
    }
  | undefined;

/** One rung of the signup password meter. */
export type PasswordStrength = {
  /** How many of the four bars light up. */
  filled: number;
  bar: string;
  label: string;
};

export type AuthCopy = {
  title: string;
  subtitle?: string;
  cta: string;
  passwordPlaceholder: string;
  switchPrompt: string;
  switchLabel: string;
  switchHref: string;
  brandBadge: string;
  brandHeadline: string;
  brandBody: string;
};
