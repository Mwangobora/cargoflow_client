import {
  BarChart3,
  Briefcase,
  Bus,
  CreditCard,
  Gauge,
  Map,
  Receipt,
  Route,
  Settings,
  Truck,
  Users,
  UserSquare2,
} from "lucide-react";
import type { ComponentType } from "react";

export type NavItem = { label: string; href: string; icon: ComponentType<{ className?: string }> };
export type NavGroup = { title: string; items: NavItem[] };

export const dashboardNav: NavGroup[] = [
  { title: "Main", items: [{ label: "Dashboard", href: "/dashboard", icon: Gauge }] },
  {
    title: "Operations",
    items: [
      { label: "Shipments", href: "/shipments", icon: Truck },
      { label: "Customers", href: "/customers", icon: Users },
      { label: "Trips", href: "/trips", icon: Bus },
      { label: "Routes", href: "/routes", icon: Route },
    ],
  },
  {
    title: "Fleet",
    items: [
      { label: "Vehicles", href: "/vehicles", icon: Map },
      { label: "Drivers", href: "/drivers", icon: UserSquare2 },
    ],
  },
  {
    title: "Finance",
    items: [
      { label: "Payments", href: "/payments", icon: CreditCard },
      { label: "Daily Closing", href: "/daily-closing", icon: Receipt },
      { label: "Reports", href: "/reports", icon: BarChart3 },
    ],
  },
  {
    title: "Administration",
    items: [
      { label: "Users & Roles", href: "/users-roles", icon: Briefcase },
      { label: "Settings", href: "/settings", icon: Settings },
    ],
  },
];
