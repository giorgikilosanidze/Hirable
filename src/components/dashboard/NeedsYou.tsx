"use client";

import { useState } from "react";
import FollowUpDrawer from "./FollowUpDrawer";
import TaskItem from "./TaskItem";
import { TASKS } from "./constants";
import type { FollowUpKey } from "./types";

export default function NeedsYou() {
  const [openThread, setOpenThread] = useState<FollowUpKey | null>(null);

  return (
    <section>
      <div className="mb-[11px] flex items-center justify-between gap-3">
        <h2 className="m-0 text-[15px] font-semibold tracking-[-.015em]">
          Needs you this week
        </h2>
        <span className="font-mono text-[11px] text-text-tertiary">4 open</span>
      </div>

      <div className="flex flex-col gap-2">
        {TASKS.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onAction={() => task.opens && setOpenThread(task.opens)}
          />
        ))}
      </div>

      {openThread && (
        <FollowUpDrawer
          key={openThread}
          threadKey={openThread}
          onClose={() => setOpenThread(null)}
        />
      )}
    </section>
  );
}
