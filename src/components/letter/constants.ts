import type {
  FlagDef,
  Length,
  ParagraphId,
  SourceRef,
  Tone,
  Version,
} from "./types";

export const JOB = {
  initials: "St",
  title: "Senior Product Designer — Stripe",
  score: "78 match",
};

export const TONES: { key: Tone; label: string }[] = [
  { key: "direct", label: "Direct" },
  { key: "warm", label: "Warm" },
  { key: "formal", label: "Formal" },
];

export const LENGTHS: { key: Length; label: string }[] = [
  { key: "short", label: "Short" },
  { key: "standard", label: "Standard" },
  { key: "detailed", label: "Detailed" },
];

export const LENGTH_HINTS: Record<Length, string> = {
  short: "Three paragraphs. Best for a form field with a character cap.",
  standard: "Four paragraphs — the length most hiring managers actually read.",
  detailed:
    "Adds a paragraph on why this company specifically. Use when you mean it.",
};

export const GREETINGS: Record<Tone, string> = {
  direct: "Dear Stripe design team,",
  warm: "Hello Stripe design team,",
  formal: "Dear Hiring Manager,",
};

export const HOOK_WITH_METRIC =
  "Component library adoption went from 12% to 94% across three product teams while I led design systems at Modo, and design QA dropped from five days to one. Your posting asks for someone who has owned a library end to end and driven adoption — that is the work I have been doing daily for four years, not a stretch I am reaching for.";

export const HOOK_WITHOUT_METRIC =
  "For the last four years I have been the person responsible for the design system at Modo — the tokens, the component library, the documentation, and the unglamorous work of getting three product teams to actually use it. Your posting describes that job almost line for line.";

export const FITS: Record<Tone, string> = {
  direct:
    "The parts of the role I would be strongest on are the ones you repeat: partnering with engineering on implementation quality, writing documentation the rest of the org can build against, and keeping accessibility at WCAG AA rather than treating it as a late-stage audit. I work in tokens and in the front end, which tends to shorten the distance between a Figma file and shipped code.",
  warm: "What I enjoy most is the part of systems work that is really about people — getting engineers and designers to agree on a token name, writing the documentation that makes the next person faster, and keeping accessibility in the conversation early instead of as a late audit. That is the work I would want to do with your team.",
  formal:
    "My experience aligns with the core responsibilities described: partnership with engineering on implementation quality, authorship of documentation intended for organisation-wide use, and adherence to WCAG AA accessibility standards throughout the design process rather than at review.",
};

export const GAP_PARAGRAPH =
  "I have not shipped in payments. What I have shipped is design in a regulated B2B environment where a wrong state has consequences and every token change survived a compliance review. That is the part I expect to transfer — the payments domain itself I would be learning, and I would rather say so now than discover it in week three.";

export const WHY_PARAGRAPH =
  "The reason this posting stood out is the line about the system every Stripe surface is built on. Systems only reach that position when someone treats adoption as the product, and that framing is the one I have spent four years arguing for internally.";

export const CLOSINGS: Record<Tone, string> = {
  direct:
    "I would welcome the chance to walk through the Modo system with your team — particularly how we handled token adoption without freezing product work.",
  warm: "I would love to talk it through, and to hear how your team decides what belongs in the system and what does not.",
  formal:
    "I would welcome the opportunity to discuss my experience further and am happy to provide additional detail on the systems work described above.",
};

export const REFERRAL_CLAUSE =
  " Priya Mehta on your platform team suggested I apply.";

export const SIGN_OFF = "Alex Chen";

export const EVIDENCE: Partial<Record<ParagraphId, string>> = {
  hook: 'Modo · bullet 1 — "Adoption 12% → 94% across three product teams" and bullet 3 — "Cut design QA cycles from five days to one".',
  fit: "Skills: design tokens, documentation, accessibility (WCAG AA), HTML/CSS · matched against four repeated requirements in the posting.",
  gap: "Gap 1 from the analysis — no payments or fintech evidence found. Adjacency drawn from your Modo compliance context.",
  why: 'Posting, paragraph 1 — "the design system that every Stripe surface is built on".',
};

export const CLOSE_EVIDENCE = {
  withReferral: "Referral you added manually · closing line adapted to tone.",
  withoutReferral: "Closing line adapted to the selected tone.",
};

export const SHORTENED: Partial<Record<ParagraphId, string>> = {
  hook: "I led design systems at Modo for four years: library adoption 12% → 94% across three teams, design QA cut from five days to one. Your posting describes that job.",
  fit: "I work in tokens and in the front end, which shortens the distance between a Figma file and shipped code. Documentation and WCAG AA are habits, not afterthoughts.",
  gap: "I have not shipped in payments. I have shipped in regulated B2B where every token change survived compliance review — that is what transfers.",
  why: "The line about the system every surface is built on is why I applied. Systems only get there when adoption is treated as the product.",
  close: "I would welcome a walkthrough of the Modo system with your team.",
};

export const REWRITTEN: Partial<Record<ParagraphId, string>> = {
  hook: "Four years ago the Modo design system was three people arguing in a Figma file. It now backs three product teams at 94% adoption, and design QA takes one day instead of five. That arc is the thing your posting is describing.",
  fit: "Where I would be most useful is the seam between design and engineering — naming tokens both sides can live with, writing docs that get read, and catching accessibility failures in the design rather than in an audit.",
  gap: "On payments, I would be new. What I bring instead is four years of design under compliance constraints, where a change to a token meant a review cycle. I would rather name that now than have it surface in week three.",
  why: "What made me apply was the phrase about every surface being built on the system. That only happens when someone treats adoption as the product — which is the argument I have been making internally for years.",
  close:
    "If it is useful, I can walk your team through how we drove token adoption without freezing product work — that is the part most systems get wrong.",
};

export const FLAGS: FlagDef[] = [
  {
    key: "leadMetric",
    label: "Lead with the metric",
    hint: "Opens on 12% → 94% instead of the narrative.",
  },
  {
    key: "nameGap",
    label: "Name the payments gap",
    hint: "Addresses the missing requirement in one honest paragraph.",
  },
  {
    key: "referral",
    label: "Mention the referral",
    hint: "Adds Priya Mehta to the closing line.",
  },
];

export const SOURCES: SourceRef[] = [
  {
    text: "Adoption 12% → 94% across three product teams",
    src: "Resume · Modo · bullet 1",
  },
  {
    text: "Cut design QA cycles from five days to one",
    src: "Resume · Modo · bullet 3",
  },
  {
    text: '"the design system that every Stripe surface is built on"',
    src: "Posting · paragraph 1",
  },
  { text: "No payments or fintech evidence found", src: "Analysis · gap 1" },
];

export const VERSIONS: Version[] = [
  { id: "current", label: "Current draft", when: "generated 2 minutes ago" },
  {
    id: "first",
    label: "First generation",
    when: "today, 09:14",
    restore: { tone: "direct", length: "standard", version: "v1" },
  },
  {
    id: "formal",
    label: "Formal variant",
    when: "today, 09:21",
    restore: { tone: "formal", length: "standard", version: "v2" },
  },
];

export const GROUNDING_NOTE =
  "Nothing here was invented. Every claim traces to a line in your resume or the posting.";

export const EDIT_HINT =
  "Edit any paragraph directly — the letter is yours once you touch it.";

export const ATTRIBUTION = "Written by Hirable · from 11 matched requirements";

/** How long the composing spinner sits before the new text lands. */
export const WORK_DURATION = 1500;

export const COPY_RESET_DELAY = 1800;

export const CARD_CLASS =
  "rounded-lg border border-border-subtle bg-surface shadow-sm";

export const RAIL_OVERLINE_CLASS =
  "mb-3 font-mono text-[10.5px] font-semibold tracking-[.09em] text-text-tertiary uppercase";
