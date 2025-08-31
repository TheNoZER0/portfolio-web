"use client";

import Section from "../Section";
import LeadershipItem from "../items/LeadershipItem";
import { leadershipData } from "@/config/content";

export default function LeadershipSection() {
  return (
    <Section id="leadership" title="Leadership">
      <div className="grid gap-4">
        {leadershipData.map((item, index) => (
          <LeadershipItem key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}
