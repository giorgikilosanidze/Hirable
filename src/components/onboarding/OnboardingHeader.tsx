import Logo from "@/components/brand/Logo";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Button from "@/components/ui/Button";
import StepRail from "./StepRail";
import { STEPS } from "./constants";
import type { OnboardingStep } from "./types";
import { stepIndex } from "./utils";

type Props = {
  current: OnboardingStep;
  onGo: (step: OnboardingStep) => void;
};

export default function OnboardingHeader({ current, onGo }: Props) {
  const at = stepIndex(current);
  const counter = `Step ${at + 1} / 4`;

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-nav backdrop-blur-[12px]">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center gap-[clamp(16px,4vw,40px)] px-[clamp(20px,4vw,32px)] md:min-h-16">
        <div className="flex-none py-3">
          <Logo size={28} wordmarkSize={16} gap={10} />
        </div>

        <StepRail current={current} onGo={onGo} />

        <div className="flex flex-none items-center gap-2 py-3">
          <span className="hidden font-mono text-[11px] whitespace-nowrap text-text-tertiary md:inline">
            {counter}
          </span>
          <ThemeToggle iconSize={15} />
          <Button variant="secondary" size="appSm" className="text-text-secondary">
            Save &amp; exit
          </Button>
        </div>

        {/* Below 900px the rail collapses to a labelled progress bar. */}
        <div className="order-3 flex min-w-0 flex-1 basis-full flex-col gap-[7px] pb-[11px] md:hidden">
          <div className="flex items-baseline justify-between gap-2">
            <span className="min-w-0 flex-1 truncate text-[13.5px] font-semibold tracking-[-.01em] text-text-primary">
              {STEPS[at].label}
            </span>
            <span className="flex-none font-mono text-[11px] text-text-tertiary">
              {counter}
            </span>
          </div>
          <div className="h-1 overflow-hidden rounded-[2px] bg-muted">
            <div
              className="h-full rounded-[2px] bg-accent transition-[width] duration-240 ease-standard"
              style={{ width: `${((at + 1) / STEPS.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
