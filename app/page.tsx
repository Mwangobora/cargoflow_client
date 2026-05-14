import { Button } from "@/components/ui/button";
import { PageContainer } from "@/src/components/layout/page-container";
import { PageHeader } from "@/src/components/layout/page-header";
import { ResponsiveDemo } from "@/src/components/layout/responsive-demo";

export default function HomePage() {
  return (
    <PageContainer>
      <PageHeader
        title="CargoFlow Operations"
        description="Manage shipments, trips, customers, and payments with responsive enterprise workflows."
        actions={
          <Button className="w-full bg-primary hover:bg-primary-hover sm:w-auto">
            Create Shipment
          </Button>
        }
      />
      <ResponsiveDemo />
    </PageContainer>
  );
}
