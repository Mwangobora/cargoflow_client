import type { ReactNode } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type AuthCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function AuthCard({ title, description, children }: AuthCardProps) {
  return (
    <Card className="w-full max-w-lg rounded-2xl border-border bg-card p-6 shadow-xl sm:p-8">
      <CardHeader className="space-y-2 px-0 pt-0">
        <CardTitle className="text-xl sm:text-2xl font-semibold tracking-tight">{title}</CardTitle>
        <CardDescription className="text-sm sm:text-base text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-0 pb-0">{children}</CardContent>
    </Card>
  );
}
