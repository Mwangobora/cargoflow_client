class DailyClosingApi {
  // Backend daily-closing module endpoint is not available yet.
  async getSummary() {
    throw new Error("Daily closing API is not available yet.");
  }
}

export const dailyClosingApi = new DailyClosingApi();
