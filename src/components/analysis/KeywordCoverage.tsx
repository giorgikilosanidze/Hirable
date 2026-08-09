import { Check, Minus } from "lucide-react";
import {
  CARD_CLASS,
  KEYWORDS,
  KEYWORD_COVERAGE,
  RAIL_OVERLINE_CLASS,
} from "./constants";

export default function KeywordCoverage() {
  return (
    <div className={`${CARD_CLASS} p-[18px]`}>
      <div className={`${RAIL_OVERLINE_CLASS} mb-3`}>Keyword coverage</div>

      <div className="mb-3 flex items-baseline gap-2">
        <span className="font-mono text-[26px] leading-none font-semibold tracking-[-.04em]">
          {KEYWORD_COVERAGE}
        </span>
        <span className="text-[12.5px] text-text-tertiary">
          of their terms appear in your resume
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {KEYWORDS.map((keyword) => (
          <span
            key={keyword.label}
            className={`inline-flex h-[26px] items-center gap-[5px] rounded-full border px-2.5 font-mono text-[10.5px] ${
              keyword.present
                ? "border-solid border-success/25 bg-success-subtle text-success-text"
                : "border-dashed border-border-strong bg-transparent text-text-tertiary"
            }`}
          >
            {keyword.present ? (
              <Check size={10} strokeWidth={2} />
            ) : (
              <Minus size={10} strokeWidth={2} />
            )}
            {keyword.label}
          </span>
        ))}
      </div>

      <p className="m-0 mt-3 text-[12.5px] leading-[1.55] text-text-tertiary">
        Dashed terms are missing. Only add ones that are actually true of your
        work.
      </p>
    </div>
  );
}
