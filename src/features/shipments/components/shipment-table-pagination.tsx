import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

type ShipmentTablePaginationProps<TData> = {
  table: Table<TData>;
};

export function ShipmentTablePagination<TData>({ table }: ShipmentTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between border-t px-3 py-2">
      <p className="text-xs text-muted-foreground">
        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount() || 1}
      </p>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          <ChevronLeft className="size-4" /> Prev
        </Button>
        <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
