import type { LucideIcon } from "lucide-react";
import type { ApplicationStatus } from "@/components/ui/types";

export type Task = {
  id: string;
  icon: LucideIcon;
  title: string;
  meta: string;
  due: string;
  action: string;
  /** The top task is accented — icon, due chip and button all shift. */
  accent?: boolean;
  /** Which follow-up thread this task opens, if any. */
  opens?: FollowUpKey;
};

export type RecentAnalysis = {
  initials: string;
  role: string;
  company: string;
  score: number;
  status: ApplicationStatus;
  when: string;
};

export type FollowUpKey = "ramp" | "webflow";

export type FollowUpTone = "direct" | "warm" | "brief";

export type FollowUpThread = {
  role: string;
  company: string;
  initials: string;
  context: string;
  subject: string;
  bodies: Record<FollowUpTone, string>;
};

export type FirstRunStep = {
  num: string;
  text: string;
};
