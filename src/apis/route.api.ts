import { axiosClient } from "@/src/apis/axios-client";
import { cleanParams } from "@/src/lib/api-utils";
import type { ListResponse } from "@/src/types/api";
import type { CreateRoutePayload, Route, RouteListParams, UpdateRoutePayload } from "@/src/types/route";

class RouteApi {
  private base = "/operations/routes/";

  async list(params?: RouteListParams): Promise<ListResponse<Route>> {
    const { data } = await axiosClient.get<ListResponse<Route>>(this.base, { params: cleanParams(params) });
    return data;
  }

  async getById(id: string): Promise<Route> {
    const { data } = await axiosClient.get<Route>(`${this.base}${id}/`);
    return data;
  }

  async create(payload: CreateRoutePayload): Promise<Route> {
    const { data } = await axiosClient.post<Route>(this.base, payload);
    return data;
  }

  async update(id: string, payload: UpdateRoutePayload): Promise<Route> {
    const { data } = await axiosClient.patch<Route>(`${this.base}${id}/`, payload);
    return data;
  }

  async remove(id: string): Promise<void> { await axiosClient.delete(`${this.base}${id}/`); }
}

export const routeApi = new RouteApi();
