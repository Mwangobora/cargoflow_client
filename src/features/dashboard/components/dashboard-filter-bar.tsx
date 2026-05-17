"use client";

import { RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type DashboardFilterBarProps = {
  period: string;
  onPeriodChange: (value: string) => void;
  onRefresh: () => void;
};

export function DashboardFilterBar({
  period,
  onPeriodChange,
  onRefresh,
}: DashboardFilterBarProps) {
  const handlePeriodChange = (value: string | null) => {
    if (value) onPeriodChange(value);
  };

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-border bg-card/90 p-2 sm:flex-row sm:items-center sm:justify-end">
      <Select value={period} onValueChange={handlePeriodChange}>
        <SelectTrigger className="h-9 w-full rounded-lg text-sm sm:w-40">
          <SelectValue placeholder="Select period" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="week">This Week</SelectItem>
          <SelectItem value="month">This Month</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={onRefresh} className="h-9 rounded-lg px-3 text-sm" variant="outline">
        <RefreshCcw className="size-4" />
        <span className="ml-1">Refresh</span>
      </Button>
    </div>
  );
}
