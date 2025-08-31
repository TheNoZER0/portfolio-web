"use client";

import { Code } from "lucide-react";
import Section from "../Section";
import ProjectItem from "../items/ProjectItem";
import { projectsData } from "@/config/content";

export default function ProjectsSection() {
  // Sort projects to show featured ones first
  const sortedProjects = [...projectsData].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <Section id="projects" title="Projects" icon={<Code size={24} />}>
      <div className="grid gap-4">
        {sortedProjects.map((item, index) => (
          <ProjectItem key={index} item={item} index={index} />
        ))}
      </div>
      <p className="text-zinc-400 text-sm mt-6">
        More projects available on{" "}
        <a
          href="https://github.com/TheNoZER0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 hover:text-cyan-200 transition-colors"
        >
          GitHub
        </a>
        .
      </p>
    </Section>
  );
}
