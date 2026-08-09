import AiDiamond from "@/components/ui/AiDiamond";
import ScoreRing from "@/components/ui/ScoreRing";
import { BASE_SCORE, STRENGTH_CHIPS, STRENGTH_SUBLINE } from "./constants";

type Props = {
  projected: number;
  potential: number;
  hasStaged: boolean;
};

/**
 * The dual-arc ring: the solid arc is today's average, the muted one is
 * where the staged (or available) changes would take it.
 */
export default function StrengthCard({ projected, potential, hasStaged }: Props) {
  return (
    <div className="mb-[14px] flex flex-wrap items-center gap-[clamp(18px,2.6vw,30px)] rounded-lg border border-border-subtle bg-surface p-[clamp(18px,2.4vw,24px)] shadow-sm">
      <ScoreRing
        score={BASE_SCORE}
        size={132}
        strokeWidth={11}
        projectedScore={hasStaged ? projected : potential}
      >
        <span className="font-mono text-[38px] leading-none font-semibold tracking-[-.05em] text-text-primary">
          {BASE_SCORE}
        </span>
        <span className="mt-px font-mono text-[9.5px] font-semibold tracking-[.1em] text-text-tertiary uppercase">
          Avg match
        </span>
      </ScoreRing>

      <div className="min-w-[240px] flex-1">
        <div className="mb-[11px] flex flex-wrap items-center gap-[9px]">
          <AiDiamond />
          <span className="font-mono text-[10.5px] font-semibold tracking-[.08em] text-ai-text uppercase">
            Across 14 analyses · 168 requirements
          </span>
        </div>

        <h2 className="m-0 mb-2 text-[clamp(19px,2.1vw,23px)] leading-[1.25] font-semibold tracking-[-.024em] text-balance">
          {hasStaged
            ? `Staged changes would take your average match from ${BASE_SCORE} to ${projected}.`
            : `Seven changes could take your average match from ${BASE_SCORE} to ${potential}.`}
        </h2>
        <p className="m-0 mb-[14px] max-w-[560px] text-[14.5px] leading-[1.6] text-pretty text-text-secondary">
          {STRENGTH_SUBLINE}
        </p>

        <div className="flex flex-wrap gap-2">
          {STRENGTH_CHIPS.map((chip) => (
            <span
              key={chip.label}
              className="inline-flex h-7 items-center gap-[7px] rounded-full border border-border-subtle bg-subtle px-[11px] text-[12.5px] whitespace-nowrap text-text-secondary"
            >
              <span className={`font-mono text-[11.5px] font-semibold ${chip.color}`}>
                {chip.value}
              </span>
              {chip.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
