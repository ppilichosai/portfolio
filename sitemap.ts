import type { MetadataRoute } from "next";
import { site } from "@/content/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date(), alternates: { languages: { el: `${site.url}/el` } } },
    { url: `${site.url}/el`, lastModified: new Date(), alternates: { languages: { en: site.url } } },
  ];
}
