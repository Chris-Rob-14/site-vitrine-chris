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
            Je me positionne avant tout comme un{" "}
            <strong className="text-foreground font-semibold">
              analyste fonctionnel avec un socle de developpement full stack
            </strong>
            . Ce qui m&apos;interesse d&apos;abord, c&apos;est de comprendre le besoin, de clarifier le probleme
            a resoudre et de construire une reponse utile, lisible et actionnable.
          </p>
          <p>
            Au quotidien, je travaille sur le recueil du besoin, le chiffrage, le decoupage en lots,
            la priorisation, l&apos;identification des risques et la coordination des acteurs, puis je
            mobilise le developpement quand il permet de concretiser la bonne solution. Mon objectif
            est d&apos;aider a prendre de meilleures decisions avant, pendant et apres l&apos;execution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 mt-6 border-t border-border/50">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Analyse fonctionnelle</h3>
              <p className="text-sm">
                Comprendre le besoin metier, poser le bon cadre et transformer une demande floue en
                sujet exploitable.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Structuration</h3>
              <p className="text-sm">
                Decouper, chiffrer, prioriser et faire apparaitre les dependances, les risques et les
                arbitrages utiles.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Execution technique</h3>
              <p className="text-sm">
                Concevoir et mettre en oeuvre des solutions robustes quand la technique est le bon
                levier pour faire avancer le projet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
