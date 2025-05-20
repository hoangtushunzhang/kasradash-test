import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsStore {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  settings: {
    name: string;
    email: string;
    password: string;
    profilePicture?: string;
    notifications: boolean;
  };
  updateSettings: (settings: Partial<SettingsStore['settings']>) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      darkMode: false,
      setDarkMode: (darkMode) => set({ darkMode }),
      settings: {
        name: "",
        email: "",
        password: "",
        notifications: true,
      },
      updateSettings: (newSettings) => set((state) => ({
        settings: { ...state.settings, ...newSettings },
      })),
    }),
    {
      name: "settings-storage", // name of item in storage
    }
  )
); 