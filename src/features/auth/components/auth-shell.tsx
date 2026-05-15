import type { ReactNode } from "react";

import { AuthBrandPanel } from "@/src/features/auth/components/auth-brand-panel";
import { AuthMobileBrand } from "@/src/features/auth/components/auth-mobile-brand";

type AuthShellProps = {
  children: ReactNode;
};

export function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="grid min-h-screen bg-background lg:grid-cols-2">
      <AuthBrandPanel />
      <section className="flex items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
        <div className="w-full max-w-lg">
          <AuthMobileBrand />
          {children}
        </div>
      </section>
    </main>
  );
}
