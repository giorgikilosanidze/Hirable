import { Eye, FileText, Upload } from "lucide-react";
import Button from "@/components/ui/Button";
import { CARD_CLASS, CURRENT_RESUME, RESUME_VERSIONS } from "./constants";

export default function ResumeTab() {
  return (
    <div className="flex animate-hb-fade flex-col gap-4">
      <div className={`${CARD_CLASS} p-[18px]`}>
        <div className="flex flex-wrap items-start gap-[14px]">
          <span className="inline-flex size-[42px] flex-none items-center justify-center rounded-md bg-accent-subtle text-accent-text">
            <FileText size={19} strokeWidth={1.75} />
          </span>
          <div className="min-w-0 flex-1 basis-[200px]">
            <div className="text-[15px] font-semibold tracking-[-.015em]">
              {CURRENT_RESUME.name}
            </div>
            <div className="mt-[3px] text-[13px] text-text-tertiary">
              {CURRENT_RESUME.meta}
            </div>
          </div>
          <div className="flex flex-none flex-wrap gap-[7px]">
            <Button variant="secondary" size="appSm">
              <Eye size={14} strokeWidth={1.75} className="text-text-tertiary" />
              View parsed text
            </Button>
            <Button size="appSm">
              <Upload size={14} strokeWidth={1.75} />
              Replace
            </Button>
          </div>
        </div>
      </div>

      <div className={`${CARD_CLASS} overflow-hidden`}>
        <div className="border-b border-border-subtle px-[18px] py-[14px]">
          <div className="text-[14.5px] font-semibold tracking-[-.015em]">
            Version history
          </div>
          <div className="mt-[3px] text-[12.5px] text-text-tertiary">
            Each analysis keeps the version it was run against, so old scores stay
            honest.
          </div>
        </div>

        {RESUME_VERSIONS.map((version) => (
          <div
            key={version.date}
            className="flex items-center gap-3 border-b border-border-subtle px-[18px] py-[13px] last:border-b-0"
          >
            <span className="w-[72px] flex-none font-mono text-[11.5px] text-text-tertiary">
              {version.date}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13.5px] text-text-primary">
                {version.name}
              </span>
              <span className="mt-0.5 block text-[12px] text-text-tertiary">
                {version.note}
              </span>
            </span>
            {version.current ? (
              <span className="inline-flex h-[22px] flex-none items-center rounded-sm bg-success-subtle px-2 text-[11.5px] font-medium text-success-text">
                Current
              </span>
            ) : (
              <Button variant="secondary" size="appXs" className="text-text-secondary">
                Restore
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
