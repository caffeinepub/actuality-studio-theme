import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import {
  THEMES,
  type ThemeDefinition,
  type ThemeId,
} from "../themes/themeData";

interface ThemeContextValue {
  activeTheme: ThemeId;
  setTheme: (id: ThemeId) => void;
  theme: ThemeDefinition;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<ThemeId>("dawn");

  const theme = THEMES[activeTheme];

  useEffect(() => {
    const root = document.documentElement;
    for (const [key, val] of Object.entries(theme.cssVars)) {
      root.style.setProperty(key, val);
    }
    document.body.style.background = theme.groundGradient;
    document.body.style.minHeight = "100vh";
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ activeTheme, setTheme: setActiveTheme, theme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
