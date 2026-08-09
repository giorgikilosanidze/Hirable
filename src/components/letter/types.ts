export type Tone = "direct" | "warm" | "formal";

export type Length = "short" | "standard" | "detailed";

/** Paragraph slots. `greet` and `sign` are fixed lines, not prose. */
export type ParagraphId = "greet" | "hook" | "fit" | "gap" | "why" | "close" | "sign";

/** A paragraph can be swapped for a tighter or a reworked variant. */
export type ParagraphVariant = "short" | "rewrite";

export type Paragraph = {
  id: ParagraphId;
  text: string;
  /** Fixed lines carry no rewrite tools and no evidence. */
  plain?: boolean;
  evidence?: string;
};

export type DraftFlags = {
  leadMetric: boolean;
  nameGap: boolean;
  referral: boolean;
};

export type FlagDef = {
  key: keyof DraftFlags;
  label: string;
  hint: string;
};

export type SourceRef = {
  text: string;
  src: string;
};

export type Version = {
  id: string;
  label: string;
  when: string;
  /** Restoring reverts edits and resets tone and length. */
  restore?: { tone: Tone; length: Length; version: string };
};
