"use client";

import { useState } from "react";
import { ArrowRight, Pencil, Plus, Sparkle, TrendingUp } from "lucide-react";
import AiDiamond from "@/components/ui/AiDiamond";
import Button from "@/components/ui/Button";
import SkillChip from "./SkillChip";
import {
  MEASURED_OUTCOMES,
  PANEL_CLASS,
  PARSED_PROFILE,
  PARSED_ROLES,
  REVIEW_FIELD_CLASS,
  STEP_EYEBROW_CLASS,
  STEP_HEADING_CLASS,
} from "./constants";
import { buildSkills } from "./utils";

type Props = {
  fileName: string;
  showConfidence: boolean;
  onSave: () => void;
  onReupload: () => void;
};

export default function ReviewStep({
  fileName,
  showConfidence,
  onSave,
  onReupload,
}: Props) {
  const [profile, setProfile] = useState(PARSED_PROFILE);
  const [added, setAdded] = useState<string[]>([]);
  const [removed, setRemoved] = useState<string[]>([]);
  const [draftSkill, setDraftSkill] = useState("");

  const skills = buildSkills(added, removed);

  const setField = (key: keyof typeof PARSED_PROFILE, value: string) =>
    setProfile((current) => ({ ...current, [key]: value }));

  const addSkill = () => {
    const value = draftSkill.trim();
    if (!value) return;
    setAdded((current) => [...current, value]);
    setRemoved((current) => current.filter((label) => label !== value));
    setDraftSkill("");
  };

  return (
    <div className="animate-hb-rise">
      <div className={STEP_EYEBROW_CLASS}>Step 3 of 4</div>
      <h1 className={STEP_HEADING_CLASS}>
        Here&rsquo;s what we read. Fix anything that&rsquo;s off.
      </h1>
      <p className="m-0 mb-[26px] max-w-[600px] text-[16px] leading-[1.6] text-pretty text-text-secondary">
        Everything below came out of your file. Corrections here improve every score
        you get later, so it&rsquo;s worth thirty seconds.
      </p>

      <div className="mb-4 flex flex-wrap items-center gap-4 rounded-lg border border-ai-border bg-ai-surface px-5 py-4">
        <span className="inline-flex min-w-[200px] flex-1 items-center gap-[9px]">
          <AiDiamond />
          <span className="font-mono text-[11px] font-semibold tracking-[.08em] text-ai-text uppercase">
            Parsed by Hirable · 4.2s · confidence high
          </span>
        </span>
        <span className="font-mono text-[11.5px] text-text-tertiary">{fileName}</span>
      </div>

      <div className="mb-[14px] grid gap-[14px] [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]">
        <div className={PANEL_CLASS}>
          <div className="mb-4 font-mono text-[10.5px] font-semibold tracking-[.09em] text-text-tertiary uppercase">
            Identity
          </div>
          <div className="flex flex-col gap-[13px]">
            <div>
              <label
                htmlFor="parsed-name"
                className="mb-[5px] block text-[12.5px] font-medium text-text-secondary"
              >
                Name
              </label>
              <input
                id="parsed-name"
                type="text"
                value={profile.name}
                onChange={(event) => setField("name", event.target.value)}
                className={REVIEW_FIELD_CLASS}
              />
            </div>
            <div>
              <label
                htmlFor="parsed-headline"
                className="mb-[5px] block text-[12.5px] font-medium text-text-secondary"
              >
                Headline
              </label>
              <input
                id="parsed-headline"
                type="text"
                value={profile.headline}
                onChange={(event) => setField("headline", event.target.value)}
                className={REVIEW_FIELD_CLASS}
              />
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label
                  htmlFor="parsed-location"
                  className="mb-[5px] block text-[12.5px] font-medium text-text-secondary"
                >
                  Location
                </label>
                <input
                  id="parsed-location"
                  type="text"
                  value={profile.location}
                  onChange={(event) => setField("location", event.target.value)}
                  className={REVIEW_FIELD_CLASS}
                />
              </div>
              <div>
                <label
                  htmlFor="parsed-years"
                  className="mb-[5px] block text-[12.5px] font-medium text-text-secondary"
                >
                  Years of experience
                </label>
                <input
                  id="parsed-years"
                  type="text"
                  value={profile.years}
                  onChange={(event) => setField("years", event.target.value)}
                  className={`${REVIEW_FIELD_CLASS} font-mono text-[14px]`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={PANEL_CLASS}>
          <div className="mb-4 flex items-baseline justify-between gap-3">
            <div className="font-mono text-[10.5px] font-semibold tracking-[.09em] text-text-tertiary uppercase">
              Experience
            </div>
            <span className="font-mono text-[11px] text-text-tertiary">
              4 roles · 9 yrs
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            {PARSED_ROLES.map((role) => (
              <div
                key={role.title}
                className="flex items-start gap-[11px] border-b border-border-subtle py-2.5"
              >
                <span className="inline-flex size-8 flex-none items-center justify-center rounded-[9px] bg-logo-bg text-[11.5px] font-semibold text-white">
                  {role.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[14px] font-medium tracking-[-.01em] text-text-primary">
                    {role.title}
                  </span>
                  <span className="mt-0.5 block text-[12.5px] text-text-tertiary">
                    {role.meta}
                  </span>
                  <span className="mt-1.5 inline-flex items-center gap-[5px] font-mono text-[10.5px] text-accent-text">
                    <Sparkle size={11} strokeWidth={1.75} />
                    {role.found}
                  </span>
                </span>
                <button
                  type="button"
                  aria-label={`Edit ${role.title}`}
                  className="inline-flex size-7 flex-none cursor-pointer items-center justify-center rounded-[8px] border-none bg-transparent text-text-tertiary hover:bg-subtle hover:text-text-primary"
                >
                  <Pencil size={14} strokeWidth={1.75} />
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-3 inline-flex h-[34px] cursor-pointer items-center gap-[7px] rounded-[9px] border border-dashed border-border-strong bg-transparent px-3 text-[13px] font-medium text-text-secondary transition-all duration-140 ease-standard hover:border-accent hover:bg-accent-subtle hover:text-accent-text"
          >
            <Plus size={14} strokeWidth={1.75} />
            Add a role we missed
          </button>
        </div>
      </div>

      <div className={`${PANEL_CLASS} mb-[14px]`}>
        <div className="mb-1.5 flex items-baseline justify-between gap-3">
          <div className="font-mono text-[10.5px] font-semibold tracking-[.09em] text-text-tertiary uppercase">
            Skills
          </div>
          <span className="font-mono text-[11px] text-text-tertiary">
            {skills.length} kept
          </span>
        </div>
        <div className="mb-[14px] text-[13px] text-text-tertiary">
          {showConfidence
            ? "Solid chips came straight from your file. Dashed ones we inferred — remove anything you would not defend in an interview."
            : "Remove anything you would not defend in an interview."}
        </div>
        <div className="flex flex-wrap gap-[7px]">
          {skills.map((skill) => (
            <SkillChip
              key={skill.label}
              label={skill.label}
              origin={skill.origin}
              showConfidence={showConfidence}
              onRemove={() =>
                setRemoved((current) => [...current, skill.label])
              }
            />
          ))}
          <input
            type="text"
            value={draftSkill}
            onChange={(event) => setDraftSkill(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                addSkill();
              }
            }}
            placeholder="Add a skill + Enter"
            aria-label="Add a skill"
            className="h-[30px] w-[170px] rounded-full border border-dashed border-border-strong bg-transparent px-3 text-[13px] text-text-primary outline-none transition-all duration-140 ease-standard placeholder:text-text-tertiary focus:border-solid focus:border-accent focus:shadow-ring"
          />
        </div>
      </div>

      <div className={PANEL_CLASS}>
        <div className="mb-1.5 font-mono text-[10.5px] font-semibold tracking-[.09em] text-text-tertiary uppercase">
          Measurable outcomes we found
        </div>
        <div className="mb-[14px] text-[13px] text-text-tertiary">
          These are what cover letters get built from. Numbers beat adjectives every
          time.
        </div>
        <div className="flex flex-col gap-[9px]">
          {MEASURED_OUTCOMES.map((outcome) => (
            <div
              key={outcome.src}
              className="flex items-start gap-[11px] rounded-md border border-border-subtle bg-subtle px-[14px] py-3"
            >
              <TrendingUp
                size={15}
                strokeWidth={1.75}
                className="mt-0.5 flex-none text-success"
              />
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] leading-[1.5] text-text-primary">
                  {outcome.text}
                </span>
                <span className="mt-1 block font-mono text-[11px] text-text-tertiary">
                  {outcome.src}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[26px] flex flex-wrap items-center gap-3">
        <Button size="lg" onClick={onSave} className="shadow-sm">
          Looks right — save profile
          <ArrowRight size={17} strokeWidth={1.75} />
        </Button>
        <Button
          variant="secondary"
          size="lg"
          onClick={onReupload}
          className="px-[18px] text-[15px] text-text-secondary"
        >
          Upload a different file
        </Button>
      </div>
    </div>
  );
}
