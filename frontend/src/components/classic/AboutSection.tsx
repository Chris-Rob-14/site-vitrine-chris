import { about, aboutPillars } from "@/data/homepage";

export function AboutSection() {
  return (
    <section
      tabIndex={-1}
      id="about"
      className="py-20 border-t border-border/40 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">
          Qui suis-je <span className="text-primary">?</span>
        </h2>

        <div className="p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            {about.introduction}{" "}
            <strong className="text-foreground font-semibold">
              {about.emphasis}
            </strong>
            . {about.motivation}
          </p>
          <p>{about.dailyWork}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 mt-6 border-t border-border/50">
            {aboutPillars.map((pillar) => (
              <div key={pillar.title} className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
