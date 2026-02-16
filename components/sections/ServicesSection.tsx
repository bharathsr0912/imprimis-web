import Link from "next/link";
import { services } from "@/data/services";

function ServiceIcon({ slug }: { slug: string }) {
  switch (slug) {
    case "fleet-management":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="6" rx="2" />
          <path d="M5 11V7h14v4" />
        </svg>
      );

    case "live-tracking":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="10" r="3" />
          <path d="M12 2v2M12 18v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4" />
        </svg>
      );

    case "personal-security":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z" />
        </svg>
      );

    case "asset-tracking":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.3 7l8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      );

    default:
      return null;
  }
}

export default function ServicesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Our Services
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.slug}
              className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-md transition"
            >
              <div className="mb-4 text-cyan-600 dark:text-cyan-400">
                <ServiceIcon slug={service.slug} />
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {service.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {service.description}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="mt-4 inline-block text-sm text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}