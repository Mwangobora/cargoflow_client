import { useQuery } from "@tanstack/react-query";

import { dailyClosingApi } from "@/src/apis/daily-closing.api";

export function useDailyClosingSummary() {
  return useQuery({
    queryKey: ["daily-closings", "summary"],
    queryFn: () => dailyClosingApi.getSummary(),
    retry: false,
  });
}
