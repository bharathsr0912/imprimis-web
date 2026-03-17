"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme/theme-toggle";
import { services } from "@/data/services";

const languages = [
  {
    code: "en",
    label: "English",
    flag: "https://flagcdn.com/w40/gb.png",
  },
  {
    code: "fr",
    label: "French",
    flag: "https://flagcdn.com/w40/fr.png",
  },
];

function LanguageDropdown({ currentLocale, onSwitch }: { currentLocale: string; onSwitch: (lang: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === currentLocale);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <img
          src={currentLang?.flag}
          alt={currentLang?.label}
          width={18}
          height={13}
          className="rounded-sm object-cover"
        />
        {currentLang?.label}
        <svg
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
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

      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { onSwitch(lang.code); setOpen(false); }}
              className={`w-full flex items-center gap-2 px-3 py-2 text-xs transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 ${
                currentLocale === lang.code
                  ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              <img
                src={lang.flag}
                alt={lang.label}
                width={18}
                height={13}
                className="rounded-sm object-cover"
              />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.startsWith('/fr') ? 'fr' : 'en';

  const switchLanguage = (lang: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${lang}`);
    router.push(newPath);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href={`/${currentLocale}`}
            className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-200 hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            Imprimis
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href={`/${currentLocale}/about`}
              className="text-slate-600 dark:text-slate-300 transition-colors duration-200 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              {currentLocale === 'fr' ? 'À propos' : 'About'}
            </Link>

            {/* Services Dropdown */}
            <div className="relative group py-2">
              <Link
                href={`/${currentLocale}/services`}
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

              <div className="absolute left-0 top-full z-50 w-56 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition pointer-events-auto">
                <ul className="py-2">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/${currentLocale}/services/${service.slug}`}
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
              href={`/${currentLocale}/contact`}
              className="text-slate-600 dark:text-slate-300 transition-colors duration-200 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              Contact
            </Link>

            <LanguageDropdown currentLocale={currentLocale} onSwitch={switchLanguage} />
            <ThemeToggle />
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageDropdown currentLocale={currentLocale} onSwitch={switchLanguage} />
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {menuOpen ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
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
              href={`/${currentLocale}/about`}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {currentLocale === 'fr' ? 'À propos' : 'About'}
            </Link>

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
                      href={`/${currentLocale}/services`}
                      onClick={() => setMenuOpen(false)}
                      className="block py-1.5 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {currentLocale === 'fr' ? 'Tous les services' : 'All Services'}
                    </Link>
                  </li>
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/${currentLocale}/services/${service.slug}`}
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
              href={`/${currentLocale}/contact`}
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