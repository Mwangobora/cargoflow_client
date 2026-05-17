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
    <div className="overflow-x-auto">
      <TabsList variant="line" className="w-max min-w-full justify-start border-b border-border px-0 pb-1">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.key}
            value={tab.key}
            className={
              activeTab === tab.key
                ? "rounded-md bg-primary/10 text-primary"
                : "rounded-md text-muted-foreground hover:bg-muted/70 hover:text-foreground"
            }
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
}
