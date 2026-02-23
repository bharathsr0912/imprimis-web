"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const slides = [
    {
      title: "Smart IoT Solutions",
      highlight: "for Modern Businesses",
      description:
        "Empowering fleet management, Smart Water Management, and personal security with scalable real-time IoT technology.",
      image:
        theme === "dark"
          ? "/hero/Iot-hero1.png"
          : "/hero/Iot-hero.png",
    },
    {
      title: "Intelligent",
      highlight: "Smart Water Management",
      description:
        "Automate irrigation, detect leaks, and monitor water usage in real-time using connected IoT systems.",
      image:
        theme === "dark"
          ? "/hero/Iot-hero1.png"
          : "/hero/Iot-hero.png",
    },
    {
      title: "Advanced",
      highlight: "Fleet & Asset Tracking",
      description:
        "Track vehicles and assets with GPS dashboards, analytics, and real-time monitoring.",
      image:
        theme === "dark"
          ? "/hero/Iot-hero1.png"
          : "/hero/Iot-hero.png",
    },
  ];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main>
      {/* HERO CAROUSEL */}
      <section
        className="relative overflow-hidden bg-white dark:bg-slate-900"
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const diff = touchStartX.current - e.changedTouches[0].clientX;
          if (diff > 50) nextSlide();
          if (diff < -50) prevSlide();
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-14">

          {/* Slides Container */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full grid items-center gap-10 lg:grid-cols-2"
              >
                {/* Text */}
                <div className="text-center lg:text-left">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                    {slide.title}
                    <span className="block text-cyan-600 dark:text-cyan-400">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                    <Link
                      href="/#services"
                      className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-md text-sm font-medium transition"
                    >
                      Explore Solutions
                    </Link>
                    <Link
                      href="/#contact"
                      className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="hidden md:flex justify-center lg:justify-end">
                  <Image
                    src={slide.image}
                    alt="IoT Illustration"
                    width={560}
                    height={460}
                    priority
                    className="rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-3 rounded-full shadow hover:scale-110 transition"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-3 rounded-full shadow hover:scale-110 transition"
          >
            ▶
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  current === index
                    ? "w-8 bg-cyan-600"
                    : "w-2 bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16">
        <AboutSection />
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-16 bg-slate-50 dark:bg-slate-800"
      >
        <ServicesSection />
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Get started in three simple steps.
          </p>

          <div className="mt-12 grid gap-10 text-left sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-cyan-600">
                1. Deploy Devices
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Install IoT sensors and trackers across your operations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-cyan-600">
                2. Connect Dashboard
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Devices sync instantly with your smart dashboard.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-cyan-600">
                3. Act on Insights
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Use real-time data to optimize performance and reduce costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16">
        <ContactSection />
      </section>
    </main>
  );
}