"use client";

import { Bookmark, Check, ExternalLink, Plus } from "lucide-react";
import Button from "@/components/ui/Button";
import { JOB } from "./constants";

type Props = {
  tracked: boolean;
  onToggleTracked: () => void;
};

export default function JobHeader({ tracked, onToggleTracked }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-border-subtle bg-nav px-[clamp(20px,3vw,32px)] py-[14px] backdrop-blur-[12px]">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center gap-[14px]">
        <span className="inline-flex size-10 flex-none items-center justify-center rounded-md bg-logo-bg text-[13px] font-semibold text-white">
          {JOB.initials}
        </span>
        <div className="min-w-[180px] flex-1">
          <div className="text-[16.5px] leading-[1.25] font-semibold tracking-[-.02em]">
            {JOB.role}
          </div>
          <div className="mt-0.5 text-[13px] text-text-tertiary">{JOB.meta}</div>
        </div>

        <div className="flex flex-none flex-wrap items-center gap-2">
          <Button
            variant="secondary"
            size="appIcon"
            aria-label="Save posting"
            className="text-text-secondary"
          >
            <Bookmark size={16} strokeWidth={1.75} />
          </Button>
          <Button
            variant="secondary"
            size="appIcon"
            aria-label="Open original posting"
            className="text-text-secondary"
          >
            <ExternalLink size={16} strokeWidth={1.75} />
          </Button>
          <Button
            size="appMd"
            onClick={onToggleTracked}
            className={
              tracked
                ? "border-success/30 bg-success-subtle px-[14px] text-[13.5px] text-success-text shadow-xs hover:border-success/30 hover:bg-success-subtle"
                : "px-[14px] text-[13.5px] shadow-xs"
            }
          >
            {tracked ? (
              <Check size={15} strokeWidth={1.75} />
            ) : (
              <Plus size={15} strokeWidth={1.75} />
            )}
            {tracked ? "On your board" : "Add to board"}
          </Button>
        </div>
      </div>
    </header>
  );
}
