"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type Project = {
  title: string;
  description: string;
  imageSrc?: string;
  highlights?: string[];
  href?: string;
  tags?: string[];
};

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="surface rounded-lg overflow-hidden"
    >
      {project.imageSrc && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      )}
      <div className={cn("p-5", !project.imageSrc && "pt-6")}> 
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-white text-lg font-medium">{project.title}</h3>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-brand)] text-sm hover:underline"
            >
              View →
            </a>
          )}
        </div>
        <p className="text-zinc-300 mt-2">{project.description}</p>
        {project.highlights && (
          <ul className="list-disc list-inside mt-3 text-zinc-300 text-sm space-y-1">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}
        {project.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t, i) => (
              <span key={i} className="text-xs text-zinc-300 border border-white/10 rounded px-2 py-1">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}


