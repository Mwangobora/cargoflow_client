"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShipmentForm } from "@/src/features/shipments/components/shipment-form";

type ShipmentFormDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  onSubmit: (values: Record<string, unknown>) => Promise<void>;
  loading?: boolean;
};

export function ShipmentFormDrawer({ open, onOpenChange, mode, onSubmit, loading }: ShipmentFormDrawerProps) {
  const formId = mode === "create" ? "create-shipment-form" : "edit-shipment-form";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[92vh] w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] flex-col gap-0 overflow-hidden p-0 sm:max-w-xl lg:max-w-2xl">
        <DialogHeader className="sticky top-0 z-10 border-b bg-white px-6 py-4">
          <DialogTitle>{mode === "create" ? "Create shipment" : "Edit shipment"}</DialogTitle>
          <DialogDescription>Record cargo details, route, and pricing information.</DialogDescription>
        </DialogHeader>
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6">
          <ShipmentForm formId={formId} mode={mode} onSubmit={onSubmit} />
        </div>
        <div className="sticky bottom-0 z-10 flex flex-col-reverse gap-2 border-t bg-white px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
          <Button variant="outline" className="h-11 w-full sm:w-auto" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" form={formId} className="h-11 w-full bg-primary hover:bg-primary-hover sm:w-auto" disabled={loading}>
            {loading ? "Saving..." : mode === "create" ? "Create shipment" : "Save changes"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
