import { Truck } from "lucide-react";

export function AuthMobileBrand() {
  return (
    <div className="mb-5 flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm lg:hidden">
      <div className="rounded-lg bg-primary/10 p-2 text-primary">
        <Truck className="size-5" />
      </div>
      <div>
        <p className="text-base font-semibold tracking-tight">CargoFlow</p>
        <p className="text-xs text-muted-foreground">Transport operations in one place.</p>
      </div>
    </div>
  );
}
