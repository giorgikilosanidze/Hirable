import type { LucideIcon } from "lucide-react";

export type NavItem = {
  key: string;
  label: string;
  /** Shown in the bottom nav, which has less room than the sidebar. */
  shortLabel?: string;
  icon: LucideIcon;
  count?: string;
  /** Absent until that screen is built — renders inert, as in the design. */
  href?: string;
};
