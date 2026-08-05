import { CONTENT_WIDTH, SECTION_PADDING, STEPS } from "./constants";

export default function HowItWorks() {
  return (
    <section id="how" className={`${CONTENT_WIDTH} ${SECTION_PADDING}`}>
      <div className="mb-11 max-w-[600px]">
        <div className="mb-3 font-mono text-[11px] font-semibold tracking-[.1em] text-text-tertiary uppercase">
          How it works
        </div>
        <h2 className="m-0 mb-[14px] text-[clamp(28px,3.6vw,38px)] leading-[1.12] font-semibold tracking-[-.028em] text-balance">
          Three steps, then it&rsquo;s just paste and go
        </h2>
        <p className="m-0 text-[16px] leading-[1.6] text-text-secondary">
          Setup takes about two minutes. After that every job you paste is scored
          against the profile Hirable already built from your resume.
        </p>
      </div>

      <div className="grid gap-[14px] [grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr))]">
        {STEPS.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.n}
              className="rounded-[12px] border border-border-subtle bg-surface p-6 shadow-xs"
            >
              <div className="mb-4 flex items-center gap-[11px]">
                <span className="flex size-[30px] flex-none items-center justify-center rounded-[9px] border border-accent-border bg-accent-subtle font-mono text-[12.5px] font-semibold text-accent-text">
                  {step.n}
                </span>
                <Icon size={18} strokeWidth={1.75} className="text-text-tertiary" />
              </div>
              <h3 className="m-0 mb-2 text-[17px] font-semibold tracking-[-.014em]">
                {step.title}
              </h3>
              <p className="m-0 text-[14px] leading-[1.62] text-text-secondary">
                {step.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
