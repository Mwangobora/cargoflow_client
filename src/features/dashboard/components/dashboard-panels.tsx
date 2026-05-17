"use client";

import { TabsContent } from "@/components/ui/tabs";
import type { DashboardFilterParams, DashboardTabKey } from "@/src/types/dashboard";

import { DailyClosingTab } from "./daily-closing-tab";
import { OverviewTab } from "./overview-tab";
import { PaymentsTab } from "./payments-tab";
import { ReportsTab } from "./reports-tab";
import { ShipmentsTab } from "./shipments-tab";
import { TripsTab } from "./trips-tab";

type DashboardPanelsProps = {
  activeTab: DashboardTabKey;
  filters: DashboardFilterParams;
  period: string;
};

export function DashboardPanels({ activeTab, filters, period }: DashboardPanelsProps) {
  return (
    <>
      <TabsContent value="overview">{activeTab === "overview" ? <OverviewTab filters={filters} /> : null}</TabsContent>
      <TabsContent value="shipments">{activeTab === "shipments" ? <ShipmentsTab filters={filters} /> : null}</TabsContent>
      <TabsContent value="payments">{activeTab === "payments" ? <PaymentsTab filters={filters} /> : null}</TabsContent>
      <TabsContent value="trips">{activeTab === "trips" ? <TripsTab filters={filters} /> : null}</TabsContent>
      <TabsContent value="daily-closing">{activeTab === "daily-closing" ? <DailyClosingTab /> : null}</TabsContent>
      <TabsContent value="reports">{activeTab === "reports" ? <ReportsTab filters={filters} period={period} /> : null}</TabsContent>
    </>
  );
}
