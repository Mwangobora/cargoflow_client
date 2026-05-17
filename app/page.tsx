import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

async function resolveAuthRedirect() {
  const envBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.trim();
  const requestHost = (await headers()).get("host")?.split(":")[0] || "localhost";
  const fallbackBaseUrl = `http://${requestHost}:8000/api/v1`;
  const baseUrl = (envBaseUrl || fallbackBaseUrl).replace(/\/+$/, "");
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
