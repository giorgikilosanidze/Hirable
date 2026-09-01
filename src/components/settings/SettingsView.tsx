"use client";

import { useState } from "react";
import type { SessionUser } from "@/components/app-shell/types";
import SegmentedControl from "@/components/ui/SegmentedControl";
import AccountTab from "./AccountTab";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import DataTab from "./DataTab";
import PlanTab from "./PlanTab";
import ResumeTab from "./ResumeTab";
import { SETTINGS_TABS } from "./constants";
import type { DangerKey, SettingsTab } from "./types";

type Props = {
  initialTab: SettingsTab;
  isPro: boolean;
  user: SessionUser;
  providers: string[];
  googleEnabled: boolean;
};

export default function SettingsView({
  initialTab,
  isPro,
  user,
  providers,
  googleEnabled,
}: Props) {
  const [tab, setTab] = useState<SettingsTab>(initialTab);
  const [confirming, setConfirming] = useState<DangerKey | null>(null);

  return (
    <div className="max-w-[820px]">
      <h1 className="m-0 mb-[7px] text-[clamp(25px,2.7vw,31px)] leading-[1.12] font-semibold tracking-[-.03em]">
        Settings
      </h1>
      <p className="m-0 mb-5 text-[14.5px] text-text-secondary">
        Your resume, your account, and everything Hirable keeps about you.
      </p>

      <SegmentedControl
        items={SETTINGS_TABS}
        value={tab}
        onChange={setTab}
        size="lg"
        label="Settings sections"
        className="mb-[22px] w-fit max-w-full overflow-x-auto"
      />

      {tab === "resume" && <ResumeTab />}
      {tab === "account" && (
        <AccountTab
          user={user}
          providers={providers}
          googleEnabled={googleEnabled}
        />
      )}
      {tab === "plan" && <PlanTab isPro={isPro} />}
      {tab === "data" && <DataTab onConfirm={setConfirming} />}

      {confirming && (
        <ConfirmDeleteDialog
          key={confirming}
          target={confirming}
          onClose={() => setConfirming(null)}
        />
      )}
    </div>
  );
}
