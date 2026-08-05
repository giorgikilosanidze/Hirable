import { CalendarX, Clock, Send } from "lucide-react";
import { ANALYSES } from "@/components/analyses/constants";
import type {
  FirstRunStep,
  FollowUpKey,
  FollowUpThread,
  FollowUpTone,
  RecentAnalysis,
  Stat,
  Task,
} from "./types";

export const TODAY_LABEL = "Tuesday, 4 August";

/**
 * Derived rather than hardcoded so it can never contradict the list it
 * summarises. The prototype's literal "76" predates its own sample data,
 * which averages 72.
 */
const AVERAGE_SCORE = Math.round(
  ANALYSES.reduce((sum, a) => sum + a.score, 0) / ANALYSES.length
);

export const STATS: Stat[] = [
  { label: "Analyses run", value: "14", note: "this month", color: "text-text-primary" },
  { label: "Applications out", value: "6", note: "2 quiet", color: "text-text-primary" },
  { label: "In conversation", value: "3", note: "1 offer", color: "text-success-text" },
  {
    label: "Average score",
    value: String(AVERAGE_SCORE),
    note: "range 41–91",
    color: "text-accent-text",
  },
];

export const TASKS: Task[] = [
  {
    id: "vercel",
    icon: Clock,
    title: "Vercel offer needs an answer",
    meta: "Staff Product Designer · received yesterday",
    due: "Fri",
    action: "Open",
    accent: true,
  },
  {
    id: "ramp",
    icon: Send,
    title: "Ramp has been quiet for nine days",
    meta: "Product Designer, Growth · scored 64",
    due: "9d",
    action: "Draft follow-up",
    opens: "ramp",
  },
  {
    id: "webflow",
    icon: Send,
    title: "Webflow has been quiet for twelve days",
    meta: "Principal Designer · scored 67",
    due: "12d",
    action: "Draft follow-up",
    opens: "webflow",
  },
  {
    id: "figma",
    icon: CalendarX,
    title: "Figma posting closes Saturday",
    meta: "Design Technologist · saved, scored 74, not applied",
    due: "5d",
    action: "Apply",
  },
];

export const RECENT_ANALYSES: RecentAnalysis[] = [
  {
    initials: "Dm",
    role: "Senior Designer, Design Systems",
    company: "Datadog",
    score: 86,
    status: "saved",
    when: "Yesterday",
  },
  {
    initials: "Ln",
    role: "Design Systems Lead",
    company: "Linear",
    score: 91,
    status: "interviewing",
    when: "2d ago",
  },
  {
    initials: "St",
    role: "Senior Product Designer",
    company: "Stripe",
    score: 78,
    status: "applied",
    when: "3d ago",
  },
  {
    initials: "Fg",
    role: "Design Technologist",
    company: "Figma",
    score: 74,
    status: "saved",
    when: "4d ago",
  },
  {
    initials: "Sn",
    role: "Design Systems Engineer",
    company: "Sentry",
    score: 80,
    status: "saved",
    when: "6d ago",
  },
];

export const RESUME_SUMMARY = {
  score: 74,
  file: "Alex-Chen-2026.pdf",
  note: "Average score across 14 analyses",
  advice:
    "Seven edits would raise this to 83. Four are wording, three add things you already did.",
};

export const WORTH_REMEMBERING =
  "A score measures the overlap between your resume and one posting. It does not know who read it, who referred you, or how many people applied on Monday morning.";

export const FIRST_RUN_STEPS: FirstRunStep[] = [
  {
    num: "1",
    text: "Paste the description. Hirable pulls out every requirement it can find.",
  },
  {
    num: "2",
    text: "You get a score, the requirements you meet, and the ones you do not.",
  },
  {
    num: "3",
    text: "Keep the job on your board, or walk away — a low score is a useful answer.",
  },
];

export const FOLLOW_UP_TONES: { key: FollowUpTone; label: string }[] = [
  { key: "direct", label: "Direct" },
  { key: "warm", label: "Warm" },
  { key: "brief", label: "Brief" },
];

export const FOLLOW_UP_THREADS: Record<FollowUpKey, FollowUpThread> = {
  ramp: {
    role: "Product Designer, Growth",
    company: "Ramp",
    initials: "Rm",
    context: "Applied 9 days ago · scored 64 · no reply",
    subject: "Following up — Product Designer, Growth",
    bodies: {
      direct:
        "Hi,\n\nI applied for the Product Designer, Growth role on 26 July and wanted to check whether the search is still open.\n\nSince applying I read through your changelog on spend controls, and the onboarding rebuild I led at Kettle is the closest thing in my work to what that team is doing: activation went from 31% to 48% in a quarter, measured, not estimated.\n\nHappy to send anything that would help, or to step aside if the role is filled.\n\nAlex Chen",
      warm: "Hi,\n\nI applied for the Product Designer, Growth role a little over a week ago and I am still very interested.\n\nThe part of my work that maps most closely is the onboarding rebuild at Kettle — activation moved from 31% to 48% in a quarter, and most of that came from cutting steps rather than adding persuasion. It is the kind of problem I would like to keep working on.\n\nIf the search is still open I would welcome a conversation. If it is not, no hard feelings, and thank you for reading.\n\nAlex Chen",
      brief:
        "Hi,\n\nChecking in on my application for Product Designer, Growth from 26 July — is the search still open?\n\nOne thing I did not include: the onboarding rebuild at Kettle lifted activation from 31% to 48% in a quarter.\n\nThanks,\nAlex Chen",
    },
  },
  webflow: {
    role: "Principal Designer",
    company: "Webflow",
    initials: "Wb",
    context: "Applied 12 days ago · scored 67 · no reply",
    subject: "Following up — Principal Designer",
    bodies: {
      direct:
        "Hi,\n\nI applied for the Principal Designer role on 23 July. Twelve days is long enough that I would rather ask than guess: is the role still open?\n\nThe posting asks for influence beyond a single team. The clearest example in my work is the Modo design system, which three product teams adopted — 12% to 94% component coverage — and which cut design QA from five days to one.\n\nIf the level is not right, I would still rather hear that than nothing.\n\nAlex Chen",
      warm: "Hi,\n\nI applied for the Principal Designer role about two weeks ago and wanted to follow up once, then leave it be.\n\nWhat I would add: the Modo design system went from 12% to 94% adoption across three teams, and the part I am proudest of is that it happened without freezing product work for a quarter. That balance seems close to what the posting is describing.\n\nEither way, thank you for the time it takes to read these.\n\nAlex Chen",
      brief:
        "Hi,\n\nFollowing up on my Principal Designer application from 23 July — is it still open?\n\nShort version of my case: Modo design system, 12% to 94% adoption across three teams, design QA cut from five days to one.\n\nThanks,\nAlex Chen",
    },
  },
};

export const FOLLOW_UP_CAVEAT =
  "A follow-up rarely changes a no. It does sometimes reach a hiring manager who never saw the first one. Send it once, then let it go.";

export const RECENT_TABLE_COLUMNS =
  "grid grid-cols-[50px_minmax(0,2.1fr)_minmax(0,1.15fr)_124px_96px] gap-3";

/** Two-column home layout; collapses to one below 900px. */
export const HOME_COLUMNS =
  "grid items-start gap-[18px] md:grid-cols-[minmax(0,1.7fr)_minmax(268px,.85fr)]";
