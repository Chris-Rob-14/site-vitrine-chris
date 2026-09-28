import { pillars } from "@/data/workApproach";
export function WorkApproachSection() {
  return (
    <section
      id="approach"
      tabIndex={-1}
      className="py-20 border-t border-border/40 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ma façon de <span className="text-secondary">travailler</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Ma démarche repose sur trois temps simples : comprendre, structurer,
            puis exécuter avec le bon niveau de profondeur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] space-y-4"
            >
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
