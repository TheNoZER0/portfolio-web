"use client";

import ProjectCard, { type Project } from "./ProjectCard";
import { motion } from "framer-motion";
import resumeProjects from "@/data/projects.json";
import { projectLinks, normalizeProjectTitle } from "@/config/projectLinks";

export default function Projects() {
  const pdfProjects: Project[] = (resumeProjects as { title?: string; description?: string; tags?: string[] }[]).map((p) => ({
    title: p.title || "Project",
    description: p.description || "",
    tags: p.tags || [],
    href: projectLinks[normalizeProjectTitle(p.title || "")] || undefined,
  }));
  const projects: Project[] = pdfProjects.length ? pdfProjects : [];

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl text-white mb-8"
        >
          Projects
          <span className="text-[var(--color-brand)]">{' //'}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <ProjectCard key={p.title + idx} project={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}


