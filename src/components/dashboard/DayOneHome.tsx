import { ClipboardType, FileText, Plus } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import { FIRST_RUN_STEPS, HOME_COLUMNS, TODAY_LABEL } from "./constants";

/** Home before anything has been scored. */
export default function DayOneHome() {
  return (
    <div className="max-w-[660px]">
      <div className="mb-[9px] font-mono text-[10.5px] font-semibold tracking-[.09em] text-text-tertiary uppercase">
        {TODAY_LABEL}
      </div>
      <h1 className="m-0 mb-2 text-[clamp(25px,2.7vw,31px)] leading-[1.14] font-semibold tracking-[-.03em]">
        Your resume is in. Nothing scored yet.
      </h1>
      <p className="m-0 mb-[22px] text-[14.5px] leading-[1.6] text-pretty text-text-secondary">
        Paste one job description and you get a score, the requirements you miss,
        and a letter you can edit. The rest of this page fills in as you go.
      </p>

      <div className="mb-[14px] rounded-lg border border-accent-border bg-surface p-5 shadow-sm">
        <div className="mb-[14px] flex flex-wrap items-center gap-[13px]">
          <span className="inline-flex size-[38px] flex-none items-center justify-center rounded-md bg-accent-subtle text-accent-text">
            <ClipboardType size={18} strokeWidth={1.75} />
          </span>
          <span className="min-w-0 flex-1 basis-[200px]">
            <span className="block text-[15px] font-semibold tracking-[-.015em]">
              Analyse your first job
            </span>
            <span className="mt-[3px] block text-[13px] text-text-tertiary">
              Takes about twenty seconds. Five free this month.
            </span>
          </span>
          <ButtonLink
            href="/analyze"
            size="appLg"
            className="ml-auto h-10 px-4 text-[14px] shadow-sm"
          >
            <Plus size={16} strokeWidth={1.75} />
            Paste a job description
          </ButtonLink>
        </div>

        <div className="flex flex-col gap-[9px] border-t border-border-subtle pt-[14px]">
          {FIRST_RUN_STEPS.map((step) => (
            <div key={step.num} className="flex items-start gap-2.5">
              <span className="mt-px inline-flex size-[19px] flex-none items-center justify-center rounded-full bg-subtle font-mono text-[10.5px] font-semibold text-text-tertiary">
                {step.num}
              </span>
              <span className="text-[13.5px] leading-[1.55] text-text-secondary">
                {step.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={`${HOME_COLUMNS} gap-3`}>
        <div className="rounded-lg border border-border-subtle bg-surface p-4">
          <div className="flex items-center gap-[11px]">
            <span className="inline-flex size-[34px] flex-none items-center justify-center rounded-[9px] bg-subtle text-text-tertiary">
              <FileText size={16} strokeWidth={1.75} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13.5px] font-medium">
                Alex-Chen-2026.pdf
              </span>
              <span className="mt-0.5 block text-[12.5px] text-text-tertiary">
                6 sections parsed · no score yet
              </span>
            </span>
          </div>
        </div>
        <div className="rounded-lg border border-border-subtle bg-subtle p-4">
          <div className="text-[13px] leading-[1.6] text-pretty text-text-secondary">
            Insights need about five analyses before they say anything useful.
            Until then they stay empty rather than guessing.
          </div>
        </div>
      </div>
    </div>
  );
}
