import Image from "next/image";

export function ProjectSection() {
  const projects = [
    {
      title: "Refonte d'outils de gestion fraude",
      tags: ["Symfony", "PHP", "AngularJS"],
      description: "Migration d'applications legacy vers une architecture Symfony moderne. Réduction de la dette technique, amélioration constante de la maintenabilité et livraisons progressives sécurisant le traitement des opérations bancaires.",
      image: "/projects/project_fraud_tools_1773668141000.png"
    },
    {
      title: "Migration du portail frontend",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      description: "Mise en place de la stack moderne (Next.js, TS, Tailwind, Shadcn, Storybook). Développement de composants réutilisables architecturés en design system, et implémentation de l'authentification avec support de thèmes dark/light/high-contrast.",
      image: "/projects/project_nextjs_migration_1773668158007.png"
    },
    {
      title: "Conformité RGPD & Gouvernance",
      tags: ["Data", "RGPD", "Architecture"],
      description: "Analyse et identification des champs soumis au RGPD en collaboration avec l'équipe conformité. Conception d'une stratégie d'anonymisation/purge et mise en place d'un référentiel de contrôle de saisie libre.",
      image: "/projects/project_gdpr_data_1773668173711.png"
    },
    {
      title: "Site vitrine institutionnel",
      tags: ["SEO", "Debian", "Ops"],
      description: "Coordination technique et mise en production d'un site institutionnel. Supervision des aspects SEO et design, suivi des livraisons via GitLab. Déploiement sur serveur Debian (Caddy, Fail2Ban, Matomo) en DMZ.",
      image: "/projects/project_debian_server_1773668194190.png"
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-border/40">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">
          Projets <span className="text-primary">Majeurs</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl border border-border bg-card hover:border-primary/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgba(255,94,0,0.15)] cursor-pointer flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden border-b border-border/50">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-1 bg-muted text-muted-foreground rounded-md border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
