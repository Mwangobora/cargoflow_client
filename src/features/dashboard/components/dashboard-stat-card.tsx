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
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between text-sm text-muted-foreground">
          {title}
          {icon}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold tracking-tight text-foreground">{value}</p>
        {helper ? <p className="mt-1 text-xs text-muted-foreground">{helper}</p> : null}
      </CardContent>
    </Card>
  );
}
