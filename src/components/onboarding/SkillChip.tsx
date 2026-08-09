import { X } from "lucide-react";
import type { SkillOrigin } from "./types";

type Props = {
  label: string;
  origin: SkillOrigin;
  /** With confidence off, inferred skills look like any other. */
  showConfidence: boolean;
  onRemove: () => void;
};

export default function SkillChip({
  label,
  origin,
  showConfidence,
  onRemove,
}: Props) {
  const isInferred = showConfidence && origin === "inferred";

  const tone = isInferred
    ? "border-dashed border-border-strong bg-transparent text-text-tertiary"
    : origin === "added"
      ? "border-solid border-accent-border bg-accent-subtle text-accent-text"
      : "border-solid border-border-subtle bg-subtle text-text-primary";

  return (
    <span
      className={`inline-flex h-[30px] items-center gap-[7px] rounded-full border pr-1.5 pl-[11px] text-[13px] ${tone}`}
    >
      {label}
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${label}`}
        className="inline-flex size-[19px] flex-none cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-inherit opacity-55 hover:bg-[rgba(16,20,34,.08)] hover:opacity-100"
      >
        <X size={11} strokeWidth={2} />
      </button>
    </span>
  );
}
