import type { ReactNode } from "react";

import { layout } from "@/src/config/layout";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <section className={`${layout.pageContainer} ${layout.pageStack} ${className ?? ""}`.trim()}>
      {children}
    </section>
  );
}
