import { ThemeShowcase } from "@/components/examples/theme-showcase";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">CargoFlow Dashboard UI</h1>
        <p className="text-sm text-muted-foreground">
          Enterprise theme tokens are active across layout, status states, and reusable UI components.
        </p>
      </div>
      <div className="mx-auto mt-8 w-full max-w-6xl">
        <ThemeShowcase />
      </div>
    </main>
  );
}
