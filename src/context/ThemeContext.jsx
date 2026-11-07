import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Direct two-state theme: 'dark' | 'light'
  //
  // Guarded for server rendering: the prerender script renders this tree in
  // Node, where `localStorage` does not exist. Reading it unguarded would
  // throw during render and no static HTML would be produced. The try/catch
  // also covers browsers that block storage in private mode.
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";

    try {
      const saved =
        localStorage.getItem("riajul_theme_mode") ||
        localStorage.getItem("riajul_theme");
      return saved === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.setAttribute("data-theme", theme);
    body.setAttribute("data-theme", theme);

    if (theme === "light") {
      body.classList.add("light-theme");
      body.classList.remove("dark-theme");
    } else {
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
    }

    try {
      localStorage.setItem("riajul_theme", theme);
      localStorage.setItem("riajul_theme_mode", theme);
    } catch {
      // Storage unavailable (private mode / blocked cookies): the theme still
      // applies for this session, it just will not persist.
    }
  }, [theme]);

  // Direct toggle function like an ON/OFF switch
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setThemeMode = (newMode) => {
    if (newMode === "light" || newMode === "dark") {
      setTheme(newMode);
    } else {
      setTheme("dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        mode: theme,
        effectiveTheme: theme,
        isDark: theme === "dark",
        toggleTheme,
        setTheme,
        setThemeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
