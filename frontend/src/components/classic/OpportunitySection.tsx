export function OpportunitySection() {
  return (
    <section id="opportunities" className="py-20 border-t border-border/40 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 mx-auto h-64 w-[70%] rounded-full bg-primary/5 blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Ce que je <span className="text-primary">recherche</span>
        </h2>
        <div className="p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Je recherche aujourd'hui des opportunites d'Analyste Fonctionnel IT, Business Analyst
            ou Chef de Projet IT Junior dans lesquelles je pourrai mettre a profit ma double
            competence metier et technique.
          </p>
        </div>
      </div>
    </section>
  );
}
