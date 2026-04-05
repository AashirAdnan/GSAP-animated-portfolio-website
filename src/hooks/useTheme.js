import { useEffect, useMemo, useState } from "react";

const THEME_KEY = "theme";

const getSystemTheme = () => {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const getStoredTheme = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const storedTheme = window.localStorage.getItem(THEME_KEY);
  return storedTheme === "dark" || storedTheme === "light" ? storedTheme : null;
};

const getInitialTheme = () => getStoredTheme() ?? getSystemTheme();

const useTheme = () => {
  const [theme, setThemeState] = useState(getInitialTheme);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => {
      if (getStoredTheme()) {
        return;
      }

      setThemeState(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const api = useMemo(
    () => ({
      theme,
      setTheme: (value) => {
        if (value === "dark" || value === "light") {
          setThemeState(value);
        }
      },
      toggleTheme: () => {
        setThemeState((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
      },
    }),
    [theme],
  );

  return api;
};

export default useTheme;
