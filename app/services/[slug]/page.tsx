import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      {/* Back link */}
      <Link
        href="/#services"
        className="mb-6 inline-block text-sm text-cyan-600 dark:text-cyan-400 hover:underline"
      >
        ← Back to Services
      </Link>

      {/* Title */}
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        {service.title}
      </h1>

      {/* Short intro */}
      <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
        {service.short}
      </p>

      {/* Hero Image (matches card style) */}
      {service.images?.length > 0 && (
        <div className="relative mt-10 h-64 w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
          <Image
            src={service.images[0]}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Description */}
      <p className="mt-8 max-w-3xl text-slate-600 dark:text-slate-300">
        {service.description}
      </p>

      {/* Additional images (if any) */}
      {service.images && service.images.length > 1 && (
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {service.images.slice(1).map((img, index) => (
            <div
              key={index}
              className="relative h-48 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800"
            >
              <Image
                src={img}
                alt={`${service.title} image ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* CTA SECTION */}
      <div className="mt-20 rounded-2xl bg-slate-50 dark:bg-slate-800 p-10 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Ready to get started with {service.title}?
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
          Talk to our team to see how Imprimisis can help you implement
          scalable, real-time IoT solutions tailored to your business.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-cyan-600 px-6 py-3 text-sm font-medium text-white hover:bg-cyan-700 transition"
          >
            Contact Us
          </Link>

          <Link
            href="/#services"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
          >
            View Other Services
          </Link>
        </div>
      </div>
    </section>
  );
}
