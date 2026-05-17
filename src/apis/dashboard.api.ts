import { axiosClient } from "@/src/apis/axios-client";
import type {
  DailyClosingSummary,
  DashboardCharts,
  DashboardFilterParams,
  DashboardOverviewSummary,
  PaymentSummary,
  RevenueSummary,
  ShipmentSummary,
  TripSummary,
} from "@/src/types/dashboard";

class DashboardApi {
  async getOverviewSummary(params?: DashboardFilterParams): Promise<DashboardOverviewSummary> {
    const { data } = await axiosClient.get<DashboardOverviewSummary>("/dashboard/overview/", { params });
    return data;
  }

  async getShipmentSummary(params?: DashboardFilterParams): Promise<ShipmentSummary> {
    const { data } = await axiosClient.get<ShipmentSummary>("/dashboard/shipments/", { params });
    return data;
  }

  async getRevenueSummary(params?: DashboardFilterParams): Promise<RevenueSummary> {
    const { data } = await axiosClient.get<{ summary: RevenueSummary }>("/dashboard/revenue/", { params });
    return data.summary;
  }

  async getPaymentSummary(params?: DashboardFilterParams): Promise<PaymentSummary> {
    const revenue = await this.getRevenueSummary(params);
    const cash = revenue.payment_method_breakdown.find((item) => item.payment_method === "cash")?.total ?? 0;
    const bank = revenue.payment_method_breakdown.find((item) => item.payment_method === "bank")?.total ?? 0;
    const mobile = revenue.payment_method_breakdown
      .filter((item) => ["mpesa", "tigopesa", "airtelmoney", "halopesa"].includes(item.payment_method))
      .reduce((sum, row) => sum + row.total, 0);
    return {
      total_revenue: revenue.today_revenue,
      total_payments: revenue.total_payments,
      cash,
      mobile_money: mobile,
      bank,
      owner_mobile: 0,
    };
  }

  async getTripSummary(params?: DashboardFilterParams): Promise<TripSummary> {
    const { data } = await axiosClient.get<{
      active_trips: number;
      completed_trips: number;
      today_trip_count: number;
      vehicle_utilization: { utilization_percent: number; active_trips: number };
    }>("/dashboard/trips/", { params });
    return {
      active_trips: data.active_trips,
      completed_trips: data.completed_trips,
      today_trip_count: data.today_trip_count,
      utilization_percent: data.vehicle_utilization.utilization_percent,
      active_vehicles: data.vehicle_utilization.active_trips,
    };
  }

  async getDailyClosingSummary(): Promise<DailyClosingSummary> {
    return {
      is_available: false,
      expected_cash: 0,
      actual_cash: 0,
      cash_variance: 0,
      mobile_money: 0,
      total_revenue: 0,
      closing_status: "unavailable",
      message: "Daily closing summary endpoint is not available yet.",
    };
  }

  async getCharts(params?: DashboardFilterParams & { chart_type?: string; period?: string }): Promise<DashboardCharts> {
    const { data } = await axiosClient.get<DashboardCharts>("/dashboard/charts/", { params });
    return data;
  }
}

export const dashboardApi = new DashboardApi();
