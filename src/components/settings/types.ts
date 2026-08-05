import type { LucideIcon } from "lucide-react";

export type SettingsTab = "resume" | "account" | "plan" | "data";

export type ResumeVersion = {
  date: string;
  name: string;
  note: string;
  current: boolean;
};

export type NotificationKey = "followup" | "digest" | "done" | "product";

export type NotificationSetting = {
  key: NotificationKey;
  title: string;
  desc: string;
  defaultOn: boolean;
};

export type StoredItem = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export type DangerKey = "analyses" | "account";

export type DangerAction = {
  key: DangerKey;
  title: string;
  desc: string;
  action: string;
  /** The account row gets the louder border. */
  loud?: boolean;
};

export type ConfirmCopy = {
  title: string;
  body: string;
  word: string;
  action: string;
};
