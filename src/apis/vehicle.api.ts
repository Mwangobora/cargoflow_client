import { axiosClient } from "@/src/apis/axios-client";
import { cleanParams } from "@/src/lib/api-utils";
import type { ListResponse } from "@/src/types/api";
import type { CreateVehiclePayload, UpdateVehiclePayload, Vehicle, VehicleListParams } from "@/src/types/vehicle";

class VehicleApi {
  private base = "/operations/vehicles/";

  async list(params?: VehicleListParams): Promise<ListResponse<Vehicle>> {
    const { data } = await axiosClient.get<ListResponse<Vehicle>>(this.base, { params: cleanParams(params) });
    return data;
  }

  async getById(id: string): Promise<Vehicle> {
    const { data } = await axiosClient.get<Vehicle>(`${this.base}${id}/`);
    return data;
  }

  async create(payload: CreateVehiclePayload): Promise<Vehicle> {
    const { data } = await axiosClient.post<Vehicle>(this.base, payload);
    return data;
  }

  async update(id: string, payload: UpdateVehiclePayload): Promise<Vehicle> {
    const { data } = await axiosClient.patch<Vehicle>(`${this.base}${id}/`, payload);
    return data;
  }

  async remove(id: string): Promise<void> { await axiosClient.delete(`${this.base}${id}/`); }
}

export const vehicleApi = new VehicleApi();
