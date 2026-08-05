import type { ApplicationStatus } from "@/components/ui/types";

export type Analysis = {
  initials: string;
  role: string;
  company: string;
  score: number;
  met: string;
  status: ApplicationStatus;
  when: string;
  /** Days since the run — what "Most recent" sorts on. */
  day: number;
};

export type ScoreBand = "all" | "high" | "mid" | "low";

export type AnalysesSort = "score" | "date" | "company";
