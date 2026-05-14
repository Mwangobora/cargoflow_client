"use client";

import { Truck } from "lucide-react";

export function LucideIconDemo() {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
      <Truck className="h-4 w-4" />
      <span>CargoFlow</span>
    </div>
  );
}
