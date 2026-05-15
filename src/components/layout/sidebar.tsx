"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { dashboardNav } from "@/src/config/dashboard-nav";
import { NavGroup } from "@/src/components/layout/nav-group";
import { useUiStore } from "@/src/stores/ui-store";

export function Sidebar() {
  const collapsed = useUiStore((s) => s.sidebarCollapsed);
  const toggle = useUiStore((s) => s.toggleSidebar);

  return (
    <aside
      className={`hidden h-screen shrink-0 border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex lg:flex-col ${collapsed ? "w-20" : "w-72"} transition-all duration-200`}
    >
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-3">
        {!collapsed ? <p className="px-2 text-lg font-semibold text-white">CargoFlow</p> : null}
        <Button variant="ghost" size="icon-sm" className="text-sidebar-foreground hover:bg-sidebar-accent" onClick={toggle}>
          {collapsed ? <PanelLeftOpen className="size-4" /> : <PanelLeftClose className="size-4" />}
        </Button>
      </div>
      <nav className="flex-1 space-y-4 overflow-y-auto px-3 py-4">
        {dashboardNav.map((group) => (
          <NavGroup key={group.title} group={group} collapsed={collapsed} />
        ))}
      </nav>
    </aside>
  );
}
