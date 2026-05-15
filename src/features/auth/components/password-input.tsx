"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import type { ChangeEvent, FocusEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type PasswordInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  name?: string;
  className?: string;
};

export function PasswordInput(props: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input {...props} type={show ? "text" : "password"} />
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="absolute right-1 top-1 h-9 w-9 rounded-md"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
      </Button>
    </div>
  );
}
