import { ClipboardList, GraduationCap, Code2 } from "lucide-react";
import Link from "next/link";
import { home, homeFacets } from "@/data/homepage";
import { training } from "@/data/training";

const icons = [ClipboardList, GraduationCap, Code2];

export function FacetsSection() {
  return (
    <section id="facets" tabIndex={-1} aria-labelledby="facets-title" className="py-16 md:py-20 border-t border-border/40">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h2 id="facets-title" className="text-3xl md:text-5xl font-bold tracking-tight">{home.facetsTitle}</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">{home.facetsIntroduction}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {homeFacets.map((facet, index) => {
            const Icon = icons[index];
            return (
              <article key={facet.id} className="min-w-0 p-6 md:p-8 rounded-2xl border border-border bg-card/60 space-y-5">
                <Icon aria-hidden="true" className="h-7 w-7 text-primary" />
                <h3 className="text-2xl font-bold tracking-tight">{facet.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{facet.description}</p>
                {facet.href && <Link data-analytics-facet={facet.id} href={facet.href} className="inline-flex min-h-11 items-center text-primary font-medium underline underline-offset-4">{facet.linkLabel}<span className="sr-only"> : {facet.title}</span></Link>}
                {facet.id === "training" && training.status === "planned" && <p className="text-sm text-muted-foreground border-t border-border/50 pt-4">{home.trainingStatus}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
