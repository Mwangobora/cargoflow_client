import { PageContent } from "@/src/components/layout/page-content";
import { DashboardWorkspace } from "@/src/features/dashboard/components/dashboard-workspace";

export default function DashboardPage() {
  return (
    <PageContent className="space-y-3 sm:space-y-4">
      <DashboardWorkspace />
    </PageContent>
  );
}
