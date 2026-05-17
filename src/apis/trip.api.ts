import { axiosClient } from "@/src/apis/axios-client";
import { cleanParams } from "@/src/lib/api-utils";
import type { ListResponse } from "@/src/types/api";
import type { CreateTripPayload, Trip, TripListParams, TripShipment, UpdateTripPayload } from "@/src/types/trip";

class TripApi {
  async list(params?: TripListParams): Promise<ListResponse<Trip>> {
    const { data } = await axiosClient.get<ListResponse<Trip>>("/trips/", { params: cleanParams(params) });
    return data;
  }

  async getById(id: string): Promise<Trip> {
    const { data } = await axiosClient.get<Trip>(`/trips/${id}/`);
    return data;
  }

  async create(payload: CreateTripPayload): Promise<Trip> {
    const { data } = await axiosClient.post<Trip>("/trips/", payload);
    return data;
  }

  async update(id: string, payload: UpdateTripPayload): Promise<Trip> {
    const { data } = await axiosClient.patch<Trip>(`/trips/${id}/`, payload);
    return data;
  }

  async remove(id: string): Promise<void> { await axiosClient.delete(`/trips/${id}/`); }
  async updateStatus(id: string, status: string): Promise<Trip> {
    const { data } = await axiosClient.post<Trip>(`/trips/${id}/status/`, { status });
    return data;
  }

  async listShipments(id: string): Promise<ListResponse<TripShipment>> {
    const { data } = await axiosClient.get<ListResponse<TripShipment>>(`/trips/${id}/shipments/`);
    return data;
  }

  async addShipment(id: string, shipment_id: string): Promise<TripShipment> {
    const { data } = await axiosClient.post<TripShipment>(`/trips/${id}/shipments/`, { shipment_id });
    return data;
  }

  async removeShipment(tripId: string, shipmentId: string): Promise<void> {
    await axiosClient.delete(`/trips/${tripId}/shipments/${shipmentId}/`);
  }
}

export const tripApi = new TripApi();
