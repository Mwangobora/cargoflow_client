import { AlertCircle } from "lucide-react";

type AuthErrorAlertProps = {
  message?: string | null;
};

export function AuthErrorAlert({ message }: AuthErrorAlertProps) {
  if (!message) return null;

  return (
    <div className="flex items-start gap-2 rounded-lg border border-danger/30 bg-danger/10 p-3 text-sm text-danger">
      <AlertCircle className="mt-0.5 size-4 shrink-0" />
      <p>{message}</p>
    </div>
  );
}
