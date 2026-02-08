import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Our Services
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
          Imprimisis provides reliable IoT solutions for tracking, safety, and
          operational intelligence.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.slug}
            className="
              flex flex-col rounded-lg border
              bg-white dark:bg-slate-900
              border-slate-200 dark:border-slate-800
              p-6
              hover:shadow-md transition
            "
          >
            {/* Title */}
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300">
              {service.short}
            </p>

            {/* Read more */}
            <Link
              href={`/services/${service.slug}`}
              className="mt-4 inline-block text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
