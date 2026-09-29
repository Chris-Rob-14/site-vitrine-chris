import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { canonicalUrl, type PublicPath } from "./site";

export function pageMetadata(path: PublicPath, title: string, description: string, absoluteTitle = false): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${profile.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: canonicalUrl(path) },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl(path),
      siteName: profile.name,
      type: "website",
      locale: "fr_FR",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: profile.tagline }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: "/opengraph-image", alt: profile.tagline }],
    },
  };
}
