import type { Plan } from "./types";

/** Plan and usage, shown on the dashboard and in Settings › Plan. */
export const PLAN: Plan = {
  isPro: false,
  label: "Free plan",
  sub: "20 analyses a month, 3 cover letters",
  used: 14,
  cap: 20,
  usageText: "14 of 20 used",
  usageNote: "Six left until the counter resets on 31 August.",
};

export const PRO_PRICE = "$12";

export const PRO_TAGLINE = "Unlimited analyses, letters, and resume rewrites.";

export const PRO_FEATURES = [
  "Unlimited analyses and cover letters",
  "Resume rewrites applied straight to your file",
  "Follow-up drafts written from the analysis, not a template",
  "Postings kept for 12 months instead of 30 days",
];

export const UPGRADE_CAVEAT =
  "Cancel any time. Analyses you already ran stay yours either way.";
