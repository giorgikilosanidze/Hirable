"use client";

import StatusChip from "@/components/ui/StatusChip";
import { scoreBandClass } from "@/components/ui/utils";
import { CARD_CLASS, TABLE_COLUMNS } from "./constants";
import type { Application } from "./types";

type Props = {
  applications: Application[];
  footer: string;
  onOpen: (id: string) => void;
};

/** The sortable table view. Becomes stacked cards below 900px. */
export default function TrackerTable({ applications, footer, onOpen }: Props) {
  return (
    <div className={`${CARD_CLASS} hidden overflow-hidden md:block`}>
      <div
        className={`${TABLE_COLUMNS} border-b border-border-subtle bg-subtle px-[18px] py-[11px] font-mono text-[10px] font-semibold tracking-[.09em] text-text-tertiary uppercase`}
      >
        <span>Score</span>
        <span>Role</span>
        <span>Company</span>
        <span>Status</span>
        <span>Updated</span>
      </div>

      {applications.map((application) => (
        <button
          key={application.id}
          type="button"
          onClick={() => onOpen(application.id)}
          className={`${TABLE_COLUMNS} w-full cursor-pointer items-center border-b border-border-subtle px-[18px] py-[13px] text-left transition-colors duration-140 ease-standard hover:bg-subtle`}
        >
          <span
            className={`font-mono text-[13.5px] font-semibold ${scoreBandClass(application.score)}`}
          >
            {application.score}
          </span>
          <span className="flex min-w-0 items-center gap-[9px]">
            <span className="inline-flex size-[26px] flex-none items-center justify-center rounded-[7px] bg-logo-bg text-[10px] font-semibold text-white">
              {application.initials}
            </span>
            <span className="truncate text-[14px] text-text-primary">
              {application.role}
            </span>
          </span>
          <span className="truncate text-[13.5px] text-text-secondary">
            {application.company}
          </span>
          <span>
            <StatusChip status={application.status} />
          </span>
          <span className="font-mono text-[11.5px] text-text-tertiary">
            {application.when}
          </span>
        </button>
      ))}

      <div className="px-[18px] py-3 font-mono text-[11px] text-text-tertiary">
        {footer}
      </div>
    </div>
  );
}
