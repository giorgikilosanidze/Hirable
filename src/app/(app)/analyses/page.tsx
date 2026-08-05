import type { Metadata } from "next";
import AnalysesEmpty from "@/components/analyses/AnalysesEmpty";
import AnalysesView from "@/components/analyses/AnalysesView";
import { MAIN_PADDING } from "@/components/app-shell/constants";

export const metadata: Metadata = {
  title: "Analyses — Hirable",
};

export default async function AnalysesPage({ searchParams }: PageProps<"/analyses">) {
  const { state } = await searchParams;

  return (
    <main className={`min-w-0 flex-1 ${MAIN_PADDING}`}>
      {state === "empty" ? <AnalysesEmpty /> : <AnalysesView />}
    </main>
  );
}
