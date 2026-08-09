"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import OptionChip from "./OptionChip";
import UrgencyOption from "./UrgencyOption";
import {
  DEFAULT_GOALS,
  FIELD_LABEL_CLASS,
  LEVELS,
  PANEL_CLASS,
  ROLE_SUGGESTIONS,
  STEP_EYEBROW_CLASS,
  STEP_HEADING_CLASS,
  URGENCIES,
  WORK_SETUPS,
} from "./constants";

type Props = {
  onNext: () => void;
};

export default function GoalsStep({ onNext }: Props) {
  const [role, setRole] = useState(DEFAULT_GOALS.role);
  const [level, setLevel] = useState(DEFAULT_GOALS.level);
  const [urgency, setUrgency] = useState(DEFAULT_GOALS.urgency);
  const [setups, setSetups] = useState<string[]>(DEFAULT_GOALS.setups);

  const roleFilled = role.trim().length > 1;

  const toggleSetup = (label: string) =>
    setSetups((current) =>
      current.includes(label)
        ? current.filter((s) => s !== label)
        : [...current, label]
    );

  return (
    <div className="animate-hb-rise">
      <div className={STEP_EYEBROW_CLASS}>Step 1 of 4</div>
      <h1 className={STEP_HEADING_CLASS}>What are you aiming at?</h1>
      <p className="m-0 mb-8 max-w-[560px] text-[16px] leading-[1.6] text-pretty text-text-secondary">
        Four answers. They set the bar every job you paste gets measured against —
        a staff role and an IC role read the same posting very differently.
      </p>

      <div className="flex flex-col gap-[14px]">
        <div className={PANEL_CLASS}>
          <label htmlFor="target-role" className={FIELD_LABEL_CLASS}>
            Target role
          </label>
          <input
            id="target-role"
            type="text"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            placeholder="e.g. Senior Product Designer"
            className="h-11 w-full rounded-md border border-border-default bg-surface px-[14px] text-[15px] text-text-primary outline-none transition-all duration-140 ease-standard placeholder:text-text-disabled focus:border-accent focus:shadow-ring"
          />
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {ROLE_SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => setRole(suggestion)}
                className="h-[26px] cursor-pointer rounded-full border border-border-subtle bg-subtle px-2.5 text-[12.5px] text-text-tertiary transition-all duration-140 ease-standard hover:border-accent-border hover:bg-accent-subtle hover:text-accent-text"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        <div className={PANEL_CLASS}>
          <div className="mb-1 block text-[13.5px] font-medium text-text-primary">
            Level you&rsquo;re targeting
          </div>
          <div className="mb-3 text-[13px] text-text-tertiary">
            Used to weight scope and years-of-experience requirements.
          </div>
          <div role="radiogroup" aria-label="Level" className="flex flex-wrap gap-2">
            {LEVELS.map((label, index) => (
              <OptionChip
                key={label}
                label={label}
                selected={level === index}
                onClick={() => setLevel(index)}
              />
            ))}
          </div>
        </div>

        <div className={PANEL_CLASS}>
          <div className="mb-1 block text-[13.5px] font-medium text-text-primary">
            Work setup you&rsquo;d accept
          </div>
          <div className="mb-3 text-[13px] text-text-tertiary">
            Pick any. Postings outside these get flagged, not hidden.
          </div>
          <div className="flex flex-wrap gap-2">
            {WORK_SETUPS.map((setup) => (
              <OptionChip
                key={setup.label}
                label={setup.label}
                icon={setup.icon}
                multi
                selected={setups.includes(setup.label)}
                onClick={() => toggleSetup(setup.label)}
              />
            ))}
          </div>
        </div>

        <div className={PANEL_CLASS}>
          <div className="mb-1 block text-[13.5px] font-medium text-text-primary">
            Where you are in the search
          </div>
          <div className="mb-3 text-[13px] text-text-tertiary">
            Sets how aggressively we suggest resume edits and follow-ups.
          </div>
          <div
            role="radiogroup"
            aria-label="Search urgency"
            className="flex flex-col gap-2"
          >
            {URGENCIES.map((option, index) => (
              <UrgencyOption
                key={option.label}
                label={option.label}
                hint={option.hint}
                selected={urgency === index}
                onClick={() => setUrgency(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[26px] flex flex-wrap items-center gap-3">
        <Button
          size="lg"
          disabled={!roleFilled}
          onClick={onNext}
          className={
            roleFilled
              ? "shadow-sm"
              : "cursor-not-allowed border-muted bg-muted text-text-disabled shadow-sm hover:border-muted hover:bg-muted"
          }
        >
          Continue to resume
          <ArrowRight size={17} strokeWidth={1.75} />
        </Button>
        <span className="text-[13px] text-text-tertiary">
          {roleFilled
            ? "You can change all of this in Settings later."
            : "Add a target role to continue."}
        </span>
      </div>
    </div>
  );
}
