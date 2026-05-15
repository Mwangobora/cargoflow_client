# CargoFlow Frontend Auth

## Backend endpoints used
Base: `/api/v1/auth`
- `POST /register/`
- `POST /login/`
- `POST /refresh/`
- `POST /logout/`
- `GET /me/`

## Auth flow
1. User submits login form.
2. Frontend calls login endpoint.
3. Backend sets access and refresh tokens as HttpOnly cookies.
4. Frontend stores only user/session state (no tokens).
5. If an API request returns `401`, interceptor calls `/auth/refresh/` with credentials.
6. Backend rotates cookies.
7. Original request is retried automatically.

## Pending approval flow
- Register creates user with `is_active=false`.
- Login/refresh includes `approval_pending` in response body.
- If pending, UI routes user to `/pending-approval`.

## Files
- API: `src/apis/axios-client.ts`, `src/apis/auth.api.ts`
- Types: `src/types/auth.ts`
- Schemas: `src/schemas/auth.schema.ts`
- Store: `src/stores/auth-store.ts`
- Hooks: `src/features/auth/hooks/*`
- Components: `src/features/auth/components/*`
- Pages: `app/(auth)/login`, `register`, `pending-approval`
- Errors: `src/lib/error-message.ts`

## Cookie and token strategy
- No localStorage token usage.
- No client-readable token cookie usage.
- Access and refresh tokens are backend-managed HttpOnly cookies.
- Frontend sends `withCredentials: true`.

## Route protection
- `AuthGuard` checks current user with `me()`.
- Redirects unauthenticated users to `/login`.
- Redirects pending users to `/pending-approval`.

## Extending later
- Add reset-password UI using existing backend endpoints.
- Add role-based route guards using `user.permissions`.
- Add app-level bootstrap query for `me()` in top-level layout.
