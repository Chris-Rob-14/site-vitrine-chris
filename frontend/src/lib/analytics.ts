import { canonicalUrl, isPublicPath, siteUrl, type PublicPath } from "./site";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
let initialized = false;
let lastPageLocation: string | undefined;

export function analyticsEnabled() {
  return process.env.NODE_ENV === "production"
    && process.env.NEXT_PUBLIC_GA_ENABLED !== "false"
    && Boolean(measurementId && /^G-[A-Z0-9]+$/.test(measurementId))
    && typeof window !== "undefined"
    && window.location.origin === siteUrl;
}

function measuredLocation(path: PublicPath, search: string) {
  const url = new URL(canonicalUrl(path));
  const params = new URLSearchParams(search);
  // Only the three public, predefined campaigns may enter Analytics URLs.
  const source = params.get("utm_source");
  const medium = params.get("utm_medium");
  const campaign = params.get("utm_campaign");
  if (
    (path === "/formation" && source === "qr" && medium === "print" && campaign === "school_outreach") ||
    (path === "/" && source === "qr" && medium === "print" && campaign === "business_card") ||
    (path === "/" && source === "linkedin" && medium === "social" && campaign === "profile")
  ) {
    url.searchParams.set("utm_source", source!);
    url.searchParams.set("utm_medium", medium!);
    url.searchParams.set("utm_campaign", campaign!);
  }
  return url.href;
}

function initialReferrer() {
  if (!document.referrer) return "";
  try {
    const referrer = new URL(document.referrer);
    return referrer.origin === siteUrl && isPublicPath(referrer.pathname)
      ? canonicalUrl(referrer.pathname)
      : referrer.origin;
  } catch { return ""; }
}

function initialize(pageLocation: string, referrer: string) {
  if (initialized) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    // The Google tag queue expects an Arguments object, not a custom payload.
    // eslint-disable-next-line prefer-rest-params -- Preserve the documented gtag queue format.
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false,
    page_location: pageLocation,
    page_referrer: referrer,
    allow_google_signals: false,
  });
  const script = document.createElement("script");
  script.id = "google-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
  initialized = true;
}

export function trackPageView(path: string, search: string) {
  if (!analyticsEnabled()) return;
  if (!isPublicPath(path)) {
    lastPageLocation = undefined;
    return;
  }
  const location = measuredLocation(path, search);
  if (location === lastPageLocation) return;
  const referrer = lastPageLocation ? lastPageLocation.split("?")[0] : initialReferrer();
  initialize(location, referrer);
  window.gtag?.("set", { page_location: location, page_referrer: referrer });
  window.gtag?.("event", "page_view", {
    page_location: location,
    page_path: path,
    page_referrer: referrer,
    page_title: document.title,
  });
  lastPageLocation = location;
}

type Placement = "header" | "footer" | "content";
type Facet = "project" | "training" | "development";
type EventParameters = {
  click_email: { placement: Placement };
  click_linkedin: { placement: Placement };
  click_training_cta: { placement: Placement };
  select_facet: { facet: Facet };
  select_project: { project_id: string };
};

function trackEvent<Name extends keyof EventParameters>(name: Name, parameters: EventParameters[Name]) {
  if (!analyticsEnabled() || !initialized || !isPublicPath(window.location.pathname)) return;
  window.gtag?.("event", name, { ...parameters, page_path: window.location.pathname });
}

export function trackLinkClick(event: MouseEvent) {
  if (!(event.target instanceof Element) || event.button !== 0) return;
  const link = event.target.closest<HTMLAnchorElement>("a[href]");
  if (!link) return;
  const placement: Placement = link.closest("footer") ? "footer" : link.closest("header") ? "header" : "content";
  const url = new URL(link.href, window.location.href);
  if (url.protocol === "mailto:") trackEvent("click_email", { placement });
  if (url.protocol === "https:" && url.hostname === "www.linkedin.com") trackEvent("click_linkedin", { placement });
  if (link.dataset.analyticsTrainingCta === "true") trackEvent("click_training_cta", { placement });
  const facet = link.dataset.analyticsFacet;
  if (facet === "project" || facet === "training" || facet === "development") trackEvent("select_facet", { facet });
  const projectId = link.dataset.analyticsProject;
  if (projectId && /^[a-z0-9-]{1,80}$/.test(projectId)) trackEvent("select_project", { project_id: projectId });
}
