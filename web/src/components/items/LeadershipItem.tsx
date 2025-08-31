"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Crown, Users } from "lucide-react";
import { LeadershipItem as LeadershipType } from "@/config/content";

interface LeadershipItemProps {
  item: LeadershipType;
  index: number;
}

export default function LeadershipItem({ item, index }: LeadershipItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="surface rounded-lg p-6"
    >
      <div className="flex items-start gap-4">
        {/* Organization Logo or Crown Icon */}
        {item.logo ? (
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center underglow-yellow">
            <Image
              src={item.logo}
              alt={`${item.organization} logo`}
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        ) : (
          <div className="p-3 rounded-lg bg-yellow-500/20 text-yellow-300 flex-shrink-0 underglow-yellow">
            <Crown size={20} />
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
            <div>
              <h3 className="text-white text-xl font-medium">
                {item.role}
                {item.organization ? ` · ${item.organization}` : ""}
              </h3>
              {item.team_size && (
                <p className="text-zinc-400 text-sm flex items-center gap-1 mt-1">
                  <Users size={14} />
                  {item.team_size}
                </p>
              )}
            </div>
            <span className="text-zinc-400 text-sm whitespace-nowrap">{item.period}</span>
          </div>

          {/* Description (if no highlights) */}
          {(!item.highlights || item.highlights.length === 0) && item.description && (
            <p className="text-zinc-300 mb-3">{item.description}</p>
          )}

          {/* Highlights */}
          {item.highlights && item.highlights.length > 0 && (
            <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1 mb-3">
              {item.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          )}

          {/* Skills */}
          {item.skills && item.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {item.skills.map((skill, i) => (
                            <span
              key={i}
              className="px-2 py-1 bg-black/20 border border-yellow-500/20 text-yellow-300 text-xs rounded tag-underglow"
              style={{
                animationDelay: `${i * 0.3}s`
              }}
            >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
