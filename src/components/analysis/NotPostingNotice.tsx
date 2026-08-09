import { FileQuestion, X } from "lucide-react";
import Button from "@/components/ui/Button";

type Props = {
  /** Short pastes get a different explanation than long non-postings. */
  isShort: boolean;
  onDismiss: () => void;
  onAnalyseAnyway: () => void;
};

export default function NotPostingNotice({
  isShort,
  onDismiss,
  onAnalyseAnyway,
}: Props) {
  return (
    <div className="mb-4 animate-hb-rise rounded-lg border border-border-default bg-surface px-5 py-[18px] shadow-sm">
      <div className="flex flex-wrap items-start gap-[13px]">
        <span className="inline-flex size-9 flex-none items-center justify-center rounded-md bg-warning-subtle">
          <FileQuestion size={17} strokeWidth={1.75} className="text-warning-text" />
        </span>
        <div className="min-w-0 flex-1 basis-[240px]">
          <div className="text-[15.5px] font-semibold tracking-[-.018em]">
            This does not read like a job posting
          </div>
          <p className="m-0 mt-1.5 max-w-[52ch] text-[13.5px] leading-[1.6] text-pretty text-text-secondary">
            {isShort
              ? "It is short and has no requirements or responsibilities section — more like a role title and a note."
              : "There are no requirements or responsibilities in it — it reads more like an About page or a press release."}{" "}
            A score needs requirements to score against, so this one would be
            confident and meaningless.
          </p>
        </div>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          className="inline-flex size-[30px] flex-none cursor-pointer items-center justify-center rounded-[8px] border border-border-subtle bg-surface text-text-tertiary hover:bg-subtle hover:text-text-primary"
        >
          <X size={15} strokeWidth={1.75} />
        </button>
      </div>

      <div className="mt-[15px] flex flex-wrap items-center gap-[9px]">
        <Button size="appMd" onClick={onDismiss} className="px-[14px]">
          Paste the full posting
        </Button>
        <Button
          variant="secondary"
          size="appMd"
          onClick={onAnalyseAnyway}
          className="px-[13px] text-[13px]"
        >
          Score it anyway
        </Button>
      </div>
    </div>
  );
}
