"use client";

import { useState } from "react";
import Link from "next/link";
import { Link2, Lock, Timer } from "lucide-react";
import Button from "@/components/ui/Button";
import CapNotice from "./CapNotice";
import NotPostingNotice from "./NotPostingNotice";
import {
  MIN_JD_LENGTH,
  NARROW_COLUMN,
  RESUME_FILE,
  SAMPLE_POSTING,
  VIEW_PADDING,
} from "./constants";
import type { PasteOutcome } from "./types";
import { looksLikePosting, wordCount } from "./utils";

type Props = {
  outcome: PasteOutcome;
  onAnalyse: () => void;
};

export default function PasteView({ outcome, onAnalyse }: Props) {
  const [jd, setJd] = useState("");
  const [rejected, setRejected] = useState(false);

  const capped = outcome === "cap-reached";
  const ready = jd.trim().length > MIN_JD_LENGTH;
  const words = wordCount(jd);

  const submit = () => {
    if (capped || !ready) return;
    if (outcome === "not-a-posting" || !looksLikePosting(jd)) {
      setRejected(true);
      return;
    }
    onAnalyse();
  };

  return (
    <div className={`flex flex-1 flex-col animate-hb-rise ${VIEW_PADDING}`}>
      <div className={NARROW_COLUMN}>
        <h1 className="m-0 mb-2.5 text-[clamp(26px,3.2vw,34px)] leading-[1.12] font-semibold tracking-[-.03em]">
          Paste a job description.
        </h1>
        <p className="m-0 mb-[22px] max-w-[520px] text-[15.5px] leading-[1.6] text-text-secondary">
          Scored against{" "}
          <span className="font-medium text-text-primary">{RESUME_FILE}</span> — 4
          roles, 27 skills, 9 outcomes. <Link href="/settings">Change resume</Link>
        </p>

        {capped && <CapNotice />}

        {rejected && (
          <NotPostingNotice
            isShort={jd.trim().length < 400}
            onDismiss={() => setRejected(false)}
            onAnalyseAnyway={() => {
              setRejected(false);
              onAnalyse();
            }}
          />
        )}

        <div className="overflow-hidden rounded-lg border border-border-subtle bg-surface shadow-sm">
          <div className="flex items-center gap-2.5 border-b border-border-subtle bg-subtle px-[14px] py-[11px]">
            <Link2 size={15} strokeWidth={1.75} className="flex-none text-text-tertiary" />
            <input
              type="url"
              placeholder="Paste a job URL — or the full text below"
              aria-label="Job URL"
              className="h-7 min-w-0 flex-1 border-none bg-transparent text-[13.5px] text-text-primary outline-none placeholder:text-text-tertiary"
            />
          </div>

          <textarea
            value={jd}
            onChange={(event) => setJd(event.target.value)}
            placeholder={"Senior Product Designer\nStripe · Remote (US)\n\nAbout the role…"}
            aria-label="Job description"
            className="block min-h-[230px] w-full resize-y border-none bg-transparent p-4 text-[14.5px] leading-[1.65] text-text-primary outline-none placeholder:text-text-disabled"
          />

          <div className="flex flex-wrap items-center gap-3 border-t border-border-subtle bg-subtle px-[14px] py-3">
            {/* Only claims it reads like a posting when the check agrees —
                otherwise it contradicts the error card above it. */}
            <span className="min-w-[120px] flex-1 font-mono text-[11px] text-text-tertiary">
              {words
                ? `${words} words${looksLikePosting(jd) ? " · looks like a full posting" : ""}`
                : "Paste 200+ words for a full score"}
            </span>
            <Button
              variant="secondary"
              size="appSm"
              onClick={() => setJd(SAMPLE_POSTING)}
              className="text-text-secondary hover:bg-muted"
            >
              Use a sample posting
            </Button>
            <Button
              size="appSm"
              disabled={capped || !ready}
              onClick={submit}
              className={
                capped || !ready
                  ? "cursor-not-allowed border-muted bg-muted px-[15px] text-[13.5px] text-text-disabled hover:border-muted hover:bg-muted"
                  : "px-[15px] text-[13.5px]"
              }
            >
              <span
                className={`inline-block size-[7px] rotate-45 rounded-[1.5px] ${
                  capped || !ready ? "bg-text-disabled" : "bg-white/85"
                }`}
              />
              {capped ? "Monthly limit reached" : "Analyse match"}
            </Button>
          </div>
        </div>

        <div className="mt-[18px] flex flex-wrap gap-4 text-[12.5px] text-text-tertiary">
          <span className="inline-flex items-center gap-1.5">
            <Timer size={13} strokeWidth={1.75} />
            About four seconds
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Lock size={13} strokeWidth={1.75} />
            Postings are private to you
          </span>
        </div>
      </div>
    </div>
  );
}
