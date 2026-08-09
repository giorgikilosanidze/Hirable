"use client";

import Button from "@/components/ui/Button";
import { CARD_CLASS, RAIL_OVERLINE_CLASS, VERSIONS } from "./constants";
import type { Version } from "./types";

type Props = {
  /** Only the current draft reports its edit state. */
  currentWhen: string;
  onRestore: (version: Version) => void;
};

export default function VersionList({ currentWhen, onRestore }: Props) {
  return (
    <div className={`${CARD_CLASS} p-[18px]`}>
      <div className={RAIL_OVERLINE_CLASS}>Versions</div>
      <div className="flex flex-col gap-0.5">
        {VERSIONS.map((version) => {
          const isCurrent = !version.restore;
          return (
            <div
              key={version.id}
              className={`flex items-center gap-2.5 rounded-[9px] px-2 py-[9px] transition-colors duration-140 ease-standard ${
                isCurrent ? "bg-accent-subtle" : "bg-transparent hover:bg-subtle"
              }`}
            >
              <span
                className={`size-[7px] flex-none rounded-full ${
                  isCurrent ? "bg-accent" : "bg-border-strong"
                }`}
              />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] text-text-primary">
                  {version.label}
                </span>
                <span className="mt-px block font-mono text-[10.5px] text-text-tertiary">
                  {isCurrent ? currentWhen : version.when}
                </span>
              </span>
              {version.restore && (
                <Button
                  variant="secondary"
                  size="appXs"
                  onClick={() => onRestore(version)}
                  className="h-[26px] px-[9px] text-[11.5px] text-text-secondary hover:border-accent hover:text-accent-text"
                >
                  Restore
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
