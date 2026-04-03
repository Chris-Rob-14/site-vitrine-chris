export function WorkApproachSection() {
  const pillars = [
    {
      title: "Livrer pour apprendre",
      description:
        "Je privilegie des livrables concrets et testables rapidement sur le terrain afin de confronter les idees a l'usage reel. Selon le contexte, le code est avant tout un moyen de valider une hypothese metier, d'obtenir des retours utiles et d'eviter d'investir trop tot dans une complexite inutile.",
    },
    {
      title: "Structurer pour prioriser",
      description:
        "J'aide a clarifier le besoin a partir de composants, de cas d'usage et de lots fonctionnels pour aider le demandeur a se projeter. Je traduis ensuite cela en user stories, chiffrage, regroupement par lots, chemin critique et mise en evidence des zones les plus risquées afin d'eclairer les arbitrages.",
    },
    {
      title: "Coordonner pour securiser",
      description:
        "J'utilise des cadres simples et utiles comme MoSCoW, RACI, Gantt, Trello ou Jira pour rendre visibles les responsabilites, les dependances et les priorites. J'integre egalement les outils IA et des notions low-code / no-code comme leviers complementaires pour accelerer l'execution quand ils ont du sens.",
    },
  ];

  return (
    <section id="approach" className="py-20 border-t border-border/40 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ma facon de <span className="text-secondary">travailler</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            J'essaie de garder un equilibre simple : aller vite quand il faut apprendre, structurer
            quand il faut arbitrer, et securiser quand il faut livrer dans la duree.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] space-y-4"
            >
              <h3 className="text-2xl font-bold tracking-tight text-foreground">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
