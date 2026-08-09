"use client";

import { Download } from "lucide-react";
import Button from "@/components/ui/Button";
import { BASE_SCORE } from "./constants";

type Props = {
  count: number;
  projected: number;
  onClear: () => void;
};

/**
 * Sits above the mobile bottom nav, so it clears it at 82px. Everything
 * on it is coloured from `--text-inverse`, which flips with the bar.
 */
export default function StagedBar({ count, projected, onClear }: Props) {
  return (
    <div className="fixed bottom-[82px] left-1/2 z-[60] flex max-w-[calc(100vw-40px)] -translate-x-1/2 flex-wrap items-center gap-[14px] animate-hb-rise rounded-[13px] bg-inverse py-[11px] pr-[14px] pl-[18px] shadow-xl md:bottom-[22px]">
      <span className="inline-flex items-center gap-[9px]">
        <span className="font-mono text-[12.5px] font-semibold text-text-inverse">
          {count} {count === 1 ? "change" : "changes"} staged
        </span>
        <span className="text-[13px] text-text-inverse/60">
          {BASE_SCORE} → {projected} average match
        </span>
      </span>

      <div className="flex items-center gap-2">
        {/* Not a Button: the variants set their own text colour, which
            would outrank an inverse-surface override. */}
        <button
          type="button"
          onClick={onClear}
          className="h-[34px] cursor-pointer rounded-[9px] border border-text-inverse/20 bg-transparent px-3 text-[13px] font-medium text-text-inverse transition-colors duration-140 ease-standard hover:bg-text-inverse/10"
        >
          Clear
        </button>
        <Button size="appSm" className="px-[14px] text-[13px]">
          <Download size={14} strokeWidth={1.75} />
          Export updated resume
        </Button>
      </div>
    </div>
  );
}
