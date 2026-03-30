import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="container mx-auto pl-4 pr-20 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">À propos</a>
          <a href="#experience" className="hover:text-primary transition-colors">Expérience</a>
          <a href="#skills" className="hover:text-primary transition-colors">Compétences</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projets</a>
        </nav>
      </div>
    </header>
  );
}
