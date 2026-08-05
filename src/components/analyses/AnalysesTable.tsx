import StatusChip from "@/components/ui/StatusChip";
import { scoreBandClass } from "@/components/ui/utils";
import { RETENTION_NOTE, TABLE_COLUMNS, WIDE_ONLY } from "./constants";
import type { Analysis } from "./types";

type Props = {
  analyses: Analysis[];
};

export default function AnalysesTable({ analyses }: Props) {
  return (
    <div className="hidden overflow-hidden rounded-lg border border-border-subtle bg-surface shadow-sm md:block">
      <div
        className={`${TABLE_COLUMNS} border-b border-border-subtle bg-subtle px-[18px] py-[11px] font-mono text-[10px] font-semibold tracking-[.09em] text-text-tertiary uppercase`}
      >
        <span>Score</span>
        <span>Role</span>
        <span>Company</span>
        <span className={WIDE_ONLY}>Met</span>
        <span>Status</span>
        <span className={WIDE_ONLY}>Run</span>
      </div>

      {analyses.map((analysis) => (
        <div
          key={analysis.company}
          className={`${TABLE_COLUMNS} cursor-pointer items-center border-b border-border-subtle px-[18px] py-[13px] transition-colors duration-140 ease-standard hover:bg-subtle`}
        >
          <span
            className={`font-mono text-[13.5px] font-semibold ${scoreBandClass(analysis.score)}`}
          >
            {analysis.score}
          </span>
          <span className="flex min-w-0 items-center gap-[9px]">
            <span className="inline-flex size-[26px] flex-none items-center justify-center rounded-[7px] bg-logo-bg text-[10px] font-semibold text-white">
              {analysis.initials}
            </span>
            <span className="truncate text-[14px] text-text-primary">
              {analysis.role}
            </span>
          </span>
          <span className="truncate text-[13.5px] text-text-secondary">
            {analysis.company}
          </span>
          <span className={`${WIDE_ONLY} font-mono text-[11.5px] text-text-tertiary`}>
            {analysis.met}
          </span>
          <span>
            <StatusChip status={analysis.status} />
          </span>
          <span className={`${WIDE_ONLY} font-mono text-[11.5px] text-text-tertiary`}>
            {analysis.when}
          </span>
        </div>
      ))}

      <div className="px-[18px] py-3 font-mono text-[11px] text-text-tertiary">
        {RETENTION_NOTE}
      </div>
    </div>
  );
}
