import React, { useContext, useEffect, createContext } from "react";
import { useLocalStorage } from "./useLocalStorage"; // make sure this path is correct

type ThemeMode = "Light" | "Dark";

type ThemeModeContext = {
  theme: ThemeMode;
  setTheme: React.Dispatch<React.SetStateAction<ThemeMode>>;
};

export const ThemeContext = createContext<ThemeModeContext>({
  theme: "Dark",
  setTheme: () => {},
});

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useLocalStorage<ThemeMode>("theme", "Dark");

  useEffect(() => {
    document.body.classList.toggle("theme-light", theme !== "Dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within ThemeContextProvider");
  }

  return context;
}
