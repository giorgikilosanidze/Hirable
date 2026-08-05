import type { ReactNode } from "react";
import { EYEBROW_PILL_VARIANTS } from "./constants";

type Props = {
  variant?: keyof typeof EYEBROW_PILL_VARIANTS;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  labelClassName?: string;
};

/** The small mono capsule that labels a section or an AI surface. */
export default function EyebrowPill({
  variant = "accent",
  icon,
  children,
  className = "px-[11px] py-1",
  labelClassName = "text-[10.5px] tracking-[.08em]",
}: Props) {
  return (
    <div
      className={`inline-flex items-center gap-[7px] rounded-full border ${EYEBROW_PILL_VARIANTS[variant]} ${className}`}
    >
      {icon}
      <span className={`font-mono font-semibold uppercase ${labelClassName}`}>
        {children}
      </span>
    </div>
  );
}
