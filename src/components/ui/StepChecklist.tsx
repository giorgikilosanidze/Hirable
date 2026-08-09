import { Check } from "lucide-react";
import AiDiamond from "./AiDiamond";

type Props = {
  label: string;
  steps: { label: string; result: string }[];
  /** How many steps have started; -1 before the first. */
  activeIndex: number;
};

/**
 * Long AI work never shows a bare spinner: it names each step, ticks it
 * off with the result, and dims what hasn't started. Used by the resume
 * parse and the match scoring.
 */
export default function StepChecklist({ label, steps, activeIndex }: Props) {
  return (
    <div className="animate-hb-rise rounded-lg border border-ai-border bg-ai-surface px-[22px] py-5">
      <div className="mb-4 flex items-center gap-[9px]">
        <span className="animate-hb-pulse">
          <AiDiamond />
        </span>
        <span className="font-mono text-[11px] font-semibold tracking-[.08em] text-ai-text uppercase">
          {label}
        </span>
      </div>

      <div className="flex flex-col gap-0.5">
        {steps.map((step, index) => {
          const isDone = activeIndex > index;
          const isActive = activeIndex === index;

          return (
            <div
              key={step.label}
              className={`flex items-start gap-[11px] py-[9px] transition-opacity duration-240 ${
                activeIndex < index ? "opacity-45" : "opacity-100"
              }`}
            >
              <span className="mt-px inline-flex size-[18px] flex-none items-center justify-center">
                {isDone ? (
                  <span className="inline-flex size-[18px] items-center justify-center rounded-full bg-success">
                    <Check size={11} strokeWidth={2.5} className="text-white" />
                  </span>
                ) : isActive ? (
                  <span className="inline-block size-[15px] animate-hb-spin rounded-full border-2 border-accent-border border-t-accent" />
                ) : (
                  <span className="inline-block size-[7px] rounded-full bg-border-strong" />
                )}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-medium tracking-[-.008em] text-text-primary">
                  {step.label}
                </span>
                {isDone && (
                  <span className="mt-[3px] block font-mono text-[11.5px] text-text-tertiary">
                    {step.result}
                  </span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
