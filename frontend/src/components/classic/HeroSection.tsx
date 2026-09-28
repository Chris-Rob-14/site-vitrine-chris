import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";

export function HeroSection() {
  return (
    <section
      className="py-20 md:py-32 flex flex-col items-center text-center space-y-8"
      id="hero"
    >
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter">
          {profile.firstName}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-[0_0_8px_rgba(255,94,0,0.4)]">
            {profile.lastName}
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-sans font-medium text-foreground/80">
          {profile.homepage.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {profile.homepage.badges.map((badge, index) => (
            <Badge
              key={badge}
              variant="outline"
              className={
                index === 2
                  ? "border-secondary/50 text-foreground bg-background hover:bg-secondary/10 transition-colors"
                  : "border-primary/50 text-foreground bg-background hover:bg-primary/10 transition-colors"
              }
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-4">
        {profile.homepage.bio}
      </p>

      <div className="flex flex-wrap justify-center gap-4 pt-6">
        <a
          href="#projects"
          className={
            buttonVariants({ size: "lg" }) +
            " min-h-11 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--drop-shadow-glow-orange)]"
          }
        >
          Découvrir mes projets
        </a>
        <a
          href={profile.cv}
          download
          className={
            buttonVariants({ size: "lg", variant: "outline" }) +
            " min-h-11 border-primary/30 hover:bg-primary/10 text-foreground"
          }
        >
          Télécharger mon CV
        </a>
        <a
          href="#contact"
          className={
            buttonVariants({ size: "lg", variant: "outline" }) +
            " min-h-11 border-border hover:bg-muted text-foreground"
          }
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
