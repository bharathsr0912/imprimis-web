"use client";

import { usePathname } from "next/navigation";

const content = {
  en: {
    title: "Our Team",
    subtitle: "A passionate team of engineers and innovators building IoT solutions.",
  },
  fr: {
    title: "Notre Équipe",
    subtitle: "Une équipe passionnée d'ingénieurs et d'innovateurs qui construisent des solutions IoT.",
  },
};

export default function TeamSection() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/fr') ? 'fr' : 'en';
  const t = content[locale];

  return (
    <div className="mx-auto max-w-7xl px-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        {t.title}
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        {t.subtitle}
      </p>
    </div>
  );
}