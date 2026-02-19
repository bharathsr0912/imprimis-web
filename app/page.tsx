"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Image from "next/image";

export default function HomePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const heroImage =
    theme === "dark" ? "/hero/Iot-hero1.png" : "/hero/Iot-hero.png";

  return (
    <main>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden bg-white dark:bg-slate-900"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-12">
          <div className="grid items-center gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="animate-fade-up text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                Smart IoT Solutions
                <span className="block text-cyan-600 dark:text-cyan-400">
                  for Modern Businesses
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 mx-auto lg:mx-0 max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-300">
                Empowering fleet management, live GPS tracking, and personal
                security with scalable, real-time IoT technology.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center rounded-md bg-cyan-600 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-white hover:bg-cyan-700 transition"
                >
                  Get Started
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Hero Image — hidden on mobile, shown from md up */}
            <div className="relative hidden md:flex justify-center lg:justify-end">
              <Image
                src={heroImage}
                alt="IoT solutions illustration"
                width={560}
                height={460}
                priority
                className="rounded-xl transition-opacity duration-300 w-full max-w-sm md:max-w-md lg:max-w-none"
              />
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
      </section>

      <section id="about" className="py-12 sm:py-16 lg:py-20">
        <div className="animate-fade-up">
          <AboutSection />
        </div>
      </section>

      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-800">
        <ServicesSection />
      </section>

      <section id="contact" className="py-12 sm:py-16 lg:py-20">
        <ContactSection />
      </section>
    </main>
  );
}