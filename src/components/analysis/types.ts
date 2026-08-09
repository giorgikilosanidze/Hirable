import type { ApplicationStatus } from "@/components/ui/types";

export type AnalysisView = "empty" | "loading" | "result";

/** The prototype's `pasteOutcome` prop. */
export type PasteOutcome = "scores" | "not-a-posting" | "cap-reached";

export type RequirementKind = "met" | "gap";

export type RequirementTab = "all" | RequirementKind;

export type Requirement = {
  kind: RequirementKind;
  req: string;
  tag: string;
  weight: string;
  evidence: string;
  quote?: string;
};

export type SubScore = {
  label: string;
  value: string;
  color: string;
};

export type Gap = {
  badge: string;
  badgeClass: string;
  title: string;
  cost: string;
  body: string;
  action: string;
};

export type Keyword = {
  label: string;
  present: boolean;
};

export type Comparison = {
  score: string;
  role: string;
  company: string;
  color: string;
};

export type StatusOption = {
  key: ApplicationStatus;
  label: string;
};

export type LetterPhase = "idle" | "writing" | "ready";
