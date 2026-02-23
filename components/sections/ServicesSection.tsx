import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white text-center sm:text-left">
        Our Solutions
      </h2>

      <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
        {services.map((service) => (
          <div
            key={service.slug}
            className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 sm:p-6 hover:shadow-md transition flex flex-col items-center text-center"
          >
            {/* LOGO */}
            <div className="mb-4">
              <Image
                src={service.logo}
                alt={service.title}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
              {service.title}
            </h3>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 flex-1">
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
  );
}