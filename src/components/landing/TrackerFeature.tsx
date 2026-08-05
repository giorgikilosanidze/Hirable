import { LayoutGrid } from "lucide-react";
import EyebrowPill from "@/components/ui/EyebrowPill";
import { CONTENT_WIDTH, SECTION_PADDING, TRACKER_COLUMNS } from "./constants";

export default function TrackerFeature() {
  return (
    <section className="border-y border-border-subtle bg-surface">
      <div className={`${CONTENT_WIDTH} ${SECTION_PADDING}`}>
        <div className="mb-9 max-w-[560px]">
          <EyebrowPill
            icon={<LayoutGrid size={13} strokeWidth={1.75} />}
            className="mb-[18px] px-[11px] py-1"
          >
            Tracker
          </EyebrowPill>

          <h2 className="m-0 mb-[14px] text-[clamp(26px,3.2vw,34px)] leading-[1.15] font-semibold tracking-[-.026em] text-balance">
            Every application, one board
          </h2>
          <p className="m-0 text-[16px] leading-[1.65] text-text-secondary">
            Drag between Applied, Interviewing, Offer and Rejected. The score, the
            letter and the original posting stay attached to the card — so a
            recruiter email three weeks later doesn&rsquo;t send you digging.
          </p>
        </div>

        <div className="grid gap-3 rounded-lg border border-border-subtle bg-subtle p-[14px] [grid-template-columns:repeat(auto-fit,minmax(min(224px,100%),1fr))]">
          {TRACKER_COLUMNS.map((column) => (
            <div key={column.name} className="flex min-w-0 flex-col gap-[9px]">
              <div className="flex items-center gap-2 px-0.5 pb-0.5">
                <span
                  className="inline-block size-[7px] rounded-[2px]"
                  style={{ background: column.color }}
                />
                <span className="text-[13px] font-semibold text-text-primary">
                  {column.name}
                </span>
                <span className="font-mono text-[11px] text-text-tertiary">
                  {column.count}
                </span>
              </div>

              {column.cards.map((card) => (
                <div
                  key={card.role}
                  className="cursor-grab rounded-md border border-border-subtle bg-surface p-3 shadow-xs transition-all duration-140 ease-standard hover:border-border-strong hover:shadow-md"
                >
                  <div className="mb-[9px] flex items-start gap-[9px]">
                    <span className="flex size-[26px] flex-none items-center justify-center rounded-[7px] bg-logo-bg text-[10.5px] font-semibold text-white">
                      {card.initials}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[13px] leading-[1.35] font-medium text-text-primary">
                        {card.role}
                      </div>
                      <div className="mt-px text-[11.5px] text-text-tertiary">
                        {card.company}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[7px]">
                    <span
                      className="inline-flex h-5 items-center rounded-[5px] px-[7px] font-mono text-[11px] font-semibold"
                      style={{ background: card.scoreBg, color: card.scoreFg }}
                    >
                      {card.score}
                    </span>
                    <span className="font-mono text-[10.5px] text-text-tertiary">
                      {card.when}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
