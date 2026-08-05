"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import {
  getServerTheme,
  getTheme,
  setTheme,
  subscribeToTheme,
} from "./utils";

type Props = {
  size?: number;
  iconSize?: number;
  className?: string;
};

export default function ThemeToggle({
  size = 34,
  iconSize = 16,
  className = "border-border-default text-text-secondary hover:border-border-strong hover:text-text-primary",
}: Props) {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, getServerTheme);

  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={label}
      aria-label={label}
      style={{ width: size, height: size }}
      className={`flex flex-none cursor-pointer items-center justify-center rounded-[9px] border bg-surface transition-colors duration-140 ease-standard hover:bg-subtle focus-visible:shadow-ring focus-visible:outline-none ${className}`}
    >
      <Icon size={iconSize} strokeWidth={1.75} />
    </button>
  );
}
