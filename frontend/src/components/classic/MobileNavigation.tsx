"use client";
import { useRef } from "react";
import { Menu } from "lucide-react";
import { navigation, type NavigationItem } from "@/data/navigation";
import Link from "next/link";

export function MobileNavigation({ items = navigation, currentHref }: { items?: NavigationItem[]; currentHref?: string }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  return (
    <details
      ref={detailsRef}
      className="group lg:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape" && detailsRef.current?.open) {
          detailsRef.current.open = false;
          summaryRef.current?.focus();
        }
      }}
    >
      <summary
        ref={summaryRef}
        className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-border"
      >
        <Menu aria-hidden="true" className="h-5 w-5" />
        <span className="sr-only">Menu de navigation</span>
      </summary>
      <nav
        aria-label="Navigation mobile"
        className="absolute inset-x-0 top-full border-b border-border bg-background p-4 shadow-lg"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={item.href === currentHref ? "page" : undefined}
            className="flex min-h-11 items-center rounded-lg px-4 hover:bg-muted"
            onClick={() => {
              if (detailsRef.current) detailsRef.current.open = false;
              if (item.href.startsWith("#")) {
                document.querySelector<HTMLElement>(item.href)?.focus({ preventScroll: true });
              }
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
