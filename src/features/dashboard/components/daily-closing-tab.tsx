import { Receipt } from "lucide-react";

import { ResponsiveGrid } from "@/src/components/layout/responsive-grid";
import { useDailyClosingSummary } from "@/src/features/dashboard/hooks/use-daily-closing-summary";

import { DashboardErrorState } from "./dashboard-error-state";
import { DashboardLoadingGrid } from "./dashboard-loading-grid";
import { DashboardStatCard } from "./dashboard-stat-card";
import { SummarySection } from "./summary-section";

export function DailyClosingTab() {
  const query = useDailyClosingSummary();

  if (query.isLoading) return <DashboardLoadingGrid />;
  if (query.isError) return <DashboardErrorState error={query.error} />;

  const data = query.data;
  if (!data) return null;

  return (
    <SummarySection title="Daily Closing" description="End-of-day reconciliation and cash visibility.">
      <ResponsiveGrid variant="cards">
        <DashboardStatCard title="Expected Cash" value={`TZS ${data.expected_cash.toLocaleString()}`} icon={<Receipt className="size-4" />} />
        <DashboardStatCard title="Actual Cash" value={`TZS ${data.actual_cash.toLocaleString()}`} />
        <DashboardStatCard title="Cash Variance" value={`TZS ${data.cash_variance.toLocaleString()}`} />
        <DashboardStatCard title="Mobile Money" value={`TZS ${data.mobile_money.toLocaleString()}`} />
        <DashboardStatCard title="Total Revenue" value={`TZS ${data.total_revenue.toLocaleString()}`} />
        <DashboardStatCard title="Closing Status" value={data.closing_status} helper={data.message} />
      </ResponsiveGrid>
    </SummarySection>
  );
}
