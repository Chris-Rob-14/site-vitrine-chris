import type { MetadataRoute } from "next";
import { canonicalUrl, publicPaths } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map(path => ({ url: canonicalUrl(path) }));
}
