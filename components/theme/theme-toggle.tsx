"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
    h-8 px-3 rounded-md text-sm
    border border-slate-300 dark:border-slate-700
    text-slate-700 dark:text-slate-200
    hover:bg-slate-100 dark:hover:bg-slate-800
    transition
  "
    >
      {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}
