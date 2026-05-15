"use client";

import { ChevronDown, LogOut, Settings, UserCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogout } from "@/src/features/auth/hooks/use-logout";
import { useAuthStore } from "@/src/stores/auth-store";

export function UserMenu() {
  const router = useRouter();
  const { mutateAsync, isPending } = useLogout();
  const user = useAuthStore((s) => s.user);

  const handleLogout = async () => {
    await mutateAsync();
    router.replace("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="h-10 gap-2" />}>
        <UserCircle2 className="size-4" />
        <span className="hidden sm:inline">{user?.full_name ?? "User"}</span>
        <ChevronDown className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-1.5 text-xs text-muted-foreground">{user?.role ?? "Staff account"}</div>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Settings className="size-4" />Settings</DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout} disabled={isPending}>
          <LogOut className="size-4" />{isPending ? "Signing out..." : "Sign out"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
