import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navigation } from "@/data/navigation";
import Link from "next/link";
import { MobileNavigation } from "./MobileNavigation";

export function Header({ currentHref }: { currentHref?: string }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-2">
        <Logo />
        <div className="flex items-center gap-2 lg:gap-6">
          <nav
            aria-label="Navigation principale"
            className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.href === currentHref ? "page" : undefined}
                className="inline-flex min-h-11 items-center hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <MobileNavigation currentHref={currentHref} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
