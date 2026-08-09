"use client";

import type { LucideIcon } from "lucide-react";
import { SEGMENTED_SIZES } from "./constants";

type Props<T extends string> = {
  items: { key: T; label: string; icon?: LucideIcon }[];
  value: T;
  onChange: (key: T) => void;
  size?: keyof typeof SEGMENTED_SIZES;
  label: string;
  className?: string;
  /** Items share the width evenly instead of hugging their labels. */
  stretch?: boolean;
};

/** The pill of tabs: settings sections, analyses sort, drawer tone. */
export default function SegmentedControl<T extends string>({
  items,
  value,
  onChange,
  size = "md",
  label,
  className = "",
  stretch = false,
}: Props<T>) {
  const styles = SEGMENTED_SIZES[size];

  return (
    <div
      role="tablist"
      aria-label={label}
      className={`flex bg-subtle ${stretch ? "w-full" : "flex-none"} ${styles.track} ${className}`}
    >
      {items.map((item) => {
        const isActive = item.key === value;
        const Icon = item.icon;
        return (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.key)}
            className={`inline-flex cursor-pointer items-center justify-center border-none font-medium whitespace-nowrap transition-all duration-140 ease-standard ${stretch ? "flex-1" : ""} ${styles.item} ${
              isActive
                ? "bg-surface text-text-primary shadow-xs"
                : "bg-transparent text-text-tertiary hover:text-text-secondary"
            }`}
          >
            {Icon && <Icon size={14} strokeWidth={1.75} />}
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
