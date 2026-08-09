type Props = {
  label: string;
  hint: string;
  selected: boolean;
  onClick: () => void;
};

/** A radio row: dot, label, and what the choice actually changes. */
export default function UrgencyOption({ label, hint, selected, onClick }: Props) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-3 rounded-md border px-[15px] py-[13px] text-left transition-all duration-140 ease-standard focus-visible:shadow-ring focus-visible:outline-none ${
        selected
          ? "border-accent bg-accent-subtle"
          : "border-border-default bg-surface hover:bg-subtle"
      }`}
    >
      <span
        className={`inline-flex size-[18px] flex-none items-center justify-center rounded-full border-[1.5px] ${
          selected ? "border-accent bg-accent" : "border-border-strong bg-transparent"
        }`}
      >
        {selected && <span className="size-[7px] rounded-full bg-white" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[14px] font-medium text-text-primary">{label}</span>
        <span className="mt-0.5 block text-[12.5px] text-text-tertiary">{hint}</span>
      </span>
    </button>
  );
}
