"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export default function Section({ id, title, children, className = "", icon }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          {icon && (
            <div className="p-3 rounded-lg bg-red-500/20 text-red-300 underglow-cyan">
              {icon}
            </div>
          )}
          <h2 className="font-display text-3xl text-white hologram-effect">
            {title}
            <span className="text-[var(--color-brand)] slash-breathing slash-glitch">
              {' //'}
            </span>
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
