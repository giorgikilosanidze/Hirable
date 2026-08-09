import type { Metadata } from "next";
import TrackerView from "@/components/tracker/TrackerView";
import type { TrackerView as View } from "@/components/tracker/types";

export const metadata: Metadata = {
  title: "Applications — Hirable",
  description: "Every application on one board, with the score attached.",
};

export default async function TrackerPage({ searchParams }: PageProps<"/tracker">) {
  const { view, scores } = await searchParams;

  return (
    <TrackerView
      initialView={view === "list" ? "list" : ("board" as View)}
      showScores={scores !== "off"}
    />
  );
}
