import type { LucideIcon } from "lucide-react";

type Props = {
  label: string;
  selected: boolean;
  onClick: () => void;
  icon?: LucideIcon;
  /** Multi-select chips report pressed state, single-select report checked. */
  multi?: boolean;
};

/** The 38px selectable chip used for level and work setup. */
export default function OptionChip({
  label,
  selected,
  onClick,
  icon: Icon,
  multi = false,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      {...(multi ? { "aria-pressed": selected } : { "aria-checked": selected, role: "radio" })}
      className={`inline-flex h-[38px] cursor-pointer items-center gap-2 rounded-md border px-4 text-[14px] font-medium transition-all duration-140 ease-standard focus-visible:shadow-ring focus-visible:outline-none ${
        selected
          ? "border-accent bg-accent-subtle text-accent-text"
          : "border-border-default bg-surface text-text-secondary hover:bg-subtle"
      }`}
    >
      {Icon && <Icon size={15} strokeWidth={1.75} />}
      {label}
    </button>
  );
}
