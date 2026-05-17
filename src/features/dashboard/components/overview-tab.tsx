import { Activity, Banknote, Clock3, Truck } from "lucide-react";

import { ResponsiveGrid } from "@/src/components/layout/responsive-grid";
import { useDashboardOverview } from "@/src/features/dashboard/hooks/use-dashboard-overview";
import type { DashboardFilterParams } from "@/src/types/dashboard";

import { DashboardErrorState } from "./dashboard-error-state";
import { DashboardLoadingGrid } from "./dashboard-loading-grid";
import { DashboardStatCard } from "./dashboard-stat-card";
import { SummarySection } from "./summary-section";

type OverviewTabProps = { filters: DashboardFilterParams };

export function OverviewTab({ filters }: OverviewTabProps) {
  const query = useDashboardOverview(filters);

  if (query.isLoading) return <DashboardLoadingGrid />;
  if (query.isError) return <DashboardErrorState error={query.error} />;

  const data = query.data;
  if (!data) return null;

  return (
    <SummarySection
      title="Overview"
      description="Today’s operational and financial snapshot across your transport activities."
    >
      <ResponsiveGrid variant="cards">
        <DashboardStatCard title="Today Shipments" value={data.shipments.today} icon={<Truck className="size-4" />} />
        <DashboardStatCard title="Today Revenue" value={`TZS ${data.revenue.total_revenue.toLocaleString()}`} icon={<Banknote className="size-4" />} />
        <DashboardStatCard title="In Transit" value={data.shipments.active} icon={<Activity className="size-4" />} />
        <DashboardStatCard title="Pending Deliveries" value={data.shipments.pending} icon={<Clock3 className="size-4" />} />
      </ResponsiveGrid>
    </SummarySection>
  );
}
