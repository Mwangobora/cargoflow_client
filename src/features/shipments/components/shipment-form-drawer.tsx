"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ShipmentForm } from "@/src/features/shipments/components/shipment-form";

type ShipmentFormDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  onSubmit: (values: Record<string, unknown>) => Promise<void>;
  loading?: boolean;
};

export function ShipmentFormDrawer({ open, onOpenChange, mode, onSubmit, loading }: ShipmentFormDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>{mode === "create" ? "Create shipment" : "Edit shipment"}</SheetTitle>
          <SheetDescription>
            {mode === "create" ? "Record a new cargo shipment at the counter." : "Update safe shipment details."}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4"><ShipmentForm mode={mode} onSubmit={onSubmit} loading={loading} /></div>
      </SheetContent>
    </Sheet>
  );
}
