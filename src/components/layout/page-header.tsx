import type { ReactNode } from "react";

import { typography } from "@/src/config/layout";

type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  breadcrumbs?: ReactNode;
};

export function PageHeader({ title, description, actions, breadcrumbs }: PageHeaderProps) {
  return (
    <header className="space-y-3">
      {breadcrumbs ? <div>{breadcrumbs}</div> : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h1 className={typography.pageTitle}>{title}</h1>
          {description ? <p className={`text-muted-foreground ${typography.body}`}>{description}</p> : null}
        </div>
        {actions ? <div className="flex w-full gap-2 sm:w-auto sm:justify-end">{actions}</div> : null}
      </div>
    </header>
  );
}
