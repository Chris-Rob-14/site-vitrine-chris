import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "chiffrage-priorisation",
    slug: "chiffrage-priorisation",
    categories: ["business-analysis", "project"],
    title: "Structuration du chiffrage et de la priorisation",
    tags: ["Gestion de projet", "Chiffrage", "Roadmap", "Excel"],
    summary:
      "Mise en place d'une méthode de chiffrage et d'outils de pilotage pour découper les user stories, estimer les charges et construire une feuille de route exploitable par les responsables. Le travail reposait sur des supports concrets permettant d'éclairer les arbitrages en CODIR et de rendre visibles les priorisations à retenir en fonction de la valeur, de l'effort et du contexte métier.",
    image: "/projects/project-gestion-projet.jpg",
  },
  {
    id: "rgpd-gouvernance",
    slug: "rgpd-gouvernance",
    categories: ["business-analysis"],
    title: "Conformité RGPD & Gouvernance des données",
    tags: ["Analyse", "RGPD", "LPM", "NIS2", "DORA"],
    summary:
      "Analyse et identification des données soumises au RGPD, définition de stratégies d'anonymisation et de purge, et mise en place d'un référentiel de contrôle de saisie libre. Ce travail s'inscrivait dans un contexte bancaire fortement contraint, avec préparation de comités et de documents d'évaluation comme les ARM pour apprécier la cotation risque des outils.",
    image: "/projects/project-rgpd-gouvernance.jpg",
  },
  {
    id: "site-vitrine",
    slug: "site-vitrine",
    categories: ["project", "development"],
    title: "Site vitrine institutionnel",
    tags: ["Coordination", "Analyse", "Debian", "Matomo"],
    summary:
      "Pilotage transverse entre le marketing interne, le prestataire de développement, l'hébergeur et le support IT groupe. J'y ai accompagné les choix UI/UX, assuré la revue des livraisons, coordonné les sujets DNS et flux réseau, puis pris en charge le paramétrage serveur, le déploiement, le reverse proxy, Fail2Ban, Git et Matomo jusqu'à la mise en production.",
    image: "/projects/project-site-vitrine.jpg",
  },
  {
    id: "refonte-intranet",
    slug: "refonte-intranet",
    categories: ["business-analysis", "development"],
    title: "Refonte d'outils de gestion fraude",
    tags: ["Analyse", "Symfony", "PHP", "AngularJS"],
    summary:
      "Refonte progressive d'un patrimoine d'environ 25 outils intranet front et back. Au-delà du développement, le sujet demandait de comprendre les usages, de reprendre les règles métier, d'identifier les points de fragilité et de faire évoluer les outils dans une logique de maintenabilité, de réduction de dette technique et de préparation des futures évolutions.",
    image: "/projects/project-fraude.jpeg",
  },
  {
    id: "migration-frontend",
    slug: "migration-frontend",
    categories: ["development"],
    title: "Migration du portail frontend",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Storybook"],
    summary:
      "Migration vers une stack frontend moderne basée sur Next.js, TypeScript, Tailwind, shadcn/ui et Storybook. L'architecture a été revue pour durer, favoriser la réutilisation des composants et soutenir les futurs projets, avec une prise en compte de l'accessibilité via les thèmes light, dark et high contrast.",
    image: "/projects/project-migration-front.png",
  },
];
