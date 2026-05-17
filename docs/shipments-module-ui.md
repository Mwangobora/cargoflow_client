# CargoFlow Shipments Module UI

## Scope Completed
This delivery implemented the first full operational UI module for **Shipments** in the dashboard app.

Implemented areas:
- Shipments list page
- Shipment detail page
- Create shipment flow (drawer)
- Edit shipment flow (drawer, safe update fields)
- Cancel shipment flow (confirmation dialog)
- Status update actions on detail page
- TanStack table with sorting + pagination + row actions
- Friendly error, loading, and empty states

## Backend Shipment Operations Consumed
Base path: `/api/v1/shipments/`

Used endpoints:
- `GET /shipments/` list + filters
- `POST /shipments/` create
- `GET /shipments/{id}/` detail
- `PATCH /shipments/{id}/` update safe fields
- `DELETE /shipments/{id}/` soft-cancel/deactivate
- `POST /shipments/{id}/status/` status transition
- `GET /shipments/by-receipt/{receipt_number}/` available via API layer

Used related data endpoints:
- `GET /api/v1/customers/lookup/?q=...` for sender/receiver selection
- `GET /api/v1/operations/routes/` for route selection

## Fields Used in Forms
### Create Shipment
- `sender_customer_id`
- `receiver_customer_id`
- `route_id`
- `cargo_description`
- `weight_kg`
- `size_category`
- `declared_value_tzs`

### Edit Shipment (safe updates only)
- `cargo_description`
- `weight_kg`
- `size_category`
- `declared_value_tzs`

## Pages Added
- `src/app/(dashboard)/shipments/page.tsx`
- `src/app/(dashboard)/shipments/[id]/page.tsx`

## Components Added
Path: `src/features/shipments/components/`
- `shipment-list-toolbar.tsx`
- `shipment-table.tsx`
- `shipment-columns.tsx`
- `shipment-table-pagination.tsx`
- `shipment-form-drawer.tsx`
- `shipment-form.tsx`
- `shipment-detail-card.tsx`
- `shipment-status-badge.tsx`
- `shipment-actions-menu.tsx`
- `shipment-delete-dialog.tsx`
- `shipment-error-state.tsx`
- `shipment-empty-state.tsx`
- `shipment-loading-grid.tsx`

## Hooks Added
Path: `src/features/shipments/hooks/`
- `use-shipments.ts`
- `use-shipment.ts`
- `use-create-shipment.ts`
- `use-update-shipment.ts`
- `use-delete-shipment.ts`
- `use-cancel-shipment.ts`
- `use-update-shipment-status.ts`

## UI/UX Notes
- Clerk-friendly layout with compact toolbar and clear actions
- Input style aligned with auth forms
- Non-technical error messaging using existing error mapper
- Action safety via confirm dialog before cancellation
- Row action menu supports View / Edit / Cancel
- Table designed for responsive horizontal scroll and readable columns

## Constraints & Assumptions
1. Shipment read serializer currently returns a **minimal payload**:
   - `id`, `receipt_number`, `sender_name`, `receiver_name`, `route_info`, `status`, `charged_amount`, `created_at`
2. Payment status is not present in shipment list/detail response currently, so payment badge/column is not shown.
3. Shipment detail page reflects the current backend read serializer fields only.
4. Branch filter was not added to this page because shipment form/list UX was prioritized around confirmed fields and available lookup endpoints.

## Validation & Quality
- TypeScript check: passed
- ESLint check: passed
- File-size policy respected (`.ts/.tsx` under 120 lines)

## Recommended Next UI Module
Build **Payments UI** next to complete shipment-to-payment operational flow for front desk and finance users.
