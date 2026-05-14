import { create } from "zustand";

type ThemeMode = "light" | "dark" | "system";

type UiState = {
  sidebarCollapsed: boolean;
  theme: ThemeMode;
  toggleSidebar: () => void;
  setTheme: (theme: ThemeMode) => void;
};

export const useUiStore = create<UiState>((set) => ({
  sidebarCollapsed: false,
  theme: "system",
  toggleSidebar: () =>
    set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  setTheme: (theme) => set({ theme }),
}));
