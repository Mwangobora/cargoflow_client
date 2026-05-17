class DeliveryConfirmationApi {
  // Backend delivery confirmation endpoint is not available yet.
  async list() {
    throw new Error("Delivery confirmation API is not available yet.");
  }
}

export const deliveryConfirmationApi = new DeliveryConfirmationApi();
