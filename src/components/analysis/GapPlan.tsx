import AiDiamond from "@/components/ui/AiDiamond";
import Button from "@/components/ui/Button";
import { CARD_CLASS, GAPS } from "./constants";

/** The three gaps, ranked by what each costs on this posting. */
export default function GapPlan() {
  return (
    <div className={`${CARD_CLASS} p-5`}>
      <div className="mb-[5px] flex items-center gap-[9px]">
        <AiDiamond />
        <h2 className="m-0 text-[16px] font-semibold tracking-[-.02em]">
          What to do about the three gaps
        </h2>
      </div>
      <p className="m-0 mb-4 text-[13.5px] leading-[1.6] text-text-secondary">
        Ranked by how much each one costs you on this posting.
      </p>

      <div className="flex flex-col gap-2.5">
        {GAPS.map((gap) => (
          <div
            key={gap.title}
            className="rounded-[11px] border border-border-subtle bg-subtle px-4 py-[15px]"
          >
            <div className="mb-2 flex flex-wrap items-center gap-[9px]">
              <span
                className={`inline-flex h-[22px] items-center rounded-sm border px-[9px] font-mono text-[10.5px] font-semibold tracking-[.05em] uppercase ${gap.badgeClass}`}
              >
                {gap.badge}
              </span>
              <span className="text-[14.5px] font-medium tracking-[-.01em] text-text-primary">
                {gap.title}
              </span>
              <span className="ml-auto font-mono text-[11px] text-text-tertiary">
                {gap.cost}
              </span>
            </div>

            <p className="m-0 mb-[11px] text-[13.5px] leading-[1.6] text-text-secondary">
              {gap.body}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="secondary"
                size="appXs"
                className="h-8 border-accent text-[12.5px] text-accent-text hover:border-accent hover:bg-accent-subtle"
              >
                {gap.action}
              </Button>
              <Button
                variant="ghost"
                size="appXs"
                className="h-8 border-border-default text-[12.5px] text-text-tertiary"
              >
                Dismiss
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
