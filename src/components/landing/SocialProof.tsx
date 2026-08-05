import { COMPANIES, CONTENT_WIDTH } from "./constants";

export default function SocialProof() {
  return (
    <section className="border-y border-border-subtle bg-surface">
      <div
        className={`${CONTENT_WIDTH} flex flex-wrap items-center justify-center gap-[clamp(20px,4vw,48px)] py-[26px]`}
      >
        <span className="font-mono text-[11px] font-semibold tracking-[.08em] text-text-tertiary uppercase">
          Applications sent to
        </span>
        {COMPANIES.map((company) => (
          <span
            key={company}
            className="text-[17px] font-semibold tracking-[-.02em] text-slate-500"
          >
            {company}
          </span>
        ))}
      </div>
    </section>
  );
}
