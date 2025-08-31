"use client";

import { motion } from "framer-motion";
import experienceData from "@/data/experience.json";

type ExperienceItem = {
  role: string;
  company: string;
  period?: string;
  summary?: string;
  highlights?: string[];
};

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl text-white mb-8"
        >
          Experience
          <span className="text-[var(--color-brand)]">{' //'}</span>
        </motion.h2>

        <div className="grid gap-4">
          {(experienceData as ExperienceItem[]).map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="surface rounded-lg p-6"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h3 className="text-white text-xl font-medium">
                  {item.role || "Experience"}
                  {item.company ? ` · ${item.company}` : ""}
                </h3>
                {item.period && (
                  <span className="text-xs text-zinc-400">{item.period}</span>
                )}
              </div>
              {(!item.highlights || item.highlights.length === 0) && item.summary && (
                <p className="text-zinc-300 mt-2">{item.summary}</p>
              )}
              {item.highlights && item.highlights.length > 0 && (
                <ul className="list-disc list-inside mt-3 text-zinc-300 text-sm space-y-1">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
        <p className="text-zinc-400 text-sm mt-6">Resume available below.</p>
      </div>
    </section>
  );
}


