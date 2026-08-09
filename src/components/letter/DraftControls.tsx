"use client";

import SegmentedControl from "@/components/ui/SegmentedControl";
import {
  CARD_CLASS,
  LENGTHS,
  LENGTH_HINTS,
  RAIL_OVERLINE_CLASS,
  TONES,
} from "./constants";
import type { Length, Tone } from "./types";

type Props = {
  tone: Tone;
  length: Length;
  onToneChange: (tone: Tone) => void;
  onLengthChange: (length: Length) => void;
};

export default function DraftControls({
  tone,
  length,
  onToneChange,
  onLengthChange,
}: Props) {
  return (
    <div className={`${CARD_CLASS} p-[18px]`}>
      <div className={RAIL_OVERLINE_CLASS}>Tone</div>
      <SegmentedControl
        items={TONES}
        value={tone}
        onChange={onToneChange}
        size="sm"
        label="Letter tone"
        stretch
        className="mb-[18px]"
      />

      <div className={RAIL_OVERLINE_CLASS}>Length</div>
      <SegmentedControl
        items={LENGTHS}
        value={length}
        onChange={onLengthChange}
        size="sm"
        label="Letter length"
        stretch
        className="mb-1.5"
      />
      <div className="text-[12px] text-text-tertiary">{LENGTH_HINTS[length]}</div>
    </div>
  );
}
