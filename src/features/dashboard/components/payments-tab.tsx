import { CreditCard } from "lucide-react";

import { ResponsiveGrid } from "@/src/components/layout/responsive-grid";
import { usePaymentSummary } from "@/src/features/dashboard/hooks/use-payment-summary";
import type { DashboardFilterParams } from "@/src/types/dashboard";

import { DashboardErrorState } from "./dashboard-error-state";
import { DashboardLoadingGrid } from "./dashboard-loading-grid";
import { DashboardStatCard } from "./dashboard-stat-card";
import { SummarySection } from "./summary-section";

type PaymentsTabProps = { filters: DashboardFilterParams };

function currency(value: number) {
  return `TZS ${value.toLocaleString()}`;
}

export function PaymentsTab({ filters }: PaymentsTabProps) {
  const query = usePaymentSummary(filters);

  if (query.isLoading) return <DashboardLoadingGrid />;
  if (query.isError) return <DashboardErrorState error={query.error} />;

  const data = query.data;
  if (!data) return null;

  return (
    <SummarySection title="Payments" description="Monitor daily collections by payment channel.">
      <ResponsiveGrid variant="cards">
        <DashboardStatCard title="Total Revenue" value={currency(data.total_revenue)} icon={<CreditCard className="size-4" />} />
        <DashboardStatCard title="Cash" value={currency(data.cash)} />
        <DashboardStatCard title="Mobile Money" value={currency(data.mobile_money)} />
        <DashboardStatCard title="Bank" value={currency(data.bank)} />
        <DashboardStatCard title="Owner Mobile" value={currency(data.owner_mobile)} />
        <DashboardStatCard title="Total Payments" value={data.total_payments} />
      </ResponsiveGrid>
    </SummarySection>
  );
}
