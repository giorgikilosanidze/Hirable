import Button from "@/components/ui/Button";
import type { Task } from "./types";

type Props = {
  task: Task;
  onAction: () => void;
};

export default function TaskItem({ task, onAction }: Props) {
  const Icon = task.icon;

  return (
    <div
      className={`flex flex-wrap items-center gap-[13px] rounded-[12px] border bg-surface px-[15px] py-[13px] shadow-xs transition-all duration-140 ease-standard hover:border-border-default hover:shadow-md ${
        task.accent ? "border-accent-border" : "border-border-subtle"
      }`}
    >
      <span
        className={`inline-flex size-8 flex-none items-center justify-center rounded-[9px] ${
          task.accent
            ? "bg-accent-subtle text-accent-text"
            : "bg-subtle text-text-tertiary"
        }`}
      >
        <Icon size={16} strokeWidth={1.75} />
      </span>

      {/* On mobile the text claims the full row so the chip and button
          wrap underneath instead of squeezing the title. */}
      <span className="min-w-0 flex-1 basis-[calc(100%-46px)] md:basis-0">
        <span className="block text-[14px] font-medium tracking-[-.008em] text-text-primary">
          {task.title}
        </span>
        <span className="mt-0.5 block text-[12.5px] leading-[1.45] text-text-tertiary">
          {task.meta}
        </span>
      </span>

      <span
        className={`inline-flex h-[22px] flex-none items-center rounded-sm px-2 font-mono text-[11px] font-medium whitespace-nowrap ${
          task.accent
            ? "bg-warning-subtle text-warning-text"
            : "bg-subtle text-text-tertiary"
        }`}
      >
        {task.due}
      </span>

      <Button
        variant={task.accent ? "primary" : "secondary"}
        size="appMd"
        onClick={onAction}
        className="ml-auto text-[13px] hover:brightness-[.96]"
      >
        {task.action}
      </Button>
    </div>
  );
}
