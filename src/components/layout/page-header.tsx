import type { ReactNode } from "react";

import { typography } from "@/src/config/layout";

type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  breadcrumbs?: ReactNode;
  compact?: boolean;
};

export function PageHeader({ title, description, actions, breadcrumbs, compact = false }: PageHeaderProps) {
  return (
    <header className={compact ? "space-y-1.5" : "space-y-3"}>
      {breadcrumbs ? <div>{breadcrumbs}</div> : null}
      <div className={`flex flex-col sm:flex-row sm:justify-between ${compact ? "gap-1.5 sm:items-center" : "gap-3 sm:items-start"}`}>
        <div className="space-y-1">
          <h1 className={compact ? "text-lg font-semibold tracking-tight sm:text-xl" : typography.pageTitle}>{title}</h1>
          {description ? <p className={compact ? "text-xs text-muted-foreground sm:text-sm" : `text-muted-foreground ${typography.body}`}>{description}</p> : null}
        </div>
        {actions ? <div className="flex w-full gap-2 sm:w-auto sm:justify-end">{actions}</div> : null}
      </div>
    </header>
  );
}
