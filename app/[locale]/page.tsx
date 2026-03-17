"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import Image from "next/image";
import Link from "next/link";
import ScrollHash from "@/components/scroll/ScrollHash";

const translations = {
  en: {
    title1: "Smart IoT Solutions",
    title2: "for Modern Businesses",
    description:
      "Empowering automated smart agriculture, smart water management, asset tracking, and personal security with scalable real-time IoT technology.",
    btn1: "Explore Solutions",
    btn2: "Contact Us",
  },
  fr: {
    title1: "Solutions IoT Intelligentes",
    title2: "pour les Entreprises Modernes",
    description:
      "Automatisation de l'agriculture intelligente, gestion de l'eau, suivi des actifs et sécurité personnelle avec une technologie IoT évolutive en temps réel.",
    btn1: "Explorer les Solutions",
    btn2: "Nous Contacter",
  },
};

export default function HomePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";
  const t = translations[currentLocale];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main>
      <ScrollHash />

      {/* HERO */}
      <section className="relative bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              {t.title1}
              <span className="block text-cyan-600 dark:text-cyan-400">
                {t.title2}
              </span>
            </h1>
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-slate-600 dark:text-slate-300 text-lg">
              {t.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={`/${currentLocale}/services`}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-md text-sm font-medium transition text-center"
              >
                {t.btn1}
              </Link>
              <Link
                href={`/${currentLocale}/contact`}
                className="bg-cyan-600 text-white px-8 py-3 rounded-md text-sm font-medium transition hover:bg-cyan-700"
              >
                {t.btn2}
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src={theme === "dark" ? "/hero/Iot-hero1.png" : "/hero/Iot-hero.png"}
              alt="Smart IoT Solutions"
              width={600}
              height={500}
              className="rounded-xl object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* ABOUT - Grey */}
      <section id="about" className="py-16 bg-gray-100 dark:bg-slate-800">
        <AboutSection />
      </section>

      {/* SERVICES - White */}
      <section id="services" className="py-16 bg-white dark:bg-slate-900">
        <ServicesSection />
      </section>

      {/* HOW IT WORKS - Grey */}
      <section id="how-it-works" className="py-16 bg-gray-100 dark:bg-slate-800">
        <HowItWorksSection />
      </section>

      {/* CONTACT - White */}
      <section id="contact" className="py-16 bg-white dark:bg-slate-900">
        <ContactSection />
      </section>
    </main>
  );
}