"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import AiDiamond from "@/components/ui/AiDiamond";
import DraftControls from "./DraftControls";
import DraftFlagList from "./DraftFlagList";
import GroundedIn from "./GroundedIn";
import LetterContextBar from "./LetterContextBar";
import LetterParagraph from "./LetterParagraph";
import VersionList from "./VersionList";
import {
  ATTRIBUTION,
  COPY_RESET_DELAY,
  EDIT_HINT,
  WORK_DURATION,
} from "./constants";
import type {
  DraftFlags,
  Length,
  Paragraph,
  ParagraphId,
  ParagraphVariant,
  Tone,
  Version,
} from "./types";
import {
  composeLetter,
  countWords,
  letterToText,
  resolveText,
  withoutKey,
} from "./utils";

type Props = {
  initialTone: Tone;
  initialLength: Length;
};

export default function LetterEditor({ initialTone, initialLength }: Props) {
  const [tone, setTone] = useState<Tone>(initialTone);
  const [length, setLength] = useState<Length>(initialLength);
  const [flags, setFlags] = useState<DraftFlags>({
    leadMetric: true,
    nameGap: true,
    referral: false,
  });
  const [edits, setEdits] = useState<Partial<Record<ParagraphId, string>>>({});
  const [variants, setVariants] = useState<
    Partial<Record<ParagraphId, ParagraphVariant>>
  >({});
  const [openEvidence, setOpenEvidence] = useState<
    Partial<Record<ParagraphId, boolean>>
  >({});
  const [busyLabel, setBusyLabel] = useState<string | null>(null);
  const [pending, setPending] = useState<(() => void) | null>(null);
  const [touched, setTouched] = useState(false);
  const [copied, setCopied] = useState(false);
  const [version, setVersion] = useState("v3");

  // Composing shows the spinner first; the new text lands when it clears.
  useEffect(() => {
    if (!pending) return;
    const timer = setTimeout(() => {
      pending();
      setBusyLabel(null);
      setPending(null);
    }, WORK_DURATION);
    return () => clearTimeout(timer);
  }, [pending]);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), COPY_RESET_DELAY);
    return () => clearTimeout(timer);
  }, [copied]);

  const work = (label: string, after: () => void) => {
    setBusyLabel(label);
    setPending(() => after);
  };

  const paragraphs: Paragraph[] = composeLetter(tone, length, flags);
  const texts = paragraphs.map((paragraph) =>
    resolveText(paragraph, variants[paragraph.id], edits[paragraph.id])
  );

  const setVariant = (id: ParagraphId, variant: ParagraphVariant) => {
    setVariants((current) => ({
      ...current,
      [id]: current[id] === variant ? undefined : variant,
    }));
    setEdits((current) => withoutKey(current, id));
  };

  const resetDraft = () => {
    setEdits({});
    setVariants({});
    setTouched(false);
  };

  const copy = () => {
    navigator.clipboard?.writeText(letterToText(texts)).catch(() => {});
    setCopied(true);
  };

  const restore = (target: Version) => {
    if (!target.restore) return;
    const { tone: nextTone, length: nextLength, version: nextVersion } = target.restore;
    work("Restoring that version…", () => {
      resetDraft();
      setTone(nextTone);
      setLength(nextLength);
      setVersion(nextVersion);
    });
  };

  return (
    <main className="flex min-h-screen min-w-0 flex-1 flex-col">
      <LetterContextBar
        words={countWords(texts)}
        savedLabel={touched ? "Saving as you type" : `Draft ${version}`}
        copied={copied}
        onCopy={copy}
      />

      <div className="flex min-w-0 flex-1 flex-wrap items-start gap-[clamp(16px,2vw,24px)] px-[14px] pt-[14px] pb-[92px] md:px-[clamp(20px,3vw,32px)] md:pt-[clamp(20px,3vw,32px)] md:pb-[60px]">
        <div className="flex min-w-0 flex-1 basis-[420px] flex-col gap-[14px]">
          <div className="overflow-hidden rounded-[16px] border border-border-subtle bg-surface shadow-md">
            <div className="flex flex-wrap items-center gap-2.5 border-b border-border-subtle bg-ai-surface px-[18px] py-[13px]">
              <AiDiamond />
              <span className="min-w-[120px] flex-1 font-mono text-[10.5px] font-semibold tracking-[.08em] text-ai-text uppercase">
                {ATTRIBUTION}
              </span>
              <span className="font-mono text-[10.5px] text-text-tertiary">
                {touched ? "Edited by you" : "Untouched draft"}
              </span>
            </div>

            <div className="relative px-[clamp(24px,4vw,60px)] pt-[clamp(28px,3.5vw,48px)] pb-[clamp(32px,4vw,56px)]">
              {busyLabel && (
                <div className="absolute inset-0 z-[5] flex animate-hb-fade justify-center bg-[color-mix(in_srgb,var(--bg-surface)_82%,transparent)] pt-16">
                  <span className="inline-flex h-fit items-center gap-[9px] rounded-full border border-ai-border bg-surface px-[15px] py-2.5 shadow-md">
                    <span className="inline-block size-[14px] animate-hb-spin rounded-full border-2 border-accent-border border-t-accent" />
                    <span className="font-mono text-[11.5px] text-ai-text">
                      {busyLabel}
                    </span>
                  </span>
                </div>
              )}

              <div className="mx-auto flex max-w-[640px] flex-col gap-5">
                {paragraphs.map((paragraph, index) => (
                  <LetterParagraph
                    key={paragraph.id}
                    text={texts[index]}
                    plain={paragraph.plain}
                    evidence={paragraph.evidence}
                    showEvidence={!!openEvidence[paragraph.id]}
                    label={`Paragraph: ${paragraph.id}`}
                    onChange={(value) => {
                      setEdits((current) => ({ ...current, [paragraph.id]: value }));
                      setTouched(true);
                    }}
                    onRewrite={() =>
                      work("Rewriting that paragraph…", () =>
                        setVariant(paragraph.id, "rewrite")
                      )
                    }
                    onShorten={() =>
                      work("Tightening that paragraph…", () =>
                        setVariant(paragraph.id, "short")
                      )
                    }
                    onToggleEvidence={() =>
                      setOpenEvidence((current) => ({
                        ...current,
                        [paragraph.id]: !current[paragraph.id],
                      }))
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              size="md"
              onClick={() =>
                work("Rewriting from your 11 matches…", () => {
                  resetDraft();
                  setVersion("v4");
                })
              }
              className="rounded-[11px] px-[18px] shadow-sm"
            >
              <span className="inline-block size-2 rotate-45 rounded-[1.5px] bg-white/85" />
              Rewrite the whole letter
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={resetDraft}
              className="rounded-[11px] px-4 text-[14px] text-text-secondary"
            >
              Discard my edits
            </Button>
            <span className="text-[12.5px] text-text-tertiary">{EDIT_HINT}</span>
          </div>
        </div>

        <div className="flex min-w-[min(280px,100%)] flex-[0_1_316px] flex-col gap-[14px] md:sticky md:top-[84px]">
          <DraftControls
            tone={tone}
            length={length}
            onToneChange={(next) =>
              work(`Rewriting in a ${next} register…`, () => {
                resetDraft();
                setTone(next);
              })
            }
            onLengthChange={(next) =>
              work("Recomposing at that length…", () => {
                resetDraft();
                setLength(next);
              })
            }
          />

          <DraftFlagList
            flags={flags}
            onToggle={(key) =>
              work("Reworking the draft…", () => {
                resetDraft();
                setFlags((current) => ({ ...current, [key]: !current[key] }));
              })
            }
          />

          <GroundedIn />

          <VersionList
            currentWhen={touched ? "edited just now" : "generated 2 minutes ago"}
            onRestore={restore}
          />
        </div>
      </div>
    </main>
  );
}
