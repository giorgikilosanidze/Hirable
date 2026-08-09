"use client";

import { useState } from "react";
import {
  Briefcase,
  ClipboardType,
  FileUp,
  GraduationCap,
  Lock,
  Trash2,
} from "lucide-react";

type Props = {
  onFile: (file?: File) => void;
};

export default function UploadDropzone({ onFile }: Props) {
  const [dragging, setDragging] = useState(false);

  return (
    <div>
      <label
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          setDragging(false);
        }}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          onFile(event.dataTransfer?.files?.[0]);
        }}
        className={`flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-[16px] border-[1.5px] border-dashed px-6 py-[clamp(36px,6vw,56px)] text-center transition-all duration-160 ease-standard ${
          dragging ? "border-accent bg-accent-subtle" : "border-border-strong bg-surface"
        }`}
      >
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          onChange={(event) => onFile(event.target.files?.[0])}
          className="hidden"
        />
        <span className="mb-2 inline-flex size-[52px] animate-[hb-bob_3.4s_ease-in-out_infinite] items-center justify-center rounded-lg border border-border-subtle bg-surface shadow-sm">
          <FileUp size={23} strokeWidth={1.75} className="text-accent" />
        </span>
        <span className="text-[17px] font-semibold tracking-[-.02em] text-text-primary">
          {dragging ? "Drop it — we’ve got it" : "Drop your resume here"}
        </span>
        <span className="text-[14px] text-text-secondary">
          or <span className="font-medium text-accent-text">browse your files</span>
        </span>
        <span className="mt-2.5 font-mono text-[11px] tracking-[.04em] text-text-tertiary">
          PDF · DOCX · TXT — up to 10 MB
        </span>
      </label>

      <div className="my-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-border-subtle" />
        <span className="font-mono text-[10.5px] font-semibold tracking-[.09em] text-text-tertiary uppercase">
          or
        </span>
        <span className="h-px flex-1 bg-border-subtle" />
      </div>

      <div className="grid gap-2.5 [grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr))]">
        {[
          {
            icon: ClipboardType,
            title: "Paste resume text",
            hint: "No file handy",
          },
          {
            icon: Briefcase,
            title: "Import from LinkedIn",
            hint: "Pulls your public profile",
          },
        ].map((alternate) => {
          const Icon = alternate.icon;
          return (
            <button
              key={alternate.title}
              type="button"
              onClick={() => onFile()}
              className="flex cursor-pointer items-center gap-[11px] rounded-[12px] border border-border-default bg-surface px-4 py-[14px] text-left shadow-xs transition-all duration-140 ease-standard hover:border-border-strong hover:bg-subtle"
            >
              <span className="inline-flex size-[34px] flex-none items-center justify-center rounded-[9px] bg-subtle">
                <Icon size={16} strokeWidth={1.75} className="text-text-secondary" />
              </span>
              <span className="min-w-0">
                <span className="block text-[14px] font-medium text-text-primary">
                  {alternate.title}
                </span>
                <span className="mt-px block text-[12.5px] text-text-tertiary">
                  {alternate.hint}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-[22px] flex flex-wrap gap-4 text-[12.5px] text-text-tertiary">
        <span className="inline-flex items-center gap-1.5">
          <Lock size={13} strokeWidth={1.75} />
          Encrypted at rest, never sold
        </span>
        <span className="inline-flex items-center gap-1.5">
          <GraduationCap size={13} strokeWidth={1.75} />
          Never used to train public models
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Trash2 size={13} strokeWidth={1.75} />
          Delete in one click
        </span>
      </div>
    </div>
  );
}
