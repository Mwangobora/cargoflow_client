import type { ReactNode } from "react";

type SummarySectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function SummarySection({ title, description, children }: SummarySectionProps) {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold text-foreground sm:text-xl">{title}</h2>
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
