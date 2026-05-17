"use client";

import { ArrowUpDown } from "lucide-react";
import { flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, type SortingState } from "@tanstack/react-table";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getShipmentColumns } from "@/src/features/shipments/components/shipment-columns";
import { ShipmentTablePagination } from "@/src/features/shipments/components/shipment-table-pagination";
import type { Shipment } from "@/src/types/shipment";

type ShipmentTableProps = {
  data: Shipment[];
  onView: (shipment: Shipment) => void;
  onEdit: (shipment: Shipment) => void;
  onCancel: (shipment: Shipment) => void;
};

export function ShipmentTable({ data, onView, onEdit, onCancel }: ShipmentTableProps) {
  "use no memo";
  const [sorting, setSorting] = useState<SortingState>([{ id: "created_at", desc: true }]);
  const columns = useMemo(() => getShipmentColumns({ onView, onEdit, onCancel }), [onView, onEdit, onCancel]);

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="overflow-x-auto rounded-xl border bg-card">
      <Table>
        <TableHeader>{table.getHeaderGroups().map((g) => <TableRow key={g.id}>{g.headers.map((h) => <TableHead key={h.id}>{h.isPlaceholder ? null : h.column.getCanSort() ? <Button variant="ghost" size="sm" onClick={h.column.getToggleSortingHandler()}>{flexRender(h.column.columnDef.header, h.getContext())}<ArrowUpDown className="size-3.5" /></Button> : flexRender(h.column.columnDef.header, h.getContext())}</TableHead>)}</TableRow>)}</TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} onClick={() => onView(row.original)} className="cursor-pointer">
              {row.getVisibleCells().map((cell) => <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>)}
            </TableRow>
          )) : <TableRow><TableCell colSpan={columns.length} className="h-20 text-center text-muted-foreground">No shipments found.</TableCell></TableRow>}
        </TableBody>
      </Table>
      <ShipmentTablePagination table={table} />
    </div>
  );
}
