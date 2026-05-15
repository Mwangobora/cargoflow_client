"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { fieldClassName, labelClassName, submitButtonClassName } from "@/src/features/auth/components/auth-field-styles";
import { loginSchema, type LoginSchemaValues } from "@/src/schemas/auth.schema";
import { AuthErrorAlert } from "@/src/features/auth/components/auth-error-alert";
import { PasswordInput } from "@/src/features/auth/components/password-input";
import { useLogin } from "@/src/features/auth/hooks/use-login";
import { mapApiError } from "@/src/lib/error-message";

export function LoginForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const { mutateAsync, isPending } = useLogin();
  const form = useForm<LoginSchemaValues>({ resolver: zodResolver(loginSchema), defaultValues: { identifier: "", password: "" } });

  const onSubmit = async (values: LoginSchemaValues) => {
    setServerError(null);
    try {
      const response = await mutateAsync(values);
      router.push(response.approval_pending ? "/pending-approval?source=login" : "/");
    } catch (error) {
      setServerError(mapApiError(error));
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <AuthErrorAlert message={serverError} />
        <FormField control={form.control} name="identifier" render={({ field }) => (
          <FormItem><FormLabel className={labelClassName}>Phone number or email</FormLabel><FormControl><Input className={fieldClassName} placeholder="Enter your phone number or email" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="password" render={({ field }) => (
          <FormItem><FormLabel className={labelClassName}>Password</FormLabel><FormControl><PasswordInput className={fieldClassName} placeholder="Enter your password" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <Button type="submit" className={submitButtonClassName} disabled={isPending}>
          {isPending ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </Form>
  );
}
