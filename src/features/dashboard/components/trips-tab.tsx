import { Bus } from "lucide-react";

import { ResponsiveGrid } from "@/src/components/layout/responsive-grid";
import { useTripSummary } from "@/src/features/dashboard/hooks/use-trip-summary";
import type { DashboardFilterParams } from "@/src/types/dashboard";

import { DashboardErrorState } from "./dashboard-error-state";
import { DashboardLoadingGrid } from "./dashboard-loading-grid";
import { DashboardStatCard } from "./dashboard-stat-card";
import { SummarySection } from "./summary-section";

type TripsTabProps = { filters: DashboardFilterParams };

export function TripsTab({ filters }: TripsTabProps) {
  const query = useTripSummary(filters);

  if (query.isLoading) return <DashboardLoadingGrid />;
  if (query.isError) return <DashboardErrorState error={query.error} />;

  const data = query.data;
  if (!data) return null;

  return (
    <SummarySection title="Trips" description="Track active dispatches and route execution progress.">
      <ResponsiveGrid variant="cards">
        <DashboardStatCard title="Active Trips" value={data.active_trips} icon={<Bus className="size-4" />} />
        <DashboardStatCard title="Completed Trips" value={data.completed_trips} />
        <DashboardStatCard title="Today Trips" value={data.today_trip_count} />
        <DashboardStatCard title="Vehicle Utilization" value={`${data.utilization_percent}%`} />
        <DashboardStatCard title="Active Vehicles" value={data.active_vehicles} />
        <DashboardStatCard title="Loading/Departed/Arrived" value="Use active trips" helper="Detailed status split endpoint not available yet." />
      </ResponsiveGrid>
    </SummarySection>
  );
}
