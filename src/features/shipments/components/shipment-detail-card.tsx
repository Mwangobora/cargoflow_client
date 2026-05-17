import { Card } from "@/components/ui/card";
import { ShipmentStatusBadge } from "@/src/features/shipments/components/shipment-status-badge";
import type { Shipment } from "@/src/types/shipment";

const formatTzs = (amount: number) => new Intl.NumberFormat("en-TZ").format(amount);

type ShipmentDetailCardProps = {
  shipment: Shipment;
};

export function ShipmentDetailCard({ shipment }: ShipmentDetailCardProps) {
  return (
    <Card className="rounded-xl border p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Receipt Number</p>
          <h2 className="text-xl font-semibold">{shipment.receipt_number}</h2>
        </div>
        <ShipmentStatusBadge status={shipment.status} />
      </div>

      <dl className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
        <div><dt className="text-muted-foreground">Sender</dt><dd className="font-medium text-foreground">{shipment.sender_name}</dd></div>
        <div><dt className="text-muted-foreground">Receiver</dt><dd className="font-medium text-foreground">{shipment.receiver_name}</dd></div>
        <div><dt className="text-muted-foreground">Route</dt><dd className="font-medium text-foreground">{shipment.route_info}</dd></div>
        <div><dt className="text-muted-foreground">Charged Amount</dt><dd className="font-medium text-foreground">TZS {formatTzs(shipment.charged_amount)}</dd></div>
        <div><dt className="text-muted-foreground">Created</dt><dd className="font-medium text-foreground">{new Date(shipment.created_at).toLocaleString()}</dd></div>
      </dl>
    </Card>
  );
}
