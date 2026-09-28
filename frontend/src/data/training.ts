import { profile } from "./profile";
import type { TrainingDomain, TrainingOfferStatus } from "./types";

// Editorial proposals: all seven descriptions require review before publication.
export const trainingDomains: TrainingDomain[] = [
  {
    id: "project-management",
    title: "Pilotage de projet numérique",
    description:
      "Poser un cadre de travail, organiser les étapes et suivre les risques pour accompagner un projet jusqu'à sa livraison.",
    topics: [
      "Cadrage",
      "Planification",
      "Priorisation",
      "Risques",
      "Coordination",
      "Recette",
      "Conduite du changement",
    ],
  },
  {
    id: "business-analysis",
    title: "Business Analysis & recueil du besoin",
    description:
      "Comprendre une problématique métier, structurer le besoin et le transformer en éléments exploitables par une équipe projet.",
    topics: [
      "Recueil du besoin",
      "Animation d'ateliers",
      "Analyse des processus",
      "User Stories",
      "Spécifications fonctionnelles",
      "Critères d'acceptation",
      "MoSCoW",
      "Solution Design",
    ],
  },
  {
    id: "agile",
    title: "Agile par la pratique",
    description:
      "Expérimenter les outils et les échanges d'une équipe agile pour découper un besoin, prioriser et apprendre par itérations.",
    topics: [
      "Backlog",
      "User Stories",
      "Story Points",
      "MVP",
      "MoSCoW",
      "Cérémonies",
      "Ateliers pratiques",
    ],
  },
  {
    id: "web-culture",
    title: "Culture & écosystème Web",
    description:
      "Comprendre comment les éléments d'une application Web fonctionnent ensemble pour mieux dialoguer avec une équipe technique.",
    topics: [
      "Fonctionnement du Web",
      "Frontend / backend",
      "API REST",
      "HTTP",
      "DNS",
      "Bases de données",
      "Hébergement",
      "Git",
      "CI/CD",
      "Cycle de vie d'une application",
    ],
  },
  {
    id: "automation",
    title: "Automatisation & outils numériques",
    description:
      "Repérer les tâches répétitives et comparer les solutions possibles pour simplifier un processus sans développer inutilement.",
    topics: [
      "Analyse des processus",
      "Tâches répétitives",
      "Automatisation",
      "Choix développement / no-code / low-code",
      "Intégration d'outils",
    ],
  },
  {
    id: "applied-ai",
    title: "IA appliquée aux métiers",
    description:
      "Explorer des usages professionnels de l'IA, en évaluer les limites et garder un regard critique sur les résultats obtenus.",
    topics: [
      "Cas d'usage",
      "Processus métier",
      "Bonnes pratiques",
      "Limites",
      "Esprit critique",
      "Usages professionnels",
    ],
  },
  {
    id: "seo-geo",
    title: "SEO & GEO",
    description:
      "Comprendre les bases de la visibilité sur les moteurs de recherche et les moteurs génératifs, puis identifier comment la mesurer.",
    topics: [
      "Fondamentaux SEO",
      "Visibilité Web",
      "Moteurs de recherche et génératifs",
      "GEO",
      "Mesure de la visibilité",
    ],
  },
];

export const training: {
  title: string;
  status: TrainingOfferStatus;
  descriptionsStatus: "editorial-proposal";
  organizationTypes: string[];
  audiences: string[];
  formats: string[];
  approach: string[];
  availability: { onsiteAreas: string[]; onsiteScope: string; remote: string };
  cta: string;
  domains: TrainingDomain[];
} = {
  title: "Intervenant - Projet & Numérique",
  status: "planned",
  descriptionsStatus: "editorial-proposal",
  organizationTypes: [
    "Écoles",
    "CFA",
    "Organismes de formation",
    "Formation professionnelle pour adultes",
  ],
  audiences: [
    "BTS selon les matières",
    "Bachelor",
    "Mastère / MBA",
    "Adultes en formation professionnelle",
  ],
  formats: [
    "Cours",
    "TD",
    "Ateliers",
    "Études de cas",
    "Projets étudiants",
    "Interventions ponctuelles",
    "Reprise d'un module existant",
    "Construction d'un module selon un référentiel",
  ],
  approach: [
    "Pratique",
    "Cas concrets",
    "Mises en situation",
    "Travaux de groupe",
    "Livrables professionnels",
    "Retours d'expérience terrain",
  ],
  availability: { onsiteAreas: profile.location.areas, onsiteScope: "Et proximité raisonnable", remote: "France" },
  cta: "Échangeons sur votre programme",
  domains: trainingDomains,
};
