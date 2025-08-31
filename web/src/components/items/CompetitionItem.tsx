"use client";

import { motion } from "framer-motion";
import { Trophy, Users, ExternalLink } from "lucide-react";
import { CompetitionItem as CompetitionType } from "@/config/content";

interface CompetitionItemProps {
  item: CompetitionType;
  index: number;
}

export default function CompetitionItem({ item, index }: CompetitionItemProps) {
  const isWinning = item.placement.toLowerCase().includes('1st') || 
                   item.placement.toLowerCase().includes('first') ||
                   item.placement.toLowerCase().includes('winner');

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="surface rounded-lg p-6"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-start gap-3">
          <div className={`p-3 rounded-lg ${isWinning ? 'bg-yellow-500/20 text-yellow-300 underglow-yellow' : 'bg-cyan-500/20 text-cyan-300 underglow-cyan'}`}>
            <Trophy size={18} />
          </div>
          <div>
            <h3 className="text-white text-lg font-medium">{item.title}</h3>
            <p className="text-zinc-400 text-sm">{item.event}</p>
            {item.team && (
              <p className="text-zinc-500 text-xs flex items-center gap-1 mt-1">
                <Users size={12} />
                {item.team}
              </p>
            )}
          </div>
        </div>
        <div className="text-right">
          <span className={`px-3 py-1 rounded text-sm font-medium ${
            isWinning 
              ? 'bg-yellow-500/20 border border-yellow-500/30 text-yellow-300'
              : 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-300'
          }`}>
            {item.placement}
          </span>
          <p className="text-zinc-400 text-xs mt-1">{item.date}</p>
        </div>
      </div>

      {item.description && (
        <p className="text-zinc-300 text-sm mb-3">{item.description}</p>
      )}

      {/* Skills */}
      {item.skills && item.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {item.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-black/20 border border-red-500/20 text-red-300 text-xs rounded tag-underglow"
              style={{
                animationDelay: `${i * 0.3}s`
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {item.href && (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 text-sm transition-colors"
        >
          View Details
          <ExternalLink size={14} />
        </a>
      )}
    </motion.article>
  );
}
