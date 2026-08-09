import type { Stat } from "@/components/ui/types";
import { APPLICATIONS, STATIC_STATS } from "./constants";
import type { Application, BoardStatus, MatchBand } from "./types";

/**
 * Four bands here rather than the three used for a bare score: the
 * drawer needs to distinguish a partial match from a long shot in words.
 */
export function matchBand(score: number): MatchBand {
  if (score >= 85) {
    return {
      label: "Strong match",
      chip: "border-success/30 bg-success-subtle text-success-text",
      ring: "var(--success)",
    };
  }
  if (score >= 70) {
    return {
      label: "Good match",
      chip: "border-accent-border bg-accent-subtle text-accent-text",
      ring: "var(--accent)",
    };
  }
  if (score >= 55) {
    return {
      label: "Partial match",
      chip: "border-border-default bg-subtle text-text-secondary",
      ring: "var(--border-strong)",
    };
  }
  return {
    label: "Long shot",
    chip: "border-border-default bg-subtle text-text-tertiary",
    ring: "var(--border-strong)",
  };
}

/** Applies any drag-and-drop moves on top of the seed data. */
export function applyMoves(moves: Record<string, BoardStatus>): Application[] {
  return APPLICATIONS.map((application) =>
    moves[application.id]
      ? { ...application, status: moves[application.id] }
      : application
  );
}

export function searchApplications(applications: Application[], query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return applications;
  return applications.filter((application) =>
    `${application.role} ${application.company}`.toLowerCase().includes(needle)
  );
}

export function byScoreDescending(applications: Application[]) {
  return [...applications].sort((a, b) => b.score - a.score);
}

export function liveCount(applications: Application[]) {
  return applications.filter(
    (a) => a.status === "applied" || a.status === "interviewing"
  ).length;
}

export function averageScore(applications: Application[]) {
  return Math.round(
    applications.reduce((sum, a) => sum + a.score, 0) / applications.length
  );
}

/** Two of these move as cards change lane, so they're derived per render. */
export function trackerStats(applications: Application[]): Stat[] {
  return [
    {
      label: "Live applications",
      value: String(liveCount(applications)),
      note: `of ${applications.length}`,
      color: "text-text-primary",
    },
    {
      label: "Average match",
      value: String(averageScore(applications)),
      note: "across the board",
      color: "text-accent-text",
    },
    {
      label: "Reached a human",
      value: STATIC_STATS.reachedHuman.value,
      note: STATIC_STATS.reachedHuman.note,
      color: "text-success-text",
    },
    {
      label: "Follow-ups due",
      value: STATIC_STATS.followUps.value,
      note: STATIC_STATS.followUps.note,
      color: "text-warning-text",
    },
  ];
}
