import type { ReactNode } from "react";

import { layout } from "@/src/config/layout";

type GridVariant = "cards" | "two-up" | "three-up";

const variantClasses: Record<GridVariant, string> = {
  cards: layout.cardGrid,
  "two-up": "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",
  "three-up": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
};

type ResponsiveGridProps = {
  children: ReactNode;
  variant?: GridVariant;
  className?: string;
};

export function ResponsiveGrid({
  children,
  variant = "cards",
  className,
}: ResponsiveGridProps) {
  return (
    <section className={`${variantClasses[variant]} ${className ?? ""}`.trim()}>
      {children}
    </section>
  );
}
