"use client";

import { useState } from "react";
import { Move } from "lucide-react";
import { STATUS_META } from "@/components/ui/constants";
import BoardCard from "./BoardCard";
import { COLUMNS, DRAG_HINT, NO_SEARCH_MATCH } from "./constants";
import type { Application, BoardStatus } from "./types";

type Props = {
  applications: Application[];
  showScores: boolean;
  searching: boolean;
  onMove: (id: string, status: BoardStatus) => void;
  onOpen: (id: string) => void;
};

/** Five lanes, drag-and-drop between them. Hidden below 900px. */
export default function TrackerBoard({
  applications,
  showScores,
  searching,
  onMove,
  onOpen,
}: Props) {
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [overColumn, setOverColumn] = useState<BoardStatus | null>(null);

  return (
    <div className="hidden min-w-0 flex-1 overflow-x-auto px-[clamp(20px,3vw,32px)] pb-10 md:block">
      <div className="flex min-w-min items-start gap-[14px]">
        {COLUMNS.map((column) => {
          const cards = applications.filter((a) => a.status === column.key);
          const isOver = overColumn === column.key;

          return (
            <div
              key={column.key}
              onDragOver={(event) => {
                event.preventDefault();
                setOverColumn(column.key);
              }}
              onDragLeave={(event) => {
                // Fires when crossing into a child too; ignore those.
                if (event.currentTarget.contains(event.relatedTarget as Node)) return;
                setOverColumn((current) =>
                  current === column.key ? null : current
                );
              }}
              onDrop={(event) => {
                event.preventDefault();
                const id = event.dataTransfer.getData("text/plain");
                if (id) onMove(id, column.key);
                setDraggingId(null);
                setOverColumn(null);
              }}
              className={`flex w-[262px] flex-none flex-col gap-[9px] rounded-lg border p-3 transition-all duration-140 ease-standard ${
                isOver ? "border-accent bg-accent-subtle" : "border-border-subtle bg-subtle"
              }`}
            >
              <div className="flex items-center gap-2 px-1 pt-0.5 pb-1">
                <span
                  className={`size-[7px] flex-none rounded-full ${STATUS_META[column.key].dot}`}
                />
                <span className="min-w-0 flex-1 text-[13.5px] font-semibold tracking-[-.01em] text-text-primary">
                  {column.name}
                </span>
                <span className="font-mono text-[11px] text-text-tertiary">
                  {cards.length}
                </span>
              </div>

              {cards.map((application) => (
                <BoardCard
                  key={application.id}
                  application={application}
                  showScore={showScores}
                  dragging={draggingId === application.id}
                  onDragStart={() => setDraggingId(application.id)}
                  onDragEnd={() => {
                    setDraggingId(null);
                    setOverColumn(null);
                  }}
                  onOpen={() => onOpen(application.id)}
                />
              ))}

              {cards.length === 0 && (
                <div className="rounded-[11px] border border-dashed border-border-strong px-3 py-[18px] text-center">
                  <div className="text-[12.5px] leading-[1.5] text-text-tertiary">
                    {searching ? NO_SEARCH_MATCH : column.emptyText}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-[14px] flex items-center gap-[7px] text-[12.5px] text-text-tertiary">
        <Move size={13} strokeWidth={1.75} />
        {DRAG_HINT}
      </div>
    </div>
  );
}
