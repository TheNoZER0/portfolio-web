"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { profile } from "@/config/profile";

const sections = [
  { id: "hero", label: "Home" },
  { id: "education", label: "Education" },
  { id: "leadership", label: "Leadership" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "competitions", label: "Competitions" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [active, setActive] = useState<string>("hero");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 96 && rect.bottom >= 96) {
          setActive(s.id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all",
      scrolled ? "backdrop-blur-md bg-black/40 border-b border-white/10" : "bg-transparent"
    )}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-16 flex items-center justify-center">
          <nav className="flex items-center gap-8 text-sm">
            {sections.map((s, index) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                className={cn(
                  "relative text-zinc-300 hover:text-white transition-colors px-2 py-1 rounded",
                  active === s.id && "text-white"
                )}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 8px rgba(0, 255, 255, 0.8)",
                  boxShadow: "0 0 10px rgba(0, 255, 255, 0.3)"
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {s.label}
                {active === s.id && (
                  <motion.span 
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[var(--color-brand)]"
                    layoutId="activeSection"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;


