import type { LucideIcon } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
};

export type HeroBar = {
  label: string;
  value: string;
  color: string;
};

export type Step = {
  n: string;
  icon: LucideIcon;
  title: string;
  body: string;
};

export type Requirement = {
  met: boolean;
  requirement: string;
  evidence: string;
};

export type TrackerCard = {
  initials: string;
  role: string;
  company: string;
  score: string;
  scoreBg: string;
  scoreFg: string;
  when: string;
};

export type TrackerColumn = {
  name: string;
  count: string;
  color: string;
  cards: TrackerCard[];
};

export type Insight = {
  tag: string;
  before: string;
  after: string;
  freq: string;
};

export type Quote = {
  text: string;
  initials: string;
  name: string;
  role: string;
};

export type PricingPlan = {
  name: string;
  tagline: string;
  price: string;
  period?: string;
  features: { label: string; included: boolean }[];
  cta: string;
  featured: boolean;
};

export type Faq = {
  q: string;
  a: string;
};

export type FooterColumn = {
  title: string;
  links: string[];
};
