import Link from "next/link";
import { services } from "@/data/services";

function ServiceIcon({ slug }: { slug: string }) {
  switch (slug) {
    case "fleet-management":
      return (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="11" width="18" height="6" rx="2" />
          <path d="M5 11V7h14v4" />
        </svg>
      );
    case "live-tracking":
      return (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="10" r="3" />
          <path d="M12 2v2M12 18v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4" />
        </svg>
      );
    case "personal-security":
      return (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServicesSection() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Our Services
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
          Powerful IoT solutions designed to improve visibility, safety, and
          operational efficiency.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service) => (
          <div
            key={service.slug}
            className="
              group rounded-xl border border-slate-200 dark:border-slate-800
              bg-white dark:bg-slate-900 p-6
              hover:shadow-lg transition
            "
          >
            {/* Icon */}
            <div
              className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400
            object-cover transition-transform duration-300 group-hover:scale-105"
            >
              <ServiceIcon slug={service.slug} />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {service.short}
            </p>

            {/* CTA */}
            <Link
              href={`/services/${service.slug}`}
              className="mt-4 inline-block text-sm font-medium text-cyan-600 dark:text-cyan-400 group-hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
