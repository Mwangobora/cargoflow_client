"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useCurrentUser } from "@/src/features/auth/hooks/use-current-user";
import { useAuthStore } from "@/src/stores/auth-store";

type AuthGuardProps = {
  children: React.ReactNode;
};

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const currentUserQuery = useCurrentUser();
  const { isAuthenticated, approvalStatus } = useAuthStore();
  const isChecking = currentUserQuery.isLoading || currentUserQuery.isFetching;
  const hasCurrentUser = currentUserQuery.isSuccess && !!currentUserQuery.data;
  const isPending = hasCurrentUser
    ? !Boolean(currentUserQuery.data?.is_active)
    : approvalStatus === "pending";
  const canAccess = hasCurrentUser || isAuthenticated;

  useEffect(() => {
    if (isChecking) return;
    if (!canAccess) {
      router.replace("/login");
      return;
    }
    if (isPending) {
      router.replace("/pending-approval?source=login");
    }
  }, [canAccess, isChecking, isPending, router]);

  if (isChecking || !canAccess || isPending) {
    return <div className="p-6 text-sm text-muted-foreground">Checking your session...</div>;
  }

  return <>{children}</>;
}
