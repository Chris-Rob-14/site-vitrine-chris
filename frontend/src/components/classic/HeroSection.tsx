import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center text-center space-y-8" id="hero">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        Disponible pour de nouvelles missions
      </div>

      <div className="space-y-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter">
          Christopher <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-[0_0_8px_rgba(255,94,0,0.4)]">Robine</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-sans font-medium text-foreground/80">
          Chef de Projet Technique | Product Engineer
        </h2>
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          <Badge variant="outline" className="border-primary/50 text-foreground bg-background hover:bg-primary/10 transition-colors">Architecture applicative</Badge>
          <Badge variant="outline" className="border-primary/50 text-foreground bg-background hover:bg-primary/10 transition-colors">Pilotage technique</Badge>
          <Badge variant="outline" className="border-secondary/50 text-foreground bg-background hover:bg-secondary/10 transition-colors">Modernisation d'applications</Badge>
        </div>
      </div>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-4">
        Ingénieur applicatif orienté produit spécialisé dans la conception et la modernisation d'applications métiers. 
        Profil hybride combinant développement full stack, architecture applicative et pilotage technique de projets.
      </p>

      <div className="flex gap-4 pt-6">
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--drop-shadow-glow-orange)]">
          Découvrir mes projets
        </Button>
        <Button size="lg" variant="outline" className="border-border hover:bg-muted text-foreground">
          Me contacter
        </Button>
      </div>
    </section>
  );
}
