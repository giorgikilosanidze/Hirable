import { ClipboardType, FileX, Upload } from "lucide-react";
import Button from "@/components/ui/Button";
import { FAIL_REASONS } from "./constants";

type Props = {
  fileName: string;
  onRetry: () => void;
  onPaste: () => void;
  onManual: () => void;
};

/** `uploadOutcome: 'unreadable'` — a scan, or text saved as outlines. */
export default function UploadFailed({
  fileName,
  onRetry,
  onPaste,
  onManual,
}: Props) {
  return (
    <div className="animate-hb-rise">
      <div className="mb-[14px] rounded-lg border border-border-default bg-surface px-[22px] py-5 shadow-sm">
        <div className="flex flex-wrap items-start gap-[13px]">
          <span className="inline-flex size-10 flex-none items-center justify-center rounded-md bg-danger-subtle">
            <FileX size={19} strokeWidth={1.75} className="text-danger-text" />
          </span>
          <div className="min-w-0 flex-1 basis-[240px]">
            <div className="text-[16px] leading-[1.3] font-semibold tracking-[-.02em]">
              We could not read {fileName}
            </div>
            <p className="m-0 mt-[7px] max-w-[52ch] text-[14px] leading-[1.6] text-pretty text-text-secondary">
              The file opened, but there was no selectable text in it — usually a
              scan or an export made of images. Nothing was saved.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-[11px] border border-border-subtle bg-subtle px-4 py-[14px]">
          <div className="mb-[9px] font-mono text-[10px] font-semibold tracking-[.09em] text-text-tertiary uppercase">
            What usually fixes it
          </div>
          <div className="flex flex-col gap-[7px]">
            {FAIL_REASONS.map((reason) => (
              <div key={reason} className="flex items-start gap-[9px]">
                <span className="mt-[7px] size-[5px] flex-none rounded-full bg-border-strong" />
                <span className="text-[13.5px] leading-[1.55] text-text-secondary">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-[9px]">
          <Button size="md" onClick={onRetry} className="rounded-[11px] shadow-sm">
            <Upload size={16} strokeWidth={1.75} />
            Try another file
          </Button>
          <Button
            variant="secondary"
            size="md"
            onClick={onPaste}
            className="rounded-[11px]"
          >
            <ClipboardType size={16} strokeWidth={1.75} className="text-text-tertiary" />
            Paste the text instead
          </Button>
          <Button
            variant="ghost"
            size="md"
            onClick={onManual}
            className="rounded-[11px] px-[14px] text-[14px]"
          >
            Fill it in by hand
          </Button>
        </div>
      </div>

      <div className="max-w-[56ch] text-[13px] leading-[1.6] text-text-tertiary">
        Pasting the text works as well as a clean PDF — the parser reads plain text
        either way. Scanned resumes are the one case it cannot help with.
      </div>
    </div>
  );
}
