import { Plus, Target } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";

/** Analyses before the first run. */
export default function AnalysesEmpty() {
  return (
    <>
      <h1 className="m-0 mb-[7px] text-[clamp(25px,2.7vw,31px)] leading-[1.12] font-semibold tracking-[-.03em]">
        Analyses
      </h1>
      <p className="m-0 mb-5 text-[14.5px] text-text-secondary">Nothing scored yet.</p>

      <div className="max-w-[520px] rounded-lg border border-dashed border-border-strong bg-surface px-6 py-8 text-center">
        <span className="mb-[14px] inline-flex size-10 items-center justify-center rounded-[11px] bg-subtle text-text-tertiary">
          <Target size={19} strokeWidth={1.75} />
        </span>
        <div className="mb-[7px] text-[15px] font-semibold tracking-[-.015em]">
          Your first analysis lands here
        </div>
        <p className="mx-auto mb-4 max-w-[38ch] text-[13.5px] leading-[1.6] text-pretty text-text-tertiary">
          Each one keeps the posting, the score, the requirements you missed, and
          any letter you wrote from it.
        </p>
        <ButtonLink href="/dashboard" size="appLg" className="px-[15px] shadow-sm">
          <Plus size={15} strokeWidth={1.75} />
          Paste a job description
        </ButtonLink>
      </div>
    </>
  );
}
