"use client";

import Link from "next/link";
import ThemeToggle from "@/components/theme/theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-200
  hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            Imprimisis
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/#about"
              className="transition-colors duration-200
  hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              About
            </Link>

            <Link
              href="/#services"
              className="transition-colors duration-200
  hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              Services
            </Link>

            {/* <Link
              href="/#team"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white "
            >
              Team
            </Link> */}

            <Link
              href="/#contact"
              className="transition-colors duration-200
  hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              Contact
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
