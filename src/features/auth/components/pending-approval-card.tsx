import { Clock3 } from "lucide-react";

import { AuthCard } from "@/src/features/auth/components/auth-card";

type PendingApprovalCardProps = {
  description: string;
  note: string;
};

export function PendingApprovalCard({ description, note }: PendingApprovalCardProps) {
  return (
    <AuthCard
      title="Your account is waiting for approval"
      description={description}
    >
      <div className="rounded-md border border-warning/40 bg-warning/10 p-4 text-sm text-foreground">
        <div className="mb-2 flex items-center gap-2 font-medium">
          <Clock3 className="size-4 text-warning" />
          Approval pending
        </div>
        <p className="text-muted-foreground">{note}</p>
      </div>
    </AuthCard>
  );
}
