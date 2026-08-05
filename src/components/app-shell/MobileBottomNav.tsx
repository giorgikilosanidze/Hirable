"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOTTOM_NAV_KEYS, NAV_ITEMS } from "./constants";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const items = BOTTOM_NAV_KEYS.map(
    (key) => NAV_ITEMS.find((item) => item.key === key)!
  );

  return (
    <nav className="sticky bottom-0 z-40 grid grid-cols-5 gap-[2px] border-t border-border-subtle bg-surface px-1.5 pt-1.5 pb-2.5 md:hidden">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = item.href === pathname;
        const className = `flex min-h-12 flex-col items-center justify-center gap-1 rounded-md border-none bg-transparent text-[10.5px] no-underline active:bg-subtle hover:no-underline ${
          isActive
            ? "font-semibold text-accent-text"
            : "font-normal text-text-tertiary"
        }`;

        const content = (
          <>
            <Icon size={19} strokeWidth={1.75} />
            {item.shortLabel ?? item.label}
          </>
        );

        return item.href ? (
          <Link
            key={item.key}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={className}
          >
            {content}
          </Link>
        ) : (
          <span key={item.key} aria-disabled className={className}>
            {content}
          </span>
        );
      })}
    </nav>
  );
}
