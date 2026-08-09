"use client";

import { useState } from "react";
import type { ApplicationStatus } from "@/components/ui/types";
import ApplicationStatusCard from "./ApplicationStatusCard";
import ComparisonCard from "./ComparisonCard";
import CoverLetterCard from "./CoverLetterCard";
import GapPlan from "./GapPlan";
import JobHeader from "./JobHeader";
import KeywordCoverage from "./KeywordCoverage";
import RequirementList from "./RequirementList";
import ScoreHero from "./ScoreHero";

export default function ResultView() {
  const [status, setStatus] = useState<ApplicationStatus>("none");

  const tracked = status !== "none";

  return (
    <div>
      <JobHeader
        tracked={tracked}
        onToggleTracked={() => setStatus(tracked ? "none" : "applied")}
      />

      {/* The prototype's auto-fit grid plus `span 2` collapses badly under
          300px; an explicit 2:1 split gives the same desktop result. */}
      <div className="mx-auto grid max-w-[1080px] items-start gap-4 px-[clamp(20px,3vw,32px)] pt-4 pb-24 md:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)] md:pt-[clamp(22px,3vw,34px)] md:pb-[110px]">
        <div className="flex min-w-0 flex-col gap-4">
          <ScoreHero />
          <RequirementList />
          <GapPlan />
          <CoverLetterCard />
        </div>

        <div className="flex min-w-0 flex-col gap-[14px] md:sticky md:top-[88px]">
          <ApplicationStatusCard status={status} onChange={setStatus} />
          <KeywordCoverage />
          <ComparisonCard />
        </div>
      </div>
    </div>
  );
}
