import { INFERRED_SKILLS, STATED_SKILLS, STEPS } from "./constants";
import type { OnboardingStep, Skill } from "./types";

export function stepIndex(step: OnboardingStep) {
  return STEPS.findIndex((s) => s.key === step);
}

/**
 * The parsed skill list: stated first, then inferred, then anything the
 * user typed. `showConfidence` off collapses the stated/inferred split.
 */
export function buildSkills(added: string[], removed: string[]): Skill[] {
  return [
    ...STATED_SKILLS.map((label): Skill => ({ label, origin: "stated" })),
    ...INFERRED_SKILLS.map((label): Skill => ({ label, origin: "inferred" })),
    ...added.map((label): Skill => ({ label, origin: "added" })),
  ].filter((skill) => !removed.includes(skill.label));
}

export function formatFileSize(bytes: number) {
  if (bytes > 1048576) return `${(bytes / 1048576).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

export function wordCount(text: string) {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}
