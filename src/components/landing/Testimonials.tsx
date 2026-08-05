import { CONTENT_WIDTH, QUOTES } from "./constants";

export default function Testimonials() {
  return (
    <section className={`${CONTENT_WIDTH} py-[clamp(56px,8vw,80px)]`}>
      <div className="grid gap-[14px] [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]">
        {QUOTES.map((quote) => (
          <div
            key={quote.name}
            className="flex flex-col rounded-[12px] border border-border-subtle bg-surface p-6 shadow-xs"
          >
            <p className="m-0 mb-5 flex-1 text-[15px] leading-[1.65] text-pretty text-text-primary">
              {quote.text}
            </p>
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 flex-none items-center justify-center rounded-full border border-accent-border bg-accent-subtle text-[12px] font-semibold text-accent-text">
                {quote.initials}
              </span>
              <div>
                <div className="text-[13.5px] font-medium text-text-primary">
                  {quote.name}
                </div>
                <div className="text-[12px] text-text-tertiary">{quote.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
