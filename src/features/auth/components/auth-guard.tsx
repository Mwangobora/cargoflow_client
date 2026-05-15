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
  const { isLoading } = useCurrentUser();
  const { isAuthenticated, approvalStatus } = useAuthStore();

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }
    if (approvalStatus === "pending") {
      router.replace("/pending-approval?source=login");
    }
  }, [approvalStatus, isAuthenticated, isLoading, router]);

  if (isLoading || !isAuthenticated || approvalStatus === "pending") {
    return <div className="p-6 text-sm text-muted-foreground">Checking your session...</div>;
  }

  return <>{children}</>;
}
