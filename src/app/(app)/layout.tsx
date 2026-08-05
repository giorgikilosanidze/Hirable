import MobileBottomNav from "@/components/app-shell/MobileBottomNav";
import MobileTopBar from "@/components/app-shell/MobileTopBar";
import Sidebar from "@/components/app-shell/Sidebar";

/**
 * The shell every in-app screen shares: a sticky sidebar above 900px,
 * a top bar plus sticky bottom nav below it.
 */
export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-stretch bg-canvas md:flex-row">
      <MobileTopBar />
      <Sidebar />
      {children}
      <MobileBottomNav />
    </div>
  );
}
