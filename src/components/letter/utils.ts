import {
  CLOSE_EVIDENCE,
  CLOSINGS,
  EVIDENCE,
  FITS,
  GAP_PARAGRAPH,
  GREETINGS,
  HOOK_WITHOUT_METRIC,
  HOOK_WITH_METRIC,
  REFERRAL_CLAUSE,
  REWRITTEN,
  SHORTENED,
  SIGN_OFF,
  WHY_PARAGRAPH,
} from "./constants";
import type {
  DraftFlags,
  Length,
  Paragraph,
  ParagraphId,
  ParagraphVariant,
  Tone,
} from "./types";

/**
 * Builds the letter from the tone, the length and the three draft
 * switches. Every paragraph is a real string — nothing is templated at
 * render time, so what you read is what gets copied.
 */
export function composeLetter(
  tone: Tone,
  length: Length,
  flags: DraftFlags
): Paragraph[] {
  const paragraphs: Paragraph[] = [
    { id: "greet", text: GREETINGS[tone], plain: true },
    {
      id: "hook",
      text: flags.leadMetric ? HOOK_WITH_METRIC : HOOK_WITHOUT_METRIC,
      evidence: EVIDENCE.hook,
    },
  ];

  if (length !== "short") {
    paragraphs.push({ id: "fit", text: FITS[tone], evidence: EVIDENCE.fit });
  }
  if (flags.nameGap) {
    paragraphs.push({ id: "gap", text: GAP_PARAGRAPH, evidence: EVIDENCE.gap });
  }
  if (length === "detailed") {
    paragraphs.push({ id: "why", text: WHY_PARAGRAPH, evidence: EVIDENCE.why });
  }

  paragraphs.push({
    id: "close",
    text: CLOSINGS[tone] + (flags.referral ? REFERRAL_CLAUSE : ""),
    evidence: flags.referral
      ? CLOSE_EVIDENCE.withReferral
      : CLOSE_EVIDENCE.withoutReferral,
  });
  paragraphs.push({ id: "sign", text: SIGN_OFF, plain: true });

  return paragraphs;
}

/** Layers the per-paragraph variant and then any manual edit on top. */
export function resolveText(
  paragraph: Paragraph,
  variant: ParagraphVariant | undefined,
  edit: string | undefined
) {
  if (edit !== undefined) return edit;
  if (variant === "short") return SHORTENED[paragraph.id] ?? paragraph.text;
  if (variant === "rewrite") return REWRITTEN[paragraph.id] ?? paragraph.text;
  return paragraph.text;
}

export function countWords(texts: string[]) {
  return texts.reduce(
    (total, text) => total + text.trim().split(/\s+/).filter(Boolean).length,
    0
  );
}

export function letterToText(texts: string[]) {
  return texts.join("\n\n");
}

export function withoutKey<T>(record: Record<string, T>, key: ParagraphId) {
  const next = { ...record };
  delete next[key];
  return next;
}
