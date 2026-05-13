"use client";

import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";
  const isHomePage = pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`;

  const handleSectionClick = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${currentLocale}`);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(`/${currentLocale}`);
    }
  };

  return (
    <footer className="border-t bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={handleLogoClick}
              className="text-lg font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors bg-transparent border-none p-0 cursor-pointer"
            >
              Imprimis
            </button>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 max-w-xs">
              Smart IoT solutions for Automated Smart Agriculture, Smart Water Management &amp; personal security.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${currentLocale}/services/${service.slug}`}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-left"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleSectionClick("about")}
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("how-it-works")}
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("contact")}
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a href="mailto:contact@imprimis.in" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors break-all">
                  contact@imprimis.in
                </a>
              </li>
              <li>
                <a href="tel:08040998204" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  080-40998204
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 h-px bg-slate-200 dark:bg-slate-800" />

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Imprimis. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" aria-label="Twitter">
              <FaXTwitter size={18} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" aria-label="Facebook">
              <FaFacebook size={18} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}