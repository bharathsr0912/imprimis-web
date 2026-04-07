import { LucideIcon } from "lucide-react";

export interface WhatItDoesItem {
  title: string;
  imageLabel: string;
  imageNote: string;
  imageIcon: string;
  body: string;
  bulletPoints: string[];
}

export interface CapabilityItem {
  icon: string;
  title: string;
  description: string;
}

export interface DesignedAroundCard {
  icon: string;
  title: string;
  description: string;
}

export interface DesignedAround {
  intro: string;
  cards: DesignedAroundCard[];
}

export interface Cta {
  heading: string;
  body: string;
}

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  description: string;
  images: string[];
  heroImageAlt?: string;
  features: string[];
  whatItDoes?: WhatItDoesItem[];
  moreCapabilities?: CapabilityItem[];
  designedAround?: DesignedAround;
  cta?: Cta;
};