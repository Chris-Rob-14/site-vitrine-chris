import { profile } from "@/data/profile";
import { experiences } from "@/data/experiences";
import { canonicalUrl, siteUrl } from "./site";

export const personId = `${siteUrl}/#person`;
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: profile.name,
  url: canonicalUrl("/"),
  jobTitle: experiences.find(experience => experience.id === "ca-neops-it")?.role ?? profile.homepage.title,
  sameAs: [profile.linkedin],
  knowsAbout: profile.expertise,
  alumniOf: { "@type": "EducationalOrganization", name: profile.education.school },
};

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${canonicalUrl("/a-propos")}#profile`,
  url: canonicalUrl("/a-propos"),
  name: `À propos de ${profile.name}`,
  mainEntity: { "@id": personId },
};
