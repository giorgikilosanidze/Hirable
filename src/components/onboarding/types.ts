import type { LucideIcon } from "lucide-react";

export type OnboardingStep = "goals" | "resume" | "review" | "done";

export type UploadPhase = "idle" | "uploading" | "parsing" | "failed";

/** The prototype's `uploadOutcome` prop — scanned PDFs are common. */
export type UploadOutcome = "success" | "unreadable";

export type StepDef = {
  key: OnboardingStep;
  num: string;
  label: string;
};

export type WorkSetup = {
  label: string;
  icon: LucideIcon;
};

export type Urgency = {
  label: string;
  hint: string;
};

export type ParseStepDef = {
  label: string;
  result: string;
};

export type ParsedRole = {
  initials: string;
  title: string;
  meta: string;
  found: string;
};

export type MeasuredOutcome = {
  text: string;
  src: string;
};

export type DoneStat = {
  value: string;
  label: string;
};

/** Where a skill came from — drives the chip's treatment. */
export type SkillOrigin = "stated" | "inferred" | "added";

export type Skill = {
  label: string;
  origin: SkillOrigin;
};
