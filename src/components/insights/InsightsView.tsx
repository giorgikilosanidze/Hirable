"use client";

import { useState } from "react";
import { FileText, RefreshCw } from "lucide-react";
import AiDiamond from "@/components/ui/AiDiamond";
import Button from "@/components/ui/Button";
import SegmentedControl from "@/components/ui/SegmentedControl";
import ClosestMatches from "./ClosestMatches";
import DemandBars from "./DemandBars";
import StagedBar from "./StagedBar";
import StrengthCard from "./StrengthCard";
import SuggestionCard from "./SuggestionCard";
import {
  HONEST_NOTE,
  RESUME_FILE,
  SUGGESTIONS,
  TABS,
} from "./constants";
import type { SuggestionStatus, SuggestionTab } from "./types";
import {
  filterSuggestions,
  potentialScore,
  projectedScore,
  stagedIds,
} from "./utils";

type Props = {
  initialTab: SuggestionTab;
  showImpact: boolean;
};

export default function InsightsView({ initialTab, showImpact }: Props) {
  const [tab, setTab] = useState<SuggestionTab>(initialTab);
  const [statuses, setStatuses] = useState<Record<string, SuggestionStatus>>({});
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const shown = filterSuggestions(tab);
  const staged = stagedIds(statuses);
  const projected = projectedScore(statuses);
  const potential = potentialScore(statuses);

  const setStatus = (id: string, status: SuggestionStatus) =>
    setStatuses((current) => ({ ...current, [id]: status }));

  const clearStatus = (id: string) =>
    setStatuses((current) => {
      const next = { ...current };
      delete next[id];
      return next;
    });

  return (
    <>
      <div className="mb-[22px] flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <h1 className="m-0 mb-[7px] text-[clamp(24px,2.6vw,30px)] leading-[1.12] font-semibold tracking-[-.03em]">
            Resume insights
          </h1>
          <p className="m-0 text-[14px] text-text-secondary">
            Patterns across the 14 jobs you analysed since June — not generic
            resume advice.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex h-9 items-center gap-2 rounded-[9px] border border-border-subtle bg-surface px-3 font-mono text-[11.5px] whitespace-nowrap text-text-tertiary">
            <FileText size={14} strokeWidth={1.75} />
            {RESUME_FILE}
          </span>
          <Button variant="secondary" size="appMd" className="text-text-secondary">
            <RefreshCw size={15} strokeWidth={1.75} />
            Re-scan
          </Button>
        </div>
      </div>

      <StrengthCard
        projected={projected}
        potential={potential}
        hasStaged={staged.length > 0}
      />

      <div className="mt-2 mb-[14px] flex flex-wrap items-center gap-3">
        <SegmentedControl
          items={TABS}
          value={tab}
          onChange={setTab}
          label="Filter suggestions"
          className="max-w-full overflow-x-auto"
        />
        <span className="font-mono text-[11px] text-text-tertiary">
          {shown.length} of {SUGGESTIONS.length} shown · sorted by how much each
          costs you
        </span>
      </div>

      <div className="flex flex-wrap items-start gap-[clamp(14px,2vw,20px)]">
        <div className="flex min-w-0 flex-1 basis-[460px] flex-col gap-[11px]">
          {shown.map((suggestion) => (
            <SuggestionCard
              key={suggestion.id}
              suggestion={suggestion}
              status={statuses[suggestion.id] ?? "open"}
              expanded={!!expanded[suggestion.id]}
              showImpact={showImpact}
              onStage={() => setStatus(suggestion.id, "staged")}
              onDismiss={() => setStatus(suggestion.id, "dismissed")}
              onUndo={() => clearStatus(suggestion.id)}
              onToggle={() =>
                setExpanded((current) => ({
                  ...current,
                  [suggestion.id]: !current[suggestion.id],
                }))
              }
            />
          ))}

          {shown.length === 0 && (
            <div className="rounded-[13px] border border-dashed border-border-strong px-5 py-8 text-center">
              <div className="mb-1 text-[14.5px] text-text-secondary">
                Nothing left in this filter.
              </div>
              <div className="text-[13px] text-text-tertiary">
                Analyse a few more jobs and new patterns will surface here.
              </div>
            </div>
          )}
        </div>

        <div className="flex min-w-[270px] flex-[0_1_300px] flex-col gap-[14px]">
          <DemandBars />
          <ClosestMatches />

          <div className="rounded-lg border border-ai-border bg-ai-surface p-[18px]">
            <div className="mb-[9px] flex items-center gap-2">
              <AiDiamond size={8} />
              <span className="font-mono text-[10.5px] font-semibold tracking-[.08em] text-ai-text uppercase">
                The honest note
              </span>
            </div>
            <p className="m-0 text-[13.5px] leading-[1.65] text-text-secondary">
              {HONEST_NOTE}
            </p>
          </div>
        </div>
      </div>

      {staged.length > 0 && (
        <StagedBar
          count={staged.length}
          projected={projected}
          onClear={() => setStatuses({})}
        />
      )}
    </>
  );
}
