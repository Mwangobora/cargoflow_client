import type { ReactNode } from "react";

import { layout } from "@/src/config/layout";

type PageContentProps = {
  children: ReactNode;
  className?: string;
};

export function PageContent({ children, className }: PageContentProps) {
  return (
    <main className="min-w-0 flex-1 overflow-x-hidden">
      <div className={`${layout.pageContainer} ${layout.pageStack} ${className ?? ""}`.trim()}>
        {children}
      </div>
    </main>
  );
}
