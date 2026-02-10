"use client";

import Link from "next/link";
import ThemeToggle from "@/components/theme/theme-toggle";
import { services } from "@/data/services";

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

            {/* <Link
              href="/#services"
              className="transition-colors duration-200
  hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              Services
            </Link> */}

            <div className="relative group">
              {/* Services main link */}
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                Services
                <svg
                  className="h-4 w-4 transition-transform group-hover:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              {/* Dropdown */}
              <div
                className="
                  absolute left-0 top-full z-50 mt-2 w-56
                  rounded-lg border border-slate-200 dark:border-slate-800
                  bg-white dark:bg-slate-900
                  shadow-lg
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition
                "
              >
                <ul className="py-2">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="
                          block px-4 py-2 text-sm
                          text-slate-700 dark:text-slate-300
                          hover:bg-slate-100 dark:hover:bg-slate-800
                          hover:text-cyan-600 dark:hover:text-cyan-400
                        "
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
          </div>

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
