import { AlertCircle } from "lucide-react";

import { mapApiError } from "@/src/lib/error-message";

type DashboardErrorStateProps = {
  error: unknown;
};

export function DashboardErrorState({ error }: DashboardErrorStateProps) {
  const message = mapApiError(error);

  return (
    <div className="rounded-xl border border-danger/30 bg-danger/10 p-4 text-danger">
      <div className="flex items-start gap-2">
        <AlertCircle className="mt-0.5 size-4 shrink-0" />
        <div>
          <p className="text-sm font-medium">We could not load dashboard data.</p>
          <p className="text-sm opacity-90">{message}</p>
        </div>
      </div>
    </div>
  );
}
