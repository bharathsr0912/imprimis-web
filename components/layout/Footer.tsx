import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12">

        {/* 
          Top section:
          - mobile:  stacked
          - sm/md:   2 columns
          - lg:      4 columns
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="text-lg font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              Imprimis
            </Link>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 max-w-xs">
              Smart IoT solutions for fleet management, Smart Water Management &amp; personal security.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-sm text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Get in Touch
            </h4>
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

        {/* Divider */}
        <div className="mt-8 sm:mt-10 h-px bg-slate-200 dark:bg-slate-800" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Imprimis. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}