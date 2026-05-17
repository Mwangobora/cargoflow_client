import type { ReactNode } from "react";

type SummarySectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function SummarySection({ title, description, children }: SummarySectionProps) {
  return (
    <section className="space-y-2">
      <div>
        <h2 className="text-base font-semibold text-foreground sm:text-lg">{title}</h2>
        {description ? <p className="text-xs text-muted-foreground sm:text-sm">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
