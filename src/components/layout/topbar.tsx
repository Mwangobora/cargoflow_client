"use client";

import { Bell, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Breadcrumbs } from "@/src/components/layout/breadcrumbs";
import { UserMenu } from "@/src/components/layout/user-menu";
import { useUiStore } from "@/src/stores/ui-store";

type TopbarProps = { title?: string };

export function Topbar({ title = "CargoFlow" }: TopbarProps) {
  const openMobile = useUiStore((s) => s.setMobileSidebarOpen);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <div className="flex h-14 items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon-sm" className="lg:hidden" onClick={() => openMobile(true)}>
            <Menu className="size-4" />
          </Button>
          <div>
            <p className="text-sm font-semibold tracking-tight">{title}</p>
            <div className="hidden sm:block"><Breadcrumbs /></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative hidden lg:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              aria-label="Search dashboard"
              placeholder="Search receipts, customers..."
              className="h-9 w-72 rounded-lg border-border bg-card pl-9 text-sm"
            />
          </div>
          <Button variant="outline" size="icon-sm"><Bell className="size-4" /></Button>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
