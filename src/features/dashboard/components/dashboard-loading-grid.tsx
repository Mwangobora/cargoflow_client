export function DashboardLoadingGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 sm:gap-6">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div
          key={idx}
          className="h-28 animate-pulse rounded-xl border border-border bg-muted/60"
        />
      ))}
    </div>
  );
}
