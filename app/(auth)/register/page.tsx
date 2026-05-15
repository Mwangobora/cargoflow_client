import Link from "next/link";

import { AuthCard } from "@/src/features/auth/components/auth-card";
import { AuthShell } from "@/src/features/auth/components/auth-shell";
import { RegisterForm } from "@/src/features/auth/components/register-form";

export default function RegisterPage() {
  return (
    <AuthShell>
      <AuthCard
        title="Create your CargoFlow account"
        description="Register your staff account. Your manager may approve access before you continue."
      >
        <RegisterForm />
        <p className="mt-5 text-center text-xs sm:text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:text-primary-hover">
            Sign in
          </Link>
        </p>
      </AuthCard>
    </AuthShell>
  );
}
