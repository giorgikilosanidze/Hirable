import ButtonLink from "@/components/ui/ButtonLink";
import { PLAN } from "./constants";
import { usageBarClass, usagePercent } from "./utils";

/** The compact usage card in the dashboard's right column. */
export default function PlanUsageCard() {
  return (
    <div className="rounded-lg border border-border-subtle bg-surface p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-2.5">
        <span className="font-mono text-[10px] font-semibold tracking-[.09em] text-text-tertiary uppercase">
          {PLAN.label}
        </span>
        <span className="font-mono text-[11.5px] text-text-secondary">
          {PLAN.usageText}
        </span>
      </div>

      <div className="mb-[11px] h-1.5 overflow-hidden rounded-[3px] bg-muted">
        <div
          className={`h-full rounded-[3px] ${usageBarClass(PLAN)}`}
          style={{ width: `${usagePercent(PLAN)}%` }}
        />
      </div>

      <div
        className={`text-[12.5px] leading-[1.55] text-text-tertiary ${PLAN.isPro ? "" : "mb-3"}`}
      >
        {PLAN.usageNote}
      </div>

      {!PLAN.isPro && (
        <ButtonLink
          href="/settings?tab=plan"
          size="appMd"
          className="w-full shadow-sm"
        >
          Upgrade to Pro
        </ButtonLink>
      )}
    </div>
  );
}
