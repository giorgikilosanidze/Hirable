import { Check } from "lucide-react";
import {
  PLAN,
  PRO_FEATURES,
  PRO_PRICE,
  PRO_TAGLINE,
  UPGRADE_CAVEAT,
} from "@/components/plan/constants";
import { usageBarClass, usagePercent } from "@/components/plan/utils";
import Button from "@/components/ui/Button";
import { CARD_CLASS } from "./constants";

type Props = {
  isPro: boolean;
};

export default function PlanTab({ isPro }: Props) {
  const plan = { ...PLAN, isPro };
  const label = isPro ? "Pro plan" : PLAN.label;
  const sub = isPro ? "Unlimited analyses · renews monthly" : PLAN.sub;
  const usageText = isPro ? "Unlimited" : PLAN.usageText;
  const usageNote = isPro
    ? "No cap. Cover letters and resume rewrites included."
    : PLAN.usageNote;

  return (
    <div className="flex animate-hb-fade flex-col gap-4">
      <div className={`${CARD_CLASS} p-[18px]`}>
        <div className="mb-[15px] flex flex-wrap items-start justify-between gap-[14px]">
          <div className="min-w-0">
            <div className="text-[15px] font-semibold tracking-[-.015em]">{label}</div>
            <div className="mt-[3px] text-[13px] text-text-tertiary">{sub}</div>
          </div>
          <span className="flex-none font-mono text-[13px] text-text-secondary">
            {usageText}
          </span>
        </div>

        <div className="mb-2.5 h-1.5 overflow-hidden rounded-[3px] bg-muted">
          <div
            className={`h-full rounded-[3px] ${usageBarClass(plan)}`}
            style={{ width: `${usagePercent(plan)}%` }}
          />
        </div>

        <div className="text-[12.5px] text-text-tertiary">{usageNote}</div>
      </div>

      {isPro ? (
        <div className={`${CARD_CLASS} flex flex-wrap items-center gap-[14px] p-[18px]`}>
          <span className="min-w-[180px] flex-1">
            <span className="block text-[13.5px] font-medium">Billing</span>
            <span className="mt-[3px] block text-[12.5px] text-text-tertiary">
              Visa ending 4242 · next charge 1 September, $12.00
            </span>
          </span>
          <Button variant="secondary" size="appSm">
            Manage billing
          </Button>
          <Button variant="secondary" size="appSm" className="text-text-secondary">
            Cancel plan
          </Button>
        </div>
      ) : (
        <div className="rounded-lg border border-ai-border bg-ai-surface p-[18px]">
          <div className="mb-[15px] flex flex-wrap items-end justify-between gap-[14px]">
            <div className="min-w-0">
              <div className="text-[15px] font-semibold tracking-[-.015em] text-text-primary">
                Pro
              </div>
              <div className="mt-[3px] text-[13px] text-text-secondary">
                {PRO_TAGLINE}
              </div>
            </div>
            <div className="flex-none text-right">
              <span className="font-mono text-[24px] font-semibold tracking-[-.04em] text-text-primary">
                {PRO_PRICE}
              </span>
              <span className="text-[13px] text-text-tertiary">/month</span>
            </div>
          </div>

          <div className="mb-4 flex flex-col gap-2">
            {PRO_FEATURES.map((feature) => (
              <div key={feature} className="flex items-start gap-[9px]">
                <Check
                  size={14}
                  strokeWidth={1.75}
                  className="mt-[3px] flex-none text-[var(--ai-2)]"
                />
                <span className="text-[13.5px] leading-[1.5] text-text-secondary">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="appLg" className="px-4 text-[14px] shadow-sm">
              Upgrade to Pro
            </Button>
            <span className="text-[12.5px] text-text-tertiary">{UPGRADE_CAVEAT}</span>
          </div>
        </div>
      )}
    </div>
  );
}
