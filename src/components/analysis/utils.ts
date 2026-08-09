import { MIN_POSTING_SIGNALS, POSTING_SIGNALS, REQUIREMENTS } from "./constants";
import type { RequirementTab } from "./types";

/**
 * A rough shape check, not a classifier: a posting names its
 * requirements. Two matching phrases is enough to proceed.
 */
export function looksLikePosting(text: string) {
  const haystack = text.toLowerCase();
  const hits = POSTING_SIGNALS.filter((signal) => haystack.includes(signal));
  return hits.length >= MIN_POSTING_SIGNALS;
}

export function filterRequirements(tab: RequirementTab) {
  if (tab === "all") return REQUIREMENTS;
  return REQUIREMENTS.filter((requirement) => requirement.kind === tab);
}

export function wordCount(text: string) {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}
