"use client";

import { useCallback, useState } from "react";
import DoneStep from "./DoneStep";
import GoalsStep from "./GoalsStep";
import OnboardingHeader from "./OnboardingHeader";
import ReviewStep from "./ReviewStep";
import UploadStep from "./UploadStep";
import { DEFAULT_FILE } from "./constants";
import type { OnboardingStep, UploadOutcome } from "./types";

type Props = {
  initialStep: OnboardingStep;
  outcome: UploadOutcome;
  showConfidence: boolean;
};

export default function OnboardingFlow({
  initialStep,
  outcome,
  showConfidence,
}: Props) {
  const [step, setStep] = useState<OnboardingStep>(initialStep);
  const [fileName, setFileName] = useState(DEFAULT_FILE.name);

  // Stable so the parse timers don't restart on every render.
  const goReview = useCallback(() => setStep("review"), []);

  return (
    <div className="flex min-h-screen flex-1 flex-col overflow-x-hidden bg-canvas">
      <OnboardingHeader current={step} onGo={setStep} />

      <main className="mx-auto w-full max-w-[840px] flex-1 px-[clamp(20px,4vw,32px)] pt-[clamp(32px,5vw,56px)] pb-[120px]">
        {step === "goals" && <GoalsStep onNext={() => setStep("resume")} />}

        {step === "resume" && (
          <UploadStep
            key={outcome}
            outcome={outcome}
            onParsed={goReview}
            onManualEntry={goReview}
            onFileSelected={setFileName}
          />
        )}

        {step === "review" && (
          <ReviewStep
            fileName={fileName}
            showConfidence={showConfidence}
            onSave={() => setStep("done")}
            onReupload={() => setStep("resume")}
          />
        )}

        {step === "done" && <DoneStep />}
      </main>
    </div>
  );
}
