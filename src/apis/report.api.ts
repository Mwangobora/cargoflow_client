import { axiosClient } from "@/src/apis/axios-client";
import { cleanParams } from "@/src/lib/api-utils";
import type { ReportFilters } from "@/src/types/report";

class ReportApi {
  async getDashboardCharts(params?: ReportFilters & { chart_type?: string; period?: string }) {
    const { data } = await axiosClient.get("/dashboard/charts/", { params: cleanParams(params) });
    return data;
  }

  async getRevenueComparison(params?: ReportFilters) {
    const { data } = await axiosClient.get("/dashboard/revenue-comparison/", { params: cleanParams(params) });
    return data;
  }
}

export const reportApi = new ReportApi();
