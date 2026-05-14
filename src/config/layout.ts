export const layout = {
  pageContainer: "w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6",
  pageStack: "space-y-4 sm:space-y-6",
  cardGrid: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6",
  formGrid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  tableWrapper: "overflow-x-auto rounded-lg border border-border bg-card",
  tableInner: "min-w-[720px]",
} as const;

export const typography = {
  pageTitle: "text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight",
  sectionTitle: "text-lg sm:text-xl font-semibold",
  cardTitle: "text-base sm:text-lg font-semibold",
  body: "text-sm sm:text-base",
  small: "text-xs sm:text-sm",
  table: "text-xs sm:text-sm",
} as const;
