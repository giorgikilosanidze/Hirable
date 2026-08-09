"use client";

import { useEffect, useState } from "react";
import AiDiamond from "@/components/ui/AiDiamond";
import Button from "@/components/ui/Button";
import ButtonLink from "@/components/ui/ButtonLink";
import ScoreRing from "@/components/ui/ScoreRing";
import {
  DONE_STATS,
  MIN_JD_LENGTH,
  PROFILE_COMPLETENESS,
  STATED_SKILLS,
  INFERRED_SKILLS,
} from "./constants";
import { wordCount } from "./utils";

export default function DoneStep() {
  const [jd, setJd] = useState("");
  const [analysing, setAnalysing] = useState(false);

  const ready = jd.trim().length > MIN_JD_LENGTH;
  const words = wordCount(jd);

  useEffect(() => {
    if (!analysing) return;
    const timer = setTimeout(() => setAnalysing(false), 2600);
    return () => clearTimeout(timer);
  }, [analysing]);

  const stats = [
    "4",
    String(STATED_SKILLS.length + INFERRED_SKILLS.length),
    "9",
    "9 yrs",
  ];

  return (
    <div className="animate-hb-rise">
      <div className="mb-[26px] flex flex-wrap items-center gap-[18px]">
        <ScoreRing
          score={PROFILE_COMPLETENESS}
          size={84}
          progressColor="var(--success)"
        >
          <span className="font-mono text-[22px] font-semibold tracking-[-.04em] text-text-primary">
            {PROFILE_COMPLETENESS}
          </span>
        </ScoreRing>
        <div className="min-w-0 flex-1">
          <div className="mb-2 font-mono text-[11px] font-semibold tracking-[.1em] text-text-tertiary uppercase">
            Step 4 of 4 · Profile saved
          </div>
          <h1 className="m-0 mb-2 text-[clamp(26px,3.4vw,36px)] leading-[1.1] font-semibold tracking-[-.032em] text-balance">
            Your profile is {PROFILE_COMPLETENESS}% complete.
          </h1>
          <p className="m-0 max-w-[520px] text-[15.5px] leading-[1.6] text-text-secondary">
            Add two dates to your earliest role later and it&rsquo;s 100. Nothing is
            blocking you — paste a job and we&rsquo;ll score it now.
          </p>
        </div>
      </div>

      <div className="mb-5 grid gap-2.5 [grid-template-columns:repeat(auto-fit,minmax(min(150px,100%),1fr))]">
        {DONE_STATS.map((stat, index) => (
          <div
            key={stat.label}
            className="rounded-[12px] border border-border-subtle bg-surface px-[17px] py-[15px]"
          >
            <div className="font-mono text-[22px] leading-none font-semibold tracking-[-.03em] text-text-primary">
              {stats[index]}
            </div>
            <div className="mt-1.5 text-[12.5px] text-text-tertiary">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-border-subtle bg-surface p-[22px] shadow-sm">
        <div className="mb-1 flex items-baseline justify-between gap-3">
          <h2 className="m-0 text-[18px] font-semibold tracking-[-.022em]">
            Paste your first job description
          </h2>
          <span className="font-mono text-[11px] text-text-tertiary">
            {words ? `${words} words` : "Paste 200+ words for a full score"}
          </span>
        </div>
        <p className="m-0 mb-[14px] text-[13.5px] leading-[1.6] text-text-secondary">
          Whole posting, straight from the job board. Requirements, responsibilities,
          the boilerplate — we sort it out.
        </p>
        <textarea
          value={jd}
          onChange={(event) => setJd(event.target.value)}
          placeholder="Paste the full job description here…"
          aria-label="Job description"
          className="min-h-[150px] w-full resize-y rounded-[11px] border border-border-default bg-surface px-[15px] py-[13px] text-[14.5px] leading-[1.6] text-text-primary outline-none transition-all duration-140 ease-standard placeholder:text-text-disabled focus:border-accent focus:shadow-ring"
        />
        <div className="mt-[14px] flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            disabled={!ready}
            onClick={() => setAnalysing(true)}
            className={
              ready
                ? "h-11 px-5 text-[15px] shadow-sm"
                : "h-11 cursor-not-allowed border-muted bg-muted px-5 text-[15px] text-text-disabled shadow-sm hover:border-muted hover:bg-muted"
            }
          >
            <span
              className={`inline-block size-2 rotate-45 rounded-[1.5px] ${
                ready ? "bg-white/85" : "bg-text-disabled"
              }`}
            />
            Analyse this job
          </Button>
          <ButtonLink
            href="/dashboard"
            variant="secondary"
            size="lg"
            className="h-11 px-[18px] text-[14.5px] text-text-secondary"
          >
            Skip to dashboard
          </ButtonLink>
          {analysing && (
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] text-ai-text">
              <span className="inline-block size-[14px] animate-hb-spin rounded-full border-2 border-accent-border border-t-accent" />
              Scoring against your profile…
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-start gap-[11px] rounded-[12px] border border-ai-border bg-ai-surface px-[18px] py-[15px]">
        <span className="mt-[5px]">
          <AiDiamond />
        </span>
        <p className="m-0 text-[13.5px] leading-[1.6] text-text-secondary">
          <span className="font-medium text-text-primary">
            One habit worth building:
          </span>{" "}
          paste the job before you decide to apply, not after. The score takes four
          seconds and a 42 saves you an evening.
        </p>
      </div>
    </div>
  );
}
