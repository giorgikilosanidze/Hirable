import { ArrowRight, CircleCheck, Play } from "lucide-react";
import AiDiamond from "@/components/ui/AiDiamond";
import Button from "@/components/ui/Button";
import ButtonLink from "@/components/ui/ButtonLink";
import EyebrowPill from "@/components/ui/EyebrowPill";
import HeroProductMock from "./HeroProductMock";
import { CONTENT_WIDTH } from "./constants";

export default function Hero() {
  return (
    <section
      className={`${CONTENT_WIDTH} pt-[clamp(48px,7vw,88px)] pb-[clamp(40px,6vw,72px)]`}
    >
      <div className="grid items-center gap-[clamp(32px,5vw,56px)] [grid-template-columns:repeat(auto-fit,minmax(min(380px,100%),1fr))]">
        <div className="min-w-0">
          <EyebrowPill
            variant="ai"
            icon={<AiDiamond size={8} />}
            className="mb-[22px] py-[5px] pr-3 pl-[9px]"
            labelClassName="text-[11px] tracking-[.06em]"
          >
            Resume-aware AI
          </EyebrowPill>

          <h1 className="m-0 mb-5 text-[clamp(38px,5.6vw,58px)] leading-[1.03] font-semibold tracking-[-.038em] text-balance">
            Stop guessing whether you&rsquo;re a fit.
          </h1>

          <p className="m-0 mb-[30px] max-w-[500px] text-[clamp(16px,1.6vw,18px)] leading-[1.6] text-pretty text-text-secondary">
            Upload your resume once. Paste any job description and Hirable scores
            the match, names what&rsquo;s missing, and writes the cover letter —
            then keeps every application in one board.
          </p>

          <div className="mb-[22px] flex flex-wrap gap-2.5">
            <ButtonLink href="/signup" size="lg" className="shadow-sm">
              Analyse your first job
              <ArrowRight size={17} strokeWidth={1.75} />
            </ButtonLink>
            <Button variant="secondary" size="lg" className="px-5 shadow-xs">
              <Play size={16} strokeWidth={1.75} />
              Watch 90s demo
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-[14px] text-[13px] text-text-tertiary">
            <span className="inline-flex items-center gap-1.5">
              <CircleCheck size={14} strokeWidth={1.75} className="text-success" />
              Free for your first 5 jobs
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CircleCheck size={14} strokeWidth={1.75} className="text-success" />
              No card required
            </span>
          </div>
        </div>

        <HeroProductMock />
      </div>
    </section>
  );
}
