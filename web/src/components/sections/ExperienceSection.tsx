"use client";

import { Briefcase } from "lucide-react";
import Section from "../Section";
import ExperienceItem from "../items/ExperienceItem";
import { experienceData } from "@/config/content";

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" icon={<Briefcase size={24} />}>
      <div className="grid gap-4">
        {experienceData.map((item, index) => (
          <ExperienceItem key={index} item={item} index={index} />
        ))}
      </div>
      <p className="text-zinc-400 text-sm mt-6">
        Resume available in the contact section below.
      </p>
    </Section>
  );
}
