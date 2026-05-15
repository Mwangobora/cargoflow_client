"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import type { NavItem as Item } from "@/src/config/dashboard-nav";

type NavItemProps = {
  item: Item;
  active: boolean;
  collapsed: boolean;
  onNavigate?: () => void;
};

export function NavItem({ item, active, collapsed, onNavigate }: NavItemProps) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      title={collapsed ? item.label : undefined}
      onClick={onNavigate}
      className={cn(
        "flex h-10 items-center gap-3 rounded-lg px-3 text-sm text-sidebar-foreground/90 transition-colors hover:bg-sidebar-accent hover:text-white",
        active && "bg-sidebar-primary text-sidebar-primary-foreground",
        collapsed && "justify-center px-2",
      )}
    >
      <Icon className="size-4 shrink-0" />
      {!collapsed ? <span className="truncate">{item.label}</span> : null}
    </Link>
  );
}
