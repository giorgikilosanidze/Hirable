import Logo from "@/components/brand/Logo";
import { CONTENT_WIDTH, FOOTER_COLUMNS } from "./constants";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div
        className={`${CONTENT_WIDTH} grid gap-8 pt-11 pb-7 [grid-template-columns:repeat(auto-fit,minmax(min(160px,100%),1fr))]`}
      >
        <div className="min-w-0">
          <div className="mb-3">
            <Logo size={26} wordmarkSize={15} gap={9} />
          </div>
          <p className="m-0 max-w-[220px] text-[13px] leading-[1.6] text-text-tertiary">
            An AI job application assistant that reads your resume once and
            remembers.
          </p>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title} className="min-w-0">
            <div className="mb-[14px] font-mono text-[10.5px] font-semibold tracking-[.09em] text-text-tertiary uppercase">
              {column.title}
            </div>
            <div className="flex flex-col gap-[9px]">
              {column.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[13.5px] text-text-secondary no-underline hover:text-text-primary hover:no-underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className={`${CONTENT_WIDTH} flex flex-wrap justify-between gap-4 border-t border-border-subtle pt-5 pb-9`}
      >
        <span className="text-[12.5px] text-text-tertiary">
          © 2026 Hirable Labs
        </span>
        <span className="font-mono text-[11px] text-text-tertiary">
          Built on the Hirable Design System v1.0
        </span>
      </div>
    </footer>
  );
}
