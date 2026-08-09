"use client";

import { Check, Copy, Download, Send } from "lucide-react";
import Button from "@/components/ui/Button";
import { JOB } from "./constants";

type Props = {
  words: number;
  savedLabel: string;
  copied: boolean;
  onCopy: () => void;
};

export default function LetterContextBar({
  words,
  savedLabel,
  copied,
  onCopy,
}: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-border-subtle bg-nav px-[clamp(20px,3vw,32px)] py-[13px] backdrop-blur-[12px]">
      <div className="flex flex-wrap items-center gap-[14px]">
        <span className="inline-flex size-9 flex-none items-center justify-center rounded-[9px] bg-logo-bg text-[12px] font-semibold text-white">
          {JOB.initials}
        </span>

        <div className="min-w-[170px] flex-1">
          <div className="text-[15.5px] leading-[1.3] font-semibold tracking-[-.02em]">
            {JOB.title}
          </div>
          <div className="mt-[3px] flex flex-wrap items-center gap-[9px]">
            <span className="inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-text">
              <span className="size-1.5 rounded-full bg-accent" />
              {JOB.score}
            </span>
            <span className="font-mono text-[11px] whitespace-nowrap text-text-tertiary">
              {words} words
            </span>
            <span className="font-mono text-[11px] whitespace-nowrap text-text-tertiary">
              {savedLabel}
            </span>
          </div>
        </div>

        <div className="flex flex-none flex-wrap items-center gap-2">
          <Button
            variant="secondary"
            size="appMd"
            onClick={onCopy}
            className="px-[13px] text-text-secondary"
          >
            {copied ? (
              <Check size={15} strokeWidth={1.75} />
            ) : (
              <Copy size={15} strokeWidth={1.75} />
            )}
            {copied ? "Copied" : "Copy"}
          </Button>
          <Button
            variant="secondary"
            size="appMd"
            className="px-[13px] text-text-secondary"
          >
            <Download size={15} strokeWidth={1.75} />
            Download
          </Button>
          <Button size="appMd" className="px-[15px] shadow-xs">
            <Send size={15} strokeWidth={1.75} />
            Mark as applied
          </Button>
        </div>
      </div>
    </header>
  );
}
