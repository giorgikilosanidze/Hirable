import {
  ClipboardList,
  Database,
  FileText,
  Mail,
  Target,
  User,
  Zap,
} from "lucide-react";
import type {
  ConfirmCopy,
  DangerAction,
  DangerKey,
  NotificationSetting,
  ResumeVersion,
  SettingsTab,
  StoredItem,
} from "./types";

export const SETTINGS_TABS: {
  key: SettingsTab;
  label: string;
  icon: typeof FileText;
}[] = [
  { key: "resume", label: "Resume", icon: FileText },
  { key: "account", label: "Account", icon: User },
  { key: "plan", label: "Plan", icon: Zap },
  { key: "data", label: "Your data", icon: Database },
];

export const CURRENT_RESUME = {
  name: "Alex-Chen-2026.pdf",
  meta: "248 KB · uploaded 3 days ago · 6 sections parsed, 22 bullets",
};

export const RESUME_VERSIONS: ResumeVersion[] = [
  {
    date: "1 Aug",
    name: "Alex-Chen-2026.pdf",
    note: "Added the token adoption number · used by 5 analyses",
    current: true,
  },
  {
    date: "14 Jul",
    name: "Alex-Chen-resume-v3.pdf",
    note: "Used by 7 analyses",
    current: false,
  },
  {
    date: "2 Jul",
    name: "resume-final-final.pdf",
    note: "First upload · used by 2 analyses",
    current: false,
  },
];

export const NOTIFICATIONS: NotificationSetting[] = [
  {
    key: "followup",
    title: "Follow-up reminders",
    desc: "When an application has been quiet for seven days.",
    defaultOn: true,
  },
  {
    key: "digest",
    title: "Weekly summary",
    desc: "Monday morning: what moved, what went quiet, what closes soon.",
    defaultOn: true,
  },
  {
    key: "done",
    title: "Analysis finished",
    desc: "Email me when a score is ready. Analyses take about 20 seconds, so most people leave this off.",
    defaultOn: false,
  },
  {
    key: "product",
    title: "Product updates",
    desc: "New features and changes to how scoring works.",
    defaultOn: false,
  },
];

export const STORED_ITEMS: StoredItem[] = [
  { icon: FileText, label: "Resume versions", value: "3 files" },
  { icon: Target, label: "Analyses and their scores", value: "14" },
  { icon: ClipboardList, label: "Job postings you pasted", value: "14 · kept 30 days" },
  { icon: Mail, label: "Cover letter drafts", value: "4" },
];

export const DANGER_ACTIONS: DangerAction[] = [
  {
    key: "analyses",
    title: "Delete all analyses",
    desc: "Keeps your resume and applications. Removes every score and the reasoning behind it.",
    action: "Delete analyses",
  },
  {
    key: "account",
    title: "Delete account",
    desc: "Everything above, plus your login. Removed within 24 hours.",
    action: "Delete account",
    loud: true,
  },
];

export const CONFIRM_COPY: Record<DangerKey, ConfirmCopy> = {
  analyses: {
    title: "Delete all 14 analyses?",
    body: "Scores, gap lists, and the cover letters drafted from them go with it. Your tracker keeps the applications but loses the reasoning behind them.",
    word: "delete analyses",
    action: "Delete analyses",
  },
  account: {
    title: "Delete your account?",
    body: "Your resume, 14 analyses, 6 applications, and 4 letters are removed within 24 hours. This cannot be undone, and there is no export afterwards — take one first if you want the record.",
    word: "delete account",
    action: "Delete account",
  },
};

export const SETTINGS_FIELD_CLASS =
  "h-[38px] w-full rounded-[9px] border border-border-default bg-surface px-3 text-[14px] text-text-primary outline-none transition-all duration-140 ease-standard focus:border-accent focus:shadow-ring";

export const CARD_CLASS =
  "rounded-lg border border-border-subtle bg-surface shadow-sm";
