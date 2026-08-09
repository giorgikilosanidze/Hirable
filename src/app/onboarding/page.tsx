import type { Metadata } from "next";
import OnboardingFlow from "@/components/onboarding/OnboardingFlow";
import { STEPS } from "@/components/onboarding/constants";
import type { OnboardingStep } from "@/components/onboarding/types";

export const metadata: Metadata = {
  title: "Set up your profile — Hirable",
  description:
    "Upload your resume once. Every job you paste after that is scored against it.",
};

export default async function OnboardingPage({
  searchParams,
}: PageProps<"/onboarding">) {
  const { step, outcome, confidence } = await searchParams;

  const initialStep = STEPS.some((s) => s.key === step)
    ? (step as OnboardingStep)
    : "goals";

  return (
    <OnboardingFlow
      initialStep={initialStep}
      outcome={outcome === "unreadable" ? "unreadable" : "success"}
      showConfidence={confidence !== "off"}
    />
  );
}
