import { STATUS_META } from "./constants";
import type { ApplicationStatus } from "./types";

type Props = {
  status: ApplicationStatus;
};

export default function StatusChip({ status }: Props) {
  const meta = STATUS_META[status];

  return (
    <span
      className={`inline-flex h-6 flex-none items-center gap-1.5 rounded-sm px-[9px] text-[12px] font-medium ${meta.chip}`}
    >
      <span className={`size-1.5 rounded-full ${meta.dot}`} />
      {meta.label}
    </span>
  );
}
