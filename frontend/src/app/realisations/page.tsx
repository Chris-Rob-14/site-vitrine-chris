import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Header } from "@/components/classic/Header";
import { Footer } from "@/components/classic/Footer";
import { RealisationCard } from "@/components/classic/RealisationCard";
import { buttonVariants } from "@/components/ui/button-variants";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { realisationsPage as content } from "@/data/realisationsPage";

export const metadata = pageMetadata("/realisations", content.metadataTitle, content.description);

const headingClass = "text-3xl md:text-5xl font-bold tracking-tight";

export default function RealisationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-background focus:p-4">Aller au contenu</a>
      <Header currentHref="/realisations" />
      <main id="main-content" tabIndex={-1} className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <section className="py-16 md:py-24 space-y-7 max-w-4xl">
            <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-muted-foreground hover:text-primary"><ArrowLeft aria-hidden="true" className="h-4 w-4" />{content.backLabel}</Link>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{content.title}</h1>
            <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{content.subtitle}</p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{content.introduction}</p>
          </section>

          <section aria-label={content.projectsTitle} className="space-y-8 pb-16 md:pb-20">
            {projects.map(project => <RealisationCard key={project.id} project={project} />)}
          </section>

          <section aria-labelledby="technical-title" className="py-16 md:py-20 border-t border-border/40 space-y-6">
            <h2 id="technical-title" className={headingClass}>{content.technicalTitle}</h2>
            <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">{content.technicalDescription}</p>
          </section>

          <section aria-labelledby="facets-title" className="py-16 md:py-20 border-t border-border/40 space-y-8">
            <h2 id="facets-title" className={headingClass}>{content.facetsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.facets.map(facet => <article key={facet.href} className="min-w-0 rounded-2xl border border-border bg-card/60 p-6 md:p-8 space-y-4">
                <h3 className="text-2xl font-bold">{facet.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{facet.description}</p>
                <Link href={facet.href} className="inline-flex min-h-11 items-center gap-2 text-primary underline underline-offset-4">{facet.linkLabel}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
              </article>)}
            </div>
          </section>

          <section id="contact" tabIndex={-1} aria-labelledby="contact-title" className="my-16 p-6 md:p-10 rounded-3xl border border-primary/20 bg-primary/5 space-y-6 max-w-4xl mx-auto text-center">
            <h2 id="contact-title" className={headingClass}>{content.ctaTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{content.ctaDescription}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`mailto:${profile.email}`} className={buttonVariants({ size: "lg" }) + " min-h-11 h-auto whitespace-normal"}><Mail aria-hidden="true" />{content.emailLabel}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label={`${content.linkedinLabel} (nouvel onglet)`} className={buttonVariants({ size: "lg", variant: "outline" }) + " min-h-11 h-auto whitespace-normal"}>{content.linkedinLabel}<ArrowRight aria-hidden="true" /></a>
            </div>
            <Link href="/contact" className="inline-flex min-h-11 items-center text-primary underline underline-offset-4">{content.contactLink}</Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
