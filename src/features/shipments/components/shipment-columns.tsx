import type { ColumnDef } from "@tanstack/react-table";

import { ShipmentStatusBadge } from "@/src/features/shipments/components/shipment-status-badge";
import { ShipmentActionsMenu } from "@/src/features/shipments/components/shipment-actions-menu";
import type { Shipment } from "@/src/types/shipment";

type ShipmentColumnsOptions = {
  onView: (shipment: Shipment) => void;
  onEdit: (shipment: Shipment) => void;
  onCancel: (shipment: Shipment) => void;
};

const formatDate = (value: string) => new Date(value).toLocaleDateString();
const formatTzs = (amount: number) => new Intl.NumberFormat("en-TZ").format(amount);

export function getShipmentColumns(options: ShipmentColumnsOptions): ColumnDef<Shipment>[] {
  return [
    { accessorKey: "receipt_number", header: "Receipt No.", cell: ({ row }) => <span className="font-medium">{row.original.receipt_number}</span> },
    { accessorKey: "sender_name", header: "Sender" },
    { accessorKey: "receiver_name", header: "Receiver" },
    { accessorKey: "route_info", header: "Route" },
    { accessorKey: "status", header: "Status", cell: ({ row }) => <ShipmentStatusBadge status={row.original.status} /> },
    { accessorKey: "charged_amount", header: "Amount (TZS)", cell: ({ row }) => formatTzs(row.original.charged_amount) },
    { accessorKey: "created_at", header: "Created", cell: ({ row }) => formatDate(row.original.created_at) },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <ShipmentActionsMenu
          onView={() => options.onView(row.original)}
          onEdit={() => options.onEdit(row.original)}
          onCancel={() => options.onCancel(row.original)}
        />
      ),
    },
  ];
}
