"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { DashboardTabKey } from "@/src/types/dashboard";

const tabs: { key: DashboardTabKey; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "shipments", label: "Shipments" },
  { key: "payments", label: "Payments" },
  { key: "trips", label: "Trips" },
  { key: "daily-closing", label: "Daily Closing" },
  { key: "reports", label: "Reports" },
];

type DashboardTabsProps = {
  activeTab: DashboardTabKey;
};

export function DashboardTabs({ activeTab }: DashboardTabsProps) {
  return (
    <div className="overflow-x-auto pb-1">
      <TabsList variant="line" className="w-max min-w-full justify-start bg-transparent">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.key}
            value={tab.key}
            className={activeTab === tab.key ? "text-primary" : "text-muted-foreground"}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
}
