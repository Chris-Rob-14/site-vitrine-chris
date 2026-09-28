import Image from "next/image";
import { reflections } from "@/data/reflections";
import { ArrowRight, ChevronDown } from "lucide-react";

function FlowList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-0">
      {items.map((item, index) => (
        <li key={item} className="flex gap-4">
          <div aria-hidden="true" className="flex flex-col items-center">
            <span className="mt-1 h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_rgba(255,94,0,0.45)]"></span>
            {index < items.length - 1 && (
              <span className="mt-2 h-10 w-px bg-gradient-to-b from-primary/70 to-transparent"></span>
            )}
          </div>
          <div className="pb-4">
            <span className="inline-flex px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
              {item}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ThinkingCardsSection() {
  return (
    <section
      id="reflexions"
      className="py-20 border-t border-border/40 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[540px] h-[540px] bg-primary/8 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ma façon de <span className="text-primary">réfléchir</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Quelques principes qui guident ma manière d&apos;aborder un outil,
            une fonctionnalité ou une problématique métier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reflections.map((card) => {
            return (
              <article
                key={card.number}
                className="rounded-2xl border border-border bg-card/70 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-primary/40 transition-colors"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent"></div>
                </div>

                <div className="p-8 space-y-5">
                  <div className="space-y-2">
                    <p className="text-sm font-mono uppercase tracking-[0.2em] text-primary">
                      Réflexion #{card.number}
                    </p>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-lg font-medium text-foreground/90">
                    {card.hook}
                  </p>

                  <details className="group/reflection">
                    <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                      <span>Ma réflexion</span>
                      <ArrowRight className="h-4 w-4" />
                      <ChevronDown className="h-4 w-4 transition-transform group-open/reflection:rotate-180" />
                      <span className="sr-only"> : {card.title}</span>
                    </summary>

                    <div className="space-y-5 border-t border-border/50 pt-5">
                      <p className="text-muted-foreground leading-relaxed">
                        {card.intro}
                      </p>

                      {card.flow && <FlowList items={card.flow} />}

                      {card.bullets && (
                        <ul className="space-y-2 text-muted-foreground">
                          {card.bullets.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="text-primary">*</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {card.tools && (
                        <div className="flex flex-wrap gap-2">
                          {card.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-xs font-mono px-2 py-1 bg-secondary/10 text-secondary rounded-md border border-secondary/20"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}

                      {card.closing && (
                        <p className="text-muted-foreground leading-relaxed border-t border-border/50 pt-5">
                          {card.closing}
                        </p>
                      )}
                    </div>
                  </details>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
