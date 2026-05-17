export type DeliveryConfirmation = {
  id: string;
  shipment_id: string;
  confirmed_at: string;
  confirmed_by?: string;
  notes?: string;
};
