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
      "/hero/fleet1.png",
      "/hero/fleet2.png",
    ],
  },

  {
    slug: "live-tracking",
    title: "Live GPS Tracking",
    icon: MapPin,
    short: "Real-time GPS tracking for assets and people.",
    description:
<<<<<<< HEAD
      "Track vehicles, assets, and individuals...",
    images: ["/services/tracking-1.png"],
=======
      "Track vehicles, assets, and individuals with high accuracy GPS tracking. Includes geo-fencing, alerts, and historical route playback.",
    images: [
      "/hero/track1.png",
    ],
    features: [
      "Real-time GPS location",
      "Geo-fencing alerts",
      "Playback history",
      "Multi-device support",
    ],
>>>>>>> ab522e7b5a518df8ddf8762066c2387da26ca4f1
  },

  {
    slug: "personal-security",
    title: "Personal Security",
    icon: Shield,
    short: "GPS-based personal safety solutions.",
    description:
<<<<<<< HEAD
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
=======
      "Personal security tracking with SOS alerts, real-time monitoring, and emergency response integration.",
    images: [
      "/hero/ps1.png",
      "/hero/ps2.png",
    ],
    features: [
      "Authentication",
      "Privacy Protection",
      "Access Control",
      "Threat Detection & Prevention",
    ],
  },
  {
    slug: "Assest-tracking",
    title: "Asset Tracking",
    short: "Real-time tracking and monitoring of valuable assets.",
    description:
       "Asset tracking solutions with GPS-based location monitoring, geofencing, theft detection, usage analytics, and real-time alerts to ensure asset safety, visibility, and operational efficiency.",
    images: [
      "/hero/a1.png",
    ],
    features: [
      "Real-time GPS location",
      "Geo-fencing alerts",
      "Playback history",
      "Multi-device support",
    ],
>>>>>>> ab522e7b5a518df8ddf8762066c2387da26ca4f1
  },
];