import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = {
  mode: "light" | "dark";
  toggleDarkMode: () => void;
};

const useTheme = create<Theme>()((set) => ({
  mode: "light",
  toggleDarkMode: () =>
    set((state) => ({ mode: state.mode === "light" ? "dark" : "light" })),
}));
