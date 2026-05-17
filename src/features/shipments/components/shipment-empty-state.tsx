import { PackageOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

type ShipmentEmptyStateProps = {
  onCreate: () => void;
};

export function ShipmentEmptyState({ onCreate }: ShipmentEmptyStateProps) {
  return (
    <div className="rounded-xl border border-dashed bg-card p-8 text-center">
      <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-full bg-muted">
        <PackageOpen className="size-5 text-muted-foreground" />
      </div>
      <h3 className="text-base font-semibold">No shipments yet</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Create the first shipment when a customer brings cargo to the office.
      </p>
      <Button className="mt-4" onClick={onCreate}>Create shipment</Button>
    </div>
  );
}
