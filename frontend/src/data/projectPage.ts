import { projects } from "./projects";
import { experiences } from "./experiences";
import { reflections } from "./reflections";
import { pillars } from "./workApproach";

export const projectPage = {
  title: "Projet & Business Analysis",
  subtitle: "Du besoin métier à la mise en production",
  introduction: "Faire le lien entre les utilisateurs, les contraintes métier et les équipes techniques : j'associe analyse fonctionnelle, chiffrage et coordination à une expérience concrète du développement d'applications métier.",
  description: "Découvrez la démarche de Christopher Robine en analyse fonctionnelle, cadrage, priorisation et coordination métier/IT, illustrée par ses projets applicatifs.",
  cycleTitle: "Du besoin à l'usage",
  cycleIntroduction: "Une grille de lecture pour organiser le travail et les échanges, à adapter au contexte de chaque projet. Les exemples ci-dessous précisent les contributions déjà documentées.",
  practicesTitle: "Des pratiques au service du projet",
  evidenceTitle: "Des contributions concrètes",
  evidenceIntroduction: "Des exemples issus de mon parcours, sans masquer la part d'analyse, de coordination ou de réalisation technique de chaque sujet.",
  technicalTitle: "Une culture technique pour mieux faire le lien",
  technicalDescription: "Mon expérience full-stack m'aide à comprendre les contraintes d'implémentation, à questionner une solution et à dialoguer avec une équipe de développement, sans devoir être le développeur principal. Les choix de données, d'architecture et de maintenance font partie du cadrage, pas seulement du code.",
  approachTitle: "Comprendre, arbitrer, puis construire",
  ctaTitle: "Échangeons sur votre contexte",
  ctaDescription: "Un recrutement, un besoin à clarifier ou un projet applicatif à structurer ? Parlons de vos attentes, de vos contraintes et de la place que je pourrais prendre dans votre équipe.",
  backLabel: "Retour à l'accueil",
  emailLabel: "M'écrire par e-mail",
  linkedinLabel: "Échanger sur LinkedIn",
  exampleLabel: "Une réflexion qui guide ma pratique",
};

// Editorial descriptions of the approach, not claims of additional past missions.
export const interventionSteps = [
  { title: "Besoin", description: "Partir des usages et du problème rencontré, avant de choisir une solution." },
  { title: "Analyse", description: "Identifier les données, les règles métier, les contraintes et les cas d'erreur." },
  { title: "Cadrage", description: "Clarifier le périmètre et découper le sujet en livrables compréhensibles." },
  { title: "Priorisation", description: "Mettre en regard valeur, effort et risque pour éclairer les arbitrages." },
  { title: "Conception fonctionnelle", description: "Traduire le besoin en user stories et rendre explicites les comportements attendus." },
  { title: "Coordination", description: "Rendre visibles les responsabilités, les dépendances et les points à décider entre métier et technique." },
  { title: "Recette", description: "Confronter la solution au besoin et aux cas d'erreur, et identifier les écarts à traiter avant la livraison." },
  { title: "Mise en production", description: "Relier la livraison aux contraintes d'hébergement, de déploiement et d'exploitation." },
  { title: "Accompagnement", description: "Documenter le fonctionnement et garder le lien avec les usages pour préparer les évolutions." },
];

export const projectPractices = [
  { title: "Comprendre", description: "Recueillir le besoin, comprendre les règles métier et analyser le cheminement des données avant de proposer une interface ou un outil." },
  { title: "Structurer", description: "Découper en user stories et en lots, estimer les charges avec le T-shirt sizing et construire une roadmap. Utiliser MoSCoW pour rendre la priorisation explicite." },
  { title: "Construire ensemble", description: "Clarifier qui fait quoi avec un RACI, coordonner les acteurs et rendre visibles les risques et les dépendances dans les supports de pilotage." },
  { title: "Valider", description: "Questionner les entrées, les sorties, les règles et les erreurs possibles. La revue des livraisons et les tests unitaires complètent cette attention aux comportements attendus." },
  { title: "Documenter et faire évoluer", description: "Rendre le fonctionnement compréhensible avec la documentation technique et fonctionnelle. Tenir compte des usages et de la maintenabilité lors des évolutions." },
];

export const projectEvidence = projects.filter(project =>
  project.categories.includes("business-analysis") || project.categories.includes("project"),
);
export const projectExperience = experiences.find(experience => experience.id === "ca-neops-it");
export const projectApproach = pillars;
export const projectReflection = reflections.find(reflection => reflection.number === 10);

export const projectNavigation = [
  { href: "/", label: "Accueil" },
  { href: "/projet", label: "Projet & BA" },
  { href: "/formation", label: "Formation" },
  { href: "#cycle", label: "Démarche" },
  { href: "#preuves", label: "Contributions" },
  { href: "#contact", label: "Contact" },
];
