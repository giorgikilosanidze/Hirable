"use client";

import { useEffect, useRef } from "react";
import { RefreshCw, Scissors } from "lucide-react";
import AiDiamond from "@/components/ui/AiDiamond";

type Props = {
  text: string;
  plain?: boolean;
  evidence?: string;
  showEvidence: boolean;
  onChange: (text: string) => void;
  onRewrite: () => void;
  onShorten: () => void;
  onToggleEvidence: () => void;
  label: string;
};

const TOOL_CLASS =
  "inline-flex h-[26px] cursor-pointer items-center gap-1.5 rounded-[7px] border px-[9px] text-[11.5px] font-medium transition-all duration-140 ease-standard";

export default function LetterParagraph({
  text,
  plain,
  evidence,
  showEvidence,
  onChange,
  onRewrite,
  onShorten,
  onToggleEvidence,
  label,
}: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);

  // field-sizing handles this natively where supported; this is the
  // fallback so paragraphs never clip in older browsers.
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (CSS.supports?.("field-sizing", "content")) return;
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  }, [text]);

  return (
    <div className="min-w-0">
      <textarea
        ref={ref}
        value={text}
        onChange={(event) => onChange(event.target.value)}
        aria-label={label}
        rows={2}
        className={`-ml-3 block w-full resize-none field-sizing-content rounded-xs border-none border-l-2 border-l-transparent bg-transparent py-0.5 pr-1 pl-2.5 text-[15.5px] leading-[1.78] tracking-[-.004em] outline-none transition-[background,border-color] duration-140 ease-standard focus:border-l-accent focus:bg-subtle ${
          plain ? "font-medium text-text-primary" : "font-normal text-text-secondary"
        }`}
      />

      {!plain && (
        <>
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={onRewrite}
              className={`${TOOL_CLASS} border-border-subtle bg-transparent text-text-tertiary opacity-75 hover:border-accent-border hover:bg-accent-subtle hover:text-accent-text hover:opacity-100`}
            >
              <RefreshCw size={11} strokeWidth={2} />
              Rewrite
            </button>
            <button
              type="button"
              onClick={onShorten}
              className={`${TOOL_CLASS} border-border-subtle bg-transparent text-text-tertiary opacity-75 hover:border-accent-border hover:bg-accent-subtle hover:text-accent-text hover:opacity-100`}
            >
              <Scissors size={11} strokeWidth={2} />
              Shorten
            </button>
            <button
              type="button"
              onClick={onToggleEvidence}
              aria-expanded={showEvidence}
              className={`${TOOL_CLASS} ${
                showEvidence
                  ? "border-accent-border bg-accent-subtle text-accent-text"
                  : "border-border-subtle bg-transparent text-text-tertiary"
              }`}
            >
              <AiDiamond size={6} radius={1} />
              Source
            </button>
          </div>

          {showEvidence && evidence && (
            <div className="mt-[9px] animate-hb-rise rounded-md border border-ai-border bg-ai-surface px-[14px] py-3">
              <div className="mb-[7px] font-mono text-[10px] font-semibold tracking-[.08em] text-ai-text uppercase">
                Built from
              </div>
              <p className="m-0 text-[13px] leading-[1.6] text-text-secondary">
                {evidence}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
