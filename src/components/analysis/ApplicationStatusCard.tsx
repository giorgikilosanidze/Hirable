"use client";

import { Check } from "lucide-react";
import { STATUS_META } from "@/components/ui/constants";
import type { ApplicationStatus } from "@/components/ui/types";
import { CARD_CLASS, RAIL_OVERLINE_CLASS, STATUS_OPTIONS } from "./constants";

type Props = {
  status: ApplicationStatus;
  onChange: (status: ApplicationStatus) => void;
};

export default function ApplicationStatusCard({ status, onChange }: Props) {
  return (
    <div className={`${CARD_CLASS} p-[18px]`}>
      <div className={`${RAIL_OVERLINE_CLASS} mb-3`}>Application status</div>
      <div role="radiogroup" aria-label="Application status" className="flex flex-col gap-1.5">
        {STATUS_OPTIONS.map((option) => {
          const isActive = option.key === status;
          return (
            <button
              key={option.key}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => onChange(option.key)}
              className={`flex h-9 cursor-pointer items-center gap-2.5 rounded-[9px] border px-3 text-left text-[13.5px] font-medium transition-all duration-140 ease-standard ${
                isActive
                  ? "border-accent bg-accent-subtle text-accent-text"
                  : "border-border-default bg-surface text-text-secondary hover:bg-subtle"
              }`}
            >
              <span
                className={`size-[7px] flex-none rounded-full ${STATUS_META[option.key].dot}`}
              />
              <span className="min-w-0 flex-1">{option.label}</span>
              {isActive && <Check size={14} strokeWidth={1.75} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
