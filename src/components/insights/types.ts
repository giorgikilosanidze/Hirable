/** The four suggestion kinds, which are also the filter tabs. */
export type SuggestionKind = "gap" | "keyword" | "metric" | "cut";

export type SuggestionTab = "all" | SuggestionKind;

export type SuggestionStatus = "open" | "staged" | "dismissed";

export type JobRef = {
  score: string;
  name: string;
};

export type Suggestion = {
  id: string;
  kind: SuggestionKind;
  badge: string;
  /** Points this change is worth on the average match. */
  impact: number;
  freq: string;
  title: string;
  /** "—" when there is nothing on the resume yet to replace. */
  before: string;
  after: string;
  afterLabel: string;
  caveat?: string;
  jobs: JobRef[];
};

export type Demand = {
  label: string;
  n: string;
  pct: string;
  color: string;
  note: string;
};

export type ClosestMatch = {
  score: string;
  role: string;
  note: string;
};

export type StrengthChip = {
  value: string;
  label: string;
  color: string;
};
