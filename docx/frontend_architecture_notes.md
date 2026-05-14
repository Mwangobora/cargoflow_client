# Frontend Architecture Notes

## Principles Applied
- Keep feature/business logic out of presentational UI components.
- Use thin pages/components, shared providers, and reusable primitives.
- Keep API and state layers centralized and testable.

## Current Foundation
- UI primitives: `components/ui/`
- API transport: `lib/api/client.ts`
- Global client state: `stores/`
- Server state/caching: `providers/query-provider.tsx` + React Query
- Forms/validation baseline: RHF + Zod reusable example
- Tables baseline: generic `DataTable`
- Chart baseline: Recharts component
- Motion baseline: reusable fade-in wrapper

## Next Feature-Ready Direction
- Add `features/` folders (e.g., `features/customers`, `features/shipments`)
- Add query hooks per feature (`useCustomersQuery`, etc.)
- Add auth refresh strategy and token persistence contract
- Add UI theme provider integration with `ui-store`
