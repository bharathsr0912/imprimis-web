"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import Image from "next/image";
import Link from "next/link";
import ScrollHash from "@/components/scroll/ScrollHash";

export default function HomePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main>
<<<<<<< HEAD
      {/* HERO SECTION */}
      <ScrollHash />
=======

      {/* HERO */}
>>>>>>> 8db55ac (changes done in service page and added new section , cleared 403 error)
      <section className="relative bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid items-center gap-12 lg:grid-cols-2">

          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Smart IoT Solutions
              <span className="block text-cyan-600 dark:text-cyan-400">
                for Modern Businesses
              </span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-slate-600 dark:text-slate-300 text-lg">
              Empowering automated smart agriculture, smart water management, asset tracking,
              and personal security with scalable real-time IoT technology.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/#services"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-md text-sm font-medium transition text-center"
              >
                Explore Solutions
              </Link>

              <Link
                href="/#contact"
                className="bg-cyan-600 text-white px-8 py-3 rounded-md text-sm font-medium transition hover:bg-cyan-700"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={
                theme === "dark"
                  ? "/hero/Iot-hero1.png"
                  : "/hero/Iot-hero.png"
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

      {/* ABOUT - Grey */}
      <section
        id="about"
        className="py-16 bg-gray-100 dark:bg-slate-800"
      >
        <AboutSection />
      </section>

      {/* SERVICES - White */}
      <section
        id="services"
        className="py-16 bg-white dark:bg-slate-900"
      >
        <ServicesSection />
      </section>

      {/* HOW IT WORKS - Grey */}
      <section
        id="how-it-works"
        className="py-16 bg-gray-100 dark:bg-slate-800"
      >
        <HowItWorksSection />
      </section>

      {/* CONTACT - White */}
      <section
        id="contact"
        className="py-16 bg-white dark:bg-slate-900"
      >
        <ContactSection />
      </section>

    </main>
  );
}