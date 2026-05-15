import { BarChart3, Receipt, ShieldCheck, Truck } from "lucide-react";

const features = [
  { icon: Receipt, text: "Record cargo with clear receipt numbers" },
  { icon: Truck, text: "Track trips, drivers, and delivery status" },
  { icon: ShieldCheck, text: "Reconcile cash and mobile money daily" },
  { icon: BarChart3, text: "Give owners real-time business visibility" },
];

export function AuthBrandPanel() {
  return (
    <aside className="hidden h-full flex-col justify-between bg-sidebar p-10 text-sidebar-foreground lg:flex">
      <div className="space-y-6">
        <div>
          <p className="text-3xl font-semibold tracking-tight text-white">CargoFlow</p>
          <p className="mt-3 max-w-md text-sm text-slate-300">
            Transport operations, payments, and cargo tracking in one place.
          </p>
        </div>
        <ul className="space-y-4">
          {features.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-3 rounded-lg border border-slate-700/80 bg-slate-900/30 p-3">
              <Icon className="mt-0.5 size-4 text-primary" />
              <span className="text-sm leading-6 text-slate-200">{text}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-xs text-slate-400">Built for transport and cargo businesses.</p>
    </aside>
  );
}
