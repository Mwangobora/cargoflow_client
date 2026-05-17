import { Button } from "@/components/ui/button";

type ShipmentErrorStateProps = {
  message?: string;
  onRetry: () => void;
};

export function ShipmentErrorState({ message, onRetry }: ShipmentErrorStateProps) {
  return (
    <div className="rounded-xl border border-danger/20 bg-danger/5 p-6 text-center">
      <h3 className="text-base font-semibold text-foreground">We could not load shipments</h3>
      <p className="mt-1 text-sm text-muted-foreground">{message || "Please try again in a moment."}</p>
      <Button className="mt-4" onClick={onRetry}>Try again</Button>
    </div>
  );
}
