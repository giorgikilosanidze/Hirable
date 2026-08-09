import { CARD_CLASS, DEMANDS, RAIL_OVERLINE_CLASS } from "./constants";

/** Requirement frequency across the 14 postings, and whether it lands. */
export default function DemandBars() {
  return (
    <div className={`${CARD_CLASS} p-[18px]`}>
      <div className={`${RAIL_OVERLINE_CLASS} mb-1.5`}>What they keep asking for</div>
      <div className="mb-[14px] text-[12.5px] leading-[1.5] text-text-tertiary">
        Requirement frequency across 14 postings, and whether your resume answers
        it.
      </div>

      <div className="flex flex-col gap-3">
        {DEMANDS.map((demand) => (
          <div key={demand.label} className="min-w-0">
            <div className="mb-[5px] flex items-baseline justify-between gap-2">
              <span className="truncate text-[13px] text-text-primary">
                {demand.label}
              </span>
              <span
                className="font-mono text-[11px] whitespace-nowrap"
                style={{ color: demand.color }}
              >
                {demand.n}
              </span>
            </div>
            <div className="h-[5px] overflow-hidden rounded-[3px] bg-muted">
              <div
                className="h-full animate-hb-grow rounded-[3px]"
                style={{ width: demand.pct, background: demand.color }}
              />
            </div>
            <div className="mt-1 text-[11.5px] text-text-tertiary">{demand.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
