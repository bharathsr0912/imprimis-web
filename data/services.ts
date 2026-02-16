import { Service } from "@/types/services";
import { Truck, MapPin, Shield, Package } from "lucide-react";

export const services = [
  {
    slug: "fleet-management",
    title: "Fleet Management",
    icon: Truck,
    short: "Monitor, manage, and optimize vehicle fleets in real time.",
    description:
      "Our fleet management solution enables real-time tracking...",
    images: [
      "/services/fleet-1.png",
      "/services/fleet-2.png",
    ],
  },

  {
    slug: "live-tracking",
    title: "Live GPS Tracking",
    icon: MapPin,
    short: "Real-time GPS tracking for assets and people.",
    description:
      "Track vehicles, assets, and individuals...",
    images: ["/services/tracking-1.png"],
  },

  {
    slug: "personal-security",
    title: "Personal Security",
    icon: Shield,
    short: "GPS-based personal safety solutions.",
    description:
      "Personal security tracking with SOS alerts...",
    images: [],
  },

  {
    slug: "asset-tracking",
    title: "Asset Tracking",
    icon:  Package,
    short: "Real-time tracking and monitoring of valuable assets.",
    description:
      "Track and monitor valuable assets with real-time updates...",
    images: [],
  },
];