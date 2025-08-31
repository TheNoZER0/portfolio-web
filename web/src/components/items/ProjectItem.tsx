"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Play } from "lucide-react";
import { ProjectItem as ProjectType } from "@/config/content";

interface ProjectItemProps {
  item: ProjectType;
  index: number;
}

export default function ProjectItem({ item, index }: ProjectItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="surface rounded-lg p-6"
    >
      <div className="flex items-start gap-4">
        {/* Project Logo */}
        {item.logo && (
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center underglow-red">
            <Image
              src={item.logo}
              alt={`${item.title} logo`}
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-white text-xl font-medium">
              {item.title}
              {item.featured && (
                <span className="ml-2 px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs rounded">
                  Featured
                </span>
              )}
            </h3>
            <div className="flex gap-2">
              {item.github && (
                <motion.a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors p-1 rounded"
                  title="View Source"
                  whileHover={{ 
                    scale: 1.2,
                    color: "#00ffff",
                    boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={18} />
                </motion.a>
              )}
              {item.demo && (
                <motion.a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors p-1 rounded"
                  title="Live Demo"
                  whileHover={{ 
                    scale: 1.2,
                    color: "#ff0033",
                    boxShadow: "0 0 10px rgba(255, 0, 51, 0.5)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play size={18} />
                </motion.a>
              )}
              {item.href && !item.demo && (
                <motion.a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors p-1 rounded"
                  title="View Project"
                  whileHover={{ 
                    scale: 1.2,
                    color: "#ffff00",
                    boxShadow: "0 0 10px rgba(255, 255, 0, 0.5)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={18} />
                </motion.a>
              )}
            </div>
          </div>

          <p className="text-zinc-300 text-sm mb-3">{item.description}</p>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-black/20 border border-red-500/20 text-red-300 text-xs rounded tag-underglow"
                  style={{
                    animationDelay: `${i * 0.3}s`
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
