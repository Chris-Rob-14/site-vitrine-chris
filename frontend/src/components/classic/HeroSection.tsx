import Link from "next/link";
import { profile } from "@/data/profile";
import { home } from "@/data/homepage";
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
        <p className="text-base md:text-xl font-medium text-foreground/80">
          {profile.transversePositioning}
        </p>
        <p className="text-2xl md:text-4xl font-semibold tracking-tight pt-4">
          {profile.tagline}
        </p>
      </div>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-4">
        {home.introduction}
      </p>

      <div className="flex flex-wrap justify-center gap-4 pt-6">
        <a
          href="#facets"
          className={
            buttonVariants({ size: "lg" }) +
            " min-h-11 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--drop-shadow-glow-orange)]"
          }
        >
          Découvrir mes facettes
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
        <Link
          href="/contact"
          className={
            buttonVariants({ size: "lg", variant: "outline" }) +
            " min-h-11 border-border hover:bg-muted text-foreground"
          }
        >
          Me contacter
        </Link>
      </div>
    </section>
  );
}
