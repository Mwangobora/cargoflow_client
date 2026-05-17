import type { ReactNode } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type DashboardStatCardProps = {
  title: string;
  value: string | number;
  helper?: string;
  icon?: ReactNode;
};

export function DashboardStatCard({ title, value, helper, icon }: DashboardStatCardProps) {
  return (
    <Card className="border-border bg-card shadow-md ring-1 ring-border/70">
      <CardHeader className="pb-1">
        <CardTitle className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {title}
          {icon ? <span className="rounded-md bg-muted p-1.5 text-primary">{icon}</span> : null}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{value}</p>
        {helper ? <p className="mt-1 text-xs font-medium text-muted-foreground">{helper}</p> : null}
      </CardContent>
    </Card>
  );
}
