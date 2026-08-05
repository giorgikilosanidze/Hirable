"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import AnalysisListItem from "@/components/ui/AnalysisListItem";
import Button from "@/components/ui/Button";
import SegmentedControl from "@/components/ui/SegmentedControl";
import AnalysesTable from "./AnalysesTable";
import { ANALYSES, BAND_CHIPS, SORT_TABS } from "./constants";
import type { AnalysesSort, ScoreBand } from "./types";
import { filterAnalyses, matchesBand, sortAnalyses, summarise } from "./utils";

export default function AnalysesView() {
  const [query, setQuery] = useState("");
  const [band, setBand] = useState<ScoreBand>("all");
  const [sort, setSort] = useState<AnalysesSort>("score");

  const visible = useMemo(
    () => sortAnalyses(filterAnalyses(ANALYSES, query, band), sort),
    [query, band, sort]
  );

  return (
    <>
      <div className="mb-[18px] flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <h1 className="m-0 mb-[7px] text-[clamp(25px,2.7vw,31px)] leading-[1.12] font-semibold tracking-[-.03em]">
            Analyses
          </h1>
          <p className="m-0 text-[14.5px] text-text-secondary">
            Every job you have scored against Alex-Chen-2026.pdf since 12 June.
          </p>
        </div>
        <span className="font-mono text-[11.5px] whitespace-nowrap text-text-tertiary">
          {summarise(visible, ANALYSES)}
        </span>
      </div>

      <div className="mb-[14px] flex flex-wrap items-center gap-2.5">
        <label className="flex h-[38px] min-w-0 flex-1 basis-[220px] items-center gap-2 rounded-[9px] border border-border-default bg-surface px-3">
          <Search size={15} strokeWidth={1.75} className="flex-none text-text-tertiary" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search role or company"
            aria-label="Search role or company"
            className="w-full min-w-0 border-none bg-transparent text-[13.5px] text-text-primary outline-none placeholder:text-text-tertiary"
          />
        </label>
        <SegmentedControl
          items={SORT_TABS}
          value={sort}
          onChange={setSort}
          label="Sort analyses"
        />
      </div>

      <div className="mb-4 flex flex-wrap gap-[7px]">
        {BAND_CHIPS.map((chip) => {
          const isActive = chip.key === band;
          const count = ANALYSES.filter((a) => matchesBand(a.score, chip.key)).length;
          return (
            <button
              key={chip.key}
              type="button"
              aria-pressed={isActive}
              onClick={() => setBand(chip.key)}
              className={`inline-flex h-8 cursor-pointer items-center gap-[7px] rounded-full border px-3 text-[12.5px] font-medium whitespace-nowrap transition-all duration-140 ease-standard ${
                isActive
                  ? "border-accent-border bg-accent-subtle text-accent-text"
                  : "border-border-default bg-surface text-text-secondary hover:bg-subtle"
              }`}
            >
              {chip.label}
              <span className="font-mono text-[11px] opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border-strong bg-surface px-5 py-[34px] text-center">
          <div className="mb-1.5 text-[14.5px] font-medium">Nothing matches that</div>
          <div className="mb-[14px] text-[13.5px] text-text-tertiary">
            Try a different company, or widen the score range.
          </div>
          <Button
            variant="secondary"
            size="appSm"
            onClick={() => {
              setQuery("");
              setBand("all");
            }}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <>
          <div className="overflow-hidden rounded-lg border border-border-subtle bg-surface shadow-sm md:hidden">
            {visible.map((analysis) => (
              <AnalysisListItem key={analysis.company} {...analysis} />
            ))}
          </div>
          <AnalysesTable analyses={visible} />
        </>
      )}
    </>
  );
}
