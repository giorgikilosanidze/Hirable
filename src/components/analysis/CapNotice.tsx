import { Gauge } from "lucide-react";
import Button from "@/components/ui/Button";

/** Free plan is out of analyses. Nothing already scored is locked. */
export default function CapNotice() {
  return (
    <div className="mb-4 rounded-lg border border-accent-border bg-ai-surface px-5 py-[18px]">
      <div className="flex flex-wrap items-start gap-[13px]">
        <span className="inline-flex size-9 flex-none items-center justify-center rounded-md border border-accent-border bg-surface">
          <Gauge size={17} strokeWidth={1.75} className="text-accent-text" />
        </span>
        <div className="min-w-0 flex-1 basis-[240px]">
          <div className="text-[15.5px] font-semibold tracking-[-.018em]">
            You have used all 20 analyses this month
          </div>
          <p className="m-0 mt-1.5 max-w-[52ch] text-[13.5px] leading-[1.6] text-pretty text-text-secondary">
            The counter resets on 31 August. Everything you have already scored
            stays where it is — nothing is locked behind the limit.
          </p>
        </div>
      </div>
      <div className="mt-[15px] flex flex-wrap items-center gap-[9px]">
        <Button size="appLg" className="px-[15px] shadow-sm">
          Upgrade to Pro — $12/month
        </Button>
        <span className="text-[12.5px] text-text-tertiary">
          Or wait 27 days. Both are reasonable.
        </span>
      </div>
    </div>
  );
}
