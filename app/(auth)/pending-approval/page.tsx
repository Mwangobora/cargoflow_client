import Link from "next/link";

import { AuthShell } from "@/src/features/auth/components/auth-shell";
import { PendingApprovalCard } from "@/src/features/auth/components/pending-approval-card";

type PendingApprovalPageProps = {
  searchParams?: { source?: string };
};

const messages = {
  register: {
    description: "Your account has been created successfully. A manager or owner must approve your access before you can continue.",
    note: "We will notify your team for approval. Please wait for confirmation before signing in.",
  },
  login: {
    description: "Your account is still pending approval. You cannot access CargoFlow pages until approval is completed.",
    note: "Please contact your manager or owner if approval takes longer than expected.",
  },
} as const;

export default function PendingApprovalPage({ searchParams }: PendingApprovalPageProps) {
  const source = searchParams?.source === "register" ? "register" : "login";
  const message = messages[source];

  return (
    <AuthShell>
      <div className="w-full max-w-lg space-y-4">
        <PendingApprovalCard description={message.description} note={message.note} />
        <Link
          href="/login"
          className="flex h-11 w-full items-center justify-center rounded-lg bg-primary font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Back to sign in
        </Link>
      </div>
    </AuthShell>
  );
}
