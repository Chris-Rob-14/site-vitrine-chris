import { profile } from "@/data/profile";
import { home } from "@/data/homepage";
import { buttonVariants } from "@/components/ui/button-variants";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export function CtaSection() {
  return (
    <section
      id="contact"
      tabIndex={-1}
      className="py-24 border-t border-border/40 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-8 p-5 sm:p-10 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-md relative">
          <Sparkles className="absolute top-6 left-6 w-6 h-6 text-primary/40 animate-pulse" />
          <Sparkles className="absolute bottom-6 right-6 w-8 h-8 text-secondary/40 animate-pulse delay-700" />

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {home.ctaTitle}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">{home.contact}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href={`mailto:${profile.email}`}
              className={
                buttonVariants({ size: "lg" }) +
                " min-h-14 h-auto whitespace-normal px-4 sm:px-8 text-base sm:text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(255,94,0,0.4)] hover:shadow-[0_0_30px_rgba(255,94,0,0.6)] transition-all"
              }
            >
              <Mail className="w-5 h-5 mr-2" />
              M’écrire par e-mail
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              aria-label="Me contacter sur LinkedIn (nouvel onglet)"
              rel="noreferrer"
              className={
                buttonVariants({ size: "lg", variant: "outline" }) +
                " min-h-14 h-auto whitespace-normal px-4 sm:px-8 text-base sm:text-lg font-bold border-border hover:border-primary/50 hover:bg-primary/10 transition-all text-foreground"
              }
            >
              Me contacter sur LinkedIn
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
