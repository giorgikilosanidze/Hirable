"use client";

import { usePathname } from "next/navigation";
import { Plus } from "lucide-react";
import Logo from "@/components/brand/Logo";
import { PLAN } from "@/components/plan/constants";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Button from "@/components/ui/Button";
import SidebarNavItem from "./SidebarNavItem";
import { NAV_ITEMS, USER } from "./constants";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-[232px] flex-none flex-col gap-5 border-r border-border-subtle bg-surface px-[14px] pt-[18px] pb-5 md:flex">
      <div className="px-1.5 py-1">
        <Logo size={28} wordmarkSize={16} gap={10} />
      </div>

      <Button size="appLg" className="shadow-sm">
        <Plus size={16} strokeWidth={1.75} />
        New analysis
      </Button>

      <div className="flex flex-col gap-0.5">
        {NAV_ITEMS.map((item) => (
          <SidebarNavItem
            key={item.key}
            item={item}
            isActive={item.href === pathname}
          />
        ))}
      </div>

      <div className="mt-auto flex items-center gap-2.5 border-t border-border-subtle p-1.5 pt-3">
        <span className="inline-flex size-[30px] flex-none items-center justify-center rounded-full bg-muted text-[11.5px] font-semibold text-text-secondary">
          {USER.initials}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[13px] font-medium text-text-primary">
            {USER.name}
          </span>
          <span className="block text-[11.5px] text-text-tertiary">{PLAN.label}</span>
        </span>
        <ThemeToggle
          size={28}
          iconSize={14}
          className="border-border-subtle text-text-tertiary hover:border-border-default hover:text-text-primary"
        />
      </div>
    </aside>
  );
}
