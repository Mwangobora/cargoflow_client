# CargoFlow Frontend

Frontend client for CargoFlow Transport Management System, built with Next.js App Router, TypeScript, Tailwind CSS, and a modular component/data layer.

## Stack
- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4
- shadcn/ui + Radix UI
- Axios API client
- Zustand (state management)
- TanStack React Query
- React Hook Form + Zod
- TanStack React Table
- Recharts
- Framer Motion
- Lucide React icons

## Project Structure
- `app/` App Router pages and layout
- `components/ui/` shadcn base UI components
- `components/examples/` small setup validation components
- `components/animations/` reusable motion wrappers
- `components/data-table/` reusable table layer
- `components/charts/` reusable chart components
- `lib/api/` API client and transport utilities
- `providers/` app-wide React providers
- `stores/` Zustand stores
- `docx/` implementation activity logs and setup notes

## Environment
Create `.env.local`:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1
```

## Local Development
```bash
npm install
npm run dev
```

## Quality Checks
```bash
npx tsc --noEmit
npm run lint
```

## UI Toolkit Notes
- `components.json` is initialized for shadcn/ui.
- Core UI building blocks were added and are ready for feature modules.
- Keep business logic out of UI components; feature flows should call service hooks + API layer.

## API Layer Notes
- `lib/api/client.ts` uses `NEXT_PUBLIC_API_BASE_URL`.
- JWT interceptor scaffold is included (reads `access_token` from `localStorage`).
- Extend interceptors for refresh-token flow when auth endpoints are finalized.
