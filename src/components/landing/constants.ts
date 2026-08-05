import { ClipboardPaste, FileUp, Send } from "lucide-react";
import type {
  Faq,
  FooterColumn,
  HeroBar,
  Insight,
  NavLink,
  PricingPlan,
  Quote,
  Requirement,
  Step,
  TrackerColumn,
} from "./types";

/** Content width shared by every landing section. */
export const CONTENT_WIDTH = "mx-auto w-full max-w-[1180px] px-[clamp(20px,4vw,32px)]";

/** Vertical rhythm shared by the full-width marketing sections. */
export const SECTION_PADDING = "py-[clamp(56px,8vw,88px)]";

export const NAV_LINKS: NavLink[] = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const HERO_BARS: HeroBar[] = [
  { label: "Skills overlap", value: "86%", color: "var(--success)" },
  { label: "Experience level", value: "74%", color: "var(--accent)" },
  { label: "Domain fit", value: "81%", color: "var(--success)" },
  { label: "Keyword coverage", value: "58%", color: "var(--warning)" },
];

export const HERO_MISSING_KEYWORDS = [
  "Design tokens at scale",
  "Payments domain",
  "A/B testing",
];

export const COMPANIES = ["Stripe", "Linear", "Ramp", "Notion", "Vercel", "Figma"];

export const STEPS: Step[] = [
  {
    n: "1",
    icon: FileUp,
    title: "Upload your resume once",
    body: "PDF or DOCX. Hirable parses it into a structured profile — skills, seniority, domains, measurable outcomes — and keeps it. You never re-upload.",
  },
  {
    n: "2",
    icon: ClipboardPaste,
    title: "Paste any job description",
    body: "Straight from the job board. It extracts every requirement, compares them one by one against your profile, and scores the fit in about four seconds.",
  },
  {
    n: "3",
    icon: Send,
    title: "Send, then track",
    body: "Take the drafted cover letter, edit it, send it. The application lands on your board with the score and the posting attached.",
  },
];

export const MATCH_CLAIMS = [
  {
    lead: "Requirement-by-requirement",
    rest: " — 11 parsed, 8 covered, 3 gaps named in plain English.",
  },
  {
    lead: "Evidence on tap",
    rest: " — tap any matched skill to see the bullet that proves it.",
  },
  {
    lead: "Honest about stretch roles",
    rest: " — a 47 tells you to spend the hour elsewhere.",
  },
];

export const REQUIREMENTS: Requirement[] = [
  {
    met: true,
    requirement: "5+ years product design in a systems-heavy org",
    evidence: 'Matched: "Design Systems Lead, Modo — 4 yrs" + 3 yrs prior',
  },
  {
    met: true,
    requirement: "Owned a component library end to end",
    evidence: 'Matched: "Adoption 12% → 94% across 3 product teams"',
  },
  {
    met: true,
    requirement: "Strong Figma and prototyping craft",
    evidence: "Matched: listed under Tools, referenced in 2 projects",
  },
  {
    met: false,
    requirement: "Experience shipping in payments or fintech",
    evidence: "No evidence found — mentioned twice in the posting",
  },
  {
    met: false,
    requirement: "Ran A/B tests on design changes",
    evidence: "No evidence found — likely worth adding if true",
  },
];

export const TRACKER_COLUMNS: TrackerColumn[] = [
  {
    name: "Applied",
    count: "6",
    color: "var(--accent)",
    cards: [
      {
        initials: "St",
        role: "Senior Product Designer",
        company: "Stripe",
        score: "78",
        scoreBg: "var(--accent-subtle)",
        scoreFg: "var(--accent-text)",
        when: "2d ago",
      },
      {
        initials: "Rm",
        role: "Product Designer, Growth",
        company: "Ramp",
        score: "64",
        scoreBg: "var(--accent-subtle)",
        scoreFg: "var(--accent-text)",
        when: "5d ago",
      },
    ],
  },
  {
    name: "Interviewing",
    count: "2",
    color: "var(--warning)",
    cards: [
      {
        initials: "Ln",
        role: "Design Systems Lead",
        company: "Linear",
        score: "91",
        scoreBg: "var(--success-subtle)",
        scoreFg: "var(--success-text)",
        when: "Round 2",
      },
    ],
  },
  {
    name: "Offer",
    count: "1",
    color: "var(--success)",
    cards: [
      {
        initials: "Vc",
        role: "Staff Product Designer",
        company: "Vercel",
        score: "88",
        scoreBg: "var(--success-subtle)",
        scoreFg: "var(--success-text)",
        when: "Reply by Fri",
      },
    ],
  },
  {
    name: "Rejected",
    count: "4",
    color: "var(--slate-500)",
    cards: [
      {
        initials: "Nt",
        role: "Staff iOS Engineer",
        company: "Notion",
        score: "47",
        scoreBg: "var(--bg-subtle)",
        scoreFg: "var(--text-tertiary)",
        when: "3w ago",
      },
    ],
  },
];

export const INSIGHTS: Insight[] = [
  {
    tag: "Recurring gap",
    before: "Improved the onboarding flow.",
    after: "Rebuilt onboarding, lifting activation from 31% to 48% in one quarter.",
    freq: "9 of 14 posts ask for metrics",
  },
  {
    tag: "Missing skill",
    before: "—",
    after: 'Add "design tokens" explicitly — you clearly did this at Modo but never name it.',
    freq: "named in 11 of 14 posts",
  },
  {
    tag: "Dead weight",
    before: "Team player with strong communication skills.",
    after: "Cut this line. It costs you a bullet and matches nothing.",
    freq: "matched 0 requirements",
  },
];

export const INSIGHT_STATS = [
  { value: "14", label: "posts analysed", color: "#fff" },
  { value: "7", label: "recurring gaps", color: "#fff" },
  { value: "+11", label: "avg score lift", color: "var(--teal-500)" },
];

export const QUOTES: Quote[] = [
  {
    text: "The gap list is the part I didn't know I needed. Turns out I'd been leaving 'design tokens' off a resume that was entirely about design tokens.",
    initials: "AC",
    name: "Alex Chen",
    role: "Product Designer",
  },
  {
    text: "I used to spend an hour per cover letter. Now it is ten minutes of editing something that already knows my history.",
    initials: "DO",
    name: "Deji Okafor",
    role: "Backend Engineer",
  },
  {
    text: "The score being honest about long shots saved me more time than the writing did. A 42 means go do something else.",
    initials: "SR",
    name: "Sara Reyes",
    role: "Data Analyst",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Free",
    tagline: "Enough to know if it works for you",
    price: "$0",
    features: [
      { label: "5 job analyses per month", included: true },
      { label: "2 cover letter drafts", included: true },
      { label: "Unlimited tracker", included: true },
      { label: "Resume insights", included: false },
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Pro",
    tagline: "For an active search",
    price: "$14",
    period: "/ month",
    features: [
      { label: "Unlimited analyses & letters", included: true },
      { label: "Resume insights across saved posts", included: true },
      { label: "Multiple resume versions", included: true },
      { label: "Interview prep from the posting", included: true },
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
];

export const FAQS: Faq[] = [
  {
    q: "Does Hirable rewrite my resume for me?",
    a: "Not automatically. It suggests specific line edits based on patterns across the jobs you've saved, and you accept or dismiss each one. Your resume file is never silently changed.",
  },
  {
    q: "Will an ATS flag an AI-written cover letter?",
    a: "ATS systems scan for keywords and formatting, not authorship. Hirable writes in plain prose with the role’s own language, and you edit before sending — which is what makes it yours.",
  },
  {
    q: "What happens to my resume data?",
    a: "It’s encrypted at rest and used only to score your jobs and draft your letters. It is never sold, never used to train a public model, and you can export or delete everything from Settings in one click.",
  },
  {
    q: "How accurate is the match score?",
    a: "It is a structured comparison, not a prediction of whether you’ll get hired. It tells you how well your documented experience lines up with what the posting asks for — and shows the evidence for every point.",
  },
  {
    q: "Can I keep more than one resume?",
    a: "On Pro, yes — keep a version per track (design, research, management) and Hirable scores each job against all of them, then tells you which one to send.",
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: ["Match analysis", "Cover letters", "Tracker", "Resume insights", "Pricing"],
  },
  { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Data handling", "Security"] },
];
