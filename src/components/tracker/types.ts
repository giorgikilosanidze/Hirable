import type { ApplicationStatus } from "@/components/ui/types";

/** The five board lanes — "not saved" has no place on the tracker. */
export type BoardStatus = Exclude<ApplicationStatus, "none">;

export type TrackerView = "board" | "list";

export type StatusFilter = "all" | BoardStatus;

export type TimelineEntry = {
  label: string;
  when: string;
};

export type Application = {
  id: string;
  initials: string;
  role: string;
  company: string;
  score: number;
  status: BoardStatus;
  when: string;
  /** Amber pill on the card — a deadline or a silence worth naming. */
  flag?: string;
  summary: string;
  gaps: string[];
  timeline: TimelineEntry[];
};

export type ColumnDef = {
  key: BoardStatus;
  name: string;
  emptyText: string;
};

export type MatchBand = {
  label: string;
  /** Chip treatment for the score badge and the drawer band. */
  chip: string;
  ring: string;
};
