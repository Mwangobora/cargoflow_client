"use client";

import { useQueryClient } from "@tanstack/react-query";
import { Tabs } from "@/components/ui/tabs";
import { useEffect, useMemo, useState } from "react";

import type { DashboardFilterParams, DashboardTabKey } from "@/src/types/dashboard";

import { DashboardFilterBar } from "./dashboard-filter-bar";
import { DashboardPanels } from "./dashboard-panels";
import { DashboardTabs } from "./dashboard-tabs";

const DASHBOARD_TAB_KEY = "cargoflow.dashboard.activeTab";
const DASHBOARD_PERIOD_KEY = "cargoflow.dashboard.period";

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
  const [activeTab, setActiveTab] = useState<DashboardTabKey>(() => {
    if (typeof window === "undefined") return "overview";
    return (window.localStorage.getItem(DASHBOARD_TAB_KEY) as DashboardTabKey | null) || "overview";
  });
  const [period, setPeriod] = useState(() => {
    if (typeof window === "undefined") return "today";
    return window.localStorage.getItem(DASHBOARD_PERIOD_KEY) || "today";
  });

  useEffect(() => {
    window.localStorage.setItem(DASHBOARD_TAB_KEY, activeTab);
  }, [activeTab]);

  useEffect(() => {
    window.localStorage.setItem(DASHBOARD_PERIOD_KEY, period);
  }, [period]);

  const filters: DashboardFilterParams = useMemo(() => {
    const [start, end] = toPeriodDates(period);
    return {
      date_from: start.toISOString(),
      date_to: end.toISOString(),
    };
  }, [period]);

  const onRefresh = () => queryClient.invalidateQueries({ queryKey: ["dashboard"] });

  return (
    <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as DashboardTabKey)} className="space-y-3">
      <DashboardFilterBar
        period={period}
        onPeriodChange={setPeriod}
        onRefresh={onRefresh}
      />
      <DashboardTabs activeTab={activeTab} />
      <DashboardPanels activeTab={activeTab} filters={filters} period={period} />
    </Tabs>
  );
}
