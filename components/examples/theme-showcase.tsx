import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const statusItems = [
  { label: "Success", className: "bg-success text-white" },
  { label: "Warning", className: "bg-warning text-white" },
  { label: "Danger", className: "bg-danger text-white" },
  { label: "Info", className: "bg-info text-white" },
];

export function ThemeShowcase() {
  return (
    <section className="grid gap-6 lg:grid-cols-[240px_1fr]">
      <aside className="rounded-xl border border-sidebar-border bg-sidebar p-4 text-sidebar-foreground">
        <p className="text-sm font-medium">Sidebar Preview</p>
        <div className="mt-3 rounded-md bg-sidebar-primary px-3 py-2 text-sm text-sidebar-primary-foreground">
          Active Route
        </div>
      </aside>
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">CargoFlow Theme System</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-3">
            <Button className="bg-primary text-primary-foreground hover:bg-primary-hover">
              Primary Action
            </Button>
            <Button variant="secondary" className="bg-muted text-muted-foreground">
              Muted Action
            </Button>
          </div>
          <Separator />
          <div className="flex flex-wrap gap-2">
            {statusItems.map((item) => (
              <Badge key={item.label} className={item.className}>
                {item.label}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
