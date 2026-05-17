import { useQuery } from "@tanstack/react-query";

import { reportApi } from "@/src/apis/report.api";
import type { ReportFilters } from "@/src/types/report";

export function useDashboardCharts(params?: ReportFilters & { chart_type?: string; period?: string }) {
  return useQuery({ queryKey: ["reports", "charts", params], queryFn: () => reportApi.getDashboardCharts(params) });
}

export function useRevenueComparisonReport(params?: ReportFilters) {
  return useQuery({
    queryKey: ["reports", "revenue-comparison", params],
    queryFn: () => reportApi.getRevenueComparison(params),
  });
}
