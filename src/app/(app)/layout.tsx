import MobileBottomNav from "@/components/app-shell/MobileBottomNav";
import MobileTopBar from "@/components/app-shell/MobileTopBar";
import Sidebar from "@/components/app-shell/Sidebar";
import { requireUser } from "@/lib/dal";

/**
 * The shell every in-app screen shares: a sticky sidebar above 900px,
 * a top bar plus sticky bottom nav below it.
 */
export default async function AppLayout({ children }: LayoutProps<"/">) {
  const user = await requireUser();

  return (
    <div className="flex min-h-screen flex-1 flex-col items-stretch bg-canvas md:flex-row">
      <MobileTopBar />
      <Sidebar
        user={{ name: user.name, email: user.email, image: user.image }}
      />
      {children}
      <MobileBottomNav />
    </div>
  );
}
