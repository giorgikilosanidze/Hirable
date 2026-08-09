import { CornerDownRight } from "lucide-react";
import AiDiamond from "@/components/ui/AiDiamond";
import { GROUNDING_NOTE, SOURCES } from "./constants";

export default function GroundedIn() {
  return (
    <div className="rounded-lg border border-ai-border bg-ai-surface p-[18px]">
      <div className="mb-2.5 flex items-center gap-2">
        <AiDiamond size={8} />
        <span className="font-mono text-[10.5px] font-semibold tracking-[.08em] text-ai-text uppercase">
          Grounded in
        </span>
      </div>

      <div className="flex flex-col gap-[7px]">
        {SOURCES.map((source) => (
          <div key={source.src} className="flex items-start gap-[9px]">
            <CornerDownRight
              size={13}
              strokeWidth={1.75}
              className="mt-[3px] flex-none text-ai-text"
            />
            <span className="min-w-0">
              <span className="block text-[13px] leading-[1.5] text-text-secondary">
                {source.text}
              </span>
              <span className="mt-0.5 block font-mono text-[10.5px] text-text-tertiary">
                {source.src}
              </span>
            </span>
          </div>
        ))}
      </div>

      <p className="m-0 mt-3 text-[12px] leading-[1.55] text-text-tertiary">
        {GROUNDING_NOTE}
      </p>
    </div>
  );
}
