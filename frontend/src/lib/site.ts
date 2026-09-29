export const siteUrl = "https://christopherrobine.dev";
export const publicPaths = ["/", "/projet", "/formation", "/realisations", "/a-propos", "/contact"] as const;
export type PublicPath = (typeof publicPaths)[number];

export function isPublicPath(path: string): path is PublicPath {
  return publicPaths.some(candidate => candidate === path);
}

export function canonicalUrl(path: PublicPath) {
  return new URL(path, siteUrl).href;
}
