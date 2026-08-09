"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Pencil, RefreshCw, Sparkle } from "lucide-react";
import AiDiamond from "@/components/ui/AiDiamond";
import Button from "@/components/ui/Button";
import ButtonLink from "@/components/ui/ButtonLink";
import { LETTER_PARAGRAPHS, SCORING_TIMING } from "./constants";
import type { LetterPhase } from "./types";

export default function CoverLetterCard() {
  const [phase, setPhase] = useState<LetterPhase>("idle");

  useEffect(() => {
    if (phase !== "writing") return;
    const timer = setTimeout(() => setPhase("ready"), SCORING_TIMING.letter);
    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div className="rounded-lg border border-ai-border bg-ai-surface p-5">
      <div className="flex flex-wrap items-start gap-[14px]">
        <div className="min-w-[220px] flex-1">
          <div className="mb-2 flex items-center gap-2">
            <AiDiamond />
            <span className="font-mono text-[10.5px] font-semibold tracking-[.08em] text-ai-text uppercase">
              {phase === "ready"
                ? "Written by Hirable · 2.1s · from 11 matched requirements"
                : "Cover letter"}
            </span>
          </div>
          <h2 className="m-0 mb-1.5 text-[16.5px] font-semibold tracking-[-.02em]">
            Draft the cover letter from your 11 matches
          </h2>
          <p className="m-0 max-w-[460px] text-[13.5px] leading-[1.6] text-text-secondary">
            It leads with the adoption number, uses their own language for the
            systems work, and names the payments gap honestly in one line rather
            than hiding it.
          </p>
        </div>

        <Button
          size="md"
          onClick={() => setPhase("writing")}
          disabled={phase === "writing"}
          className="h-10 flex-none px-[17px] text-[14px] shadow-sm"
        >
          {phase === "ready" ? (
            <Check size={16} strokeWidth={1.75} />
          ) : (
            <Sparkle size={16} strokeWidth={1.75} />
          )}
          {phase === "ready"
            ? "Rewritten"
            : phase === "writing"
              ? "Writing…"
              : "Write my letter"}
        </Button>
      </div>

      {phase === "writing" && (
        <div className="mt-4 flex flex-col gap-2.5 rounded-[11px] border border-ai-border bg-surface px-[18px] py-4">
          {["88%", "74%", "92%", "48%"].map((width) => (
            <div
              key={width}
              className="h-[11px] animate-hb-shimmer rounded-[5px] bg-skeleton"
              style={{ width }}
            />
          ))}
        </div>
      )}

      {phase === "ready" && (
        <div className="mt-4 animate-hb-rise rounded-[11px] border border-border-subtle bg-surface">
          <div className="flex flex-col gap-3 px-5 py-[18px]">
            {LETTER_PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="m-0 text-[14px] leading-[1.7] text-text-secondary"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-border-subtle bg-subtle px-5 py-3">
            <span className="min-w-[140px] flex-1 font-mono text-[10.5px] text-text-tertiary">
              Draft · 218 words · edit before sending
            </span>
            <Button
              variant="secondary"
              size="appXs"
              className="h-8 text-text-secondary hover:bg-muted"
            >
              <Copy size={14} strokeWidth={1.75} />
              Copy
            </Button>
            <Button
              variant="secondary"
              size="appXs"
              onClick={() => setPhase("writing")}
              className="h-8 text-text-secondary hover:bg-muted"
            >
              <RefreshCw size={14} strokeWidth={1.75} />
              Rewrite shorter
            </Button>
            <ButtonLink href="/letters/stripe" size="appXs" className="h-8 px-[13px]">
              <Pencil size={14} strokeWidth={1.75} />
              Open in editor
            </ButtonLink>
          </div>
        </div>
      )}
    </div>
  );
}
