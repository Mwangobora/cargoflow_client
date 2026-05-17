export type DashboardFilterParams = {
  branch_id?: string;
  route_id?: string;
  payment_method?: string;
  date_from?: string;
  date_to?: string;
};

export type DashboardTabKey =
  | "overview"
  | "shipments"
  | "payments"
  | "trips"
  | "daily-closing"
  | "reports";

export type PaymentMethodBreakdown = {
  payment_method: string;
  total: number;
  count: number;
};

export type RevenueSummary = {
  today_revenue: number;
  week_revenue: number;
  month_revenue: number;
  year_revenue: number;
  total_payments: number;
  payment_method_breakdown: PaymentMethodBreakdown[];
};

export type ShipmentSummary = {
  total_shipments: number;
  today_shipments: number;
  pending_shipments: number;
  in_transit_shipments: number;
  delivered_shipments: number;
  cancelled_shipments: number;
};

export type PaymentSummary = {
  total_revenue: number;
  total_payments: number;
  cash: number;
  mobile_money: number;
  bank: number;
  owner_mobile: number;
};

export type TripSummary = {
  active_trips: number;
  completed_trips: number;
  today_trip_count: number;
  utilization_percent: number;
  active_vehicles: number;
};

export type DailyClosingSummary = {
  is_available: boolean;
  expected_cash: number;
  actual_cash: number;
  cash_variance: number;
  mobile_money: number;
  total_revenue: number;
  closing_status: string;
  message?: string;
};

export type DashboardOverviewSummary = {
  revenue: { total_revenue: number; payment_count: number; payment_methods: PaymentMethodBreakdown[] };
  profit: { revenue: number; expenses: number; profit: number };
  shipments: {
    total: number;
    today: number;
    active: number;
    delivered: number;
    pending: number;
    status_breakdown: { status: string; count: number }[];
  };
  trips: { active: number; completed: number; today_count: number };
  customers: { total: number; new_today: number };
};

export type RevenueComparison = {
  today_vs_yesterday: { current_period_revenue: number; previous_period_revenue: number; percentage_change: number; trend_direction: string };
  week_vs_last_week: { current_period_revenue: number; previous_period_revenue: number; percentage_change: number; trend_direction: string };
  month_vs_last_month: { current_period_revenue: number; previous_period_revenue: number; percentage_change: number; trend_direction: string };
};

export type DashboardCharts = {
  chart_type?: string | null;
  period?: string | null;
  revenue_trends: { day: string; total_revenue: number; payment_count: number }[];
  shipment_trends: { day: string | null; shipment_count: number }[];
  payment_method_trends: { label: string; value: number }[];
  branch_performance_trends: { branch_id: string; branch_name: string; revenue: number; shipment_count: number }[];
};
