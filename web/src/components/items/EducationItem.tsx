"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { EducationItem as EducationType } from "@/config/content";

interface EducationItemProps {
  item: EducationType;
  index: number;
}

export default function EducationItem({ item, index }: EducationItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="surface rounded-lg p-6"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded bg-cyan-500/20 text-cyan-300 flex-shrink-0">
          <GraduationCap size={20} />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
            <div>
              <h3 className="text-white text-xl font-medium">{item.degree}</h3>
              <p className="text-zinc-400 text-sm flex items-center gap-1 mt-1">
                <MapPin size={14} />
                {item.institution}
              </p>
            </div>
            <div className="text-right">
              <span className="text-zinc-400 text-sm">{item.period}</span>
              {item.gpa && (
                <p className="text-cyan-300 text-sm font-medium">GPA: {item.gpa}</p>
              )}
            </div>
          </div>

          {/* Specialisation */}
          {item.specialisation && item.specialisation.length > 0 && (
            <div className="mb-4">
              <h4 className="text-white text-sm font-medium mb-2">Specialising in:</h4>
              <div className="flex flex-wrap gap-2">
                {item.specialisation.map((spec, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-300 text-sm rounded"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Majors */}
          {item.majors && item.majors.length > 0 && (
            <div className="mb-4">
              <h4 className="text-white text-sm font-medium mb-2">Focus Areas:</h4>
              <div className="flex flex-wrap gap-2">
                {item.majors.map((major, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm rounded"
                  >
                    {major}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Legacy Honors (for backwards compatibility) */}
          {item.honors && item.honors.length > 0 && (
            <div className="mb-4">
              <h4 className="text-white text-sm font-medium mb-2">Honors:</h4>
              <div className="flex flex-wrap gap-2">
                {item.honors.map((honor, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-sm rounded"
                  >
                    {honor}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Relevant Coursework */}
          {item.relevant_coursework && item.relevant_coursework.length > 0 && (
            <div>
              <h4 className="text-white text-sm font-medium mb-2">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {item.relevant_coursework.map((course, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-black/20 border border-cyan-500/20 text-cyan-300 text-xs rounded"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
