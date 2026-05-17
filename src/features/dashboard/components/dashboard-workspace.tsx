"use client";

import { useQueryClient } from "@tanstack/react-query";
import { Tabs } from "@/components/ui/tabs";
import { useMemo, useState } from "react";

import type { DashboardFilterParams, DashboardTabKey } from "@/src/types/dashboard";

import { DashboardFilterBar } from "./dashboard-filter-bar";
import { DashboardPanels } from "./dashboard-panels";
import { DashboardTabs } from "./dashboard-tabs";

function toPeriodDates(period: string) {
  const now = new Date();
  const start = new Date(now);
  const end = new Date(now);
  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);
  if (period === "week") {
    const day = now.getDay();
    const diffToMonday = (day + 6) % 7;
    start.setDate(now.getDate() - diffToMonday);
    end.setDate(start.getDate() + 6);
  }
  if (period === "month") {
    start.setDate(1);
    end.setMonth(now.getMonth() + 1, 0);
  }
  return [start, end];
}

export function DashboardWorkspace() {
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState<DashboardTabKey>("overview");
  const [period, setPeriod] = useState("today");
  const [branchId, setBranchId] = useState("");

  const filters: DashboardFilterParams = useMemo(() => {
    const [start, end] = toPeriodDates(period);
    return {
      date_from: start.toISOString(),
      date_to: end.toISOString(),
      branch_id: branchId.trim() || undefined,
    };
  }, [period, branchId]);

  const onRefresh = () => queryClient.invalidateQueries({ queryKey: ["dashboard"] });

  return (
    <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as DashboardTabKey)} className="space-y-4">
      <DashboardFilterBar
        period={period}
        branchId={branchId}
        onPeriodChange={setPeriod}
        onBranchIdChange={setBranchId}
        onRefresh={onRefresh}
      />
      <DashboardTabs activeTab={activeTab} />
      <DashboardPanels activeTab={activeTab} filters={filters} period={period} />
    </Tabs>
  );
}
