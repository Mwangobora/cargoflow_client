import { Plus, RefreshCcw, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type ShipmentListToolbarProps = {
  search: string;
  status: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onCreate: () => void;
  onRefresh: () => void;
};

export function ShipmentListToolbar(props: ShipmentListToolbarProps) {
  const { search, status, onSearchChange, onStatusChange, onCreate, onRefresh } = props;

  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-card p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 flex-col gap-2 sm:flex-row">
        <div className="relative w-full sm:max-w-md">
          <Search className="pointer-events-none absolute left-3 top-3 size-4 text-muted-foreground" />
          <Input value={search} onChange={(e) => onSearchChange(e.target.value)} placeholder="Search receipt, sender, receiver..." className="h-11 rounded-lg border-slate-300 bg-white pl-9 text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-primary" />
        </div>
        <Select value={status} onValueChange={(value) => onStatusChange(value ?? "all")}>
          <SelectTrigger className="h-11 rounded-lg border-slate-300 bg-white text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-primary sm:w-52">
            <SelectValue placeholder="Filter status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="in_transit">In transit</SelectItem>
            <SelectItem value="arrived">Arrived</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="h-11" onClick={onRefresh}><RefreshCcw className="size-4" /> Refresh</Button>
        <Button className="h-11" onClick={onCreate}><Plus className="size-4" /> New shipment</Button>
      </div>
    </div>
  );
}
