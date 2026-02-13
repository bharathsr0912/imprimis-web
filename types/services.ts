import { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  images: string[];
  icon?: LucideIcon;   
};