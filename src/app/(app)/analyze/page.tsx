import type { Metadata } from "next";
import AnalysisFlow from "@/components/analysis/AnalysisFlow";
import type { AnalysisView, PasteOutcome } from "@/components/analysis/types";

export const metadata: Metadata = {
  title: "Analyse a job — Hirable",
  description:
    "Paste a job description and get a score, the requirements you miss, and a letter you can edit.",
};

const VIEWS: AnalysisView[] = ["empty", "loading", "result"];
const OUTCOMES: PasteOutcome[] = ["scores", "not-a-posting", "cap-reached"];

export default async function AnalyzePage({ searchParams }: PageProps<"/analyze">) {
  const { view, outcome } = await searchParams;

  return (
    <AnalysisFlow
      initialView={VIEWS.includes(view as AnalysisView) ? (view as AnalysisView) : "empty"}
      outcome={
        OUTCOMES.includes(outcome as PasteOutcome)
          ? (outcome as PasteOutcome)
          : "scores"
      }
    />
  );
}
