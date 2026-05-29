import Image from "next/image";

export function ProjectSection() {
  const projects = [
    {
      title: "Refonte d'outils de gestion fraude",
      tags: ["Symfony", "PHP", "AngularJS", "Next.js"],
      description:
        "Refonte progressive d'un patrimoine d'environ 25 outils intranet front et back. Migration du back PHP vers Symfony, modernisation du front JavaScript et AngularJS avec cible Next.js, mise en place de conventions de code, de tests unitaires cote back et d'un decoupage plus propre des composants cote front. J'ai contribue directement a une douzaine d'outils dans une logique de maintenabilite, de reduction de dette technique et de preparation des futures evolutions.",
      image: "/projects/project-fraude.jpeg",
    },
    {
      title: "Migration du portail frontend",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Storybook"],
      description:
        "Migration vers une stack frontend moderne basee sur Next.js, TypeScript, Tailwind, shadcn/ui et Storybook. L'architecture a ete revue pour durer, faciliter la scalabilite des futurs projets et favoriser la reutilisation des composants. Le travail a egalement integre les enjeux d'accessibilite avec une prise en charge des themes light, dark et high contrast.",
      image: "/projects/project-migration-front.png",
    },
    {
      title: "Conformite RGPD & Gouvernance des donnees",
      tags: ["Data", "RGPD", "LPM", "NIS2", "DORA"],
      description:
        "Analyse et identification des donnees soumises au RGPD, definition de strategies d'anonymisation et de purge, et mise en place d'un referentiel de controle de saisie libre. Ce travail s'inscrivait dans un contexte bancaire fortement contraint sur le plan securitaire, avec prise en compte des exigences liees a la LPM, a NIS2 et a DORA. J'ai aussi contribue a la preparation de comites et de documents d'evaluation comme les ARM (Analyse Risque Metier) afin d'apprecier la cotation risque des outils.",
      image: "/projects/project-rgpd-gouvernance.jpg",
    },
    {
      title: "Site vitrine institutionnel",
      tags: ["Coordination", "Debian", "Reverse Proxy", "Matomo"],
      description:
        "Pilotage transverse entre le marketing interne et le prestataire en charge du developpement, avec accompagnement sur les choix UI/UX avant livraison. J'ai assure la revue des livraisons du prestataire, la relation avec l'hebergeur pour la mise a disposition de la VM et l'ouverture des flux, ainsi que la coordination avec le support IT groupe pour les DNS. Cote serveur, j'ai pris en charge le parametrage de la VM, le deploiement, le reverse proxy, Fail2Ban, Git et Matomo jusqu'a la mise en production.",
      image: "/projects/project-site-vitrine.jpg",
    },
    {
      title: "Structuration du chiffrage et de la priorisation",
      tags: ["Gestion de projet", "Chiffrage", "Roadmap", "Excel"],
      description:
        "Mise en place d'une methode de chiffrage et d'outils de pilotage pour decouper les user stories, estimer les charges et construire une feuille de route exploitable par les responsables. Le travail reposait notamment sur des supports Excel permettant d'eclairer les arbitrages en CODIR et de rendre visibles les priorisations a retenir en fonction de la valeur, de l'effort et du contexte metier.",
      image: "/projects/project-gestion-projet.jpg",
    },
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
              <div className="relative h-48 w-full overflow-hidden -mb-[1px] z-10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
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
