import type { Metadata } from "next";
import { MAIN_PADDING } from "@/components/app-shell/constants";
import SettingsView from "@/components/settings/SettingsView";
import { SETTINGS_TABS } from "@/components/settings/constants";
import type { SettingsTab } from "@/components/settings/types";

export const metadata: Metadata = {
  title: "Settings — Hirable",
};

export default async function SettingsPage({ searchParams }: PageProps<"/settings">) {
  const { tab, plan } = await searchParams;
  const initialTab = SETTINGS_TABS.some((t) => t.key === tab)
    ? (tab as SettingsTab)
    : "resume";

  return (
    <main className={`min-w-0 flex-1 ${MAIN_PADDING}`}>
      <SettingsView initialTab={initialTab} isPro={plan === "pro"} />
    </main>
  );
}
