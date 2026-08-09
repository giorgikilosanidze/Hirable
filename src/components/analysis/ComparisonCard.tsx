import ButtonLink from "@/components/ui/ButtonLink";
import { CARD_CLASS, COMPARISONS, RAIL_OVERLINE_CLASS } from "./constants";

export default function ComparisonCard() {
  return (
    <div className={`${CARD_CLASS} p-[18px]`}>
      <div className={`${RAIL_OVERLINE_CLASS} mb-3`}>How this compares</div>

      <div className="flex flex-col gap-[11px]">
        {COMPARISONS.map((item) => (
          <div key={item.company} className="flex items-center gap-[11px]">
            <span
              className={`w-[26px] flex-none font-mono text-[13px] font-semibold ${item.color}`}
            >
              {item.score}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] text-text-primary">
                {item.role}
              </span>
              <span className="block text-[11.5px] text-text-tertiary">
                {item.company}
              </span>
            </span>
          </div>
        ))}
      </div>

      <ButtonLink
        href="/analyses"
        variant="secondary"
        size="appSm"
        className="mt-[14px] w-full text-[13px] text-text-secondary"
      >
        Open your board
      </ButtonLink>
    </div>
  );
}
