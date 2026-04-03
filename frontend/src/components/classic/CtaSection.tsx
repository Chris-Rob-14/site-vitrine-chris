import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export function CtaSection() {
  return (
    <section id="contact" className="py-24 border-t border-border/40 relative overflow-hidden">
      {/* Background glow element */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 text-center space-y-12">
        
        {/* Key Metrics / KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
            <p className="text-4xl font-black text-primary mb-2">4</p>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Ans d'expérience</p>
          </div>
          <div className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
            <p className="text-4xl font-black text-secondary mb-2">10</p>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Projets Livrés</p>
          </div>
          <div className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
            <p className="text-4xl font-black text-purple-500 mb-2">100%</p>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Focus Produit</p>
          </div>
          <div className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
            <p className="text-4xl font-black text-blue-500 mb-2">∞</p>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Lignes de code</p>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto space-y-8 p-10 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-md relative">
          <Sparkles className="absolute top-6 left-6 w-6 h-6 text-primary/40 animate-pulse" />
          <Sparkles className="absolute bottom-6 right-6 w-8 h-8 text-secondary/40 animate-pulse delay-700" />
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Prêt à <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">collaborer ?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Que vous ayez besoin d'une refonte technique complète, du lancement d'un nouveau MVP ou d'un renfort sur votre architecture applicative, je suis disponible pour en discuter.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a 
              href="mailto:christopher.robine@gmail.com" 
              className={buttonVariants({ size: "lg" }) + " h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(255,94,0,0.4)] hover:shadow-[0_0_30px_rgba(255,94,0,0.6)] transition-all"}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Prendre Rendez-vous
            </a>
            
            <a 
              href="https://www.linkedin.com/in/christopher-robine-767981134/" 
              target="_blank" 
              rel="noreferrer"
              className={buttonVariants({ size: "lg", variant: "outline" }) + " h-14 px-8 text-lg font-bold border-border hover:border-primary/50 hover:bg-primary/10 transition-all text-foreground"}
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
