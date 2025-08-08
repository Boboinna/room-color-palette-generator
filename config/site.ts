import { SiteConfig } from "@/types";

const site_url = process.env.NEXT_PUBLIC_APP_URL!;

export const siteConfig: SiteConfig = {
  name: "Free Room Color Palette Generator",
  tagline: "| Interior Design colors for your rooms",
  description:
    "Create a color palette for your room or anything else for free today with our color palette generator with various theme palette examples.",
  url: site_url,
};

