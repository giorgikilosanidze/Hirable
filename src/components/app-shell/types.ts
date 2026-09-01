import type { LucideIcon } from "lucide-react";

/** The slice of the signed-in user the shell and settings render. */
export type SessionUser = {
  name: string;
  email: string;
  /** Avatar from an OAuth provider. Null for email/password accounts. */
  image?: string | null;
};

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
