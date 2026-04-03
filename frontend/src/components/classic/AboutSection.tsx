export function AboutSection() {
  return (
    <section id="about" className="py-20 border-t border-border/40 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">
          Qui suis-je <span className="text-primary">?</span>
        </h2>

        <div className="p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Je suis un{" "}
            <strong className="text-foreground font-semibold">
              Developpeur Full Stack oriente produit
            </strong>
            , avec une appetence forte pour le cadrage technique, la fiabilite des solutions et la
            lisibilite des systemes dans le temps.
          </p>
          <p>
            Au quotidien, je travaille autant sur le code que sur la structuration des besoins :
            chiffrage, decoupage, choix techniques, anticipation des cas limites, gestion des erreurs
            et reflexion sur la scalabilite. Mon objectif est de proposer des solutions utiles,
            robustes et maintenables, en gardant toujours en tete les contraintes metier.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 mt-6 border-t border-border/50">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Vision produit</h3>
              <p className="text-sm">
                Comprendre le besoin metier pour concevoir des solutions utiles, pragmatiques et
                rapidement confrontables au terrain.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Conception technique</h3>
              <p className="text-sm">
                Reflechir a la structure du code, aux donnees, aux cas limites et a la maintenabilite
                sans perdre de vue le contexte reel du projet.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Pilotage</h3>
              <p className="text-sm">
                Aider au decoupage, au chiffrage, a la priorisation et a la securisation des
                livraisons pour faire avancer le projet de facon fiable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
