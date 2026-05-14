import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { layout, typography } from "@/src/config/layout";
import { ResponsiveGrid } from "@/src/components/layout/responsive-grid";

const stats = ["Total Shipments", "In Transit", "Delivered", "Pending"];

export function ResponsiveDemo() {
  return (
    <div className="space-y-6">
      <ResponsiveGrid>
        {stats.map((label) => (
          <Card key={label}>
            <CardHeader><CardTitle className={typography.cardTitle}>{label}</CardTitle></CardHeader>
            <CardContent><p className="text-2xl font-semibold">128</p></CardContent>
          </Card>
        ))}
      </ResponsiveGrid>
      <Card>
        <CardHeader><CardTitle className={typography.sectionTitle}>Responsive Form</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className={layout.formGrid}>
            <Input placeholder="Sender name" />
            <Input placeholder="Receiver name" />
            <Input placeholder="Phone number" />
            <Input placeholder="Route" />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button variant="secondary">Cancel</Button>
            <Button className="bg-primary hover:bg-primary-hover">Save Shipment</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle className={typography.sectionTitle}>Responsive Table Wrapper</CardTitle></CardHeader>
        <CardContent>
          <div className={layout.tableWrapper}>
            <table className={`${layout.tableInner} ${typography.table}`}>
              <thead><tr className="bg-muted text-left"><th className="p-3">Receipt</th><th className="p-3">Sender</th><th className="p-3">Status</th></tr></thead>
              <tbody><tr><td className="p-3">CF-2026-0001</td><td className="p-3">Asha M.</td><td className="p-3"><Badge className="bg-info text-white">In Transit</Badge></td></tr></tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
