import { STATS } from "./constants";

export default function StatCards() {
  return (
    <div className="mb-[22px] grid gap-2.5 [grid-template-columns:repeat(auto-fit,minmax(min(158px,100%),1fr))]">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="rounded-[12px] border border-border-subtle bg-surface px-4 py-[14px]"
        >
          <div className="mb-[9px] font-mono text-[10px] font-semibold tracking-[.09em] text-text-tertiary uppercase">
            {stat.label}
          </div>
          <div className="flex items-baseline gap-[7px]">
            <span
              className={`font-mono text-[23px] leading-none font-semibold tracking-[-.04em] ${stat.color}`}
            >
              {stat.value}
            </span>
            <span className="text-[12px] text-text-tertiary">{stat.note}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
