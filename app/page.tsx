import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function resolveAuthRedirect() {
  const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api/v1").replace(/\/+$/, "");
  const cookieHeader = (await cookies()).toString();

  if (!cookieHeader) return "/login";

  try {
    const response = await fetch(`${baseUrl}/auth/me/`, {
      method: "GET",
      headers: { Cookie: cookieHeader },
      cache: "no-store",
    });

    if (!response.ok) return "/login";

    const user = (await response.json()) as { is_active?: boolean };
    return user.is_active ? "/dashboard" : "/pending-approval?source=login";
  } catch {
    return "/login";
  }
}

export default async function HomePage() {
  const destination = await resolveAuthRedirect();
  redirect(destination);
}
