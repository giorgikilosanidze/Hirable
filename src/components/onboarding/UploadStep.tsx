"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import Button from "@/components/ui/Button";
import StepChecklist from "@/components/ui/StepChecklist";
import UploadDropzone from "./UploadDropzone";
import UploadFailed from "./UploadFailed";
import {
  DEFAULT_FILE,
  PARSE_STEPS,
  PARSE_TIMING,
  STEP_EYEBROW_CLASS,
  STEP_HEADING_CLASS,
} from "./constants";
import type { UploadOutcome, UploadPhase } from "./types";
import { formatFileSize } from "./utils";

type Props = {
  outcome: UploadOutcome;
  onParsed: () => void;
  onManualEntry: () => void;
  /** Reported up so the review step can name the file it read. */
  onFileSelected: (name: string) => void;
};

export default function UploadStep({
  outcome,
  onParsed,
  onManualEntry,
  onFileSelected,
}: Props) {
  const [phase, setPhase] = useState<UploadPhase>("idle");
  const [progress, setProgress] = useState(0);
  const [parseIndex, setParseIndex] = useState(-1);
  const [file, setFile] = useState(DEFAULT_FILE);

  const start = (dropped?: File) => {
    const next = dropped
      ? { name: dropped.name, size: formatFileSize(dropped.size) }
      : DEFAULT_FILE;
    setFile(next);
    onFileSelected(next.name);
    setProgress(0);
    setParseIndex(-1);
    setPhase("uploading");
  };

  // Upload ticker.
  useEffect(() => {
    if (phase !== "uploading") return;
    const id = setInterval(() => {
      setProgress((current) => Math.min(100, current + 6 + Math.random() * 11));
    }, PARSE_TIMING.uploadTick);
    return () => clearInterval(id);
  }, [phase]);

  // Hand off to the parser once the bar fills.
  useEffect(() => {
    if (phase !== "uploading" || progress < 100) return;
    const timer = setTimeout(() => {
      setPhase("parsing");
      setParseIndex(0);
    }, PARSE_TIMING.handoff);
    return () => clearTimeout(timer);
  }, [phase, progress]);

  // Reveal one parse step at a time, then either settle or fail.
  useEffect(() => {
    if (phase !== "parsing") return;
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (outcome === "unreadable") {
      timers.push(setTimeout(() => setParseIndex(1), PARSE_TIMING.perStep));
      timers.push(setTimeout(() => setPhase("failed"), PARSE_TIMING.failAt));
    } else {
      PARSE_STEPS.forEach((_, index) => {
        timers.push(
          setTimeout(
            () => setParseIndex(index + 1),
            (index + 1) * PARSE_TIMING.perStep
          )
        );
      });
      timers.push(
        setTimeout(
          onParsed,
          PARSE_STEPS.length * PARSE_TIMING.perStep + PARSE_TIMING.settle
        )
      );
    }

    return () => timers.forEach(clearTimeout);
  }, [phase, outcome, onParsed]);

  const isWorking = phase === "uploading" || phase === "parsing";

  return (
    <div className="animate-hb-rise">
      <div className={STEP_EYEBROW_CLASS}>Step 2 of 4</div>
      <h1 className={STEP_HEADING_CLASS}>Upload your resume once.</h1>
      <p className="m-0 mb-[30px] max-w-[580px] text-[16px] leading-[1.6] text-pretty text-text-secondary">
        We read it into a structured profile and keep it. Every job you paste from
        here on is scored against this file — you never upload it again.
      </p>

      {phase === "idle" && <UploadDropzone onFile={start} />}

      {phase === "failed" && (
        <UploadFailed
          fileName={file.name}
          onRetry={() => setPhase("idle")}
          onPaste={() => start()}
          onManual={onManualEntry}
        />
      )}

      {isWorking && (
        <div className="animate-hb-rise">
          <div className="mb-[14px] rounded-lg border border-border-subtle bg-surface px-5 py-[18px] shadow-sm">
            <div className="flex items-center gap-[13px]">
              <span className="inline-flex size-10 flex-none items-center justify-center rounded-md border border-accent-border bg-accent-subtle">
                <FileText size={19} strokeWidth={1.75} className="text-accent-text" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[14.5px] font-medium text-text-primary">
                  {file.name}
                </div>
                <div className="mt-[3px] font-mono text-[11.5px] text-text-tertiary">
                  {file.size} · {phase === "parsing" ? "Uploaded" : "Uploading"}
                </div>
              </div>
              <span
                className={`flex-none font-mono text-[12.5px] font-semibold ${
                  phase === "parsing" ? "text-ai-text" : "text-text-secondary"
                }`}
              >
                {phase === "parsing" ? "Parsing" : `${Math.round(progress)}%`}
              </span>
            </div>
            <div className="mt-[14px] h-[5px] overflow-hidden rounded-[3px] bg-muted">
              <div
                className="h-full rounded-[3px] bg-accent transition-[width] duration-120 ease-linear"
                style={{ width: `${Math.round(progress)}%` }}
              />
            </div>
          </div>

          {phase === "parsing" ? (
            <StepChecklist
              label="Hirable is reading your resume"
              steps={PARSE_STEPS}
              activeIndex={parseIndex}
            />
          ) : (
            <div className="flex items-center gap-[9px] px-1 py-0.5">
              <span className="inline-block size-[15px] animate-hb-spin rounded-full border-2 border-accent-border border-t-accent" />
              <span className="text-[13.5px] text-text-secondary">
                Uploading over an encrypted connection…
              </span>
            </div>
          )}

          <Button
            variant="secondary"
            size="appLg"
            onClick={() => {
              setPhase("idle");
              setProgress(0);
              setParseIndex(-1);
            }}
            className="mt-4 px-[15px] text-text-secondary"
          >
            Cancel and pick another file
          </Button>
        </div>
      )}
    </div>
  );
}
