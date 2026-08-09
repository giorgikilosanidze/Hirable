import { Plus } from "lucide-react";
import Logo from "@/components/brand/Logo";
import ThemeToggle from "@/components/theme/ThemeToggle";
import ButtonLink from "@/components/ui/ButtonLink";

export default function MobileTopBar() {
  return (
    <header className="sticky top-0 z-40 flex h-[54px] items-center gap-[11px] border-b border-border-subtle bg-surface px-[14px] md:hidden">
      <Logo size={26} wordmarkSize={15.5} gap={11} />
      <span className="min-w-0 flex-1" />
      <ThemeToggle
        iconSize={15}
        className="border-border-subtle text-text-tertiary hover:border-border-default hover:text-text-primary"
      />
      <ButtonLink href="/analyze" size="appSm" className="gap-1.5">
        <Plus size={15} strokeWidth={1.75} />
        New
      </ButtonLink>
    </header>
  );
}
