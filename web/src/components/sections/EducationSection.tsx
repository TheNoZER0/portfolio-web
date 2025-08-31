"use client";

import Section from "../Section";
import EducationItem from "../items/EducationItem";
import { educationData } from "@/config/content";

export default function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-4">
        {educationData.map((item, index) => (
          <EducationItem key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}
