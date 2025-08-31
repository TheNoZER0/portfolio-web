"use client";

import { motion } from "framer-motion";
import { profile } from "@/config/profile";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="font-display text-4xl md:text-6xl text-white hologram-effect">
              {profile.name}
              <span className="text-[var(--color-brand)] slash-breathing slash-glitch">
                {' //'}
              </span>
            </h1>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Bachelor of Engineering / Masters of Engineering student specializing in software with
              Computer Engineering and Machine Learning majors. Passionate about machine learning,
              embedded systems, high performance computing, quantitative research, and algorithmic trading.
              Also exploring opportunities in management and strategy consulting.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


