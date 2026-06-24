export function WorkApproachSection() {
  const pillars = [
    {
      title: "Comprendre avant de construire",
      description:
        "Je commence par clarifier le besoin, les usages attendus, les zones de flou et les contraintes du terrain. Mon objectif n'est pas de produire vite pour produire vite, mais d'eviter de lancer une solution mal cadree ou mal comprise.",
    },
    {
      title: "Structurer pour arbitrer",
      description:
        "Je traduis le besoin en lots, user stories, hypotheses et niveaux de priorite afin d'aider a la decision. Chiffrage, chemin critique, MoSCoW, RACI ou support de pilotage ne sont pour moi que des moyens de rendre les arbitrages plus lisibles.",
    },
    {
      title: "Executer de facon pragmatique",
      description:
        "Une fois le cadre pose, je mobilise le bon levier : developpement sur mesure, automatisation, low-code ou outillage. L'idee est de livrer une solution testable et utile, sans surinvestir trop tot dans une complexite qui n'est pas encore necessaire.",
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
            Ma demarche repose sur trois temps simples : comprendre, structurer, puis executer avec
            le bon niveau de profondeur.
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
