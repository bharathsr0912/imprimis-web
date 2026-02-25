
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

  // 5 SLIDES (Main + 4 Services)
  const slides = [
    {
      title: "Smart IoT Solutions",
      highlight: "for Modern Businesses",
      description:
        "Empowering fleet management, smart water management, asset tracking, and personal security with scalable real-time IoT technology.",
      imageLight: "/hero/iot-hero.png",
      imageDark: "/hero/iot-hero1.png",
    },
    {
      title: "Fleet",
      highlight: "Management",
      description:
        "Monitor, manage, and optimize vehicle fleets in real time.",
      imageLight: "/hero/fleet1.png",
      imageDark: "/hero/fleet2.png",
    },
    {
      title: "Smart Water",
      highlight: "Management",
      description:
        "Automate irrigation, detect leaks, and monitor water usage in real-time.",
      imageLight: "/hero/track1.png",
      imageDark: "/hero/track1.png",
    },
    {
      title: "Personal",
      highlight: "Security",
      description:
        "GPS-based personal safety solutions with SOS alerts and emergency integration.",
      imageLight: "/hero/ps1.png",
      imageDark: "/hero/ps2.png",
    },
    {
      title: "Asset",
      highlight: "Tracking",
      description:
        "Real-time GPS asset monitoring with geofencing and theft detection.",
      imageLight: "/hero/a1.png",
      imageDark: "/hero/a1.png",
    },
  ];

  const totalSlides = slides.length;

  if (!mounted) return null;

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % totalSlides);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="relative bg-white dark:bg-slate-900"
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const diff = touchStartX.current - e.changedTouches[0].clientX;
          if (diff > 50) nextSlide();
          if (diff < -50) prevSlide();
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-8 overflow-hidden">

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 grid items-center gap-10 lg:grid-cols-2"
                >
                  {/* TEXT */}
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
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className="hidden md:flex justify-center lg:justify-end">
                    <Image
                      src={
                        theme === "dark"
                          ? slide.imageDark
                          : slide.imageLight
                      }
                      alt={slide.title}
                      width={560}
                      height={460}
                      className="rounded-xl object-contain"
                      draggable={false}
                      priority={index === current}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ARROWS */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-3 rounded-full shadow"
          >
            ◀
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-3 rounded-full shadow"
          >
            ▶
          </button>
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