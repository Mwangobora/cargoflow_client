"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { customerApi } from "@/src/apis/customer.api";
import { routeApi } from "@/src/apis/route.api";
import { fieldClassName, labelClassName } from "@/src/features/auth/components/auth-field-styles";

const optionalNumber = (min?: number) =>
  z.preprocess(
    (value) => (value === "" || value === null || value === undefined ? undefined : Number(value)),
    min !== undefined ? z.number().min(min).optional() : z.number().optional(),
  );

const schema = z.object({
  sender_customer_id: z.string().optional(),
  receiver_customer_id: z.string().optional(),
  route_id: z.string().optional(),
  cargo_description: z.string().optional(),
  weight_kg: optionalNumber(0.00001),
  size_category: z.string().optional(),
  declared_value_tzs: optionalNumber(0),
});
type ShipmentFormValues = z.input<typeof schema>;
type ShipmentFormProps = { formId: string; mode: "create" | "edit"; onSubmit: (values: Partial<ShipmentFormValues>) => Promise<void> };

const inputClass = `${fieldClassName} w-full focus-visible:border-primary`;
const selectClass = `${inputClass} data-[size=default]:h-11`;
const textareaClass = "min-h-24 rounded-lg border-slate-300 bg-white text-sm shadow-sm focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary";

export function ShipmentForm({ formId, mode, onSubmit }: ShipmentFormProps) {
  const form = useForm<ShipmentFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { size_category: "medium" },
  });
  const customers = useQuery({ queryKey: ["customers", "lookup", ""], queryFn: () => customerApi.lookup("") });
  const routes = useQuery({ queryKey: ["routes", "options"], queryFn: () => routeApi.list({ is_active: true, page_size: 100 }) });
  const routeItems = useMemo(() => (Array.isArray(routes.data) ? routes.data : routes.data?.results || []), [routes.data]);

  const submit = form.handleSubmit(async (values) => {
    if (mode === "create") {
      if (!values.sender_customer_id) return form.setError("sender_customer_id", { message: "Please select sender." });
      if (!values.receiver_customer_id) return form.setError("receiver_customer_id", { message: "Please select receiver." });
      if (!values.route_id) return form.setError("route_id", { message: "Please select a route." });
    }
    const payload = mode === "create" ? {
      ...values,
      weight_kg: values.weight_kg ? Number(values.weight_kg) : undefined,
      declared_value_tzs: values.declared_value_tzs ? Number(values.declared_value_tzs) : undefined,
    } : {
      cargo_description: values.cargo_description,
      weight_kg: values.weight_kg ? Number(values.weight_kg) : undefined,
      size_category: values.size_category,
      declared_value_tzs: values.declared_value_tzs ? Number(values.declared_value_tzs) : undefined,
    };
    await onSubmit(payload);
    form.reset({ size_category: "medium" });
  });

  return (
    <Form {...form}><form id={formId} onSubmit={submit} className="space-y-6">
      {mode === "create" ? <section className="space-y-4"><h3 className="text-sm font-semibold text-foreground">Customer Information</h3><div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FormField control={form.control} name="sender_customer_id" render={({ field }) => <FormItem><FormLabel className={labelClassName}>Sender</FormLabel><Select onValueChange={field.onChange} value={field.value}><FormControl><SelectTrigger className={selectClass}><SelectValue placeholder="Select sender" /></SelectTrigger></FormControl><SelectContent>{customers.data?.map((c) => <SelectItem key={c.id} value={c.id}>{c.full_name} ({c.phone_number})</SelectItem>)}</SelectContent></Select><FormMessage /></FormItem>} />
        <FormField control={form.control} name="receiver_customer_id" render={({ field }) => <FormItem><FormLabel className={labelClassName}>Receiver</FormLabel><Select onValueChange={field.onChange} value={field.value}><FormControl><SelectTrigger className={selectClass}><SelectValue placeholder="Select receiver" /></SelectTrigger></FormControl><SelectContent>{customers.data?.map((c) => <SelectItem key={c.id} value={c.id}>{c.full_name} ({c.phone_number})</SelectItem>)}</SelectContent></Select><FormMessage /></FormItem>} />
      </div></section> : null}
      <section className="space-y-4"><h3 className="text-sm font-semibold text-foreground">Route & Cargo</h3><div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {mode === "create" ? <FormField control={form.control} name="route_id" render={({ field }) => <FormItem className="md:col-span-2"><FormLabel className={labelClassName}>Route</FormLabel><Select onValueChange={field.onChange} value={field.value}><FormControl><SelectTrigger className={selectClass}><SelectValue placeholder="Select route" /></SelectTrigger></FormControl><SelectContent>{routeItems.map((r) => <SelectItem key={r.id} value={r.id}>{r.origin_city} to {r.destination_city}</SelectItem>)}</SelectContent></Select><FormMessage /></FormItem>} /> : null}
        <FormField control={form.control} name="cargo_description" render={({ field }) => <FormItem className="md:col-span-2"><FormLabel className={labelClassName}>Cargo description</FormLabel><FormControl><Textarea className={textareaClass} {...field} /></FormControl><FormMessage /></FormItem>} />
        <FormField control={form.control} name="weight_kg" render={({ field }) => <FormItem><FormLabel className={labelClassName}>Weight (kg)</FormLabel><FormControl><Input type="number" step="0.01" className={inputClass} {...field} value={typeof field.value === "number" || typeof field.value === "string" ? field.value : ""} /></FormControl><FormMessage /></FormItem>} />
        <FormField control={form.control} name="size_category" render={({ field }) => <FormItem><FormLabel className={labelClassName}>Size category</FormLabel><Select onValueChange={field.onChange} value={field.value}><FormControl><SelectTrigger className={selectClass}><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="small">Small</SelectItem><SelectItem value="medium">Medium</SelectItem><SelectItem value="large">Large</SelectItem><SelectItem value="extra_large">Extra large</SelectItem></SelectContent></Select><FormMessage /></FormItem>} />
      </div></section>
      <section className="space-y-4"><h3 className="text-sm font-semibold text-foreground">Pricing & Notes</h3><div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FormField control={form.control} name="declared_value_tzs" render={({ field }) => <FormItem><FormLabel className={labelClassName}>Declared value (TZS)</FormLabel><FormControl><Input type="number" className={inputClass} {...field} value={typeof field.value === "number" || typeof field.value === "string" ? field.value : ""} /></FormControl><FormMessage /></FormItem>} />
      </div></section>
    </form></Form>
  );
}
