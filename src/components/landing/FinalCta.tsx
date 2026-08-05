import { ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";

export default function FinalCta() {
  return (
    <section className="bg-panel-dark">
      <div className="mx-auto w-full max-w-[760px] px-[clamp(20px,4vw,32px)] py-[clamp(56px,8vw,96px)] text-center">
        {/* The mark on its own, inverted — not the lockup. */}
        <span
          aria-hidden
          className="relative mb-6 inline-flex size-12 items-center justify-center rounded-lg bg-white"
        >
          <span className="absolute left-[12.7px] h-[22.5px] w-1.5 rounded-[2.5px] bg-slate-950" />
          <span className="absolute right-[12.7px] h-[22.5px] w-1.5 rounded-[2.5px] bg-indigo-600" />
          <span className="h-1.5 w-[22.5px] rounded-[2.5px] bg-indigo-600" />
        </span>

        <h2 className="m-0 mb-4 text-[clamp(30px,4.4vw,44px)] leading-[1.08] font-semibold tracking-[-.032em] text-balance text-white">
          Your next application takes four minutes.
        </h2>
        <p className="mx-auto mb-[30px] max-w-[520px] text-[17px] leading-[1.6] text-slate-400">
          Upload the resume you already have. Paste the job you already found. See
          where you stand before you spend the evening on it.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5">
          <ButtonLink
            href="/signup"
            size="lg"
            className="border-white bg-white text-slate-950 hover:border-slate-200 hover:bg-slate-200"
          >
            Get started free
            <ArrowRight size={17} strokeWidth={1.75} />
          </ButtonLink>
          <ButtonLink
            href="/login"
            variant="ghost"
            size="lg"
            className="border-white/[.18] px-5 text-white hover:bg-white/[.07] hover:text-white"
          >
            I already have an account
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
