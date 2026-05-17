import type { ListParams } from "@/src/types/api";

export type Route = {
  id: string;
  origin_city: string;
  destination_city: string;
  distance_km: number;
  estimated_days: number;
  is_active: boolean;
};

export type RouteListParams = ListParams & {
  origin_city?: string;
  destination_city?: string;
  is_active?: boolean;
};

export type CreateRoutePayload = Omit<Route, "id" | "is_active">;
export type UpdateRoutePayload = Partial<CreateRoutePayload>;
