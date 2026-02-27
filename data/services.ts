
import { Service } from "@/types/services";
import { Truck, Droplets, Shield, Box } from "lucide-react";

export const services: Service[] = [
  {
    slug: "fleet-management",
    title: "Fleet Management",
    icon: Truck,
    short: "Monitor, manage, and optimize vehicle fleets in real time.",
    description:
      "Our fleet management solution enables real-time tracking...",
    images: ["/hero/fleet1.png", "/hero/fleet2.png"],
    features: [
      "Live vehicle tracking",
      "Route optimization",
      "Fuel & usage analytics",
      "Driver behavior monitoring",
    ],
  },

  {
    slug: "smart-water-management",
    title: "Smart Water Management",
    icon: Droplets,
    short: "Real-time monitoring and analytics for water systems.",
    description:
      "Advanced IoT-powered monitoring system for water usage, leak detection, and automated irrigation.",
    images: ["/hero/track1.png"],
    features: [
      "Leak detection",
      "Water usage analytics",
      "Automated irrigation",
      "Remote monitoring",
    ],
  },

  {
    slug: "personal-security",
    title: "Personal Security",
    icon: Shield,
    short: "GPS-based personal safety solutions.",
    description:
      "Personal security tracking with SOS alerts, real-time monitoring, and emergency response integration.",
    images: ["/hero/ps1.png", "/hero/ps2.png"],
    features: [
      "Authentication",
      "Privacy Protection",
      "Access Control",
      "Threat Detection & Prevention",
    ],
  },

  {
    slug: "asset-tracking",
    title: "Asset Tracking",
    icon: Box,
    short: "Real-time tracking and monitoring of valuable assets.",
    description:
      "Asset tracking solutions with GPS-based location monitoring, geofencing, theft detection, usage analytics, and real-time alerts.",
    images: ["/hero/a1.png"],
    features: [
      "Real-time GPS location",
      "Geo-fencing alerts",
      "Playback history",
      "Multi-device support",
    ],
  },
];