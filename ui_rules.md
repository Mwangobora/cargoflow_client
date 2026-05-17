# CargoFlow Frontend UI Rules

These rules must be read before building or editing any module.

## 1. General UI Direction

CargoFlow is an enterprise Transport Management System.

The UI must feel:
- clean
- professional
- minimal
- readable
- operational
- trustworthy
- easy for non-technical staff

Avoid:
- vibe-coded UI
- random colors
- tiny inputs
- weak borders
- childish gradients
- excessive blur
- oversized empty spaces
- technical wording shown to users

## 2. File Size Rule

No `.ts` or `.tsx` file may exceed 120 lines.

If a file becomes large:
- split components
- extract hooks
- extract constants
- extract columns
- extract schemas
- extract helpers
- extract dialogs/forms/cards

CSS files may exceed 120 lines.

## 3. Colors

Use the global color system.

Primary:
#0F766E

Primary hover:
#115E59

Sidebar:
#0B1120

Background:
#F8FAFC

Card:
#FFFFFF

Border:
#E2E8F0

Text primary:
#0F172A

Text muted:
#475569

Status colors:
success: #16A34A
warning: #F59E0B
danger: #DC2626
info: #0284C7

Do not hardcode colors in components unless necessary.
Use Tailwind/theme tokens.

## 4. Typography

Use Inter as the main font.

Page title:
text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight

Section title:
text-lg sm:text-xl font-semibold

Card title:
text-base sm:text-lg font-semibold

Body text:
text-sm sm:text-base

Small text:
text-xs sm:text-sm

Table text:
text-xs sm:text-sm

Metric numbers:
text-3xl lg:text-4xl font-bold

Avoid very small unreadable text.

## 5. Inputs

All inputs must be visible and comfortable.

Use this style:

h-11 rounded-lg border-slate-300 bg-white text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary

Labels:
text-sm font-medium text-foreground

Error text:
text-sm text-danger

Helper text:
text-xs text-muted-foreground

Rules:
- never use placeholder-only fields
- always show labels
- avoid tiny fields
- avoid blue default browser focus
- keep field spacing consistent
- show field-level errors below fields

## 6. Textareas

Use:

min-h-24 rounded-lg border-slate-300 bg-white text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary

Textareas should be full width when the content is long.

## 7. Selects and Comboboxes

Select triggers must match input height and style.

Use:
h-11 rounded-lg border-slate-300 bg-white text-sm shadow-sm focus:ring-2 focus:ring-primary

Rules:
- use clear labels
- use searchable combobox for long lists
- do not show raw UUIDs
- show human-friendly names

## 8. Forms

Forms must be easy for clerks and managers to use without training.

Rules:
- group related fields into sections
- use clear section titles
- mobile: one column
- desktop: two columns where suitable
- long text fields should span full width
- submit button must show loading state
- disable submit while loading
- required fields must be clear
- errors must be friendly

Recommended form sections:
- Basic Information
- Customer Information
- Route & Cargo
- Pricing & Payment
- Notes

Avoid:
- too many fields in one row
- cramped form layouts
- unclear labels
- technical field names

## 9. Drawers / Sheets

Use drawers for create/edit actions.

Desktop:
- right-side drawer
- width: w-full sm:max-w-xl lg:max-w-2xl
- sticky header
- scrollable body
- sticky footer

Mobile:
- full width
- scrollable
- buttons easy to tap

Overlay:
bg-black/30

Avoid heavy blur:
- no backdrop-blur-lg
- no excessive background distortion

Drawer header:
- clear title
- short description
- border bottom

Drawer footer:
- Cancel button
- Save/Create button
- border top
- buttons aligned right on desktop
- full width buttons on mobile if needed

## 10. Buttons

Primary button:
- bg-primary
- hover:bg-primary-hover
- h-11
- rounded-lg
- font-medium

Secondary button:
- outline or muted style

Danger button:
- use only for destructive actions

Rules:
- button labels must be clear
- show loading state
- disable during submit
- avoid icon-only buttons unless tooltip/label exists

## 11. Tables

Use TanStack Table + shadcn/ui table components.

Rules:
- table logic separate from page
- columns in separate file
- no raw UUIDs in user-facing columns
- use readable dates and currency
- include row actions menu
- support search/filter/pagination
- wrap table with horizontal scroll on mobile

Table columns should be user-friendly.

Example:
- Receipt No.
- Sender
- Receiver
- Route
- Status
- Payment
- Amount
- Created
- Actions

Avoid backend-only fields unless needed.

## 12. Cards

Cards must have:
- bg-card
- border
- rounded-2xl
- shadow-sm or shadow-md
- clean padding
- clear title
- readable content

Dashboard stat cards:
- label small
- metric large
- icon subtle
- trend/context small

Avoid weak cards with tiny numbers.

## 13. Status Badges

Use consistent badges.

Success:
delivered, paid, completed, active

Warning:
pending, unpaid, open

Info:
in transit, arrived, loading

Danger:
cancelled, refunded, failed, inactive

Badges must be subtle, readable, and not too bright.

## 14. Dialogs / Confirm Cards

Use AlertDialog for destructive or sensitive actions.

Dialog text must be non-technical.

Example:
Title:
Cancel this shipment?

Message:
This shipment will no longer continue in the delivery process. The record will still be kept for reports.

Buttons:
Keep shipment
Cancel shipment

Never use scary technical wording.

## 15. Empty States

Every list/table must have a clean empty state.

Empty state should include:
- simple icon
- title
- short helpful message
- action button if suitable

Example:
Title:
No shipments yet

Message:
Create the first shipment when a customer brings cargo to the office.

Button:
Create shipment

## 16. Loading States

Use skeletons, not blank screens.

Use:
- table skeleton
- card skeleton
- form submit loading
- page loading state

Never leave users wondering.

## 17. Error States

Errors must be friendly.

Do not show:
- AxiosError
- Request failed with status code
- JWT
- token
- stack trace
- raw JSON

Examples:
401:
Your session has expired. Please sign in again.

403:
You do not have permission to perform this action.

404:
The record was not found.

500:
Something went wrong. Please try again.

Network:
We could not connect to the server. Please check your connection.

## 18. Icons

Use lucide-react icons.

Rules:
- icons should be simple and consistent
- size usually h-4 w-4 or h-5 w-5
- do not overuse icons
- icon color should be muted unless active
- active sidebar icon uses primary/white depending background
- destructive icons use danger only when needed

## 19. Sidebar

Enterprise sidebar rules:
- dark background
- grouped navigation
- icons + labels
- clear active state
- collapsible on desktop
- drawer on mobile
- tooltips in collapsed mode
- no clutter

Use business-friendly names:
Dashboard
Shipments
Customers
Payments
Trips
Routes
Vehicles
Drivers
Daily Closing
Reports
Users & Roles
Settings

## 20. Topbar

Topbar should include:
- page search
- notifications
- user menu
- mobile sidebar toggle

Search belongs in topbar, not inside every dashboard header unless module-specific.

Topbar must be compact and not waste vertical space.

## 21. Page Layout

Use consistent page structure:

PageHeader
Toolbar/filters
Main content

Spacing:
px-4 sm:px-6 lg:px-8
py-4 sm:py-6
gap-4 sm:gap-6

Do not create huge empty hero sections inside dashboard pages.

## 22. Responsive Rules

Mobile:
- one column
- drawer full width
- tables scroll horizontally
- tabs scroll horizontally
- buttons easy to tap

Tablet:
- two-column cards/forms where suitable

Desktop:
- sidebar visible
- content uses 3–4 card columns
- forms can use two columns

Large desktop:
- content should not stretch too wide
- use max-w-screen-2xl

## 23. Tabs

Use tabs when a page has many categories.

Rules:
- active tab must be clear
- tabs should not float in huge empty space
- horizontal scroll on mobile
- keep tab labels short

## 24. API and Errors

Use class-based API files.

Each module must have its own API file.

Example:
shipment.api.ts
customer.api.ts
payment.api.ts

Do not call axios directly inside components.

Components call hooks.
Hooks call API classes.
API classes use axios client.

## 25. State and Data

Use:
- Zustand for UI/global state
- TanStack Query for server state
- React Hook Form + Zod for forms

Do not store server data manually in Zustand unless necessary.

Do not store tokens in localStorage.

## 26. User Wording

Use product-friendly language.

Good:
Sign in to continue managing cargo operations.

Bad:
JWT expired. Unauthorized request.

Good:
Create shipment

Bad:
Submit payload

Good:
Daily Closing

Bad:
Reconciliation entity

## 27. Module Building Rule

Before building any module, inspect:
- backend model
- serializer
- viewset/endpoints
- frontend API file
- frontend types
- existing hooks
- permissions if available

Do not guess fields or actions.

## 28. Final Report Required

After every module change, report:
- files created
- files updated
- operations supported
- APIs used
- UI components created
- missing backend features
- known issues