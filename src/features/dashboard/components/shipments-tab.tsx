import { Package } from "lucide-react";

import { ResponsiveGrid } from "@/src/components/layout/responsive-grid";
import { useShipmentSummary } from "@/src/features/dashboard/hooks/use-shipment-summary";
import type { DashboardFilterParams } from "@/src/types/dashboard";

import { DashboardErrorState } from "./dashboard-error-state";
import { DashboardLoadingGrid } from "./dashboard-loading-grid";
import { DashboardStatCard } from "./dashboard-stat-card";
import { SummarySection } from "./summary-section";

type ShipmentsTabProps = { filters: DashboardFilterParams };

export function ShipmentsTab({ filters }: ShipmentsTabProps) {
  const query = useShipmentSummary(filters);

  if (query.isLoading) return <DashboardLoadingGrid />;
  if (query.isError) return <DashboardErrorState error={query.error} />;

  const data = query.data;
  if (!data) return null;

  return (
    <SummarySection title="Shipments" description="Track shipment flow from pending to delivered.">
      <ResponsiveGrid variant="cards">
        <DashboardStatCard title="Total" value={data.total_shipments} icon={<Package className="size-4" />} />
        <DashboardStatCard title="Pending" value={data.pending_shipments} />
        <DashboardStatCard title="In Transit" value={data.in_transit_shipments} />
        <DashboardStatCard title="Delivered" value={data.delivered_shipments} />
        <DashboardStatCard title="Cancelled" value={data.cancelled_shipments} />
        <DashboardStatCard title="Today" value={data.today_shipments} />
      </ResponsiveGrid>
    </SummarySection>
  );
}
