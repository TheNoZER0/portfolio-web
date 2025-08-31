"use client";

import { sectionConfig } from "@/config/content";
import Hero from "./Hero";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import CompetitionsSection from "./sections/CompetitionsSection";
import EducationSection from "./sections/EducationSection";
import LeadershipSection from "./sections/LeadershipSection";
import Contact from "./Contact";

// Map section IDs to their components
const sectionComponents = {
  hero: Hero,
  experience: ExperienceSection,
  projects: ProjectsSection,
  competitions: CompetitionsSection,
  education: EducationSection,
  leadership: LeadershipSection,
  contact: Contact,
};

export default function DynamicPortfolio() {
  // Get enabled sections sorted by order
  const enabledSections = Object.entries(sectionConfig)
    .filter(([_, config]) => config.enabled)
    .sort(([_, a], [__, b]) => a.order - b.order);

  return (
    <>
      {enabledSections.map(([sectionId]) => {
        const Component = sectionComponents[sectionId as keyof typeof sectionComponents];
        return Component ? <Component key={sectionId} /> : null;
      })}
    </>
  );
}
