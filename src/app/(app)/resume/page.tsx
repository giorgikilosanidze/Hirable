import type { Metadata } from "next";
import InsightsView from "@/components/insights/InsightsView";
import { TABS } from "@/components/insights/constants";
import type { SuggestionTab } from "@/components/insights/types";

export const metadata: Metadata = {
  title: "Resume insights — Hirable",
  description:
    "Patterns across the jobs you analysed — not generic resume advice.",
};

export default async function ResumePage({ searchParams }: PageProps<"/resume">) {
  const { tab, impact } = await searchParams;

  const initialTab = TABS.some((t) => t.key === tab)
    ? (tab as SuggestionTab)
    : "all";

  return (
    // Deeper bottom padding than the other screens: the staged bar floats
    // over the end of the list.
    <main className="min-w-0 flex-1 px-4 pt-4 pb-24 md:px-[clamp(20px,3vw,32px)] md:pt-[clamp(24px,3.5vw,36px)] md:pb-30">
      <InsightsView initialTab={initialTab} showImpact={impact !== "off"} />
    </main>
  );
}
