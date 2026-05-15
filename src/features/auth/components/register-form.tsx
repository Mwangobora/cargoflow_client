"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AuthErrorAlert } from "@/src/features/auth/components/auth-error-alert";
import { fieldClassName, labelClassName, submitButtonClassName } from "@/src/features/auth/components/auth-field-styles";
import { PasswordInput } from "@/src/features/auth/components/password-input";
import { useRegister } from "@/src/features/auth/hooks/use-register";
import { mapApiError } from "@/src/lib/error-message";
import { registerSchema, type RegisterSchemaValues } from "@/src/schemas/auth.schema";

export function RegisterForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const { mutateAsync, isPending } = useRegister();
  const form = useForm<RegisterSchemaValues>({ resolver: zodResolver(registerSchema), defaultValues: { full_name: "", email: "", phone_number: "", password: "", confirm_password: "" } });

  const onSubmit = async (values: RegisterSchemaValues) => {
    setServerError(null);
    try {
      await mutateAsync({ full_name: values.full_name, email: values.email, phone_number: values.phone_number || undefined, password: values.password });
      router.push("/pending-approval?source=register");
    } catch (error) {
      setServerError(mapApiError(error));
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <AuthErrorAlert message={serverError} />
        <FormField control={form.control} name="full_name" render={({ field }) => (
          <FormItem><FormLabel className={labelClassName}>Full name</FormLabel><FormControl><Input className={fieldClassName} placeholder="Enter full name" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem><FormLabel className={labelClassName}>Email</FormLabel><FormControl><Input className={fieldClassName} type="email" placeholder="Enter email" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="phone_number" render={({ field }) => (
          <FormItem><FormLabel className={labelClassName}>Phone number (optional)</FormLabel><FormControl><Input className={fieldClassName} placeholder="Enter phone number" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField control={form.control} name="password" render={({ field }) => (
            <FormItem><FormLabel className={labelClassName}>Password</FormLabel><FormControl><PasswordInput className={fieldClassName} placeholder="Create password" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="confirm_password" render={({ field }) => (
            <FormItem><FormLabel className={labelClassName}>Confirm password</FormLabel><FormControl><PasswordInput className={fieldClassName} placeholder="Confirm password" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
        </div>
        <Button type="submit" className={submitButtonClassName} disabled={isPending}>
          {isPending ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </Form>
  );
}
