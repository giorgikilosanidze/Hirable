import type { ApplicationStatus, StatusMeta } from "./types";

export const BUTTON_VARIANTS = {
  primary:
    "border-accent bg-accent text-accent-on hover:border-accent-hover hover:bg-accent-hover active:scale-[.98]",
  secondary:
    "border-border-default bg-surface text-text-primary hover:border-border-strong hover:bg-subtle",
  ghost:
    "border-transparent bg-transparent text-text-secondary hover:bg-muted hover:text-text-primary",
} as const;

/**
 * Two scales. `xs`–`lg` are the roomier marketing sizes used by the
 * landing page and auth. `app*` are the tighter in-app chrome sizes —
 * the design specs those in pixels, so the names follow the heights.
 */
export const BUTTON_SIZES = {
  xs: "h-8 gap-1.5 rounded-[8px] px-3 text-[12.5px]",
  sm: "h-[34px] gap-1.5 rounded-[9px] px-[15px] text-[14px]",
  md: "h-[42px] gap-2 rounded-md px-4 text-[14.5px]",
  lg: "h-[46px] gap-2 rounded-[11px] px-[22px] text-[15.5px]",
  appXs: "h-[30px] gap-1.5 rounded-[8px] px-[11px] text-[12.5px]",
  appSm: "h-[34px] gap-[7px] rounded-[9px] px-3 text-[13px]",
  appMd: "h-9 gap-2 rounded-[9px] px-[14px] text-[13.5px]",
  appLg: "h-[38px] gap-2 rounded-md px-[14px] text-[13.5px]",
} as const;

export const BUTTON_BASE =
  "inline-flex flex-none cursor-pointer items-center justify-center border font-medium whitespace-nowrap transition-all duration-140 ease-standard focus-visible:shadow-ring focus-visible:outline-none";

export const EYEBROW_PILL_VARIANTS = {
  ai: "border-ai-border bg-ai-surface text-ai-text",
  accent: "border-accent-border bg-accent-subtle text-accent-text",
  dark: "border-white/[.12] bg-white/[.07] text-indigo-300",
} as const;

export const SEGMENTED_SIZES = {
  sm: { track: "gap-[2px] rounded-[9px] p-[3px]", item: "h-[30px] rounded-[7px] px-3 text-[12.5px]" },
  md: { track: "gap-[2px] rounded-[9px] p-[3px]", item: "h-8 rounded-[7px] px-3 text-[12.5px]" },
  lg: { track: "gap-[2px] rounded-md p-[3px]", item: "h-9 gap-[7px] rounded-[8px] px-[14px] text-[13px]" },
} as const;

/**
 * One colour per status, used identically in Analyses, Tracker and the
 * Dashboard. See "Status vocabulary" in the design handoff.
 */
export const STATUS_META: Record<ApplicationStatus, StatusMeta> = {
  saved: { label: "Saved", dot: "bg-text-tertiary", chip: "bg-subtle text-text-secondary" },
  applied: { label: "Applied", dot: "bg-accent", chip: "bg-accent-subtle text-accent-text" },
  interviewing: {
    label: "Interviewing",
    dot: "bg-warning",
    chip: "bg-warning-subtle text-warning-text",
  },
  offer: { label: "Offer", dot: "bg-success", chip: "bg-success-subtle text-success-text" },
  closed: { label: "Closed", dot: "bg-slate-500", chip: "bg-subtle text-text-tertiary" },
  none: { label: "Not saved", dot: "bg-border-strong", chip: "bg-transparent text-text-tertiary" },
};

/** Circumference of the r=54 score ring, per the design system. */
export const SCORE_RING_CIRCUMFERENCE = 339;
