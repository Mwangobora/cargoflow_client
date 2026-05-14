import type { ReactNode } from "react";

import { typography } from "@/src/config/layout";

type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
};

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div className="space-y-1">
        <h1 className={typography.pageTitle}>{title}</h1>
        {description ? (
          <p className={`text-muted-foreground ${typography.body}`}>{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex w-full sm:w-auto sm:justify-end">{actions}</div> : null}
    </header>
  );
}
