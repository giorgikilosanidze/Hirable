"use client";

import { Download, Table } from "lucide-react";
import Button from "@/components/ui/Button";
import { CARD_CLASS, DANGER_ACTIONS, STORED_ITEMS } from "./constants";
import type { DangerKey } from "./types";

type Props = {
  onConfirm: (key: DangerKey) => void;
};

export default function DataTab({ onConfirm }: Props) {
  return (
    <div className="flex animate-hb-fade flex-col gap-4">
      <div className={`${CARD_CLASS} overflow-hidden`}>
        <div className="border-b border-border-subtle px-[18px] py-[14px]">
          <div className="text-[14.5px] font-semibold tracking-[-.015em]">
            What Hirable stores
          </div>
          <div className="mt-[3px] text-[12.5px] text-text-tertiary">
            Job postings you paste are kept so scores can be re-checked. Nothing is
            used to train models.
          </div>
        </div>

        {STORED_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center gap-3 border-b border-border-subtle px-[18px] py-[13px]"
            >
              <Icon size={15} strokeWidth={1.75} className="flex-none text-text-tertiary" />
              <span className="min-w-0 flex-1 text-[13.5px] text-text-secondary">
                {item.label}
              </span>
              <span className="flex-none font-mono text-[12px] text-text-tertiary">
                {item.value}
              </span>
            </div>
          );
        })}

        <div className="flex flex-wrap gap-2 px-[18px] py-[14px]">
          <Button variant="secondary" size="appSm">
            <Download size={14} strokeWidth={1.75} className="text-text-tertiary" />
            Export everything (JSON)
          </Button>
          <Button variant="secondary" size="appSm">
            <Table size={14} strokeWidth={1.75} className="text-text-tertiary" />
            Applications as CSV
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-danger-subtle bg-surface shadow-sm">
        <div className="border-b border-border-subtle px-[18px] py-[14px] text-[14.5px] font-semibold tracking-[-.015em] text-danger-text">
          Deleting things
        </div>

        {DANGER_ACTIONS.map((danger) => (
          <div
            key={danger.key}
            className="flex items-center gap-[14px] border-b border-border-subtle px-[18px] py-[14px] last:border-b-0"
          >
            <span className="min-w-0 flex-1">
              <span className="block text-[13.5px] font-medium text-text-primary">
                {danger.title}
              </span>
              <span className="mt-[3px] block text-[12.5px] leading-[1.5] text-text-tertiary">
                {danger.desc}
              </span>
            </span>
            <Button
              variant="secondary"
              size="appSm"
              onClick={() => onConfirm(danger.key)}
              className={`text-danger-text hover:bg-danger-subtle ${
                danger.loud ? "border-danger-subtle" : ""
              }`}
            >
              {danger.action}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
