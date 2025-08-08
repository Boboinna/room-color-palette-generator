import type { Metadata } from "next";
import { clsx, type ClassValue } from "clsx";
import { siteConfig } from "@/config/site";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = `${siteConfig.name} ${siteConfig.tagline}`,
  description = siteConfig.description,
  icons = "/favicon.ico",
  noIndex = false,
  keywords = [
    "interior",
    "Interior Design",
    "Redesign Room",
    "Interior design styles",
    "ai interior design",
    "Interior Design Ideas",
    "home design",
    "Interior design of home",
    "design", "free color palette generator", "leave us a comment", "room color palette generator", "leave a suggestion",
    "room design",
    "interior design online",
    "home design",
    "Room renovation",
    "Home decor tool",
    "Room redesign app",
  ],
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  keywords?: string[];
} = {}): Metadata {
  return {
    title,
    description,
    keywords,
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}