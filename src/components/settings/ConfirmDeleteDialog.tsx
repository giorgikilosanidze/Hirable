"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { CONFIRM_COPY, SETTINGS_FIELD_CLASS } from "./constants";
import type { DangerKey } from "./types";

type Props = {
  target: DangerKey;
  onClose: () => void;
};

/** Destructive actions need the phrase typed before they unlock. */
export default function ConfirmDeleteDialog({ target, onClose }: Props) {
  const [typed, setTyped] = useState("");
  const copy = CONFIRM_COPY[target];
  const unlocked = typed.trim().toLowerCase() === copy.word;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 z-[80] animate-hb-fade bg-overlay" />
      <div
        role="dialog"
        aria-modal
        aria-labelledby="confirm-title"
        className="fixed top-1/2 left-1/2 z-[81] w-[min(420px,92vw)] -translate-x-1/2 -translate-y-1/2 animate-hb-rise rounded-[16px] border border-border-subtle bg-surface p-5 shadow-xl"
      >
        <div
          id="confirm-title"
          className="mb-2 text-[16px] font-semibold tracking-[-.02em]"
        >
          {copy.title}
        </div>
        <p className="m-0 mb-4 text-[13.5px] leading-[1.6] text-pretty text-text-secondary">
          {copy.body}
        </p>

        <label className="mb-4 block">
          <span className="mb-1.5 block text-[12.5px] text-text-tertiary">
            Type &ldquo;{copy.word}&rdquo; to confirm
          </span>
          <input
            type="text"
            value={typed}
            autoFocus
            onChange={(event) => setTyped(event.target.value)}
            placeholder={copy.word}
            className={SETTINGS_FIELD_CLASS}
          />
        </label>

        <div className="flex justify-end gap-2">
          <Button variant="secondary" size="appMd" onClick={onClose}>
            Keep it
          </Button>
          <Button
            size="appMd"
            disabled={!unlocked}
            onClick={onClose}
            className={
              unlocked
                ? "border-danger bg-danger text-white hover:border-danger hover:bg-danger"
                : "cursor-not-allowed border-border-default bg-subtle text-text-disabled opacity-85 hover:border-border-default hover:bg-subtle"
            }
          >
            {copy.action}
          </Button>
        </div>
      </div>
    </>
  );
}
