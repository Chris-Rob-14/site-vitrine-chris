import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Header } from "@/components/classic/Header";
import { Footer } from "@/components/classic/Footer";
import { buttonVariants } from "@/components/ui/button-variants";
import { profile } from "@/data/profile";
import { training } from "@/data/training";
import { trainingNavigation, trainingPage as content } from "@/data/trainingPage";

export const metadata: Metadata = {
  title: content.metadataTitle,
  description: content.description,
};

const sectionClass = "py-16 md:py-20 border-t border-border/40 space-y-8";
const headingClass = "text-3xl md:text-5xl font-bold tracking-tight";
const cardClass = "min-w-0 rounded-2xl border border-border bg-card/60 p-6 md:p-8 space-y-4";

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-background focus:p-4">Aller au contenu</a>
      <Header items={trainingNavigation} currentHref="/formation" />
      <main id="main-content" tabIndex={-1} className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <section className="py-16 md:py-24 space-y-6 max-w-4xl">
            <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-muted-foreground hover:text-primary"><ArrowLeft aria-hidden="true" className="h-4 w-4" />{content.backLabel}</Link>
            <p className="text-primary font-medium">{profile.name} · {training.title}</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{content.title}</h1>
            <p className="text-2xl md:text-3xl font-semibold">{content.subtitle}</p>
            {training.status === "planned" && <p className="inline-block rounded-xl border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium">{content.statusLabel}</p>}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{content.introduction}</p>
            <a href="#contact" className={buttonVariants({ size: "lg" }) + " min-h-11 h-auto whitespace-normal"}>{training.cta}<ArrowRight aria-hidden="true" /></a>
          </section>

          <section aria-labelledby="audience-title" className={sectionClass}>
            <h2 id="audience-title" className={headingClass}>{content.audienceTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[{ title: content.organizationsLabel, items: training.organizationTypes }, { title: content.audiencesLabel, items: training.audiences }].map(group => <div key={group.title} className={cardClass}>
                <h3 className="text-xl font-bold">{group.title}</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">{group.items.map(item => <li key={item}>{item}</li>)}</ul>
              </div>)}
            </div>
          </section>

          <section id="domaines" tabIndex={-1} aria-labelledby="domains-title" className={sectionClass}>
            <h2 id="domains-title" className={headingClass}>{content.domainsTitle}</h2>
            <p className="max-w-3xl text-muted-foreground leading-relaxed">{content.domainsIntroduction}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {training.domains.map(domain => <article key={domain.id} className={cardClass}>
                <h3 className="text-2xl font-bold text-primary">{domain.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{domain.description}</p>
                <ul className="flex flex-wrap gap-2">{domain.topics.map(topic => <li key={topic} className="max-w-full rounded-lg border border-border/50 bg-muted px-3 py-1 text-sm text-muted-foreground">{topic}</li>)}</ul>
              </article>)}
            </div>
          </section>

          <section aria-labelledby="thread-title" className={sectionClass}>
            <h2 id="thread-title" className={headingClass}>{content.threadTitle}</h2>
            <p className="max-w-3xl text-muted-foreground leading-relaxed">{content.threadDescription}</p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {content.threadSteps.map((step, index) => <li key={step} className="min-w-0 rounded-xl border border-border bg-card/60 p-4 flex gap-3">
                <span aria-hidden="true" className="text-primary font-mono">{String(index + 1).padStart(2, "0")}</span><span>{step}</span>
              </li>)}
            </ol>
          </section>

          <section aria-labelledby="approach-title" className={sectionClass}>
            <h2 id="approach-title" className={headingClass}>{content.approachTitle}</h2>
            <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">{content.approachDescription}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{training.approach.map(item => <li key={item} className="rounded-xl border border-border bg-card/60 p-4 font-medium">{item}</li>)}</ul>
          </section>

          <section aria-labelledby="hybrid-title" className={sectionClass}>
            <h2 id="hybrid-title" className={headingClass}>{content.hybridTitle}</h2>
            <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">{content.hybridDescription}</p>
            <p className="max-w-3xl text-muted-foreground leading-relaxed">{content.hybridNote}</p>
            <Link href="/projet" className="inline-flex min-h-11 items-center gap-2 text-primary underline underline-offset-4">{content.experienceLink}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
          </section>

          <section aria-labelledby="formats-title" className={sectionClass}>
            <h2 id="formats-title" className={headingClass}>{content.formatsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={cardClass}>
                <h3 className="text-xl font-bold">{content.formatsLabel}</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">{training.formats.map(format => <li key={format}>{format}</li>)}</ul>
              </div>
              <div className={cardClass}>
                <h3 className="text-xl font-bold">{content.onsiteLabel}</h3>
                <p>{training.availability.onsiteAreas.join(" / ")}</p>
                <p className="text-muted-foreground">{training.availability.onsiteScope}</p>
                <h3 className="text-xl font-bold pt-4">{content.remoteLabel}</h3>
                <p className="text-muted-foreground">{training.availability.remote}</p>
              </div>
            </div>
          </section>

          <section aria-labelledby="build-title" className={sectionClass}>
            <h2 id="build-title" className={headingClass}>{content.buildTitle}</h2>
            <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">{content.buildDescription}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">{content.buildInputs.map(input => <li key={input} className="rounded-xl border border-border p-4">{input}</li>)}</ul>
          </section>

          <section id="contact" tabIndex={-1} aria-labelledby="contact-title" className="my-16 p-6 md:p-10 rounded-3xl border border-primary/20 bg-primary/5 space-y-6 max-w-4xl mx-auto text-center">
            <h2 id="contact-title" className={headingClass}>{content.ctaTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{content.ctaDescription}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`mailto:${profile.email}`} className={buttonVariants({ size: "lg" }) + " min-h-11 h-auto whitespace-normal"}><Mail aria-hidden="true" />{content.emailLabel}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label={`${content.linkedinLabel} (nouvel onglet)`} className={buttonVariants({ size: "lg", variant: "outline" }) + " min-h-11 h-auto whitespace-normal"}>{content.linkedinLabel}<ArrowRight aria-hidden="true" /></a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
