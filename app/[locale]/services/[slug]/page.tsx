
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
        scroll={false}
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

      {/* Hero Image */}
      {service.images?.length > 0 && (
        <div className="relative mt-10 h-64 w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
          <Image
            src={service.images[0]}
            alt={service.heroImageAlt ?? service.title}
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

      {/* Key Features */}
      {service.features && service.features.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            Key Features
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-500 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* What It Does */}
      {service.whatItDoes && service.whatItDoes.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-8">
            What It Does
          </h2>
          <div className="flex flex-col gap-12">
            {service.whatItDoes.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start"
              >
                {/* Image placeholder */}
                <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-cyan-400 bg-cyan-50 dark:bg-slate-800 dark:border-slate-600 aspect-[4/3] p-6 text-center">
                  <span className="text-4xl">{item.imageIcon}</span>
                  <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                    {item.imageLabel}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.imageNote}
                  </span>
                </div>
                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {item.body}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {item.bulletPoints.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* More Capabilities */}
      {service.moreCapabilities && service.moreCapabilities.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            More Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.moreCapabilities.map((cap, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 hover:shadow-md transition hover:-translate-y-0.5"
              >
                <span className="text-2xl">{cap.icon}</span>
                <h4 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {cap.title}
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Designed Around Your Requirements */}
      {service.designedAround && (
        <div className="mt-16">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            Designed Around Your Requirements
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {service.designedAround.intro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.designedAround.cards.map((card, i) => (
              <div
                key={i}
                className="rounded-xl border border-cyan-100 dark:border-slate-700 bg-cyan-50 dark:bg-slate-800 p-5 hover:shadow-md transition hover:-translate-y-0.5"
              >
                <span className="text-2xl">{card.icon}</span>
                <h4 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {card.title}
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-20 rounded-2xl bg-slate-50 dark:bg-slate-800 p-10 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {service.cta?.heading ?? `Ready to get started with ${service.title}?`}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
          {service.cta?.body ?? "Talk to our team to see how Imprimis can help you implement scalable, real-time IoT solutions tailored to your business."}
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-md bg-cyan-600 px-6 py-3 text-sm font-medium text-white hover:bg-cyan-700 transition"
            scroll={false}
          >
            Contact Us
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            scroll={false}
          >
            View Other Services
          </Link>
        </div>
      </div>

    </section>
  );
}