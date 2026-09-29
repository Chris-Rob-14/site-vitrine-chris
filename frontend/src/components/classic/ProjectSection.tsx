import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { projectCategoryLabels } from "@/data/realisationsPage";
import { buttonVariants } from "@/components/ui/button-variants";

const selectedProjectIds = ["chiffrage-priorisation", "site-vitrine", "refonte-intranet"];
const homeProjects = projects.filter(project => selectedProjectIds.includes(project.id));

export function ProjectSection() {
  return (
    <section
      tabIndex={-1}
      id="projects"
      className="py-20 border-t border-border/40"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">
          Quelques <span className="text-primary">réalisations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeProjects.map((project) => (
            <article
              key={project.id}
              className="group min-w-0 rounded-2xl border border-border bg-card flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  <Link href={`/realisations#${project.slug}`} data-analytics-project={project.id}>{project.title}</Link>
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.categories.slice(0, 2).map((category) => (
                    <span
                      key={category}
                      className="text-sm px-3 py-1 bg-primary/5 text-primary rounded-full border border-primary/30"
                    >
                      {projectCategoryLabels[category]}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {project.summary.match(/^.*?[.!?](?:\s|$)/)?.[0].trim() ?? project.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Link href="/realisations" className={buttonVariants({ variant: "outline", size: "lg" }) + " h-auto min-h-11 whitespace-normal"}>
            Voir toutes mes réalisations <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
