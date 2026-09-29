"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { analyticsEnabled, trackLinkClick, trackPageView } from "@/lib/analytics";

export function GoogleAnalytics() {
  const pathname = usePathname();
  const search = useSearchParams().toString();

  useEffect(() => {
    trackPageView(pathname, search);
  }, [pathname, search]);

  useEffect(() => {
    if (!analyticsEnabled()) return;
    document.addEventListener("click", trackLinkClick);
    return () => document.removeEventListener("click", trackLinkClick);
  }, []);

  return null;
}
