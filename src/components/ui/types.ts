/**
 * The five application statuses, plus the sixth the Analyses table adds
 * for a scored posting that was never saved.
 */
export type ApplicationStatus =
  | "saved"
  | "applied"
  | "interviewing"
  | "offer"
  | "closed"
  | "none";

export type StatusMeta = {
  label: string;
  dot: string;
  chip: string;
};

export type Stat = {
  label: string;
  value: string;
  note: string;
  /** A text-colour utility, so the number can carry its own meaning. */
  color: string;
};
