import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Header } from "@/components/classic/Header";
import { Footer } from "@/components/classic/Footer";
import { buttonVariants } from "@/components/ui/button-variants";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { interventionSteps, projectApproach, projectEvidence, projectExperience, projectPage, projectPractices, projectReflection } from "@/data/projectPage";

export const metadata = pageMetadata("/projet", projectPage.title, projectPage.description);

const sectionClass = "py-16 md:py-20 border-t border-border/40 space-y-10";
const headingClass = "text-3xl md:text-5xl font-bold tracking-tight";
const cardClass = "min-w-0 p-6 rounded-2xl border border-border bg-card/60 space-y-4";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-background focus:p-4">Aller au contenu</a>
      <Header currentHref="/projet" />
      <main id="main-content" tabIndex={-1} className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <section className="py-16 md:py-24 space-y-7 max-w-4xl">
            <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-muted-foreground hover:text-primary"><ArrowLeft aria-hidden="true" className="h-4 w-4" />{projectPage.backLabel}</Link>
            <p className="text-primary font-medium">{profile.professionalTitle}</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{projectPage.title}</h1>
            <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{projectPage.subtitle}</p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{projectPage.introduction}</p>
          </section>

          <section id="cycle" tabIndex={-1} aria-labelledby="cycle-title" className={sectionClass}>
            <h2 id="cycle-title" className={headingClass}>{projectPage.cycleTitle}</h2>
            <p className="max-w-3xl text-muted-foreground leading-relaxed">{projectPage.cycleIntroduction}</p>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interventionSteps.map((step, index) => <li key={step.title} className={cardClass}>
                <span aria-hidden="true" className="text-primary font-mono text-sm">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </li>)}
            </ol>
          </section>

          <section aria-labelledby="practices-title" className={sectionClass}>
            <h2 id="practices-title" className={headingClass}>{projectPage.practicesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectPractices.map(practice => <article key={practice.title} className={cardClass}>
                <h3 className="text-xl font-bold text-primary">{practice.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{practice.description}</p>
              </article>)}
            </div>
          </section>

          <section id="preuves" tabIndex={-1} aria-labelledby="evidence-title" className={sectionClass}>
            <h2 id="evidence-title" className={headingClass}>{projectPage.evidenceTitle}</h2>
            <p className="max-w-3xl text-muted-foreground leading-relaxed">{projectPage.evidenceIntroduction}</p>
            <Link href="/realisations" className="inline-flex min-h-11 items-center text-primary underline underline-offset-4">{projectPage.realisationsLink}</Link>
            {projectExperience && <article className={cardClass}>
              <p className="text-primary font-medium">{projectExperience.company} · {projectExperience.date}</p>
              <h3 className="text-2xl font-bold">{projectExperience.role}</h3>
              <ul className="list-disc pl-5 space-y-3 text-muted-foreground leading-relaxed">{projectExperience.description.map(item => <li key={item}>{item}</li>)}</ul>
            </article>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectEvidence.map(project => <article key={project.id} className={cardClass}>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.summary}</p>
              </article>)}
            </div>
          </section>

          <section aria-labelledby="technical-title" className={sectionClass}>
            <h2 id="technical-title" className={headingClass}>{projectPage.technicalTitle}</h2>
            <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">{projectPage.technicalDescription}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.filter(category => ["frontend", "backend"].includes(category.id)).map(category => <div key={category.id} className={cardClass}>
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{category.skills.join(" · ")}</p>
              </div>)}
            </div>
          </section>

          <section aria-labelledby="approach-title" className={sectionClass}>
            <h2 id="approach-title" className={headingClass}>{projectPage.approachTitle}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">{projectApproach.map(pillar => <article key={pillar.title} className={cardClass}>
              <h3 className="text-2xl font-bold">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </article>)}</div>
            {projectReflection && <aside className="border-l-2 border-primary pl-6 space-y-3 max-w-3xl">
              <p className="text-sm text-primary">{projectPage.exampleLabel}</p>
              <h3 className="text-xl font-bold">{projectReflection.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{projectReflection.intro}</p>
              {projectReflection.flow && <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">{projectReflection.flow.map(item => <li key={item}>{item}</li>)}</ul>}
              <p className="text-muted-foreground leading-relaxed">{projectReflection.closing}</p>
            </aside>}
          </section>

          <section id="contact" tabIndex={-1} aria-labelledby="contact-title" className="my-16 p-6 md:p-10 rounded-3xl border border-primary/20 bg-primary/5 space-y-6 max-w-4xl mx-auto text-center">
            <h2 id="contact-title" className={headingClass}>{projectPage.ctaTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{projectPage.ctaDescription}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`mailto:${profile.email}`} className={buttonVariants({size: "lg"}) + " min-h-11 h-auto whitespace-normal"}><Mail aria-hidden="true" />{projectPage.emailLabel}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label={`${projectPage.linkedinLabel} (nouvel onglet)`} className={buttonVariants({size: "lg", variant: "outline"}) + " min-h-11 h-auto whitespace-normal"}>{projectPage.linkedinLabel}<ArrowRight aria-hidden="true" /></a>
            </div>
            <Link href="/contact" className="inline-flex min-h-11 items-center text-primary underline underline-offset-4">{projectPage.contactLink}</Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
