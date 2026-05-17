import type { ListParams } from "@/src/types/api";

export type Vehicle = {
  id: string;
  plate_number: string;
  vehicle_type: string;
  make_model: string;
  capacity_kg: number;
  status: string;
  branch_name: string;
  is_active: boolean;
};

export type VehicleListParams = ListParams & { status?: string; branch_id?: string; is_active?: boolean };

export type CreateVehiclePayload = {
  plate_number: string;
  vehicle_type: string;
  make_model: string;
  capacity_kg: number;
  branch_id: string;
};

export type UpdateVehiclePayload = Partial<CreateVehiclePayload>;
