"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import AnalysisListItem from "@/components/ui/AnalysisListItem";
import SegmentedControl from "@/components/ui/SegmentedControl";
import StatCards from "@/components/ui/StatCards";
import { STATUS_META } from "@/components/ui/constants";
import ApplicationDrawer from "./ApplicationDrawer";
import TrackerBoard from "./TrackerBoard";
import TrackerEmpty from "./TrackerEmpty";
import TrackerTable from "./TrackerTable";
import {
  CARD_CLASS,
  COLUMNS,
  NO_SEARCH_MATCH,
  RESUME_FILE,
  VIEW_TABS,
} from "./constants";
import type { BoardStatus, StatusFilter, TrackerView as View } from "./types";
import {
  applyMoves,
  byScoreDescending,
  liveCount,
  searchApplications,
  trackerStats,
} from "./utils";

type Props = {
  initialView: View;
  showScores: boolean;
};

export default function TrackerView({ initialView, showScores }: Props) {
  const [view, setView] = useState<View>(initialView);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [moves, setMoves] = useState<Record<string, BoardStatus>>({});
  const [openId, setOpenId] = useState<string | null>(null);

  const all = useMemo(() => applyMoves(moves), [moves]);
  const searched = useMemo(
    () => searchApplications(all, query),
    [all, query]
  );

  const rows = byScoreDescending(searched);
  // The status chips only exist below 900px, so the filter is theirs.
  const mobileRows = rows.filter((a) => filter === "all" || a.status === filter);

  const open = all.find((a) => a.id === openId) ?? null;
  const searching = query.trim().length > 0;

  const move = (id: string, status: BoardStatus) =>
    setMoves((current) => ({ ...current, [id]: status }));

  const footer = searching
    ? `${rows.length} of ${all.length} shown · sorted by match score`
    : `${all.length} applications · sorted by match score`;

  // A search that misses reads differently from a lane that is simply
  // empty, so reuse the lane's own copy when a status chip is active.
  const mobileEmptyMessage = searching
    ? NO_SEARCH_MATCH
    : (COLUMNS.find((column) => column.key === filter)?.emptyText ??
      NO_SEARCH_MATCH);

  return (
    <main className="flex min-h-screen min-w-0 flex-1 flex-col">
      <header className="px-[14px] pt-4 md:px-[clamp(20px,3vw,32px)] md:pt-[clamp(20px,3vw,30px)]">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div className="min-w-0">
            <h1 className="m-0 mb-1.5 text-[clamp(24px,2.6vw,30px)] leading-[1.12] font-semibold tracking-[-.03em]">
              Applications
            </h1>
            <p className="m-0 text-[14px] text-text-secondary">
              {all.length} tracked · {liveCount(all)} still live · scored against{" "}
              {RESUME_FILE}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <label className="flex h-[38px] min-w-0 flex-1 basis-[200px] items-center gap-2 rounded-[9px] border border-border-default bg-surface px-3">
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
              items={VIEW_TABS}
              value={view}
              onChange={setView}
              size="sm"
              label="Tracker view"
              className="max-md:hidden"
            />
          </div>
        </div>

        <StatCards stats={trackerStats(all)} className="mb-5" />
      </header>

      {/* Mobile only: the board is replaced by filter chips over a list. */}
      <div className="flex flex-wrap gap-[7px] px-[14px] pb-[14px] md:hidden">
        {[{ key: "all" as const, name: "All" }, ...COLUMNS].map((chip) => {
          const isActive = filter === chip.key;
          const count =
            chip.key === "all"
              ? all.length
              : all.filter((a) => a.status === chip.key).length;

          return (
            <button
              key={chip.key}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(chip.key)}
              className={`inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-full border px-[11px] text-[12.5px] font-medium whitespace-nowrap ${
                isActive
                  ? "border-accent-border bg-accent-subtle text-accent-text"
                  : "border-border-default bg-surface text-text-secondary"
              }`}
            >
              {chip.key !== "all" && (
                <span
                  className={`size-1.5 rounded-full ${STATUS_META[chip.key].dot}`}
                />
              )}
              {chip.name}
              <span className="font-mono text-[11px] opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      {view === "board" && (
        <TrackerBoard
          applications={searched}
          showScores={showScores}
          searching={searching}
          onMove={move}
          onOpen={setOpenId}
        />
      )}

      <div
        className={`min-w-0 flex-1 px-[14px] pb-[92px] md:px-[clamp(20px,3vw,32px)] md:pb-10 ${
          view === "board" ? "md:hidden" : ""
        }`}
      >
        <div className="md:hidden">
          {mobileRows.length === 0 ? (
            <TrackerEmpty message={mobileEmptyMessage} />
          ) : (
            <div className={`${CARD_CLASS} overflow-hidden`}>
              {mobileRows.map((application) => (
                <AnalysisListItem
                  key={application.id}
                  {...application}
                  onClick={() => setOpenId(application.id)}
                />
              ))}
              <div className="px-[14px] py-3 font-mono text-[11px] text-text-tertiary">
                {footer}
              </div>
            </div>
          )}
        </div>

        {view === "list" &&
          (rows.length === 0 ? (
            <TrackerEmpty message={NO_SEARCH_MATCH} className="hidden md:block" />
          ) : (
            <TrackerTable applications={rows} footer={footer} onOpen={setOpenId} />
          ))}
      </div>

      {open && (
        <ApplicationDrawer
          key={open.id}
          application={open}
          onClose={() => setOpenId(null)}
          onMove={move}
        />
      )}
    </main>
  );
}
