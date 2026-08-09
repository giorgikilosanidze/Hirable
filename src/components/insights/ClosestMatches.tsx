import { CARD_CLASS, CLOSEST_MATCHES, RAIL_OVERLINE_CLASS } from "./constants";

export default function ClosestMatches() {
  return (
    <div className={`${CARD_CLASS} p-[18px]`}>
      <div className={`${RAIL_OVERLINE_CLASS} mb-3`}>Where you&rsquo;re closest</div>
      <div className="flex flex-col gap-[11px]">
        {CLOSEST_MATCHES.map((match) => (
          <div key={match.role} className="flex items-center gap-[11px]">
            <span className="w-6 flex-none font-mono text-[13px] font-semibold text-accent-text">
              {match.score}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] text-text-primary">
                {match.role}
              </span>
              <span className="block text-[11.5px] text-text-tertiary">
                {match.note}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
