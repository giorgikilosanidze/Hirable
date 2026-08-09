import { Columns3, List } from "lucide-react";
import type { Application, ColumnDef, TrackerView } from "./types";

export const RESUME_FILE = "alex-chen-resume.pdf";

export const COLUMNS: ColumnDef[] = [
  {
    key: "saved",
    name: "Saved",
    emptyText: "Nothing saved. Analyse a job and keep the ones worth an evening.",
  },
  {
    key: "applied",
    name: "Applied",
    emptyText: "Drop a card here when you send the application.",
  },
  {
    key: "interviewing",
    name: "Interviewing",
    emptyText: "No conversations open yet.",
  },
  {
    key: "offer",
    name: "Offer",
    emptyText: "Empty for now — the point of everything left of here.",
  },
  {
    key: "closed",
    name: "Closed",
    emptyText: "Rejections and withdrawn roles land here.",
  },
];

export const VIEW_TABS: { key: TrackerView; label: string; icon: typeof List }[] = [
  { key: "board", label: "Board", icon: Columns3 },
  { key: "list", label: "List", icon: List },
];

export const APPLICATIONS: Application[] = [
  {
    id: "a1",
    initials: "Ln",
    role: "Design Systems Lead",
    company: "Linear",
    score: 91,
    status: "interviewing",
    when: "Round 2 · Thu",
    summary:
      "The strongest fit on your board. Everything they ask for is documented in your Modo work, including the adoption number.",
    gaps: ["Rust exposure never mentioned — low weight, appears once"],
    timeline: [
      { label: "Round 2 scheduled", when: "Thu 10:00 · with the design director" },
      { label: "Recruiter screen passed", when: "6 days ago" },
      { label: "Applied", when: "11 days ago" },
      { label: "Analysed — 91", when: "11 days ago" },
    ],
  },
  {
    id: "a2",
    initials: "Vc",
    role: "Staff Product Designer",
    company: "Vercel",
    score: 88,
    status: "offer",
    when: "Reply by Fri",
    summary:
      "Offer in hand. Your systems depth and the front-end fluency they asked about both landed.",
    gaps: [],
    timeline: [
      { label: "Offer received", when: "Yesterday · reply by Friday" },
      { label: "Final panel", when: "8 days ago" },
      { label: "Applied", when: "3 weeks ago" },
      { label: "Analysed — 88", when: "3 weeks ago" },
    ],
  },
  {
    id: "a3",
    initials: "St",
    role: "Senior Product Designer",
    company: "Stripe",
    score: 78,
    status: "applied",
    when: "2d ago",
    summary:
      "Good match held back by the payments gap, which you named directly in the letter. Worth a follow-up if Friday passes quietly.",
    gaps: [
      "No payments or fintech experience",
      "Experimentation never named as a method",
    ],
    timeline: [
      { label: "Applied with tailored letter", when: "2 days ago" },
      { label: "Cover letter drafted", when: "2 days ago" },
      { label: "Analysed — 78", when: "3 days ago" },
    ],
  },
  {
    id: "a4",
    initials: "Rm",
    role: "Product Designer, Growth",
    company: "Ramp",
    score: 64,
    status: "applied",
    when: "9d ago",
    flag: "Quiet 9d",
    summary:
      "A growth-shaped role scored against a systems-shaped resume. You applied anyway — a follow-up is the only lever left.",
    gaps: [
      "No experimentation or growth metrics",
      "Consumer-scale portfolio work missing",
    ],
    timeline: [
      { label: "Applied", when: "9 days ago" },
      { label: "Analysed — 64", when: "10 days ago" },
    ],
  },
  {
    id: "a5",
    initials: "Nt",
    role: "Product Designer, Platform",
    company: "Notion",
    score: 82,
    status: "interviewing",
    when: "Portfolio review",
    summary:
      "They asked for the system walkthrough specifically. Prepare the token adoption story with the QA numbers.",
    gaps: ["Public writing or talks not evidenced"],
    timeline: [
      { label: "Portfolio review booked", when: "Next Tue" },
      { label: "Recruiter screen passed", when: "4 days ago" },
      { label: "Applied", when: "2 weeks ago" },
      { label: "Analysed — 82", when: "2 weeks ago" },
    ],
  },
  {
    id: "a6",
    initials: "Fg",
    role: "Design Technologist",
    company: "Figma",
    score: 74,
    status: "saved",
    when: "Closes in 5d",
    flag: "Closing soon",
    summary:
      "A hybrid role that rewards the HTML/CSS half of your resume. Not applied yet, and the posting closes in five days.",
    gaps: ["React component authoring not evidenced"],
    timeline: [
      { label: "Saved from analysis", when: "4 days ago" },
      { label: "Analysed — 74", when: "4 days ago" },
    ],
  },
  {
    id: "a7",
    initials: "Dm",
    role: "Senior Designer, Design Systems",
    company: "Datadog",
    score: 86,
    status: "saved",
    when: "Saved 1d ago",
    summary:
      "Nearly the same posting as Linear, scored two points lower only on domain familiarity. Worth applying this week.",
    gaps: ["Observability domain unfamiliar"],
    timeline: [
      { label: "Saved from analysis", when: "Yesterday" },
      { label: "Analysed — 86", when: "Yesterday" },
    ],
  },
  {
    id: "a8",
    initials: "Ar",
    role: "Product Designer",
    company: "Arc",
    score: 69,
    status: "applied",
    when: "5d ago",
    summary:
      "Middling fit — a consumer product asking for consumer instincts. The letter leaned on craft rather than domain.",
    gaps: ["Consumer product experience thin", "Motion design not evidenced"],
    timeline: [
      { label: "Applied", when: "5 days ago" },
      { label: "Analysed — 69", when: "6 days ago" },
    ],
  },
  {
    id: "a9",
    initials: "Rt",
    role: "Staff iOS Engineer",
    company: "Retool",
    score: 41,
    status: "closed",
    when: "3w ago",
    summary:
      "Scored 41 and you applied anyway. This is the case the score was built to talk you out of.",
    gaps: ["Not an engineering resume"],
    timeline: [
      { label: "Rejected", when: "3 weeks ago · form response" },
      { label: "Applied", when: "4 weeks ago" },
      { label: "Analysed — 41", when: "4 weeks ago" },
    ],
  },
  {
    id: "a10",
    initials: "Cb",
    role: "Design Manager",
    company: "Cabin",
    score: 58,
    status: "closed",
    when: "2w ago",
    summary:
      "They wanted three years of direct management. You have lead scope without headcount — an honest miss.",
    gaps: ["No direct reports", "Hiring experience absent"],
    timeline: [
      { label: "Rejected", when: "2 weeks ago · after screen" },
      { label: "Recruiter screen", when: "3 weeks ago" },
      { label: "Applied", when: "3 weeks ago" },
    ],
  },
  {
    id: "a11",
    initials: "Bl",
    role: "Senior Product Designer",
    company: "Blend",
    score: 72,
    status: "closed",
    when: "4w ago",
    summary:
      "Role was filled internally before your application was read. Nothing in the score to act on.",
    gaps: [],
    timeline: [
      { label: "Closed — filled internally", when: "4 weeks ago" },
      { label: "Applied", when: "5 weeks ago" },
    ],
  },
  {
    id: "a12",
    initials: "Sn",
    role: "Design Systems Engineer",
    company: "Sentry",
    score: 80,
    status: "saved",
    when: "Saved 6d ago",
    summary:
      "Engineering-titled but design-scoped. Your HTML/CSS and token work carry this one.",
    gaps: ["TypeScript depth unclear"],
    timeline: [
      { label: "Saved from analysis", when: "6 days ago" },
      { label: "Analysed — 80", when: "6 days ago" },
    ],
  },
  {
    id: "a13",
    initials: "Wb",
    role: "Principal Designer",
    company: "Webflow",
    score: 67,
    status: "applied",
    when: "12d ago",
    flag: "Quiet 12d",
    summary:
      "A level above your documented scope. Applied as a stretch — treat silence as information rather than a verdict.",
    gaps: [
      "Principal-level org influence not evidenced",
      "No public design writing",
    ],
    timeline: [
      { label: "Applied", when: "12 days ago" },
      { label: "Analysed — 67", when: "13 days ago" },
    ],
  },
];

/** Stats that don't move when a card changes lane. */
export const STATIC_STATS = {
  reachedHuman: { value: "38%", note: "5 of 13" },
  followUps: { value: "2", note: "quiet 9d+" },
};

export const NO_SEARCH_MATCH = "Nothing here matches your search.";

export const DRAG_HINT = "Drag a card between columns to change its status.";

export const CARD_CLASS =
  "rounded-lg border border-border-subtle bg-surface shadow-sm";

export const DRAWER_OVERLINE_CLASS =
  "mb-[9px] font-mono text-[10px] font-semibold tracking-[.09em] text-text-tertiary uppercase";

export const TABLE_COLUMNS =
  "grid grid-cols-[52px_minmax(0,2.2fr)_minmax(0,1.2fr)_132px_108px] gap-3";
