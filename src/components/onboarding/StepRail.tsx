import { STEPS } from "./constants";
import type { OnboardingStep } from "./types";
import { stepIndex } from "./utils";

type Props = {
  current: OnboardingStep;
  onGo: (step: OnboardingStep) => void;
};

/** The four-node rail. Collapses to a progress bar below 900px. */
export default function StepRail({ current, onGo }: Props) {
  const at = stepIndex(current);

  return (
    <div className="hidden min-w-0 flex-1 items-center overflow-hidden py-3 md:flex">
      {STEPS.map((step, index) => {
        const isDone = index < at;
        const isActive = index === at;

        return (
          <div key={step.key} className="flex min-w-0 items-center">
            <button
              type="button"
              onClick={() => onGo(step.key)}
              aria-current={isActive ? "step" : undefined}
              className="flex min-w-0 cursor-pointer items-center gap-2 border-none bg-transparent p-0"
            >
              <span
                className={`inline-flex size-[22px] flex-none items-center justify-center rounded-full border font-mono text-[11px] font-semibold transition-all duration-160 ease-standard ${
                  isActive
                    ? "border-accent bg-accent text-accent-on"
                    : isDone
                      ? "border-accent-border bg-accent-subtle text-accent-text"
                      : "border-border-default bg-surface text-text-tertiary"
                }`}
              >
                {isDone ? "✓" : step.num}
              </span>
              <span
                className={`text-[13px] font-medium tracking-[-.008em] whitespace-nowrap ${
                  isActive
                    ? "text-text-primary"
                    : isDone
                      ? "text-text-secondary"
                      : "text-text-tertiary"
                }`}
              >
                {step.label}
              </span>
            </button>
            <span
              className={`mx-2.5 h-px w-[clamp(14px,3.5vw,48px)] flex-none ${
                index === STEPS.length - 1
                  ? "bg-transparent"
                  : isDone
                    ? "bg-accent-border"
                    : "bg-border-default"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}
