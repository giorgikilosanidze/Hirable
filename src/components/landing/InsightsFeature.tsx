import { TrendingUp } from "lucide-react";
import EyebrowPill from "@/components/ui/EyebrowPill";
import {
  CONTENT_WIDTH,
  INSIGHTS,
  INSIGHT_STATS,
  SECTION_PADDING,
} from "./constants";

/** The dark band. Colours here are fixed to the panel, not themed. */
export default function InsightsFeature() {
  return (
    <section className="bg-panel-dark">
      <div
        className={`${CONTENT_WIDTH} ${SECTION_PADDING} grid items-center gap-[clamp(32px,5vw,64px)] [grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))]`}
      >
        <div className="min-w-0">
          <EyebrowPill
            variant="dark"
            icon={
              <TrendingUp size={13} strokeWidth={1.75} className="text-indigo-300" />
            }
            className="mb-[18px] px-[11px] py-1"
          >
            Resume insights
          </EyebrowPill>

          <h2 className="m-0 mb-[14px] text-[clamp(26px,3.2vw,34px)] leading-[1.15] font-semibold tracking-[-.026em] text-balance text-white">
            The pattern across everything you&rsquo;ve saved
          </h2>
          <p className="m-0 mb-[26px] text-[16px] leading-[1.65] text-slate-400">
            After a dozen saved posts, Hirable stops talking about one job and
            starts talking about your resume. Which skill keeps coming up that you
            never mention. Which bullet is doing no work.
          </p>

          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(120px,100%),1fr))]">
            {INSIGHT_STATS.map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-mono text-[30px] leading-none font-semibold tracking-[-.04em]"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="mt-[5px] text-[13px] text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-2.5">
          {INSIGHTS.map((insight) => (
            <div
              key={insight.tag}
              className="overflow-hidden rounded-[12px] border border-white/[.09] bg-slate-900"
            >
              <div className="px-4 py-[15px]">
                <div className="mb-2.5 flex items-center gap-2">
                  <span
                    aria-hidden
                    className="inline-block size-[9px] flex-none rounded-[1.5px] bg-[linear-gradient(135deg,var(--indigo-400),var(--teal-500))]"
                    style={{ transform: "rotate(45deg)" }}
                  />
                  <span className="font-mono text-[10px] font-semibold tracking-[.09em] text-indigo-300 uppercase">
                    {insight.tag}
                  </span>
                </div>
                <div className="mb-1.5 text-[12px] text-slate-500 line-through">
                  {insight.before}
                </div>
                <div className="text-[14px] leading-[1.55] text-white">
                  {insight.after}
                </div>
              </div>
              <div className="flex items-center gap-2 border-t border-white/[.07] px-4 py-2.5">
                <button
                  type="button"
                  className="h-7 cursor-pointer rounded-[7px] border border-indigo-500 bg-indigo-500 px-[11px] text-[12px] font-medium text-white"
                >
                  Apply
                </button>
                <button
                  type="button"
                  className="h-7 cursor-pointer rounded-[7px] border border-transparent bg-transparent px-[11px] text-[12px] font-medium text-slate-500"
                >
                  Dismiss
                </button>
                <span className="ml-auto font-mono text-[10px] text-slate-600">
                  {insight.freq}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
