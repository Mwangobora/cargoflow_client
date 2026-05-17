import { PageContent } from "@/src/components/layout/page-content";
import { PageHeader } from "@/src/components/layout/page-header";
import { DashboardWorkspace } from "@/src/features/dashboard/components/dashboard-workspace";

export default function DashboardPage() {
  return (
    <PageContent>
      <PageHeader
        title="Dashboard"
        description="Monitor transport operations, shipments, trips, and finance with tabbed summaries."
      />
      <DashboardWorkspace />
    </PageContent>
  );
}
