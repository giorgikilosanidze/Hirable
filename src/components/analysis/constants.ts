import type {
  Comparison,
  Gap,
  Keyword,
  Requirement,
  RequirementTab,
  StatusOption,
  SubScore,
} from "./types";

export const RESUME_FILE = "alex-chen-resume.pdf";

export const MIN_JD_LENGTH = 40;

/** Milliseconds, matching the prototype's default (1×) pacing. */
export const SCORING_TIMING = {
  perStep: 720,
  settle: 560,
  letter: 1700,
};

export const SCORING_STEPS = [
  {
    label: "Reading the posting",
    result: "14 requirements · 6 nice-to-haves separated out",
  },
  {
    label: "Matching against your 4 roles",
    result: "11 met with evidence · 3 unmatched",
  },
  {
    label: "Weighting by how often each is repeated",
    result: "payments mentioned 2× · systems 6×",
  },
  {
    label: "Writing the gap plan",
    result: "3 gaps, 2 fixable before you apply",
  },
];

/**
 * Phrases that make text read like a posting rather than an About page.
 * Note "looking for" rather than the prototype's "what we look", which
 * never matched the phrasing its own sample posting uses.
 */
export const POSTING_SIGNALS = [
  "responsibilit",
  "requirement",
  "qualificat",
  "you will",
  "you'll",
  "years of experience",
  "nice to have",
  "benefits",
  "compensation",
  "salary",
  "apply",
  "looking for",
];

export const MIN_POSTING_SIGNALS = 2;

export const SAMPLE_POSTING = `Senior Product Designer — Stripe (Remote, US)

We are looking for a senior product designer to join the Payments Experience group. You will own the end-to-end design of merchant-facing flows, partner closely with engineering on implementation, and contribute to the design system that every Stripe surface is built on.

What you will do
· Design and ship merchant onboarding and payment configuration flows
· Own a component library end to end and drive adoption across teams
· Partner with engineering on design tokens and implementation quality
· Run experiments on design changes and report on outcomes
· Write documentation the rest of the org can build against

What we are looking for
· 5+ years designing product in a systems-heavy organisation
· Fluency in Figma, prototyping and design tokens
· Experience shipping in a regulated or payments environment
· Accessibility knowledge (WCAG AA or better)
· Experience mentoring other designers
· Portfolio including work at consumer scale`;

export const JOB = {
  initials: "St",
  role: "Senior Product Designer",
  meta: "Stripe · Remote (US) · Full-time · $170k – $210k",
};

export const SCORE = 78;

export const VERDICT = {
  band: "Good match",
  met: "11 of 14 requirements met",
  summary:
    "Your systems work maps almost exactly onto what they describe. The two things holding this back are both fixable in the application itself, not in your experience — read the gaps below before you write.",
};

export const SUB_SCORES: SubScore[] = [
  { label: "Skills overlap", value: "86%", color: "var(--success)" },
  { label: "Experience level", value: "74%", color: "var(--accent)" },
  { label: "Domain fit", value: "52%", color: "var(--warning)" },
  { label: "Keyword coverage", value: "58%", color: "var(--warning)" },
];

export const REQUIREMENT_TABS: { key: RequirementTab; label: string }[] = [
  { key: "all", label: "All 14" },
  { key: "met", label: "Met 11" },
  { key: "gap", label: "Gaps 3" },
];

export const REQUIREMENT_FOOTERS: Record<RequirementTab, string> = {
  all: "Showing 10 of 14 · four boilerplate lines hidden (equal opportunity, benefits)",
  met: "11 matched of 14 · every one traced to a line in your resume",
  gap: "3 unmatched of 14 · weighting favours what the posting repeats",
};

export const REQUIREMENTS: Requirement[] = [
  {
    kind: "met",
    req: "5+ years designing product in a systems-heavy org",
    tag: "Matched · Design Systems Lead at Modo + 5 prior years",
    weight: "Core",
    evidence:
      "Nine years across four roles, the last four spent owning a system full time. Their bar is five, so this is comfortably clear rather than borderline.",
    quote: "“Design Systems Lead, Modo — 2022 to present”",
  },
  {
    kind: "met",
    req: "Has owned a component library end to end",
    tag: "Matched · strongest single piece of evidence",
    weight: "Core",
    evidence:
      "This is the requirement they repeat most, and it is the thing your resume documents best — with a number attached, which almost no applicant will have.",
    quote: "“Adoption 12% → 94% across three product teams”",
  },
  {
    kind: "met",
    req: "Fluent in Figma, prototyping and design tokens",
    tag: "Matched · named in Tools and in two projects",
    weight: "Core",
    evidence:
      "Stated explicitly and demonstrated in context, which is what we score highest. No action needed.",
  },
  {
    kind: "gap",
    req: "Experience shipping in payments or fintech",
    tag: "No evidence found · mentioned twice in the posting",
    weight: "Core",
    evidence:
      "Nothing in your history touches payments. This is the one gap you cannot close with better wording — but B2B SaaS with compliance constraints is a defensible adjacency if you name it yourself.",
    quote: "“You have shipped in a regulated or payments environment”",
  },
  {
    kind: "met",
    req: "Comfortable partnering with engineering on implementation",
    tag: "Matched · HTML/CSS listed, two engineering-led projects",
    weight: "Important",
    evidence:
      "Your Modo work is described in engineering terms — tokens, adoption across teams, QA cycles — which reads as real partnership rather than handoff.",
  },
  {
    kind: "gap",
    req: "Has run A/B tests on design changes",
    tag: "Partial · outcomes present, method never named",
    weight: "Important",
    evidence:
      "You have before-and-after numbers on the Kettle onboarding work, but never say how they were measured. If those were tested, one clause fixes this.",
    quote: "“Activation 31% → 48% in one quarter”",
  },
  {
    kind: "met",
    req: "Written documentation for a design system",
    tag: "Matched · Documentation listed, adoption implies it",
    weight: "Important",
    evidence:
      "Listed as a skill and strongly implied by a 94% adoption figure — systems do not get adopted undocumented.",
  },
  {
    kind: "met",
    req: "Mentored other designers",
    tag: "Inferred · lead title, no explicit mention",
    weight: "Nice to have",
    evidence:
      "We inferred this from the lead title. It scores as met but weakly — worth one concrete line if you have a name and a story.",
  },
  {
    kind: "gap",
    req: "Portfolio includes work at consumer scale",
    tag: "No evidence found · one mention",
    weight: "Nice to have",
    evidence:
      "Everything documented is B2B. Low weight here — it appears once, in a list, and is not repeated in the responsibilities.",
  },
  {
    kind: "met",
    req: "Accessibility knowledge (WCAG AA or better)",
    tag: "Matched · named explicitly on your resume",
    weight: "Nice to have",
    evidence:
      "Named at the exact level they ask for, which is unusually precise. Leave it alone.",
  },
];

export const GAPS: Gap[] = [
  {
    badge: "Costs most",
    badgeClass: "border-warning/30 bg-warning-subtle text-warning-text",
    title: "No payments or fintech experience",
    cost: "−9 pts",
    body: "You cannot invent this, so name it. One sentence in the letter — regulated B2B constraints at Modo, and what transferred — beats hoping they miss it. Applicants who address the gap directly get further than applicants who dodge it.",
    action: "Draft that sentence",
  },
  {
    badge: "Quick fix",
    badgeClass: "border-accent-border bg-accent-subtle text-accent-text",
    title: "Experimentation never named as a method",
    cost: "−5 pts",
    body: 'Your activation numbers imply testing but never say it. If the Kettle onboarding work was A/B tested, add "measured via A/B test" to that bullet and this requirement flips to met.',
    action: "Edit that resume bullet",
  },
  {
    badge: "Optional",
    badgeClass: "border-border-default bg-muted text-text-secondary",
    title: "Mentorship is inferred, not stated",
    cost: "−2 pts",
    body: "Low weight — it appears once. If you mentored anyone at Modo, one clause with a name and an outcome converts a weak match into a strong one.",
    action: "Add a mentorship line",
  },
];

export const LETTER_PARAGRAPHS = [
  "Dear Stripe design team,",
  "I spent the last four years turning a neglected component library at Modo into the thing every product team builds on — adoption went from 12% to 94% across three teams, and design QA dropped from five days to one. Your posting describes owning a library end to end and driving adoption, which is the work I have been doing daily rather than a stretch I am reaching for.",
  "I have not shipped in payments. What I have shipped is design in a regulated B2B environment where a wrong state in a flow has consequences, and where every token change had to survive a compliance review. That is the part I expect to transfer; the payments domain itself I would be learning, and I would rather say so now than discover it in week three.",
  "I would welcome the chance to walk through the Modo system with your team — particularly how we handled token adoption without freezing product work.",
];

/** Reuses the shared status dots; only the idle label differs here. */
export const STATUS_OPTIONS: StatusOption[] = [
  { key: "none", label: "Not applied yet" },
  { key: "applied", label: "Applied" },
  { key: "interviewing", label: "Interviewing" },
  { key: "offer", label: "Offer" },
  { key: "closed", label: "Closed" },
];

export const KEYWORDS: Keyword[] = [
  { label: "design systems", present: true },
  { label: "component library", present: true },
  { label: "design tokens", present: true },
  { label: "accessibility", present: true },
  { label: "prototyping", present: true },
  { label: "cross-functional", present: true },
  { label: "payments", present: false },
  { label: "experimentation", present: false },
  { label: "consumer scale", present: false },
  { label: "compliance", present: false },
];

export const KEYWORD_COVERAGE = "58%";

export const COMPARISONS: Comparison[] = [
  {
    score: "91",
    role: "Design Systems Lead",
    company: "Linear · interviewing",
    color: "text-success-text",
  },
  {
    score: "88",
    role: "Staff Product Designer",
    company: "Vercel · offer",
    color: "text-success-text",
  },
  {
    score: "78",
    role: "Senior Product Designer",
    company: "Stripe · this one",
    color: "text-accent-text",
  },
  {
    score: "64",
    role: "Product Designer, Growth",
    company: "Ramp · applied",
    color: "text-text-secondary",
  },
];

export const CARD_CLASS =
  "rounded-lg border border-border-subtle bg-surface shadow-sm";

export const RAIL_OVERLINE_CLASS =
  "font-mono text-[10.5px] font-semibold tracking-[.09em] text-text-tertiary uppercase";

/** The paste and scoring views share one narrow column. */
export const NARROW_COLUMN = "mx-auto w-full max-w-[720px]";

export const VIEW_PADDING =
  "px-[clamp(20px,4vw,40px)] pt-[clamp(28px,5vw,64px)] pb-[100px]";
