import { useMutation, useQuery } from "@tanstack/react-query";

import { tripApi } from "@/src/apis/trip.api";
import { queryKeys } from "@/src/lib/query-keys";
import type { CreateTripPayload, TripListParams, UpdateTripPayload } from "@/src/types/trip";

export function useListTrips(params?: TripListParams) {
  return useQuery({ queryKey: queryKeys.trips.list(params), queryFn: () => tripApi.list(params) });
}

export function useTripDetails(id: string, enabled = true) {
  return useQuery({ queryKey: queryKeys.trips.detail(id), queryFn: () => tripApi.getById(id), enabled });
}

export function useCreateTrip() {
  return useMutation({ mutationFn: (payload: CreateTripPayload) => tripApi.create(payload) });
}

export function useUpdateTrip() {
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateTripPayload }) => tripApi.update(id, payload),
  });
}
