"use client";

import { useState } from "react";
import { USER } from "@/components/app-shell/constants";
import Button from "@/components/ui/Button";
import Toggle from "@/components/ui/Toggle";
import { CARD_CLASS, NOTIFICATIONS, SETTINGS_FIELD_CLASS } from "./constants";
import type { NotificationKey } from "./types";

export default function AccountTab() {
  const [name, setName] = useState(USER.name);
  const [email, setEmail] = useState(USER.email);
  const [enabled, setEnabled] = useState<Record<NotificationKey, boolean>>(() =>
    Object.fromEntries(
      NOTIFICATIONS.map((n) => [n.key, n.defaultOn])
    ) as Record<NotificationKey, boolean>
  );

  return (
    <div className="flex animate-hb-fade flex-col gap-4">
      <div className={`${CARD_CLASS} flex flex-col gap-[15px] p-[18px]`}>
        <div className="grid gap-[14px] [grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr))]">
          <label className="block">
            <span className="mb-1.5 block text-[12.5px] font-medium text-text-secondary">
              Name
            </span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={SETTINGS_FIELD_CLASS}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[12.5px] font-medium text-text-secondary">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={SETTINGS_FIELD_CLASS}
            />
          </label>
        </div>

        <div className="flex items-center gap-3 border-t border-border-subtle pt-[14px]">
          <span className="min-w-0 flex-1">
            <span className="block text-[13.5px] font-medium">
              Signed in with Google
            </span>
            <span className="mt-0.5 block text-[12.5px] text-text-tertiary">
              {USER.email} · connected 3 days ago
            </span>
          </span>
          <Button variant="secondary" size="appXs" className="h-8 text-[13px]">
            Set a password instead
          </Button>
        </div>
      </div>

      <div className={`${CARD_CLASS} overflow-hidden`}>
        <div className="border-b border-border-subtle px-[18px] py-[14px] text-[14.5px] font-semibold tracking-[-.015em]">
          Notifications
        </div>
        {NOTIFICATIONS.map((notification) => (
          <div
            key={notification.key}
            className="flex items-center gap-[14px] border-b border-border-subtle px-[18px] py-[14px] last:border-b-0"
          >
            <span className="min-w-0 flex-1">
              <span className="block text-[13.5px] font-medium text-text-primary">
                {notification.title}
              </span>
              <span className="mt-[3px] block text-[12.5px] leading-[1.5] text-text-tertiary">
                {notification.desc}
              </span>
            </span>
            <Toggle
              checked={enabled[notification.key]}
              onChange={(next) =>
                setEnabled((current) => ({ ...current, [notification.key]: next }))
              }
              label={notification.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
