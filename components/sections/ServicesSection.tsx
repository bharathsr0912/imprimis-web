
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { services, serviceTranslations } from "@/data/services";

export default function ServicesSection() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/fr') ? 'fr' : 'en';

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white text-center sm:text-left">
        {locale === 'fr' ? 'Nos Services' : 'Our Services'}
      </h2>

      {/* Grid */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
        {services.map((service) => {
          const translation = locale === 'fr' ? serviceTranslations.fr[service.slug] : null;
          const title = translation ? translation.title : service.title;
          const short = translation ? translation.short : service.short;

          return (
            <div
              key={service.slug}
              className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 hover:shadow-lg transition flex flex-col items-center text-center"
            >
              {/* ICON */}
              <div className="mb-4 flex items-center justify-center">
                <service.icon className="h-12 w-12 text-cyan-500" />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>

              {/* Short description */}
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 flex-1">
                {short}
              </p>

              {/* Link */}
              <Link
                href={`/services/${service.slug}`}
                className="mt-4 inline-block text-sm text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                {locale === 'fr' ? 'En savoir plus →' : 'Learn more →'}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}