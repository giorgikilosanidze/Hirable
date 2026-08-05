import Link from "next/link";
import AnalysisListItem from "@/components/ui/AnalysisListItem";
import StatusChip from "@/components/ui/StatusChip";
import { scoreBandClass } from "@/components/ui/utils";
import { RECENT_ANALYSES, RECENT_TABLE_COLUMNS } from "./constants";

export default function RecentAnalyses() {
  return (
    <section>
      <div className="mb-[11px] flex items-center justify-between gap-3">
        <h2 className="m-0 text-[15px] font-semibold tracking-[-.015em]">
          Recent analyses
        </h2>
        <Link href="/analyses" className="text-[13px]">
          See all 14
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-border-subtle bg-surface shadow-sm">
        <div className="md:hidden">
          {RECENT_ANALYSES.map((analysis) => (
            <AnalysisListItem key={analysis.company} {...analysis} />
          ))}
        </div>

        <div className="hidden md:block">
          <div
            className={`${RECENT_TABLE_COLUMNS} border-b border-border-subtle bg-subtle px-[18px] py-[11px] font-mono text-[10px] font-semibold tracking-[.09em] text-text-tertiary uppercase`}
          >
            <span>Score</span>
            <span>Role</span>
            <span>Company</span>
            <span>Status</span>
            <span>Run</span>
          </div>

          {RECENT_ANALYSES.map((analysis) => (
            <div
              key={analysis.company}
              className={`${RECENT_TABLE_COLUMNS} cursor-pointer items-center border-b border-border-subtle px-[18px] py-[13px] transition-colors duration-140 ease-standard hover:bg-subtle`}
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
              <span>
                <StatusChip status={analysis.status} />
              </span>
              <span className="font-mono text-[11.5px] text-text-tertiary">
                {analysis.when}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
