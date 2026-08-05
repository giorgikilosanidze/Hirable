"use client";

import { useEffect, useState } from "react";
import { Copy, Send, X } from "lucide-react";
import AiDiamond from "@/components/ui/AiDiamond";
import Button from "@/components/ui/Button";
import SegmentedControl from "@/components/ui/SegmentedControl";
import {
  FOLLOW_UP_CAVEAT,
  FOLLOW_UP_THREADS,
  FOLLOW_UP_TONES,
} from "./constants";
import type { FollowUpKey, FollowUpTone } from "./types";

type Props = {
  threadKey: FollowUpKey;
  onClose: () => void;
};

export default function FollowUpDrawer({ threadKey, onClose }: Props) {
  const [tone, setTone] = useState<FollowUpTone>("direct");
  const [edits, setEdits] = useState<Partial<Record<FollowUpTone, string>>>({});

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const thread = FOLLOW_UP_THREADS[threadKey];
  const body = edits[tone] ?? thread.bodies[tone];
  const wordCount = body.trim().split(/\s+/).length;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[80] animate-hb-fade bg-overlay"
      />
      <aside
        role="dialog"
        aria-modal
        aria-label={`Follow up on ${thread.company}`}
        className="fixed top-0 right-0 bottom-0 z-[81] flex w-[min(520px,96vw)] animate-hb-slide flex-col overflow-y-auto border-l border-border-subtle bg-surface shadow-xl"
      >
        <div className="flex items-start gap-3 border-b border-border-subtle px-5 pt-[18px] pb-[15px]">
          <span className="inline-flex size-[38px] flex-none items-center justify-center rounded-md bg-logo-bg text-[12.5px] font-semibold text-white">
            {thread.initials}
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-[16px] leading-[1.3] font-semibold tracking-[-.02em]">
              Follow up on {thread.company}
            </div>
            <div className="mt-[3px] text-[12.5px] text-text-tertiary">
              {thread.role} · {thread.context}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex size-[30px] flex-none cursor-pointer items-center justify-center rounded-[8px] border border-border-subtle bg-surface text-text-tertiary hover:bg-subtle hover:text-text-primary"
          >
            <X size={15} strokeWidth={1.75} />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-[14px] px-5 py-[18px]">
          <div className="flex flex-wrap items-center gap-2.5 rounded-[11px] border border-ai-border bg-ai-surface px-[13px] py-[11px]">
            <AiDiamond />
            <span className="min-w-[140px] flex-1 font-mono text-[10.5px] font-semibold tracking-[.08em] text-ai-text uppercase">
              Drafted from your analysis · one matched strength
            </span>
            <span className="font-mono text-[10.5px] text-text-tertiary">
              {wordCount} words
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[12.5px] text-text-tertiary">Tone</span>
            <SegmentedControl
              items={FOLLOW_UP_TONES}
              value={tone}
              onChange={setTone}
              size="sm"
              label="Follow-up tone"
            />
            <Button
              variant="ghost"
              size="appXs"
              onClick={() => setEdits((current) => ({ ...current, [tone]: undefined }))}
              className="ml-auto border-border-subtle text-text-tertiary"
            >
              Reset draft
            </Button>
          </div>

          <div>
            <div className="mb-[7px] font-mono text-[10px] font-semibold tracking-[.09em] text-text-tertiary uppercase">
              Subject
            </div>
            <div className="rounded-md border border-border-default bg-subtle px-[13px] py-[11px] text-[13.5px] text-text-primary">
              {thread.subject}
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="follow-up-body"
              className="mb-[7px] font-mono text-[10px] font-semibold tracking-[.09em] text-text-tertiary uppercase"
            >
              Message
            </label>
            <textarea
              id="follow-up-body"
              value={body}
              onChange={(event) =>
                setEdits((current) => ({ ...current, [tone]: event.target.value }))
              }
              rows={16}
              className="h-[340px] w-full resize-y rounded-[11px] border border-border-default bg-surface p-[14px] text-[13.5px] leading-[1.7] text-text-primary outline-none focus:border-accent focus:shadow-ring"
            />
          </div>

          <div className="rounded-[11px] border border-border-subtle bg-subtle px-[14px] py-3">
            <div className="text-[12.5px] leading-[1.6] text-pretty text-text-secondary">
              {FOLLOW_UP_CAVEAT}
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 flex flex-wrap items-center gap-2 border-t border-border-subtle bg-surface px-5 py-[14px]">
          <Button variant="secondary" size="appLg" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="secondary" size="appLg" className="ml-auto">
            <Copy size={15} strokeWidth={1.75} className="text-text-tertiary" />
            Copy
          </Button>
          <Button size="appLg" onClick={onClose} className="px-[15px] shadow-sm">
            <Send size={15} strokeWidth={1.75} />
            Send and log it
          </Button>
        </div>
      </aside>
    </>
  );
}
