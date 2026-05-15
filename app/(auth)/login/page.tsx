import Link from "next/link";

import { AuthCard } from "@/src/features/auth/components/auth-card";
import { AuthShell } from "@/src/features/auth/components/auth-shell";
import { LoginForm } from "@/src/features/auth/components/login-form";

export default function LoginPage() {
  return (
    <AuthShell>
      <AuthCard title="Welcome back" description="Sign in to continue managing cargo operations.">
        <LoginForm />
        <p className="mt-5 text-center text-xs sm:text-sm text-muted-foreground">
          New to CargoFlow?{" "}
          <Link href="/register" className="font-medium text-primary hover:text-primary-hover">
            Create an account
          </Link>
        </p>
      </AuthCard>
    </AuthShell>
  );
}
