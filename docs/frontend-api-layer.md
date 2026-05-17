# CargoFlow Frontend API Layer

## Structure
- `src/apis/*`: class-based API modules.
- `src/types/*`: module contracts for entities, list filters, create/update payloads.
- `src/lib/api-utils.ts`: shared params cleaner and list helpers.
- `src/lib/query-keys.ts`: centralized React Query keys.
- `src/features/*/hooks/*`: module hooks (list/detail/create/update baseline).

## Axios/Auth
- Uses `axiosClient` from `src/apis/axios-client.ts`.
- `withCredentials: true` is enabled globally.
- Auth stays cookie-based (HttpOnly cookies from backend).
- No token storage in `localStorage`.

## Class Pattern
Each module follows:
- `list(params)`
- `getById(id)`
- `create(payload)`
- `update(id, payload)`
- `remove(id)` when backend supports delete/soft-delete
- custom methods for real backend actions only

## Implemented Modules (real backend endpoints)
- `auth.api.ts`
- `dashboard.api.ts`
- `customer.api.ts`
- `shipment.api.ts`
- `payment.api.ts`
- `trip.api.ts`
- `route.api.ts`
- `vehicle.api.ts`
- `driver.api.ts`
- `branch.api.ts`
- `price-rule.api.ts`
- `user.api.ts`
- `report.api.ts` (dashboard-backed chart/comparison reads)

## Not Yet Available in Backend (skipped)
- Dedicated daily closing module API
- Dedicated delivery confirmation module API
- Dedicated roles/permissions API in active v1 router

Temporary placeholders exist:
- `daily-closing.api.ts`
- `delivery-confirmation.api.ts`

These intentionally throw clear messages until backend endpoints are exposed.

## Query Hooks Baseline
Added reusable hooks for:
- customers, shipments, payments, trips
- routes, vehicles, drivers, branches
- users, pricing
- reports, daily-closings (placeholder-backed)

## Error Handling
- Use `mapApiError()` for user-friendly messaging.
- Avoid leaking raw Axios/JWT/internal stack messages to UI.

## Adding a New Module
1. Confirm backend URL + payload contract.
2. Add `src/types/<module>.ts`.
3. Add `src/apis/<module>.api.ts` class.
4. Add query keys in `src/lib/query-keys.ts`.
5. Add baseline hooks in `src/features/<module>/hooks`.
6. Re-run lint and TypeScript checks.
