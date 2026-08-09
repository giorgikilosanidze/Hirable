"use client";

import { CARD_CLASS, FLAGS, RAIL_OVERLINE_CLASS } from "./constants";
import type { DraftFlags } from "./types";

type Props = {
  flags: DraftFlags;
  onToggle: (key: keyof DraftFlags) => void;
};

/**
 * The whole row is the switch — the track is decoration, so there is no
 * nested button and the label is part of the hit target.
 */
export default function DraftFlagList({ flags, onToggle }: Props) {
  return (
    <div className={`${CARD_CLASS} p-[18px]`}>
      <div className={RAIL_OVERLINE_CLASS}>What it should do</div>
      <div className="flex flex-col gap-1">
        {FLAGS.map((flag) => {
          const isOn = flags[flag.key];
          return (
            <button
              key={flag.key}
              type="button"
              role="switch"
              aria-checked={isOn}
              onClick={() => onToggle(flag.key)}
              className="flex cursor-pointer items-start gap-[11px] rounded-[9px] border-none bg-transparent px-2 py-2.5 text-left transition-colors duration-140 ease-standard hover:bg-subtle"
            >
              <span
                className={`relative mt-px h-5 w-[34px] flex-none rounded-full transition-colors duration-160 ease-standard ${
                  isOn ? "bg-accent" : "bg-muted"
                }`}
              >
                <span
                  className={`absolute top-0.5 size-4 rounded-full bg-white shadow-xs transition-[left] duration-160 ease-standard ${
                    isOn ? "left-4" : "left-0.5"
                  }`}
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13.5px] font-medium text-text-primary">
                  {flag.label}
                </span>
                <span className="mt-0.5 block text-[12px] leading-[1.5] text-text-tertiary">
                  {flag.hint}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
