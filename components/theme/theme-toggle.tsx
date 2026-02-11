"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative w-24 h-8 rounded-full border
        transition-colors duration-300
        ${isDark
          ? "bg-slate-800 border-slate-700"
          : "bg-slate-200 border-slate-300"}
      `}
      aria-label="Toggle Theme"
    >
      {/* Slider */}
      <span
        className={`
          absolute top-1 left-1 h-6 w-14 rounded-full
          bg-white dark:bg-slate-900
          shadow-md
          flex items-center justify-center
          text-xs font-semibold
          transition-transform duration-300
          ${isDark ? "translate-x-8" : "translate-x-0"}
        `}
      >
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
