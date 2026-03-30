export function ExperienceSection() {
  const experiences = [
    {
      role: "Product Engineer / Développeur Full Stack",
      company: "CA NEOPS - Filiale Crédit Agricole",
      date: "Sep 2022 – Aujourd'hui",
      description: [
        "Conception, maintenance et refonte d'applications métiers critiques utilisées par les équipes fraude et production bancaire.",
        "Analyse des besoins métier, lotissement en MVP et estimation via T-shirt sizing et priorisation MoSCoW.",
        "Participation aux choix d'architecture applicative et à la réduction de la dette technique sur plusieurs applications internes.",
        "Rédaction de conventions de code et mise en place de templates de documentation technique et fonctionnelle (GitLab Wiki) et Swagger UI.",
        "Coordination avec équipes métiers, production et prestataires pour cadrage, chiffrage et suivi des développements."
      ]
    },
    {
      role: "Opérateur de traitement – Back Office bancaire",
      company: "CA NEOPS - Filiale Crédit Agricole",
      date: "Jan 2019 – Aout 2022",
      description: [
        "Traitement d'opérations bancaires et activités de production back-office."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">
          Expérience <span className="text-primary">Professionnelle</span>
        </h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-background group-hover:bg-primary/20 group-hover:shadow-[var(--drop-shadow-glow-orange)] text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <div className="flex flex-col space-y-2 mb-4">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <div className="text-muted-foreground font-medium flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="text-sm border border-secondary/30 text-secondary bg-secondary/10 px-2 py-1 rounded-full whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
