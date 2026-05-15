import type { ReactNode } from "react";

import { DashboardShell } from "@/src/components/layout/dashboard-shell";
import { AuthGuard } from "@/src/features/auth/components/auth-guard";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AuthGuard>
      <DashboardShell>{children}</DashboardShell>
    </AuthGuard>
  );
}
