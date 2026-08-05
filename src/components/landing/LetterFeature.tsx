import { Copy, PenLine, RefreshCw } from "lucide-react";
import AiDiamond from "@/components/ui/AiDiamond";
import Button from "@/components/ui/Button";
import EyebrowPill from "@/components/ui/EyebrowPill";
import { CONTENT_WIDTH, SECTION_PADDING } from "./constants";

export default function LetterFeature() {
  return (
    <section
      className={`${CONTENT_WIDTH} ${SECTION_PADDING} grid items-center gap-[clamp(32px,5vw,64px)] [grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))]`}
    >
      <div className="order-2 min-w-0 overflow-hidden rounded-lg border border-border-subtle bg-surface shadow-md">
        <div className="flex items-center gap-[9px] border-b border-border-subtle px-4 py-[13px]">
          <AiDiamond size={11} radius={2} />
          <span className="font-mono text-[10.5px] font-semibold tracking-[.09em] text-ai-text uppercase">
            Draft 3
          </span>
          <div className="ml-auto flex gap-[5px]">
            <span className="inline-flex h-[22px] items-center rounded-sm border border-border-subtle bg-subtle px-2 text-[11px] font-medium text-text-secondary">
              Formal
            </span>
            <span className="inline-flex h-[22px] items-center rounded-sm border border-border-subtle bg-subtle px-2 text-[11px] font-medium text-text-secondary">
              280 words
            </span>
          </div>
        </div>

        <div className="p-5 text-[14px] leading-[1.72] text-text-primary">
          <p className="m-0 mb-[14px]">Dear Hiring Team,</p>
          <p className="m-0 mb-[14px]">
            I&rsquo;ve spent the last four years owning the design system that
            three product teams at Modo ship against — the same problem your first
            bullet describes.{" "}
            <mark className="rounded-[3px] bg-accent-subtle px-[3px] py-px text-accent-text">
              Adoption went from 12% to 94% in eighteen months
            </mark>
            , and new-screen build time dropped by 40%.
          </p>
          <p className="m-0 text-text-secondary">
            Payments is new to me, but the systems work isn&rsquo;t…
          </p>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-border-subtle bg-subtle px-4 py-[13px]">
          <Button variant="secondary" size="xs" className="hover:bg-muted">
            <Copy size={13} strokeWidth={1.75} />
            Copy
          </Button>
          <Button variant="secondary" size="xs" className="hover:bg-muted">
            <RefreshCw size={13} strokeWidth={1.75} />
            Shorter
          </Button>
          <Button variant="secondary" size="xs" className="hover:bg-muted">
            <PenLine size={13} strokeWidth={1.75} />
            Warmer
          </Button>
        </div>
      </div>

      <div className="order-1 min-w-0">
        <EyebrowPill
          variant="ai"
          icon={<AiDiamond size={9} />}
          className="mb-[18px] px-[11px] py-1"
        >
          Cover letters
        </EyebrowPill>

        <h2 className="m-0 mb-[14px] text-[clamp(26px,3.2vw,34px)] leading-[1.15] font-semibold tracking-[-.026em] text-balance">
          Written from your resume, not a template
        </h2>
        <p className="m-0 mb-[22px] text-[16px] leading-[1.65] text-text-secondary">
          Every letter pulls real numbers and real projects out of your own history
          and maps them to the role&rsquo;s actual requirements. Highlighted spans
          show exactly where each claim came from.
        </p>
        <p className="m-0 text-[16px] leading-[1.65] text-text-secondary">
          Then you edit it in place. Shorter, warmer, more technical — one tap
          each. You send something you&rsquo;d actually sign.
        </p>
      </div>
    </section>
  );
}
