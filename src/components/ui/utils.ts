/**
 * Score bands, per the design handoff. Used everywhere a score appears
 * so the colour always means the same thing.
 */
export function scoreBandClass(score: number) {
  if (score >= 85) return "text-success-text";
  if (score >= 70) return "text-accent-text";
  return "text-text-secondary";
}
