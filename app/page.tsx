
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid items-center gap-12 lg:grid-cols-2">
          
          {/* TEXT */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Smart IoT Solutions
              <span className="block text-cyan-600 dark:text-cyan-400">
                for Modern Businesses
              </span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-slate-600 dark:text-slate-300 text-lg">
              Empowering fleet management, smart water management, asset tracking,
              and personal security with scalable real-time IoT technology.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                href="/#services"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-md text-sm font-medium transition"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={
                theme === "dark"
                  ? "/hero/iot-hero1.png"
                  : "/hero/iot-hero.png"
              }
              alt="Smart IoT Solutions"
              width={600}
              height={500}
              className="rounded-xl object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16">
        <AboutSection />
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-slate-50 dark:bg-slate-800">
        <ServicesSection />
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16">
        <ContactSection />
      </section>
    </main>
  );
}