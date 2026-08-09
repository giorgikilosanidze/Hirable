"use client";

import { useCallback, useEffect, useState } from "react";
import PasteView from "./PasteView";
import ResultView from "./ResultView";
import ScoringView from "./ScoringView";
import { SCORING_STEPS, SCORING_TIMING } from "./constants";
import type { AnalysisView, PasteOutcome } from "./types";

type Props = {
  initialView: AnalysisView;
  outcome: PasteOutcome;
};

export default function AnalysisFlow({ initialView, outcome }: Props) {
  const [view, setView] = useState<AnalysisView>(initialView);
  const [stepIndex, setStepIndex] = useState(0);

  const startScoring = useCallback(() => {
    setStepIndex(0);
    setView("loading");
  }, []);

  // Reveal one scoring step at a time, then hand off to the result.
  useEffect(() => {
    if (view !== "loading") return;
    const timers: ReturnType<typeof setTimeout>[] = [];

    SCORING_STEPS.forEach((_, index) => {
      timers.push(
        setTimeout(
          () => setStepIndex(index + 1),
          (index + 1) * SCORING_TIMING.perStep
        )
      );
    });
    timers.push(
      setTimeout(
        () => setView("result"),
        SCORING_STEPS.length * SCORING_TIMING.perStep + SCORING_TIMING.settle
      )
    );

    return () => timers.forEach(clearTimeout);
  }, [view]);

  return (
    <main className="flex min-h-screen min-w-0 flex-1 flex-col">
      {view === "empty" && (
        <PasteView key={outcome} outcome={outcome} onAnalyse={startScoring} />
      )}
      {view === "loading" && <ScoringView activeIndex={stepIndex} />}
      {view === "result" && <ResultView />}
    </main>
  );
}
