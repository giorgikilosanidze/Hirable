"use client";

import { Check, ChevronDown, ChevronUp } from "lucide-react";
import AiDiamond from "@/components/ui/AiDiamond";
import Button from "@/components/ui/Button";
import { BADGE_STYLES, MICRO_OVERLINE_CLASS } from "./constants";
import type { Suggestion, SuggestionStatus } from "./types";

type Props = {
  suggestion: Suggestion;
  status: SuggestionStatus;
  expanded: boolean;
  showImpact: boolean;
  onStage: () => void;
  onDismiss: () => void;
  onUndo: () => void;
  onToggle: () => void;
};

export default function SuggestionCard({
  suggestion,
  status,
  expanded,
  showImpact,
  onStage,
  onDismiss,
  onUndo,
  onToggle,
}: Props) {
  const hasJobs = suggestion.jobs.length > 0;
  const isExpanded = expanded && hasJobs;
  const Chevron = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div
      className={`rounded-[13px] border bg-surface px-5 py-[18px] shadow-xs transition-colors duration-140 ease-standard ${
        status === "staged" ? "border-success/30" : "border-border-subtle"
      } ${status === "dismissed" ? "opacity-60" : "opacity-100"}`}
    >
      <div className="mb-[11px] flex flex-wrap items-center gap-2.5">
        <span
          className={`inline-flex h-[22px] items-center rounded-sm border px-[9px] font-mono text-[10px] font-semibold tracking-[.06em] whitespace-nowrap uppercase ${BADGE_STYLES[suggestion.kind]}`}
        >
          {suggestion.badge}
        </span>
        <span className="min-w-[120px] flex-1 font-mono text-[11px] text-text-tertiary">
          {suggestion.freq}
        </span>
        {showImpact && (
          <span className="font-mono text-[11.5px] font-semibold whitespace-nowrap text-accent-text">
            +{suggestion.impact} avg
          </span>
        )}
      </div>

      <h3 className="m-0 mb-3 text-[16px] leading-[1.35] font-semibold tracking-[-.02em] text-pretty">
        {suggestion.title}
      </h3>

      {suggestion.before !== "—" && (
        <div className="mb-[9px] rounded-md border border-border-subtle bg-subtle px-[14px] py-3">
          <div className={`${MICRO_OVERLINE_CLASS} mb-1.5`}>On your resume now</div>
          <p className="m-0 text-[13.5px] leading-[1.6] text-text-tertiary">
            {suggestion.before}
          </p>
        </div>
      )}

      <div className="rounded-md border border-ai-border bg-ai-surface px-[14px] py-3">
        <div className="mb-1.5 flex items-center gap-[7px]">
          <AiDiamond size={7} radius={1} />
          <span className="font-mono text-[9.5px] font-semibold tracking-[.09em] text-ai-text uppercase">
            {suggestion.afterLabel}
          </span>
        </div>
        <p className="m-0 text-[14px] leading-[1.65] text-text-primary">
          {suggestion.after}
        </p>
        {suggestion.caveat && (
          <p className="m-0 mt-2 text-[12.5px] leading-[1.55] text-text-tertiary">
            {suggestion.caveat}
          </p>
        )}
      </div>

      {isExpanded && (
        <div className="mt-[11px] animate-hb-rise rounded-md border border-border-subtle px-[14px] py-[13px]">
          <div className={`${MICRO_OVERLINE_CLASS} mb-[9px]`}>
            Jobs that asked for this
          </div>
          <div className="flex flex-wrap gap-1.5">
            {suggestion.jobs.map((job) => (
              <span
                key={job.name}
                className="inline-flex h-[26px] items-center gap-1.5 rounded-full border border-border-subtle bg-subtle px-2.5 text-[12px] whitespace-nowrap text-text-secondary"
              >
                <span className="font-mono text-[10.5px] text-text-tertiary">
                  {job.score}
                </span>
                {job.name}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-[13px] flex flex-wrap items-center gap-2">
        {status === "open" && (
          <>
            <Button size="appSm" onClick={onStage} className="text-[13.5px]">
              <Check size={14} strokeWidth={1.75} />
              Stage this change
            </Button>
            <Button
              variant="secondary"
              size="appSm"
              onClick={onDismiss}
              className="text-[13.5px] text-text-secondary hover:border-border-strong"
            >
              Not true of me
            </Button>
          </>
        )}

        {status === "staged" && (
          <>
            <span className="inline-flex h-[34px] items-center gap-[7px] rounded-[9px] border border-success/30 bg-success-subtle px-[13px] text-[13.5px] font-medium text-success-text">
              <Check size={14} strokeWidth={1.75} />
              Staged
            </span>
            <Button
              variant="secondary"
              size="appSm"
              onClick={onUndo}
              className="text-[13.5px] text-text-secondary"
            >
              Undo
            </Button>
          </>
        )}

        {status === "dismissed" && (
          <>
            <span className="text-[13px] text-text-tertiary">
              Dismissed — we won&rsquo;t raise it again.
            </span>
            <Button
              variant="secondary"
              size="appSm"
              onClick={onUndo}
              className="text-[13.5px] text-text-secondary"
            >
              Undo
            </Button>
          </>
        )}

        <Button
          variant="ghost"
          size="appSm"
          onClick={onToggle}
          disabled={!hasJobs}
          aria-expanded={hasJobs ? isExpanded : undefined}
          className={`ml-auto gap-1.5 px-[11px] text-[13px] text-text-tertiary ${
            hasJobs ? "" : "cursor-default hover:bg-transparent hover:text-text-tertiary"
          }`}
        >
          {hasJobs && <Chevron size={14} strokeWidth={1.75} />}
          {hasJobs
            ? isExpanded
              ? "Hide jobs"
              : `${suggestion.jobs.length} jobs`
            : "No job list"}
        </Button>
      </div>
    </div>
  );
}
