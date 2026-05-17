import { axiosClient } from "@/src/apis/axios-client";
import { cleanParams } from "@/src/lib/api-utils";
import type { ListResponse } from "@/src/types/api";
import type { CreateDriverPayload, Driver, DriverListParams, UpdateDriverPayload } from "@/src/types/driver";

class DriverApi {
  private base = "/operations/drivers/";

  async list(params?: DriverListParams): Promise<ListResponse<Driver>> {
    const { data } = await axiosClient.get<ListResponse<Driver>>(this.base, { params: cleanParams(params) });
    return data;
  }

  async getById(id: string): Promise<Driver> {
    const { data } = await axiosClient.get<Driver>(`${this.base}${id}/`);
    return data;
  }

  async create(payload: CreateDriverPayload): Promise<Driver> {
    const { data } = await axiosClient.post<Driver>(this.base, payload);
    return data;
  }

  async update(id: string, payload: UpdateDriverPayload): Promise<Driver> {
    const { data } = await axiosClient.patch<Driver>(`${this.base}${id}/`, payload);
    return data;
  }

  async remove(id: string): Promise<void> { await axiosClient.delete(`${this.base}${id}/`); }
}

export const driverApi = new DriverApi();
