"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TeamSection from "@/components/sections/TeamSection";
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
  className="relative overflow-hidden bg-white dark:bg-slate-900 py-16"
>
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      
      {/* Left Content */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Smart IoT Solutions
          <span className="block text-cyan-600 dark:text-cyan-400">
            for Modern Businesses
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
          Empowering fleet management, Smart Water Management, and personal
          security with scalable, real-time IoT technology.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/#services"
            className="inline-flex items-center justify-center rounded-md bg-cyan-600 px-6 py-3 text-sm font-medium text-white hover:bg-cyan-700 transition"
          >
            Get Started
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative hidden lg:block">
        <Image
          src={heroImage}
          alt="IoT solutions illustration"
          width={560}
          height={460}
          priority
          className="rounded-xl"
        />
      </div>

    </div>
  </div>
</section>
      <section id="about" className="py-12">
        <div className="animate-fade-up">
          <AboutSection />
        </div>
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      {/* <section id="team" className="py-24">
        <div className="animate-fade-up">
          <TeamSection />
        </div>
      </section> */}

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}