import { BarChart3 } from "lucide-react";

import { ResponsiveGrid } from "@/src/components/layout/responsive-grid";
import { useDashboardCharts } from "@/src/features/dashboard/hooks/use-dashboard-charts";
import type { DashboardFilterParams } from "@/src/types/dashboard";

import { DashboardErrorState } from "./dashboard-error-state";
import { DashboardLoadingGrid } from "./dashboard-loading-grid";
import { DashboardStatCard } from "./dashboard-stat-card";
import { SummarySection } from "./summary-section";

type ReportsTabProps = { filters: DashboardFilterParams; period: string };

export function ReportsTab({ filters, period }: ReportsTabProps) {
  const query = useDashboardCharts({ ...filters, chart_type: "overview", period });

  if (query.isLoading) return <DashboardLoadingGrid />;
  if (query.isError) return <DashboardErrorState error={query.error} />;

  const data = query.data;
  if (!data) return null;

  return (
    <SummarySection title="Reports" description="Trend indicators for executive and operational decisions.">
      <ResponsiveGrid variant="cards">
        <DashboardStatCard title="Revenue Trend Points" value={data.revenue_trends.length} icon={<BarChart3 className="size-4" />} />
        <DashboardStatCard title="Shipment Trend Points" value={data.shipment_trends.length} />
        <DashboardStatCard title="Payment Methods" value={data.payment_method_trends.length} />
        <DashboardStatCard title="Route Revenue" value="Pending" helper="Route-level report endpoint not available yet." />
      </ResponsiveGrid>
    </SummarySection>
  );
}
