import { Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import ScoreRing from "@/components/ui/ScoreRing";
import { RESUME_SUMMARY } from "./constants";

export default function ResumeCard() {
  return (
    <div className="rounded-lg border border-border-subtle bg-surface p-4 shadow-sm">
      <div className="mb-[13px] font-mono text-[10px] font-semibold tracking-[.09em] text-text-tertiary uppercase">
        Your resume
      </div>

      <div className="mb-[14px] flex items-center gap-[14px]">
        <ScoreRing score={RESUME_SUMMARY.score} size={64} strokeWidth={13}>
          <span className="font-mono text-[20px] font-semibold tracking-[-.04em]">
            {RESUME_SUMMARY.score}
          </span>
        </ScoreRing>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[13.5px] font-medium text-text-primary">
            {RESUME_SUMMARY.file}
          </div>
          <div className="mt-[3px] text-[12px] leading-[1.45] text-text-tertiary">
            {RESUME_SUMMARY.note}
          </div>
        </div>
      </div>

      <div className="mb-[11px] rounded-md border border-accent-border bg-accent-subtle px-[13px] py-[11px]">
        <div className="text-[13px] leading-[1.55] text-accent-text">
          {RESUME_SUMMARY.advice}
        </div>
      </div>

      <Button variant="secondary" size="appMd" className="w-full">
        <Sparkles size={15} strokeWidth={1.75} className="text-accent" />
        Review suggestions
      </Button>
    </div>
  );
}
