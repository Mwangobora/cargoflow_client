"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { dashboardNav } from "@/src/config/dashboard-nav";
import { NavGroup } from "@/src/components/layout/nav-group";
import { useUiStore } from "@/src/stores/ui-store";

export function MobileSidebar() {
  const open = useUiStore((s) => s.mobileSidebarOpen);
  const setOpen = useUiStore((s) => s.setMobileSidebarOpen);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="w-80 border-r border-sidebar-border bg-sidebar p-0 text-sidebar-foreground">
        <SheetHeader className="border-b border-sidebar-border p-4">
          <SheetTitle className="text-left text-white">CargoFlow</SheetTitle>
        </SheetHeader>
        <div className="space-y-4 overflow-y-auto p-3">
          {dashboardNav.map((group) => (
            <NavGroup key={group.title} group={group} collapsed={false} onNavigate={() => setOpen(false)} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
