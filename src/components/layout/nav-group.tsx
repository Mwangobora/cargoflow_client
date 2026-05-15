"use client";

import { usePathname } from "next/navigation";

import { NavItem } from "@/src/components/layout/nav-item";
import type { NavGroup as Group } from "@/src/config/dashboard-nav";

type NavGroupProps = {
  group: Group;
  collapsed: boolean;
  onNavigate?: () => void;
};

export function NavGroup({ group, collapsed, onNavigate }: NavGroupProps) {
  const pathname = usePathname();

  return (
    <div className="space-y-1">
      {!collapsed ? (
        <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-sidebar-foreground/50">
          {group.title}
        </p>
      ) : null}
      <div className="space-y-1">
        {group.items.map((item) => (
          <NavItem
            key={item.href}
            item={item}
            collapsed={collapsed}
            active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  );
}
