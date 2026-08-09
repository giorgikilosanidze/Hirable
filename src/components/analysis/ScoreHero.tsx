import ScoreRing from "@/components/ui/ScoreRing";
import { CARD_CLASS, SCORE, SUB_SCORES, VERDICT } from "./constants";

export default function ScoreHero() {
  return (
    <div
      className={`${CARD_CLASS} flex flex-wrap items-center gap-[clamp(20px,3vw,32px)] p-[clamp(20px,3vw,26px)]`}
    >
      <ScoreRing score={SCORE} size={148} strokeWidth={11}>
        <span className="font-mono text-[46px] leading-none font-semibold tracking-[-.05em] text-text-primary">
          {SCORE}
        </span>
        <span className="mt-px font-mono text-[10px] font-semibold tracking-[.1em] text-text-tertiary uppercase">
          Match
        </span>
      </ScoreRing>

      <div className="min-w-[220px] flex-1">
        <div className="mb-[11px] flex flex-wrap items-center gap-[9px]">
          <span className="inline-flex h-6 items-center rounded-[7px] border border-accent-border bg-accent-subtle px-2.5 text-[12.5px] font-medium text-accent-text">
            {VERDICT.band}
          </span>
          <span className="font-mono text-[11px] text-text-tertiary">
            {VERDICT.met}
          </span>
        </div>

        <p className="m-0 mb-4 text-[15.5px] leading-[1.6] text-pretty text-text-secondary">
          {VERDICT.summary}
        </p>

        <div className="flex flex-col gap-[11px]">
          {SUB_SCORES.map((sub) => (
            <div key={sub.label} className="min-w-0">
              <div className="mb-[5px] flex items-baseline justify-between gap-2.5">
                <span className="text-[13px] text-text-secondary">{sub.label}</span>
                <span
                  className="font-mono text-[12px] font-semibold"
                  style={{ color: sub.color }}
                >
                  {sub.value}
                </span>
              </div>
              <div className="h-[5px] overflow-hidden rounded-[3px] bg-muted">
                <div
                  className="h-full animate-hb-grow rounded-[3px]"
                  style={{ width: sub.value, background: sub.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
