import StatusChip from "./StatusChip";
import type { ApplicationStatus } from "./types";
import { scoreBandClass } from "./utils";

type Props = {
  score: number;
  role: string;
  company: string;
  when: string;
  status: ApplicationStatus;
};

/** The stacked-card row that replaces the table below 900px. */
export default function AnalysisListItem({
  score,
  role,
  company,
  when,
  status,
}: Props) {
  return (
    <div className="flex items-center gap-3 border-b border-border-subtle px-[14px] py-[13px]">
      <span
        className={`inline-flex size-[38px] flex-none items-center justify-center rounded-md bg-subtle font-mono text-[14px] font-semibold ${scoreBandClass(score)}`}
      >
        {score}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[14px] text-text-primary">{role}</span>
        <span className="mt-1 flex items-center gap-2">
          <span className="truncate text-[12.5px] text-text-tertiary">{company}</span>
          <span className="size-1 flex-none rounded-full bg-border-strong" />
          <span className="flex-none font-mono text-[11.5px] text-text-tertiary">
            {when}
          </span>
        </span>
      </span>
      <StatusChip status={status} />
    </div>
  );
}
