import Image from "next/image";

export function ProjectSection() {
  const projects = [
    {
      title: "Structuration du chiffrage et de la priorisation",
      tags: ["Gestion de projet", "Chiffrage", "Roadmap", "Excel"],
      description:
        "Mise en place d'une methode de chiffrage et d'outils de pilotage pour decouper les user stories, estimer les charges et construire une feuille de route exploitable par les responsables. Le travail reposait sur des supports concrets permettant d'eclairer les arbitrages en CODIR et de rendre visibles les priorisations a retenir en fonction de la valeur, de l'effort et du contexte metier.",
      image: "/projects/project-gestion-projet.jpg",
    },
    {
      title: "Conformite RGPD & Gouvernance des donnees",
      tags: ["Analyse", "RGPD", "LPM", "NIS2", "DORA"],
      description:
        "Analyse et identification des donnees soumises au RGPD, definition de strategies d'anonymisation et de purge, et mise en place d'un referentiel de controle de saisie libre. Ce travail s'inscrivait dans un contexte bancaire fortement contraint, avec preparation de comites et de documents d'evaluation comme les ARM pour apprecier la cotation risque des outils.",
      image: "/projects/project-rgpd-gouvernance.jpg",
    },
    {
      title: "Site vitrine institutionnel",
      tags: ["Coordination", "Analyse", "Debian", "Matomo"],
      description:
        "Pilotage transverse entre le marketing interne, le prestataire de developpement, l'hebergeur et le support IT groupe. J'y ai accompagne les choix UI/UX, assure la revue des livraisons, coordonne les sujets DNS et flux reseau, puis pris en charge le parametrage serveur, le deploiement, le reverse proxy, Fail2Ban, Git et Matomo jusqu'a la mise en production.",
      image: "/projects/project-site-vitrine.jpg",
    },
    {
      title: "Refonte d'outils de gestion fraude",
      tags: ["Analyse", "Symfony", "PHP", "AngularJS"],
      description:
        "Refonte progressive d'un patrimoine d'environ 25 outils intranet front et back. Au-dela du developpement, le sujet demandait de comprendre les usages, de reprendre les regles metier, d'identifier les points de fragilite et de faire evoluer les outils dans une logique de maintenabilite, de reduction de dette technique et de preparation des futures evolutions.",
      image: "/projects/project-fraude.jpeg",
    },
    {
      title: "Migration du portail frontend",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Storybook"],
      description:
        "Migration vers une stack frontend moderne basee sur Next.js, TypeScript, Tailwind, shadcn/ui et Storybook. L'architecture a ete revue pour durer, favoriser la reutilisation des composants et soutenir les futurs projets, avec une prise en compte de l'accessibilite via les themes light, dark et high contrast.",
      image: "/projects/project-migration-front.png",
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
