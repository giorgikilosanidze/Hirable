import type { AuthCopy, AuthMode } from "./types";

export const AUTH_COPY: Record<AuthMode, AuthCopy> = {
  login: {
    title: "Welcome back",
    subtitle:
      "Pick up where you left off — your resume, scores and board are waiting.",
    cta: "Log in",
    passwordPlaceholder: "Your password",
    switchPrompt: "No account yet?",
    switchLabel: "Sign up",
    switchHref: "/signup",
    brandBadge: "Since you were last here",
    brandHeadline: "Three new roles crossed 80 while you were away.",
    brandBody:
      "Hirable kept scoring the searches you saved. Your board is unchanged, and the two drafts you left open are still there.",
  },
  signup: {
    title: "Create your account",
    subtitle: "Two minutes to set up. Your first five job analyses are free.",
    cta: "Create account",
    passwordPlaceholder: "At least 8 characters",
    switchPrompt: "Already have one?",
    switchLabel: "Log in",
    switchHref: "/login",
    brandBadge: "What you get",
    brandHeadline: "Know where you stand before you spend the evening on it.",
    brandBody:
      "Upload your resume once. Every job you paste after that gets a score, a gap list and a first-draft cover letter built from your own history.",
  },
};

export const INPUT_CLASS =
  "h-[42px] w-full rounded-md border border-border-default bg-surface px-[13px] text-[14.5px] text-text-primary outline-none transition-all duration-140 ease-standard placeholder:text-text-disabled focus:border-accent focus:shadow-ring";

export const FIELD_LABEL_CLASS =
  "block text-[13px] font-medium text-text-primary";

/** Proof panel sample — the analysis shown beside the form. */
export const PANEL_MATCH = {
  score: 86,
  role: "Design Systems Lead",
  meta: "Linear · Hybrid, SF",
  verdict: "Strong match",
  skills: [
    { label: "Design systems", present: true },
    { label: "Figma", present: true },
    { label: "Rust", present: false },
  ],
};

export const PANEL_QUOTE = {
  initials: "PM",
  text: "“I stopped applying to things I had no shot at. Interviews went up because applications went down.”",
  attribution: "— Priya M., PM",
};
