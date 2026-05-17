import { useMutation, useQuery } from "@tanstack/react-query";

import { branchApi } from "@/src/apis/branch.api";
import { queryKeys } from "@/src/lib/query-keys";
import type { BranchListParams, CreateBranchPayload, UpdateBranchPayload } from "@/src/types/branch";

export function useListBranches(params?: BranchListParams) {
  return useQuery({ queryKey: queryKeys.operations.branches(params), queryFn: () => branchApi.list(params) });
}

export function useBranchDetails(id: string, enabled = true) {
  return useQuery({ queryKey: ["branches", "detail", id], queryFn: () => branchApi.getById(id), enabled });
}

export function useCreateBranch() {
  return useMutation({ mutationFn: (payload: CreateBranchPayload) => branchApi.create(payload) });
}

export function useUpdateBranch() {
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateBranchPayload }) => branchApi.update(id, payload),
  });
}
