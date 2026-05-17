import { useQuery } from "@tanstack/react-query";

import { dashboardApi } from "@/src/apis/dashboard.api";
import { mapApiError } from "@/src/lib/error-message";
import type { DashboardFilterParams } from "@/src/types/dashboard";

export function usePaymentSummary(filters: DashboardFilterParams) {
  return useQuery({
    queryKey: ["dashboard", "payments", filters],
    queryFn: () => dashboardApi.getPaymentSummary(filters),
    staleTime: 30_000,
    meta: { getErrorMessage: mapApiError },
  });
}
