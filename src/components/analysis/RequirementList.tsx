"use client";

import { useState } from "react";
import SegmentedControl from "@/components/ui/SegmentedControl";
import RequirementRow from "./RequirementRow";
import {
  CARD_CLASS,
  REQUIREMENTS,
  REQUIREMENT_FOOTERS,
  REQUIREMENT_TABS,
} from "./constants";
import type { RequirementTab } from "./types";
import { filterRequirements } from "./utils";

export default function RequirementList() {
  const [tab, setTab] = useState<RequirementTab>("all");
  const [openIndex, setOpenIndex] = useState(3);

  const shown = filterRequirements(tab);

  return (
    <div className={`${CARD_CLASS} overflow-hidden`}>
      <div className="flex flex-wrap items-center gap-3 border-b border-border-subtle px-5 py-4">
        <div className="min-w-[160px] flex-1">
          <h2 className="m-0 text-[16px] font-semibold tracking-[-.02em]">
            Requirement by requirement
          </h2>
          <div className="mt-[3px] text-[12.5px] text-text-tertiary">
            Every line pulled from the posting, with the evidence we matched it to.
          </div>
        </div>
        <SegmentedControl
          items={REQUIREMENT_TABS}
          value={tab}
          onChange={setTab}
          size="sm"
          label="Filter requirements"
        />
      </div>

      <div>
        {shown.map((requirement) => {
          const index = REQUIREMENTS.indexOf(requirement);
          return (
            <RequirementRow
              key={requirement.req}
              requirement={requirement}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          );
        })}
      </div>

      <div className="border-t border-border-subtle bg-subtle px-5 py-[13px] font-mono text-[11px] text-text-tertiary">
        {REQUIREMENT_FOOTERS[tab]}
      </div>
    </div>
  );
}
