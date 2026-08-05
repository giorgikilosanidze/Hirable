import type { Analysis, AnalysesSort, ScoreBand } from "./types";

export function matchesBand(score: number, band: ScoreBand) {
  if (band === "all") return true;
  if (band === "high") return score >= 85;
  if (band === "mid") return score >= 70 && score < 85;
  return score < 70;
}

export function filterAnalyses(
  analyses: Analysis[],
  query: string,
  band: ScoreBand
) {
  const needle = query.trim().toLowerCase();
  return analyses.filter(
    (analysis) =>
      matchesBand(analysis.score, band) &&
      (!needle ||
        `${analysis.role} ${analysis.company}`.toLowerCase().includes(needle))
  );
}

export function sortAnalyses(analyses: Analysis[], sort: AnalysesSort) {
  return [...analyses].sort((a, b) => {
    if (sort === "score") return b.score - a.score;
    if (sort === "date") return a.day - b.day;
    return a.company.localeCompare(b.company);
  });
}

/** "14 analyses · average 76 · best 91 (Linear)", or the filtered form. */
export function summarise(visible: Analysis[], total: Analysis[]) {
  if (visible.length === total.length) {
    const best = total.reduce((top, a) => (a.score > top.score ? a : top));
    return `${total.length} analyses · average ${average(total)} · best ${best.score} (${best.company})`;
  }
  const tail = visible.length ? `average ${average(visible)}` : "nothing matches";
  return `${visible.length} of ${total.length} shown · ${tail}`;
}

function average(analyses: Analysis[]) {
  return Math.round(
    analyses.reduce((sum, a) => sum + a.score, 0) / analyses.length
  );
}
