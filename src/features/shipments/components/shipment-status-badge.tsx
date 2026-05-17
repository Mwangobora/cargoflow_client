import { Badge } from "@/components/ui/badge";

const shipmentStatusClass: Record<string, string> = {
  pending: "bg-warning/15 text-warning border-warning/30",
  in_transit: "bg-info/15 text-info border-info/30",
  arrived: "bg-info/15 text-info border-info/30",
  delivered: "bg-success/15 text-success border-success/30",
  cancelled: "bg-danger/15 text-danger border-danger/30",
};

type ShipmentStatusBadgeProps = { status: string };

export function ShipmentStatusBadge({ status }: ShipmentStatusBadgeProps) {
  const label = status.replaceAll("_", " ");
  const colorClass = shipmentStatusClass[status] || "bg-muted text-muted-foreground border-border";

  return (
    <Badge variant="outline" className={`capitalize border ${colorClass}`}>
      {label}
    </Badge>
  );
}
