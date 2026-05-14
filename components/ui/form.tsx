"use client";

import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { Label } from "@/components/ui/label";
import { Form, FormField, FormItemProvider, useFormField } from "@/components/ui/form-context";
import { cn } from "@/lib/utils";

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <FormItemProvider>
      <div className={cn("grid gap-2", className)} {...props} />
    </FormItemProvider>
  );
}

function FormLabel({ className, ...props }: React.ComponentProps<typeof Label>) {
  const { error, formItemId } = useFormField();
  return (
    <Label data-slot="form-label" data-error={!!error} className={cn("data-[error=true]:text-destructive", className)} htmlFor={formItemId} {...props} />
  );
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  const describedBy = error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId;
  return <Slot data-slot="form-control" id={formItemId} aria-describedby={describedBy} aria-invalid={!!error} {...props} />;
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField();
  return <p data-slot="form-description" id={formDescriptionId} className={cn("text-muted-foreground text-sm", className)} {...props} />;
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) return null;
  return (
    <p data-slot="form-message" id={formMessageId} className={cn("text-destructive text-sm", className)} {...props}>
      {body}
    </p>
  );
}

export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField };
