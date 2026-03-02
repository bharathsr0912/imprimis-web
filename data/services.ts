
import { Service } from "@/types/services";
import { Truck, Droplets, Shield, Box } from "lucide-react";

export const services: Service[] = [
  {
    slug: "fleet-management",
    title: "Fleet Management",
    icon: Truck,
    short: "IoT-powered monitoring and automation for smarter, more efficient farming operations.",
    description:
      "Imprimis Automated Smart Agriculture gives farmers and agribusinesses real-time visibility and automated control over their fields, crops, and resources — all from a single connected platform. IoT sensors deployed across your land continuously monitor soil conditions, crop health, weather, and water availability, feeding live data into a dashboard that helps you make faster, more informed decisions. From smallholder farms to large commercial operations, we design and deploy the solution around your land, your crops, and the way you work — reducing manual effort, cutting resource wastage, and helping you get more from every acre.",
    images: ["/hero/fleet1.png", "/hero/fleet2.png"],
    features: [
      "Soil health monitoring",
      "Automated irrigation control",
      "Weather & microclimate monitoring",
      "Centralised farm dashboard",
    ],
  },

  {
    slug: "smart-water-management",
    title: "Smart Water Management",
    icon: Droplets,
    short: "IoT-powered monitoring and control of water supply, quality, and distribution networks.",
    description:
      "Imprimis Smart Water Management brings real-time intelligence to water supply networks — giving municipalities, utilities, and industrial operators complete visibility over water quality, flow, pressure, and distribution from a single connected platform. Every sensor, valve, and meter in your network feeds live data into a centralised dashboard, so your team can monitor, respond, and take action instantly — from anywhere. Our core solution is built around city-level water supply management, and we extend the same platform to industrial facilities, agriculture, and commercial buildings — designing each deployment around the specific infrastructure and requirements of the operator.",
    images: ["/hero/track1.png"],
    features: [
      "Water quality monitoring",
      "Supply quantity & flow monitoring",
      "Remote valve control via application",
      "Leak detection & loss prevention",
    ],
  },

  {
    slug: "personal-security",
    title: "Personal Security",
    icon: Shield,
    short: "GPS-based personal safety solutions for individuals, field teams, and lone workers.",
    description:
      "Imprimis Personal Security gives individuals, field teams, and organisations a reliable way to stay connected and protected — wherever they are. Built on IoT and real-time GPS, the solution combines live location tracking, instant SOS alerts, and emergency response tools into a single, easy-to-use platform. Whether you're looking to protect lone workers in remote areas, keep field staff safe during operations, or give individuals and families greater peace of mind, we design the solution around your specific safety requirements.",
    images: ["/hero/ps1.png", "/hero/ps2.png"],
    features: [
      "Real-time location tracking",
      "One-tap SOS & panic alerts",
      "Safe zones & boundary alerts",
      "Wearable device support",
    ],
  },

  {
    slug: "asset-tracking",
    title: "Asset Tracking",
    icon: Box,
    short: "Real-time tracking and monitoring of your valuable assets — wherever they are.",
    description:
      "Imprimis Asset Tracking gives businesses complete visibility over their valuable equipment, inventory, and assets — in real time, from a single platform. Whether your assets are moving across a supply chain or stored across multiple facilities, you always know exactly where they are, their condition, and when something needs your attention. From heavy construction equipment and IT hardware to containers, vehicles, and high-value inventory, we design and configure the tracking solution around your specific assets and operational environment.",
    images: ["/hero/a1.png"],
    features: [
      "Real-time asset location",
      "Theft detection & tamper alerts",
      "Usage analytics & reporting",
      "Multi-site visibility from a single dashboard",
    ],
  },
];