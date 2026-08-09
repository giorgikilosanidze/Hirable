"use client";

import { Clock } from "lucide-react";
import type { Application } from "./types";
import { matchBand } from "./utils";

type Props = {
  application: Application;
  showScore: boolean;
  dragging: boolean;
  onDragStart: () => void;
  onDragEnd: () => void;
  onOpen: () => void;
};

export default function BoardCard({
  application,
  showScore,
  dragging,
  onDragStart,
  onDragEnd,
  onOpen,
}: Props) {
  const band = matchBand(application.score);

  return (
    <div
      draggable
      onDragStart={(event) => {
        // The id travels on the event, so the drop never depends on
        // React having committed state from the dragstart.
        event.dataTransfer.setData("text/plain", application.id);
        event.dataTransfer.effectAllowed = "move";
        onDragStart();
      }}
      onDragEnd={onDragEnd}
      onClick={onOpen}
      className={`cursor-grab rounded-[11px] border border-border-subtle bg-surface p-3 shadow-xs transition-[box-shadow,border-color] duration-140 ease-standard hover:border-border-default hover:shadow-md ${
        dragging ? "opacity-45" : "opacity-100"
      }`}
    >
      <div className="mb-2.5 flex items-start gap-[9px]">
        <span className="inline-flex size-7 flex-none items-center justify-center rounded-[8px] bg-logo-bg text-[10.5px] font-semibold text-white">
          {application.initials}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[13.5px] leading-[1.35] font-medium tracking-[-.008em] text-text-primary">
            {application.role}
          </span>
          <span className="mt-0.5 block text-[12px] text-text-tertiary">
            {application.company}
          </span>
        </span>
        {showScore && (
          <span
            className={`inline-flex h-[21px] flex-none items-center rounded-sm border px-[7px] font-mono text-[11.5px] font-semibold ${band.chip}`}
          >
            {application.score}
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-[10.5px] whitespace-nowrap text-text-tertiary">
          {application.when}
        </span>
        {application.flag && (
          <span className="inline-flex h-[19px] items-center gap-1 rounded-[5px] bg-warning-subtle px-[7px] text-[11px] font-medium text-warning-text">
            <Clock size={10} strokeWidth={2} />
            {application.flag}
          </span>
        )}
      </div>
    </div>
  );
}
