import { CircleCheck, Gauge, Minus } from "lucide-react";
import EyebrowPill from "@/components/ui/EyebrowPill";
import {
  CONTENT_WIDTH,
  MATCH_CLAIMS,
  REQUIREMENTS,
  SECTION_PADDING,
} from "./constants";

export default function MatchFeature() {
  return (
    <section id="features" className="border-y border-border-subtle bg-surface">
      <div
        className={`${CONTENT_WIDTH} ${SECTION_PADDING} grid items-center gap-[clamp(32px,5vw,64px)] [grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))]`}
      >
        <div className="min-w-0">
          <EyebrowPill
            icon={<Gauge size={13} strokeWidth={1.75} />}
            className="mb-[18px] px-[11px] py-1"
          >
            Match analysis
          </EyebrowPill>

          <h2 className="m-0 mb-[14px] text-[clamp(26px,3.2vw,34px)] leading-[1.15] font-semibold tracking-[-.026em] text-balance">
            A score you can actually argue with
          </h2>
          <p className="m-0 mb-[22px] text-[16px] leading-[1.65] text-text-secondary">
            Every number breaks down into skills, seniority, domain and keyword
            coverage — and every claim links back to the exact line in your resume
            it came from. No black box.
          </p>

          <div className="flex flex-col gap-3">
            {MATCH_CLAIMS.map((claim) => (
              <div
                key={claim.lead}
                className="flex gap-2.5 text-[14.5px] leading-[1.55]"
              >
                <CircleCheck
                  size={17}
                  strokeWidth={1.75}
                  className="mt-0.5 flex-none text-success"
                />
                <span className="text-text-secondary">
                  <strong className="font-semibold text-text-primary">
                    {claim.lead}
                  </strong>
                  {claim.rest}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 rounded-lg border border-border-subtle bg-subtle p-5">
          <div className="flex flex-col gap-[9px]">
            {REQUIREMENTS.map((item) => {
              const Icon = item.met ? CircleCheck : Minus;
              return (
                <div
                  key={item.requirement}
                  className="flex items-start gap-2.5 rounded-md border border-border-subtle bg-surface px-[13px] py-3"
                >
                  <Icon
                    size={16}
                    strokeWidth={1.75}
                    className={`mt-px flex-none ${item.met ? "text-success" : "text-text-tertiary"}`}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-[13.5px] leading-[1.4] font-medium text-text-primary">
                      {item.requirement}
                    </div>
                    <div className="mt-[3px] text-[12px] leading-[1.5] text-text-tertiary">
                      {item.evidence}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
