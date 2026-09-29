import Image from "next/image";
import type { Project } from "@/data/types";
import { projectCategoryLabels, realisationsPage } from "@/data/realisationsPage";

function DetailList({ title, items }: { title: string; items?: string[] }) {
  const entries = items?.filter(item => item.trim());
  if (!entries?.length) return null;

  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-foreground">{title}</h3>
      <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
        {entries.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export function RealisationCard({ project }: { project: Project }) {
  const { labels } = realisationsPage;
  const titleId = `${project.slug}-title`;

  return (
    <article
      id={project.slug}
      aria-labelledby={titleId}
      className={`min-w-0 overflow-hidden rounded-2xl border bg-card/60 ${project.featured ? "border-primary/50 shadow-[0_8px_30px_rgba(255,94,0,0.12)]" : "border-border"}`}
    >
      <div className={project.image ? "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]" : undefined}>
        {project.image && (
          <div className="relative h-56 lg:h-auto lg:min-h-72">
            <Image src={project.image} alt={project.title} fill sizes="(min-width: 1280px) 384px, (min-width: 1024px) 33vw, 100vw" className="object-cover" />
          </div>
        )}
        <div className="min-w-0 p-6 md:p-8 space-y-5">
          <ul className="flex flex-wrap gap-2">
            {project.categories.map(category => (
              <li key={category} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm text-primary">{projectCategoryLabels[category]}</li>
            ))}
          </ul>
          <h2 id={titleId} className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{project.summary}</p>
          {project.description?.trim() && project.description !== project.summary && <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{project.description}</p>}
          {project.context?.trim() && <div className="space-y-2"><h3 className="font-semibold">{labels.context}</h3><p className="text-muted-foreground leading-relaxed">{project.context}</p></div>}
          {project.role?.trim() && <div className="space-y-2"><h3 className="font-semibold">{labels.role}</h3><p className="text-muted-foreground leading-relaxed">{project.role}</p></div>}
          <DetailList title={labels.contributions} items={project.contributions} />
          <DetailList title={labels.deliverables} items={project.deliverables} />
          <DetailList title={labels.results} items={project.results} />
          <DetailList title={labels.skills} items={project.skills} />
          {project.tags.length > 0 && <ul aria-label={labels.tags} className="flex flex-wrap gap-2 border-t border-border/50 pt-4">
            {project.tags.map(tag => <li key={tag} className="max-w-full rounded-md border border-border/50 bg-muted px-2 py-1 text-xs font-mono text-muted-foreground">{tag}</li>)}
          </ul>}
        </div>
      </div>
    </article>
  );
}
