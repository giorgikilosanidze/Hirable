import type { Metadata } from "next";
import { Columns3, Info } from "lucide-react";
import { MAIN_PADDING } from "@/components/app-shell/constants";
import DayOneHome from "@/components/dashboard/DayOneHome";
import NeedsYou from "@/components/dashboard/NeedsYou";
import RecentAnalyses from "@/components/dashboard/RecentAnalyses";
import ResumeCard from "@/components/dashboard/ResumeCard";
import {
  HOME_COLUMNS,
  STATS,
  TODAY_LABEL,
  WORTH_REMEMBERING,
} from "@/components/dashboard/constants";
import PlanUsageCard from "@/components/plan/PlanUsageCard";
import Button from "@/components/ui/Button";
import StatCards from "@/components/ui/StatCards";

export const metadata: Metadata = {
  title: "Home — Hirable",
};

export default async function DashboardPage({ searchParams }: PageProps<"/dashboard">) {
  const { state } = await searchParams;

  return (
    <main className={`min-w-0 flex-1 ${MAIN_PADDING}`}>
      {state === "empty" ? (
        <DayOneHome />
      ) : (
        <>
          <div className="mb-[22px] flex flex-wrap items-end justify-between gap-4">
            <div className="min-w-0">
              <div className="mb-[9px] font-mono text-[10.5px] font-semibold tracking-[.09em] text-text-tertiary uppercase">
                {TODAY_LABEL}
              </div>
              <h1 className="m-0 mb-[7px] text-[clamp(25px,2.7vw,31px)] leading-[1.12] font-semibold tracking-[-.03em]">
                Four things need you this week
              </h1>
              <p className="m-0 max-w-[56ch] text-[14.5px] text-pretty text-text-secondary">
                One deadline, two applications that have gone quiet, and a posting
                that closes Saturday. Everything else can wait.
              </p>
            </div>
            <Button variant="secondary" size="appLg" className="shadow-xs max-md:hidden">
              <Columns3 size={15} strokeWidth={1.75} className="text-text-tertiary" />
              Open tracker
            </Button>
          </div>

          <StatCards stats={STATS} className="mb-[22px]" />

          <div className={HOME_COLUMNS}>
            <div className="flex min-w-0 flex-col gap-[18px]">
              <NeedsYou />
              <RecentAnalyses />
            </div>

            <div className="flex min-w-0 flex-col gap-[14px]">
              <ResumeCard />
              <PlanUsageCard />

              <div className="rounded-lg border border-border-subtle bg-subtle p-[15px]">
                <div className="mb-[9px] flex items-center gap-2">
                  <Info size={14} strokeWidth={1.75} className="text-text-tertiary" />
                  <span className="font-mono text-[10px] font-semibold tracking-[.08em] text-text-tertiary uppercase">
                    Worth remembering
                  </span>
                </div>
                <div className="text-[13px] leading-[1.6] text-pretty text-text-secondary">
                  {WORTH_REMEMBERING}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
