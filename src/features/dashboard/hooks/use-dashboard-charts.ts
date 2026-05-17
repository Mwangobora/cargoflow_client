import { useQuery } from "@tanstack/react-query";

import { dashboardApi } from "@/src/apis/dashboard.api";
import { mapApiError } from "@/src/lib/error-message";
import type { DashboardFilterParams } from "@/src/types/dashboard";

type ChartParams = DashboardFilterParams & { chart_type?: string; period?: string };

export function useDashboardCharts(filters: ChartParams) {
  return useQuery({
    queryKey: ["dashboard", "charts", filters],
    queryFn: () => dashboardApi.getCharts(filters),
    staleTime: 30_000,
    meta: { getErrorMessage: mapApiError },
  });
}
