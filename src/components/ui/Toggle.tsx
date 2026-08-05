"use client";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
};

export default function Toggle({ checked, onChange, label }: Props) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-[42px] flex-none cursor-pointer rounded-xl border-none transition-colors duration-160 ease-standard focus-visible:shadow-ring focus-visible:outline-none ${
        checked ? "bg-accent" : "bg-muted"
      }`}
    >
      <span
        className={`absolute top-[3px] size-[18px] rounded-full bg-white shadow-sm transition-[left] duration-160 ease-standard ${
          checked ? "left-[21px]" : "left-[3px]"
        }`}
      />
    </button>
  );
}
