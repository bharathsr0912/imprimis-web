import { Service } from "@/types/services";

export const services = [
  {
    slug: "fleet-management",
    title: "Fleet Management",
    short: "Monitor, manage, and optimize vehicle fleets in real time.",
    description:
      "Our fleet management solution enables real-time tracking, vehicle diagnostics, route optimization, fuel monitoring, and compliance reporting — all from a single dashboard.",
    images: [
      "/services/fleet-1.png",
      "/services/fleet-2.png",
    ],
    features: [
      "Live vehicle tracking",
      "Route optimization",
      "Fuel & usage analytics",
      "Driver behavior monitoring",
    ],
  },
  {
    slug: "live-tracking",
    title: "Live GPS Tracking",
    short: "Real-time GPS tracking for assets and people.",
    description:
      "Track vehicles, assets, and individuals with high accuracy GPS tracking. Includes geo-fencing, alerts, and historical route playback.",
    images: [
      "/services/tracking-1.png",
    ],
    features: [
      "Real-time GPS location",
      "Geo-fencing alerts",
      "Playback history",
      "Multi-device support",
    ],
  },
  {
    slug: "personal-security",
    title: "Personal Security",
    short: "GPS-based personal safety solutions.",
    description:
      "Personal security tracking with SOS alerts, real-time monitoring, and emergency response integration.",
    images: [],
  },
];