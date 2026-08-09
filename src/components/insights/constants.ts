import type {
  ClosestMatch,
  Demand,
  StrengthChip,
  Suggestion,
  SuggestionKind,
  SuggestionTab,
} from "./types";

/** The average match across the 14 analyses, before any staged change. */
export const BASE_SCORE = 74;

/** Staging everything can't push the average past this. */
export const MAX_PROJECTED_SCORE = 97;

export const RESUME_FILE = "alex-chen-resume.pdf";

export const SUGGESTIONS: Suggestion[] = [
  {
    id: "s1",
    kind: "metric",
    badge: "Metric missing",
    impact: 3,
    freq: "9 of 14 postings ask for measurable outcomes",
    title: "Your onboarding bullet has no number, and the number exists",
    before: "Improved the onboarding flow at Kettle.",
    after:
      "Rebuilt onboarding at Kettle, lifting activation from 31% to 48% in one quarter.",
    afterLabel: "Suggested rewrite",
    jobs: [
      { score: "91", name: "Linear" },
      { score: "88", name: "Vercel" },
      { score: "78", name: "Stripe" },
      { score: "82", name: "Notion" },
      { score: "74", name: "Figma" },
    ],
  },
  {
    id: "s2",
    kind: "keyword",
    badge: "Missing keyword",
    impact: 4,
    freq: "named in 11 of 14 postings · you never write it",
    title: 'You did design tokens for four years and never say "design tokens"',
    before:
      "Built and maintained the shared component library and its underlying variables.",
    after:
      "Owned the design token system underpinning the shared component library — naming, theming and adoption across three teams.",
    afterLabel: "Suggested rewrite",
    jobs: [
      { score: "91", name: "Linear" },
      { score: "86", name: "Datadog" },
      { score: "80", name: "Sentry" },
      { score: "78", name: "Stripe" },
    ],
  },
  {
    id: "s3",
    kind: "cut",
    badge: "Dead weight",
    impact: 1,
    freq: "matched 0 requirements across 14 postings",
    title: 'Cut the "team player" line — it costs you a bullet and matches nothing',
    before:
      "Team player with strong communication skills and a passion for great design.",
    after:
      "Delete it. Use the space for the mentorship line below, which four postings actually asked about.",
    afterLabel: "Recommended action",
    jobs: [],
  },
  {
    id: "s4",
    kind: "gap",
    badge: "Recurring gap",
    impact: 3,
    freq: "6 of 14 postings ask how outcomes were measured",
    title: "Experimentation is implied by your numbers but never named as a method",
    before: "Activation 31% → 48% in one quarter.",
    after:
      "Activation 31% → 48% in one quarter, measured by a staged A/B rollout across two cohorts.",
    afterLabel: "Suggested rewrite",
    caveat:
      "Only add this if the work was genuinely tested — this is the kind of line an interviewer will open with.",
    jobs: [
      { score: "78", name: "Stripe" },
      { score: "69", name: "Arc" },
      { score: "67", name: "Webflow" },
      { score: "64", name: "Ramp" },
    ],
  },
  {
    id: "s5",
    kind: "gap",
    badge: "Recurring gap",
    impact: 2,
    freq: "asked about in 4 of 14 postings · currently inferred from your title",
    title: 'Mentorship is inferred from "Lead" — nothing states it',
    before: "—",
    after:
      "Mentored two mid-level designers at Modo; both now own systems surfaces independently.",
    afterLabel: "Suggested addition",
    caveat: "Name real people and real outcomes, or leave it out.",
    jobs: [
      { score: "91", name: "Linear" },
      { score: "82", name: "Notion" },
      { score: "78", name: "Stripe" },
      { score: "58", name: "Cabin" },
    ],
  },
  {
    id: "s6",
    kind: "keyword",
    badge: "Weak verb",
    impact: 2,
    freq: '8 postings use "own" for this responsibility',
    title: '"Was responsible for" reads as inherited. You owned it.',
    before: "Was responsible for the component library and its documentation.",
    after:
      "Owned the component library end to end — API, documentation and the adoption push that took it to 94%.",
    afterLabel: "Suggested rewrite",
    jobs: [
      { score: "91", name: "Linear" },
      { score: "88", name: "Vercel" },
      { score: "86", name: "Datadog" },
    ],
  },
  {
    id: "s7",
    kind: "cut",
    badge: "Order",
    impact: 1,
    freq: "12 of 14 postings screen on tools before education",
    title: "Tools sits below Education — most screens never reach it",
    before: "Experience → Education → Tools → Interests",
    after:
      "Experience → Tools → Education. Drop Interests entirely; it matched nothing across 14 analyses.",
    afterLabel: "Recommended action",
    jobs: [],
  },
];

export const TABS: { key: SuggestionTab; label: string }[] = [
  { key: "all", label: `All ${SUGGESTIONS.length}` },
  { key: "gap", label: "Gaps" },
  { key: "keyword", label: "Wording" },
  { key: "metric", label: "Metrics" },
  { key: "cut", label: "Cuts" },
];

/** Badge treatment per kind. Gaps read amber; cuts read neutral. */
export const BADGE_STYLES: Record<SuggestionKind, string> = {
  metric: "border-accent-border bg-accent-subtle text-accent-text",
  keyword: "border-accent-border bg-accent-subtle text-accent-text",
  gap: "border-warning/30 bg-warning-subtle text-warning-text",
  cut: "border-border-default bg-muted text-text-secondary",
};

export const STRENGTH_CHIPS: StrengthChip[] = [
  { value: "5", label: "wording fixes", color: "text-accent-text" },
  { value: "2", label: "real gaps", color: "text-warning-text" },
  { value: "1", label: "unfixable — payments", color: "text-text-tertiary" },
];

export const STRENGTH_SUBLINE =
  "Every suggestion below comes from a pattern we saw more than once. Nothing here is generic advice, and nothing gets applied without you accepting it.";

export const DEMANDS: Demand[] = [
  {
    label: "Design systems ownership",
    n: "14 / 14",
    pct: "100%",
    color: "var(--success)",
    note: "Matched every time — your strongest asset.",
  },
  {
    label: "Figma and prototyping",
    n: "13 / 14",
    pct: "93%",
    color: "var(--success)",
    note: "Matched every time it was asked.",
  },
  {
    label: "Design tokens (named)",
    n: "11 / 14",
    pct: "79%",
    color: "var(--accent)",
    note: "You do this. You never write the phrase.",
  },
  {
    label: "Experimentation / testing",
    n: "6 / 14",
    pct: "43%",
    color: "var(--warning)",
    note: "Unmatched — method never stated.",
  },
  {
    label: "Payments or fintech",
    n: "4 / 14",
    pct: "29%",
    color: "var(--text-tertiary)",
    note: "Unmatched and unfixable by wording.",
  },
  {
    label: "Consumer-scale work",
    n: "3 / 14",
    pct: "21%",
    color: "var(--text-tertiary)",
    note: "Unmatched — all your work is B2B.",
  },
];

export const CLOSEST_MATCHES: ClosestMatch[] = [
  { score: "91", role: "Design Systems Lead", note: "Linear · interviewing" },
  { score: "88", role: "Staff Product Designer", note: "Vercel · offer" },
  {
    score: "86",
    role: "Senior Designer, Design Systems",
    note: "Datadog · not applied yet",
  },
];

export const HONEST_NOTE =
  "Two of these gaps are wording. One is real: you have no payments or fintech history, and no resume edit invents it. Either widen the search or accept a lower ceiling on those postings.";

export const CARD_CLASS =
  "rounded-lg border border-border-subtle bg-surface shadow-sm";

export const RAIL_OVERLINE_CLASS =
  "font-mono text-[10.5px] font-semibold tracking-[.09em] text-text-tertiary uppercase";

export const MICRO_OVERLINE_CLASS =
  "font-mono text-[9.5px] font-semibold tracking-[.09em] text-text-tertiary uppercase";
