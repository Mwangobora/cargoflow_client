export type ReportPoint = {
  label: string;
  value: number;
};

export type RevenueByRouteReport = {
  route: string;
  revenue: number;
};

export type ReportFilters = {
  date_from?: string;
  date_to?: string;
  branch_id?: string;
  route_id?: string;
};
