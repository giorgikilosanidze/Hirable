import { Check, Minus } from "lucide-react";
import AiDiamond from "@/components/ui/AiDiamond";
import ScoreRing from "@/components/ui/ScoreRing";
import { HERO_BARS, HERO_MISSING_KEYWORDS } from "./constants";

/** The framed product shot beside the hero copy. */
export default function HeroProductMock() {
  return (
    <div className="relative min-w-0 pt-2 pb-7">
      <div className="overflow-hidden rounded-[16px] border border-border-subtle bg-surface shadow-xl">
        <div className="flex items-center gap-[9px] border-b border-border-subtle bg-subtle px-4 py-3">
          <span className="size-[9px] rounded-full bg-border-strong" />
          <span className="size-[9px] rounded-full bg-border-strong" />
          <span className="size-[9px] rounded-full bg-border-strong" />
          <span className="ml-2 font-mono text-[11px] text-text-tertiary">
            app.hirable.co / analyse
          </span>
        </div>

        <div className="p-5">
          <div className="mb-[18px] flex items-start gap-[11px]">
            <span className="flex size-9 flex-none items-center justify-center rounded-[9px] bg-logo-bg text-[12px] font-semibold text-white">
              St
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-[15px] leading-[1.3] font-semibold tracking-[-.012em]">
                Senior Product Designer
              </div>
              <div className="mt-0.5 text-[12.5px] text-text-tertiary">
                Stripe · Remote (US) · Full-time
              </div>
            </div>
            <span className="inline-flex h-[22px] flex-none items-center rounded-sm border border-accent-border bg-accent-subtle px-2 text-[11.5px] font-medium text-accent-text">
              Saved
            </span>
          </div>

          <div className="mb-4 flex items-center gap-[18px] rounded-[12px] border border-border-subtle bg-subtle p-4">
            <ScoreRing score={78} size={92}>
              <span className="font-mono text-[27px] leading-none font-semibold tracking-[-.04em]">
                78
              </span>
              <span className="mt-[3px] font-mono text-[8.5px] tracking-[.09em] text-text-tertiary uppercase">
                Solid
              </span>
            </ScoreRing>

            <div className="flex min-w-0 flex-1 flex-col gap-[9px]">
              {HERO_BARS.map((bar) => (
                <div key={bar.label}>
                  <div className="mb-1 flex justify-between text-[11.5px]">
                    <span className="text-text-secondary">{bar.label}</span>
                    <span className="font-mono text-text-primary">{bar.value}</span>
                  </div>
                  <div className="h-[5px] overflow-hidden rounded-[3px] bg-muted">
                    <div
                      className="h-full rounded-[3px]"
                      style={{ width: bar.value, background: bar.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-[9px] font-mono text-[10px] font-semibold tracking-[.09em] text-text-tertiary uppercase">
            Missing from your resume
          </div>
          <div className="mb-4 flex flex-wrap gap-1.5">
            {HERO_MISSING_KEYWORDS.map((keyword) => (
              <span
                key={keyword}
                className="inline-flex h-6 items-center gap-1 rounded-full border border-dashed border-border-strong bg-subtle px-[9px] font-mono text-[11px] text-text-tertiary"
              >
                <Minus size={10} strokeWidth={1.75} />
                {keyword}
              </span>
            ))}
          </div>

          <div className="rounded-[11px] border border-ai-border bg-ai-surface p-[14px]">
            <div className="mb-[9px] flex items-center gap-[7px]">
              <AiDiamond size={10} radius={2} />
              <span className="font-mono text-[10px] font-semibold tracking-[.09em] text-ai-text uppercase">
                Cover letter · drafting
              </span>
            </div>
            <p className="m-0 text-[13px] leading-[1.6] text-text-primary">
              I&rsquo;ve spent four years owning the design system three product
              teams ship against
              <span className="ml-[2px] inline-block h-[13px] w-[2px] animate-hb-caret bg-accent align-[-2px]" />
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-[-8px] bottom-0 flex animate-hb-float items-center gap-[10px] rounded-[11px] border border-border-subtle bg-surface px-[14px] py-[11px] shadow-lg">
        <span className="flex size-[26px] flex-none items-center justify-center rounded-full bg-success-subtle text-success-text">
          <Check size={14} strokeWidth={1.75} />
        </span>
        <div>
          <div className="text-[12.5px] leading-[1.3] font-medium">
            Moved to Interviewing
          </div>
          <div className="font-mono text-[10.5px] text-text-tertiary">
            Linear · Design Systems Lead
          </div>
        </div>
      </div>
    </div>
  );
}
