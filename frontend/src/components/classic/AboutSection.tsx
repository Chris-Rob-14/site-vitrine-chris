export function AboutSection() {
  return (
    <section id="about" className="py-20 border-t border-border/40 relative overflow-hidden">
      {/* Background glow element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">
          Qui suis-je <span className="text-primary">?</span>
        </h2>
        
        <div className="p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Je suis un <strong className="text-foreground font-semibold">Ingénieur applicatif orienté produit</strong>, spécialisé dans la conception et la modernisation d'applications métiers. 
          </p>
          <p>
            Mon approche se distingue par un <strong className="text-primary font-semibold">profil hybride</strong> : je combine une expertise technique approfondie en développement Full Stack et architecture applicative, avec une vision claire du pilotage fonctionnel. Cette double casquette me permet de <strong className="text-secondary font-semibold">faire le pont entre les besoins métiers complexes et les solutions techniques robustes</strong>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 mt-6 border-t border-border/50">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Vision Produit</h3>
              <p className="text-sm">Compréhension des processus métiers et automatisation au service de l'utilisateur final.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Architecture</h3>
              <p className="text-sm">Conception de systèmes scalables, réduction de la dette technique et modernisation.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Pilotage Agile</h3>
              <p className="text-sm">Cadrage technique, chiffrage (T-Shirt Sizing), priorisation MoSCoW et suivi des KPIs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
