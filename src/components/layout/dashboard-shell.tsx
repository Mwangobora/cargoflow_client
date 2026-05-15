import type { ReactNode } from "react";

import { MobileSidebar } from "@/src/components/layout/mobile-sidebar";
import { Sidebar } from "@/src/components/layout/sidebar";
import { Topbar } from "@/src/components/layout/topbar";

type DashboardShellProps = {
  children: ReactNode;
  title?: string;
};

export function DashboardShell({ children, title }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Topbar title={title} />
          {children}
        </div>
      </div>
      <MobileSidebar />
    </div>
  );
}
