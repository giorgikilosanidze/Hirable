import { Check, Minus } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import { CONTENT_WIDTH, PRICING_PLANS, SECTION_PADDING } from "./constants";

export default function Pricing() {
  return (
    <section id="pricing" className="border-y border-border-subtle bg-surface">
      <div className={`${CONTENT_WIDTH} ${SECTION_PADDING}`}>
        <div className="mb-10 max-w-[560px]">
          <div className="mb-3 font-mono text-[11px] font-semibold tracking-[.1em] text-text-tertiary uppercase">
            Pricing
          </div>
          <h2 className="m-0 mb-[14px] text-[clamp(28px,3.6vw,38px)] leading-[1.12] font-semibold tracking-[-.028em] text-balance">
            Cheaper than one bad week of applying blind
          </h2>
          <p className="m-0 text-[16px] leading-[1.6] text-text-secondary">
            Cancel any time. Your data leaves with you.
          </p>
        </div>

        <div className="grid max-w-[760px] gap-[14px] [grid-template-columns:repeat(auto-fit,minmax(min(280px,100%),1fr))]">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-lg bg-surface p-[26px] ${
                plan.featured
                  ? "border-[1.5px] border-accent shadow-lg"
                  : "border border-border-subtle"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-[11px] left-[26px] rounded-full bg-accent px-2.5 py-[3px] font-mono text-[9.5px] font-semibold tracking-[.08em] text-accent-on uppercase">
                  Most popular
                </div>
              )}

              <div className="mb-1.5 text-[15px] font-semibold">{plan.name}</div>
              <div className="mb-5 text-[13.5px] text-text-tertiary">
                {plan.tagline}
              </div>
              <div className="mb-6 flex items-baseline gap-[5px]">
                <span className="font-mono text-[38px] leading-none font-semibold tracking-[-.04em]">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-[14px] text-text-tertiary">
                    {plan.period}
                  </span>
                )}
              </div>

              <div className="mb-[26px] flex flex-1 flex-col gap-2.5">
                {plan.features.map((feature) => {
                  const Icon = feature.included ? Check : Minus;
                  return (
                    <div
                      key={feature.label}
                      className={`flex gap-[9px] text-[14px] leading-[1.5] ${
                        feature.included ? "text-text-secondary" : "text-text-disabled"
                      }`}
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.75}
                        className={`mt-0.5 flex-none ${feature.included ? "text-success" : ""}`}
                      />
                      {feature.label}
                    </div>
                  );
                })}
              </div>

              <ButtonLink
                href="/signup"
                variant={plan.featured ? "primary" : "secondary"}
                className="h-[42px] w-full text-[14.5px]"
              >
                {plan.cta}
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
