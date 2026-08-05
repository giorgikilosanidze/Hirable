import Link from "next/link";
import type { NavItem } from "./types";

type Props = {
  item: NavItem;
  isActive: boolean;
};

export default function SidebarNavItem({ item, isActive }: Props) {
  const Icon = item.icon;

  const className = `flex items-center gap-2.5 rounded-[9px] px-2.5 py-2 text-[13.5px] no-underline transition-all duration-140 ease-standard hover:no-underline ${
    isActive
      ? "bg-accent-subtle font-semibold text-accent-text"
      : "bg-transparent font-normal text-text-secondary hover:bg-subtle hover:text-text-secondary"
  }`;

  const content = (
    <>
      <Icon size={16} strokeWidth={1.75} className="flex-none" />
      <span className="min-w-0 flex-1">{item.label}</span>
      {item.count && (
        <span className="font-mono text-[10.5px] text-text-tertiary">{item.count}</span>
      )}
    </>
  );

  if (!item.href) {
    return (
      <span aria-disabled className={`${className} cursor-default`}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={`${className} cursor-pointer`}
    >
      {content}
    </Link>
  );
}
