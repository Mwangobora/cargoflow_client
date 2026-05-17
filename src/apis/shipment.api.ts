import { axiosClient } from "@/src/apis/axios-client";
import { cleanParams } from "@/src/lib/api-utils";
import type { ListResponse } from "@/src/types/api";
import type { CreateShipmentPayload, Shipment, ShipmentListParams, UpdateShipmentPayload } from "@/src/types/shipment";

class ShipmentApi {
  async list(params?: ShipmentListParams): Promise<ListResponse<Shipment>> {
    const { data } = await axiosClient.get<ListResponse<Shipment>>("/shipments/", { params: cleanParams(params) });
    return data;
  }

  async getById(id: string): Promise<Shipment> {
    const { data } = await axiosClient.get<Shipment>(`/shipments/${id}/`);
    return data;
  }

  async getByReceipt(receiptNumber: string): Promise<Shipment> {
    const { data } = await axiosClient.get<Shipment>(`/shipments/by-receipt/${receiptNumber}/`);
    return data;
  }

  async create(payload: CreateShipmentPayload): Promise<Shipment> {
    const { data } = await axiosClient.post<Shipment>("/shipments/", payload);
    return data;
  }

  async update(id: string, payload: UpdateShipmentPayload): Promise<Shipment> {
    const { data } = await axiosClient.patch<Shipment>(`/shipments/${id}/`, payload);
    return data;
  }

  async remove(id: string): Promise<void> {
    await axiosClient.delete(`/shipments/${id}/`);
  }

  async updateStatus(id: string, status: string): Promise<Shipment> {
    const { data } = await axiosClient.post<Shipment>(`/shipments/${id}/status/`, { status });
    return data;
  }
}

export const shipmentApi = new ShipmentApi();
