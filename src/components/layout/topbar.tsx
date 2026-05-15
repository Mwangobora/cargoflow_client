"use client";

import { Bell, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/src/components/layout/breadcrumbs";
import { UserMenu } from "@/src/components/layout/user-menu";
import { useUiStore } from "@/src/stores/ui-store";

type TopbarProps = { title?: string };

export function Topbar({ title = "CargoFlow" }: TopbarProps) {
  const openMobile = useUiStore((s) => s.setMobileSidebarOpen);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon-sm" className="lg:hidden" onClick={() => openMobile(true)}>
            <Menu className="size-4" />
          </Button>
          <div>
            <p className="text-sm font-semibold tracking-tight sm:text-base">{title}</p>
            <Breadcrumbs />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon-sm" className="hidden sm:inline-flex"><Search className="size-4" /></Button>
          <Button variant="outline" size="icon-sm"><Bell className="size-4" /></Button>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
