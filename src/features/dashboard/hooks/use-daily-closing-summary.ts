import { useQuery } from "@tanstack/react-query";

import { dashboardApi } from "@/src/apis/dashboard.api";

export function useDailyClosingSummary() {
  return useQuery({
    queryKey: ["dashboard", "daily-closing"],
    queryFn: () => dashboardApi.getDailyClosingSummary(),
    staleTime: 60_000,
  });
}
