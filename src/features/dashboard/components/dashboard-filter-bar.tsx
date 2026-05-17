"use client";

import { RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type DashboardFilterBarProps = {
  period: string;
  branchId: string;
  onPeriodChange: (value: string) => void;
  onBranchIdChange: (value: string) => void;
  onRefresh: () => void;
};

export function DashboardFilterBar({
  period,
  branchId,
  onPeriodChange,
  onBranchIdChange,
  onRefresh,
}: DashboardFilterBarProps) {
  const handlePeriodChange = (value: string | null) => {
    if (value) onPeriodChange(value);
  };

  return (
    <div className="grid grid-cols-1 gap-3 rounded-xl border border-border bg-card p-4 md:grid-cols-3">
      <Select value={period} onValueChange={handlePeriodChange}>
        <SelectTrigger className="h-11 rounded-lg"><SelectValue placeholder="Select period" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="week">This Week</SelectItem>
          <SelectItem value="month">This Month</SelectItem>
        </SelectContent>
      </Select>
      <Input
        value={branchId}
        onChange={(event) => onBranchIdChange(event.target.value)}
        placeholder="Branch ID (optional)"
        className="h-11 rounded-lg"
      />
      <Button onClick={onRefresh} className="h-11 rounded-lg" variant="outline">
        <RefreshCcw className="mr-2 size-4" /> Refresh
      </Button>
    </div>
  );
}
