// src/components/ThemeClient.tsx
import { useEffect } from "react";

export default function ThemeClient() {
  useEffect(() => {
    const applyTheme = () => {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else if (savedTheme === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        if (prefersDark) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }
    };

    applyTheme();
    window.addEventListener("astro:after-swap", applyTheme);
    return () => window.removeEventListener("astro:after-swap", applyTheme);
  }, []);

  return null; // no render visible
}
