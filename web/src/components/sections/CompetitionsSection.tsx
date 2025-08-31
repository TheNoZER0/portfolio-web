"use client";

import Section from "../Section";
import CompetitionItem from "../items/CompetitionItem";
import { competitionsData } from "@/config/content";

export default function CompetitionsSection() {
  return (
    <Section id="competitions" title="Competitions & Achievements">
      <div className="grid gap-4">
        {competitionsData.map((item, index) => (
          <CompetitionItem key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}
