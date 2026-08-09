import StepChecklist from "@/components/ui/StepChecklist";
import { NARROW_COLUMN, SCORING_STEPS, VIEW_PADDING } from "./constants";

type Props = {
  activeIndex: number;
};

/** Named steps plus a skeleton of the score block that's coming. */
export default function ScoringView({ activeIndex }: Props) {
  return (
    <div className={`flex-1 animate-hb-rise ${VIEW_PADDING}`}>
      <div className={NARROW_COLUMN}>
        <div className="mb-4">
          <StepChecklist
            label="Comparing 14 requirements against your profile"
            steps={SCORING_STEPS}
            activeIndex={activeIndex}
          />
        </div>

        <div className="flex flex-wrap items-center gap-5 rounded-lg border border-border-subtle bg-surface p-[22px]">
          <div className="size-[104px] flex-none animate-hb-shimmer rounded-full bg-skeleton" />
          <div className="flex min-w-[200px] flex-1 flex-col gap-[11px]">
            <div className="h-[15px] w-[62%] animate-hb-shimmer rounded-[5px] bg-skeleton" />
            <div className="h-[11px] w-[84%] animate-hb-shimmer rounded-[5px] bg-skeleton" />
            <div className="h-[11px] w-[44%] animate-hb-shimmer rounded-[5px] bg-skeleton" />
          </div>
        </div>
      </div>
    </div>
  );
}
