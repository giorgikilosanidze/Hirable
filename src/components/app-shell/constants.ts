import {
  Columns3,
  FileText,
  LayoutDashboard,
  Mail,
  Settings,
  Target,
} from "lucide-react";
import type { NavItem } from "./types";

/**
 * The canonical six, per the design handoff. Tracker, Resume and Cover
 * letters have no href yet — those screens come in later sessions, and
 * the prototype leaves them inert rather than linking nowhere.
 */
export const NAV_ITEMS: NavItem[] = [
  { key: "home", label: "Home", icon: LayoutDashboard, href: "/dashboard" },
  { key: "analyses", label: "Analyses", icon: Target, count: "14", href: "/analyses" },
  { key: "tracker", label: "Tracker", icon: Columns3, count: "6" },
  { key: "resume", label: "Resume", icon: FileText },
  {
    key: "letters",
    label: "Cover letters",
    shortLabel: "Letters",
    icon: Mail,
    count: "4",
  },
  { key: "settings", label: "Settings", icon: Settings, href: "/settings" },
];

/** The bottom nav drops Resume to fit five even columns. */
export const BOTTOM_NAV_KEYS = ["home", "analyses", "tracker", "letters", "settings"];

export const MAIN_PADDING =
  "px-4 pt-4 pb-[92px] md:px-[clamp(20px,3vw,32px)] md:pt-[clamp(20px,3vw,30px)] md:pb-11";

export const USER = {
  name: "Alex Chen",
  initials: "AC",
  email: "alex.chen@gmail.com",
};
