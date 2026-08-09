"use client";

import { useEffect, useState } from "react";
import { Archive, FileText, Minus, Target, X } from "lucide-react";
import Button from "@/components/ui/Button";
import ScoreRing from "@/components/ui/ScoreRing";
import { STATUS_META } from "@/components/ui/constants";
import { COLUMNS, DRAWER_OVERLINE_CLASS } from "./constants";
import type { Application, BoardStatus } from "./types";
import { matchBand } from "./utils";

type Props = {
  application: Application;
  onClose: () => void;
  onMove: (id: string, status: BoardStatus) => void;
};

export default function ApplicationDrawer({
  application,
  onClose,
  onMove,
}: Props) {
  const [note, setNote] = useState("");
  const band = matchBand(application.score);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const gaps = application.gaps.length
    ? application.gaps
    : ["No open gaps — every requirement was matched with evidence."];

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 z-[80] animate-hb-fade bg-overlay" />
      <aside
        role="dialog"
        aria-modal
        aria-label={`${application.role} at ${application.company}`}
        className="fixed top-0 right-0 bottom-0 z-[81] w-[min(420px,92vw)] animate-hb-slide overflow-y-auto border-l border-border-subtle bg-surface shadow-xl"
      >
        <div className="flex items-start gap-3 border-b border-border-subtle px-5 pt-5 pb-4">
          <span className="inline-flex size-[38px] flex-none items-center justify-center rounded-md bg-logo-bg text-[12.5px] font-semibold text-white">
            {application.initials}
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-[16px] leading-[1.3] font-semibold tracking-[-.02em]">
              {application.role}
            </div>
            <div className="mt-0.5 text-[13px] text-text-tertiary">
              {application.company}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex size-[30px] flex-none cursor-pointer items-center justify-center rounded-[8px] border border-border-subtle bg-surface text-text-tertiary transition-all duration-140 ease-standard hover:bg-subtle hover:text-text-primary"
          >
            <X size={15} strokeWidth={1.75} />
          </button>
        </div>

        <div className="flex flex-col gap-[18px] p-5">
          <div className="flex items-center gap-4">
            <ScoreRing
              score={application.score}
              size={80}
              progressColor={band.ring}
            >
              <span className="font-mono text-[24px] font-semibold tracking-[-.04em] text-text-primary">
                {application.score}
              </span>
            </ScoreRing>
            <div className="min-w-0 flex-1">
              <div
                className={`mb-2 inline-flex h-[23px] items-center rounded-sm border px-[9px] text-[12px] font-medium whitespace-nowrap ${band.chip}`}
              >
                {band.label}
              </div>
              <p className="m-0 text-[13.5px] leading-[1.6] text-text-secondary">
                {application.summary}
              </p>
            </div>
          </div>

          <div>
            <div className={DRAWER_OVERLINE_CLASS}>Status</div>
            <div role="radiogroup" aria-label="Status" className="flex flex-wrap gap-1.5">
              {COLUMNS.map((column) => {
                const isActive = application.status === column.key;
                return (
                  <button
                    key={column.key}
                    type="button"
                    role="radio"
                    aria-checked={isActive}
                    onClick={() => onMove(application.id, column.key)}
                    className={`inline-flex h-8 cursor-pointer items-center gap-[7px] rounded-[9px] border px-[11px] text-[13px] font-medium transition-all duration-140 ease-standard ${
                      isActive
                        ? "border-accent bg-accent-subtle text-accent-text"
                        : "border-border-default bg-surface text-text-secondary hover:bg-subtle"
                    }`}
                  >
                    <span
                      className={`size-1.5 rounded-full ${STATUS_META[column.key].dot}`}
                    />
                    {column.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className={DRAWER_OVERLINE_CLASS}>Open gaps from the analysis</div>
            <div className="flex flex-col gap-[7px]">
              {gaps.map((gap) => (
                <div
                  key={gap}
                  className="flex items-start gap-[9px] rounded-md border border-border-subtle bg-subtle px-[13px] py-[11px]"
                >
                  <Minus
                    size={13}
                    strokeWidth={2}
                    className="mt-[3px] flex-none text-text-tertiary"
                  />
                  <span className="text-[13px] leading-[1.55] text-text-secondary">
                    {gap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className={DRAWER_OVERLINE_CLASS}>Activity</div>
            <div className="flex flex-col">
              {application.timeline.map((entry, index) => (
                <div key={entry.label} className="flex min-h-[38px] gap-[11px]">
                  <span className="flex w-3 flex-none flex-col items-center">
                    <span
                      className={`mt-[5px] size-2 flex-none rounded-full ${
                        index === 0 ? "bg-accent" : "bg-border-strong"
                      }`}
                    />
                    <span className="w-px flex-1 bg-border-subtle" />
                  </span>
                  <span className="min-w-0 flex-1 pb-3">
                    <span className="block text-[13.5px] text-text-primary">
                      {entry.label}
                    </span>
                    <span className="mt-0.5 block font-mono text-[11px] text-text-tertiary">
                      {entry.when}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="application-note" className={DRAWER_OVERLINE_CLASS}>
              Your notes
            </label>
            <textarea
              id="application-note"
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="Recruiter name, referral, salary discussed…"
              className="min-h-[84px] w-full resize-y rounded-md border border-border-default bg-surface px-[13px] py-[11px] text-[13.5px] leading-[1.6] text-text-primary outline-none transition-all duration-140 ease-standard placeholder:text-text-disabled focus:border-accent focus:shadow-ring"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Button size="md" className="h-10 w-full text-[14px]">
              <Target size={15} strokeWidth={1.75} />
              Open the match analysis
            </Button>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="appLg"
                className="flex-1 text-text-secondary"
              >
                <FileText size={14} strokeWidth={1.75} />
                Cover letter
              </Button>
              <Button
                variant="secondary"
                size="appLg"
                className="flex-1 text-text-secondary"
              >
                <Archive size={14} strokeWidth={1.75} />
                Archive
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
