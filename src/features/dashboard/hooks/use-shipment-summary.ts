import { useQuery } from "@tanstack/react-query";

import { dashboardApi } from "@/src/apis/dashboard.api";
import { mapApiError } from "@/src/lib/error-message";
import type { DashboardFilterParams } from "@/src/types/dashboard";

export function useShipmentSummary(filters: DashboardFilterParams) {
  return useQuery({
    queryKey: ["dashboard", "shipments", filters],
    queryFn: () => dashboardApi.getShipmentSummary(filters),
    staleTime: 30_000,
    meta: { getErrorMessage: mapApiError },
  });
}
