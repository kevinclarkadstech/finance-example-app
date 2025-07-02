import { useEffect } from "react";
import { useReactive } from "../useReactive/useReactive";
import { currentTheme$ } from "@shared/state/global/current-theme";

export function useCurrentTheme() {
  useReactive(currentTheme$);
  useEffect(() => {
    let theme: "light" | "dark" = "light";
    const prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const prefersDark = prefersDarkQuery.matches;
    console.log("prefersDark", prefersDark);
    const fromLocalStorage = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    console.log("fromLocalStorage", fromLocalStorage);
    if (fromLocalStorage) {
      theme = fromLocalStorage;
    } else if (prefersDark) {
      theme = "dark";
    } else {
      theme = "light";
    }
    currentTheme$.subscribe(() => {
      console.log("Setting theme on dom", currentTheme$.value);
      toggleThemeClass();
      localStorage.setItem("theme", currentTheme$.value);
    });

    currentTheme$.set(theme);
  }, []);

  function toggleThemeClass() {
    if (currentTheme$.value === "dark") {
      document.querySelector("html")!.classList.add("ion-palette-dark");
    } else {
      document.querySelector("html")!.classList.remove("ion-palette-dark");
    }
  }

  function toggleTheme() {
    const newTheme = currentTheme$.value === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    currentTheme$.set(newTheme);
  }

  return { theme: currentTheme$.value, toggleTheme };
}
