"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function toTitle(value: string) {
  return value.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length === 0) return <p className="text-xs text-muted-foreground">Home</p>;

  return (
    <nav className="flex items-center gap-2 text-xs text-muted-foreground">
      <Link href="/dashboard" className="hover:text-foreground">Home</Link>
      {parts.map((part, index) => {
        const href = `/${parts.slice(0, index + 1).join("/")}`;
        const last = index === parts.length - 1;
        return (
          <span key={href} className="flex items-center gap-2">
            <span>/</span>
            {last ? <span className="text-foreground">{toTitle(part)}</span> : <Link href={href} className="hover:text-foreground">{toTitle(part)}</Link>}
          </span>
        );
      })}
    </nav>
  );
}
