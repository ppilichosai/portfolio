import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import { site } from "@/content/site";
import { en } from "@/content/en";
import { el } from "@/content/el";
import "@/app/globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Public_Sans({ subsets: ["latin", "greek"], variable: "--font-body", display: "swap" });

export const viewport: Viewport = { themeColor: "#061120", width: "device-width", initialScale: 1, viewportFit: "cover" };

export function meta(lang: "en" | "el"): Metadata {
  const t = lang === "en" ? en : el;
  const path = lang === "en" ? "/" : "/el";
  return {
    metadataBase: new URL(site.url),
    title: t.metaTitle,
    description: t.metaDesc,
    authors: [{ name: site.name, url: site.linkedin }],
    icons: { icon: "/icon.svg" },
    alternates: { canonical: path, languages: { en: "/", el: "/el", "x-default": "/" } },
    openGraph: { type: "profile", url: path, siteName: site.name, title: t.metaTitle, description: t.metaDesc, locale: lang === "en" ? "en_GB" : "el_GR", images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }] },
    twitter: { card: "summary_large_image", title: t.metaTitle, description: t.metaDesc, images: ["/og.png"] },
    robots: { index: true, follow: true },
  };
}

export function Shell({ lang, children }: { lang: "en" | "el"; children: React.ReactNode }) {
  const ld = { "@context": "https://schema.org", "@type": "Person", name: site.name, jobTitle: "Senior IT Project Manager and Service Owner", address: { "@type": "PostalAddress", addressLocality: "Athens", addressCountry: "GR" }, sameAs: [site.linkedin], url: site.url };
  return (
    <html lang={lang} className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        {children}
      </body>
    </html>
  );
}
