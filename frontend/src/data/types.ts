export type ProjectCategory = "business-analysis" | "project" | "development";

export interface Project {
  id: string;
  slug: string;
  categories: ProjectCategory[];
  title: string;
  summary: string;
  description?: string;
  image?: string;
  tags: string[];
  role?: string;
  context?: string;
  contributions?: string[];
  deliverables?: string[];
  results?: string[];
  skills?: string[];
  featured?: boolean;
}

export interface TrainingDomain {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

export type TrainingOfferStatus = "planned" | "active";

export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string[];
}

export interface ReflectionCard {
  number: number;
  image: string;
  title: string;
  hook: string;
  intro: string;
  flow?: string[];
  bullets?: string[];
  tools?: string[];
  closing?: string;
}

export interface ContentPillar {
  title: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}
