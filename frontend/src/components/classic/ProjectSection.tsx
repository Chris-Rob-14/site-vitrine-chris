import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";

export function ProjectSection() {
  return (
    <section
      tabIndex={-1}
      id="projects"
      className="py-20 border-t border-border/40"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">
          Projets <span className="text-primary">Majeurs</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl border border-border bg-card hover:border-primary/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgba(255,94,0,0.15)] flex flex-col"
            >
              {project.image && (
                <div className="relative h-48 w-full overflow-hidden -mb-[1px] z-10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1280px) 560px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  <Link href={`/realisations#${project.slug}`} data-analytics-project={project.id}>{project.title}</Link>
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2 py-1 bg-muted text-muted-foreground rounded-md border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {project.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
