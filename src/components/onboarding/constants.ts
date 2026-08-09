import { Building2, House, MapPin } from "lucide-react";
import type {
  DoneStat,
  MeasuredOutcome,
  ParseStepDef,
  ParsedRole,
  StepDef,
  Urgency,
  WorkSetup,
} from "./types";

export const STEPS: StepDef[] = [
  { key: "goals", num: "1", label: "Goals" },
  { key: "resume", num: "2", label: "Resume" },
  { key: "review", num: "3", label: "Review" },
  { key: "done", num: "4", label: "Ready" },
];

export const ROLE_SUGGESTIONS = [
  "Product Designer",
  "Design Systems Lead",
  "Staff Product Designer",
];

export const LEVELS = ["Mid", "Senior", "Staff / Lead", "Manager"];

export const WORK_SETUPS: WorkSetup[] = [
  { label: "Remote", icon: House },
  { label: "Hybrid", icon: Building2 },
  { label: "On-site", icon: MapPin },
];

export const URGENCIES: Urgency[] = [
  { label: "Just browsing", hint: "Weekly digest, no nudges." },
  {
    label: "Actively applying",
    hint: "Resume suggestions after every third analysis.",
  },
  {
    label: "Need something in 30 days",
    hint: "Daily matches and follow-up reminders on the board.",
  },
];

export const DEFAULT_GOALS = {
  role: "Senior Product Designer",
  level: 1,
  urgency: 1,
  setups: ["Remote", "Hybrid"],
};

export const PARSE_STEPS: ParseStepDef[] = [
  {
    label: "Reading document structure",
    result: "3 pages · 1,412 words · no tables lost",
  },
  {
    label: "Extracting roles, dates and scope",
    result: "4 roles · 9 yrs · 9 measurable outcomes",
  },
  {
    label: "Mapping skills to our taxonomy",
    result: "12 stated · 4 inferred from context",
  },
  {
    label: "Scoring seniority and domains",
    result: "Senior / Lead · design systems, B2B SaaS",
  },
];

/** Milliseconds, matching the prototype's default (1×) pacing. */
export const PARSE_TIMING = {
  uploadTick: 90,
  handoff: 240,
  perStep: 760,
  settle: 620,
  failAt: 1900,
};

export const DEFAULT_FILE = { name: "alex-chen-resume.pdf", size: "284 KB" };

export const FAIL_REASONS = [
  "Export a fresh PDF from Word, Pages or Google Docs rather than scanning a printout.",
  "If the file came from a design tool, check that the text is real text and not outlines.",
  "Password-protected and encrypted files fail the same way — save an unlocked copy.",
];

export const PARSED_PROFILE = {
  name: "Alex Chen",
  headline: "Product Designer · Design systems, B2B SaaS",
  location: "Austin, TX",
  years: "9",
};

export const PARSED_ROLES: ParsedRole[] = [
  {
    initials: "Md",
    title: "Design Systems Lead",
    meta: "Modo · 2022 — Present · Austin, TX",
    found: "4 outcomes found",
  },
  {
    initials: "Kt",
    title: "Senior Product Designer",
    meta: "Kettle · 2019 — 2022 · Remote",
    found: "3 outcomes found",
  },
  {
    initials: "Br",
    title: "Product Designer",
    meta: "Braid · 2017 — 2019 · Austin, TX",
    found: "2 outcomes found",
  },
  {
    initials: "RI",
    title: "BFA Interaction Design",
    meta: "Rhode Island School of Design · 2013 — 2017",
    found: "Dates unconfirmed",
  },
];

export const STATED_SKILLS = [
  "Design systems",
  "Figma",
  "Component libraries",
  "Design tokens",
  "Prototyping",
  "Accessibility (WCAG AA)",
  "Usability testing",
  "Design ops",
  "Documentation",
  "Cross-functional leadership",
  "HTML / CSS",
  "Roadmapping",
];

export const INFERRED_SKILLS = [
  "Mentoring",
  "Workshop facilitation",
  "Data-informed iteration",
  "Stakeholder alignment",
];

export const MEASURED_OUTCOMES: MeasuredOutcome[] = [
  {
    text: "Component library adoption 12% → 94% across three product teams",
    src: "Modo · bullet 1",
  },
  { text: "Cut design QA cycles from five days to one", src: "Modo · bullet 3" },
  {
    text: "Onboarding rebuild lifted activation 31% → 48% in a quarter",
    src: "Kettle · bullet 2",
  },
];

export const DONE_STATS: Omit<DoneStat, "value">[] = [
  { label: "Roles parsed" },
  { label: "Skills indexed" },
  { label: "Measurable outcomes" },
  { label: "Experience read" },
];

export const PROFILE_COMPLETENESS = 92;

/** Shared card shell for every panel in the flow. */
export const PANEL_CLASS =
  "rounded-[12px] border border-border-subtle bg-surface px-[22px] py-5 shadow-xs";

export const FIELD_LABEL_CLASS =
  "mb-[7px] block text-[13.5px] font-medium text-text-primary";

export const REVIEW_FIELD_CLASS =
  "h-10 w-full rounded-[9px] border border-border-default bg-surface px-3 text-[14.5px] text-text-primary outline-none transition-all duration-140 ease-standard focus:border-accent focus:shadow-ring";

export const STEP_HEADING_CLASS =
  "m-0 mb-3 text-[clamp(28px,3.6vw,38px)] leading-[1.1] font-semibold tracking-[-.032em] text-balance";

export const STEP_EYEBROW_CLASS =
  "mb-3 font-mono text-[11px] font-semibold tracking-[.1em] text-text-tertiary uppercase";

export const MIN_JD_LENGTH = 40;
