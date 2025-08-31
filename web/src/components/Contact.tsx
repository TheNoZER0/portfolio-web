"use client";

import { motion } from "framer-motion";
import { profile } from "@/config/profile";

export default function Contact() {
  const email = profile.email;
  const resumePath = "/resume.pdf";

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl text-white mb-8"
        >
          Contact
          <span className="text-[var(--color-brand)]">{' //'}</span>
        </motion.h2>

        <div className="surface rounded-lg p-6 grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-zinc-300">I’m open to internships, research, and collaborations.</p>
            <div className="mt-4 flex gap-3">
              <a
                href={`mailto:${email}`}
                className="focus-neon inline-flex items-center rounded border border-white/10 px-3 py-2 text-sm text-white hover:bg-white/5"
              >
                Email me
              </a>
              <a
                href={resumePath}
                download
                className="inline-flex items-center rounded border border-[var(--color-brand)]/60 text-[var(--color-brand)] hover:bg-[var(--color-brand)]/10 px-3 py-2 text-sm"
              >
                Download resume
              </a>
            </div>
          </div>
          <div className="text-zinc-300 text-sm">
            <p>Also reach me on:</p>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:underline" href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a className="hover:underline" href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


