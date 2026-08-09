import { BASE_SCORE, MAX_PROJECTED_SCORE, SUGGESTIONS } from "./constants";
import type { Suggestion, SuggestionStatus, SuggestionTab } from "./types";

export function filterSuggestions(tab: SuggestionTab): Suggestion[] {
  if (tab === "all") return SUGGESTIONS;
  return SUGGESTIONS.filter((suggestion) => suggestion.kind === tab);
}

function sumImpact(suggestions: Suggestion[]) {
  return suggestions.reduce((total, suggestion) => total + suggestion.impact, 0);
}

/** What the average match becomes if the staged changes ship. */
export function projectedScore(statuses: Record<string, SuggestionStatus>) {
  const staged = SUGGESTIONS.filter((s) => statuses[s.id] === "staged");
  return Math.min(MAX_PROJECTED_SCORE, BASE_SCORE + sumImpact(staged));
}

/** The ceiling if everything still on the table were staged. */
export function potentialScore(statuses: Record<string, SuggestionStatus>) {
  const live = SUGGESTIONS.filter((s) => statuses[s.id] !== "dismissed");
  return Math.min(MAX_PROJECTED_SCORE, BASE_SCORE + sumImpact(live));
}

export function stagedIds(statuses: Record<string, SuggestionStatus>) {
  return Object.keys(statuses).filter((id) => statuses[id] === "staged");
}
