import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveGrid } from "@/src/components/layout/responsive-grid";
import { PageContent } from "@/src/components/layout/page-content";
import { PageHeader } from "@/src/components/layout/page-header";

const stats = [
  { label: "Shipments Today", value: "142" },
  { label: "Trips In Transit", value: "19" },
  { label: "Pending Payments", value: "TZS 3.4M" },
  { label: "Active Branches", value: "7" },
];

export default function DashboardPage() {
  return (
    <PageContent>
      <PageHeader
        title="Dashboard"
        description="Monitor transport operations, cargo status, and financial activity in one view."
      />

      <ResponsiveGrid variant="cards">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border">
            <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">{stat.label}</CardTitle></CardHeader>
            <CardContent><p className="text-2xl font-semibold tracking-tight">{stat.value}</p></CardContent>
          </Card>
        ))}
      </ResponsiveGrid>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        <Card className="lg:col-span-2"><CardHeader><CardTitle>Operations Trend</CardTitle></CardHeader><CardContent><div className="h-64 rounded-lg border border-dashed border-border bg-muted/40" /></CardContent></Card>
        <Card><CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader><CardContent><div className="h-64 rounded-lg border border-dashed border-border bg-muted/40" /></CardContent></Card>
      </div>
    </PageContent>
  );
}
