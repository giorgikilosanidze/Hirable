import type { Analysis, AnalysesSort, ScoreBand } from "./types";

export const ANALYSES: Analysis[] = [
  { initials: "Ln", role: "Design Systems Lead", company: "Linear", score: 91, met: "13 of 14", status: "interviewing", when: "2d ago", day: 2 },
  { initials: "Vc", role: "Staff Product Designer", company: "Vercel", score: 88, met: "12 of 13", status: "offer", when: "3w ago", day: 21 },
  { initials: "Dm", role: "Senior Designer, Design Systems", company: "Datadog", score: 86, met: "12 of 14", status: "saved", when: "Yesterday", day: 1 },
  { initials: "Nt", role: "Product Designer, Platform", company: "Notion", score: 82, met: "11 of 14", status: "interviewing", when: "2w ago", day: 14 },
  { initials: "Sn", role: "Design Systems Engineer", company: "Sentry", score: 80, met: "10 of 13", status: "saved", when: "6d ago", day: 6 },
  { initials: "St", role: "Senior Product Designer", company: "Stripe", score: 78, met: "11 of 14", status: "applied", when: "3d ago", day: 3 },
  { initials: "Fg", role: "Design Technologist", company: "Figma", score: 74, met: "10 of 14", status: "saved", when: "4d ago", day: 4 },
  { initials: "Bl", role: "Senior Product Designer", company: "Blend", score: 72, met: "9 of 13", status: "closed", when: "5w ago", day: 35 },
  { initials: "Ar", role: "Product Designer", company: "Arc", score: 69, met: "9 of 14", status: "applied", when: "6d ago", day: 6 },
  { initials: "Wb", role: "Principal Designer", company: "Webflow", score: 67, met: "8 of 14", status: "applied", when: "13d ago", day: 13 },
  { initials: "Rm", role: "Product Designer, Growth", company: "Ramp", score: 64, met: "8 of 15", status: "applied", when: "10d ago", day: 10 },
  { initials: "Cb", role: "Design Manager", company: "Cabin", score: 58, met: "7 of 14", status: "closed", when: "3w ago", day: 21 },
  { initials: "Ht", role: "Staff Designer, Platform", company: "Height", score: 55, met: "6 of 13", status: "none", when: "2w ago", day: 15 },
  { initials: "Rt", role: "Staff iOS Engineer", company: "Retool", score: 41, met: "4 of 16", status: "closed", when: "4w ago", day: 28 },
];

export const BAND_CHIPS: { key: ScoreBand; label: string }[] = [
  { key: "all", label: "All" },
  { key: "high", label: "85 and up" },
  { key: "mid", label: "70 – 84" },
  { key: "low", label: "Under 70" },
];

export const SORT_TABS: { key: AnalysesSort; label: string }[] = [
  { key: "score", label: "Score" },
  { key: "date", label: "Most recent" },
  { key: "company", label: "Company" },
];

/**
 * Below 1150px the Met and Run columns drop rather than squeezing role
 * and company. Below 900px the table becomes cards entirely.
 */
export const TABLE_COLUMNS =
  "grid gap-2.5 grid-cols-[46px_minmax(0,2.3fr)_minmax(0,1.25fr)_118px] min-[1150px]:grid-cols-[48px_minmax(0,2.2fr)_minmax(0,1.15fr)_92px_118px_86px]";

/** Met and Run only exist at the wide breakpoint. */
export const WIDE_ONLY = "hidden min-[1150px]:block";

export const RETENTION_NOTE =
  "Postings are kept for 30 days on the free plan. Scores stay.";
