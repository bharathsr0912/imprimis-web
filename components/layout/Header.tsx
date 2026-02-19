"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/theme/theme-toggle";
import { services } from "@/data/services";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-200 hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            Imprimis
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/#about"
              className="text-slate-600 dark:text-slate-300 transition-colors duration-200 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group py-2">
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
                  absolute left-0 top-full z-50 w-56
                  rounded-lg border border-slate-200 dark:border-slate-800
                  bg-white dark:bg-slate-900
                  shadow-lg
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition
                  pointer-events-auto
                "
              >
                <ul className="py-2">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/#contact"
              className="text-slate-600 dark:text-slate-300 transition-colors duration-200 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              Contact
            </Link>

            <ThemeToggle />
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {menuOpen ? (
                /* X icon */
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <nav className="flex flex-col px-6 py-4 gap-1 text-sm font-medium">
            <Link
              href="/#about"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              About
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between py-2 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {servicesOpen && (
                <ul className="pl-4 flex flex-col gap-1 mb-1">
                  <li>
                    <Link
                      href="/services"
                      onClick={() => setMenuOpen(false)}
                      className="block py-1.5 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      All Services
                    </Link>
                  </li>
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="block py-1.5 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
