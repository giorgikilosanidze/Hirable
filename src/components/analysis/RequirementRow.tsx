"use client";

import { Check, ChevronDown, ChevronUp, Minus } from "lucide-react";
import AiDiamond from "@/components/ui/AiDiamond";
import type { Requirement } from "./types";

type Props = {
  requirement: Requirement;
  open: boolean;
  onToggle: () => void;
};

export default function RequirementRow({ requirement, open, onToggle }: Props) {
  const isMet = requirement.kind === "met";
  const Icon = isMet ? Check : Minus;
  const Chevron = open ? ChevronUp : ChevronDown;

  return (
    <div className="border-b border-border-subtle last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full cursor-pointer px-5 py-[15px] text-left transition-colors duration-140 ease-standard hover:bg-subtle"
      >
        <div className="flex items-start gap-3">
          <span
            className={`mt-px inline-flex size-5 flex-none items-center justify-center rounded-full border ${
              isMet
                ? "border-success/30 bg-success-subtle text-success-text"
                : "border-border-default bg-subtle text-text-tertiary"
            }`}
          >
            <Icon size={13} strokeWidth={2} />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-[14.5px] leading-[1.5] font-medium tracking-[-.008em] text-text-primary">
              {requirement.req}
            </span>
            <span
              className={`mt-[5px] block font-mono text-[11.5px] ${
                isMet ? "text-success-text" : "text-text-tertiary"
              }`}
            >
              {requirement.tag}
            </span>
          </span>

          <span className="inline-flex flex-none items-center gap-2">
            <span className="font-mono text-[11px] text-text-tertiary">
              {requirement.weight}
            </span>
            <Chevron size={15} strokeWidth={1.75} className="text-text-tertiary" />
          </span>
        </div>
      </button>

      {open && (
        <div className="mt-3 mr-5 mb-[15px] ml-[52px] animate-hb-rise rounded-md border border-ai-border bg-ai-surface px-[15px] py-[13px]">
          <div className="mb-2 flex items-center gap-[7px]">
            <AiDiamond size={7} radius={1.5} />
            <span className="font-mono text-[10px] font-semibold tracking-[.08em] text-ai-text uppercase">
              {isMet ? "Evidence from your resume" : "Why this is unmatched"}
            </span>
          </div>
          <p className="m-0 text-[13.5px] leading-[1.6] text-text-secondary">
            {requirement.evidence}
          </p>
          {requirement.quote && (
            <p className="m-0 mt-[9px] border-l-2 border-accent-border pl-[11px] text-[13px] leading-[1.55] text-text-tertiary italic">
              {requirement.quote}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
