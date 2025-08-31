/*
  Script to sync resume data to the new modular content system.
  Usage: npx tsx scripts/sync-content.ts
  
  This script:
  1. Reads your existing JSON data files
  2. Converts them to the new content format
  3. Updates src/config/content.ts with real data
*/

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");
const CONTENT_FILE = path.resolve(ROOT, "src/config/content.ts");
const EXPERIENCE_JSON = path.resolve(ROOT, "src/data/experience.json");
const PROJECTS_JSON = path.resolve(ROOT, "src/data/projects.json");

type OldExperience = {
  role: string;
  company: string;
  period?: string;
  summary?: string;
  highlights?: string[];
};

type OldProject = {
  title: string;
  description?: string;
  tags?: string[];
  href?: string;
};

function readJsonFile(filepath: string): any {
  try {
    return JSON.parse(fs.readFileSync(filepath, "utf-8"));
  } catch (error) {
    console.log(`Could not read ${filepath}, using empty array`);
    return [];
  }
}

function convertExperienceData(oldData: OldExperience[]) {
  return oldData.map(item => ({
    role: item.role,
    company: item.company,
    period: item.period,
    summary: item.summary,
    highlights: item.highlights,
    // Add skills extraction from highlights if needed
    skills: extractSkillsFromText(item.highlights?.join(" ") || item.summary || "")
  }));
}

function convertProjectData(oldData: OldProject[]) {
  return oldData.map(item => ({
    title: item.title,
    description: item.description || "Project description",
    tags: item.tags || [],
    github: item.href && item.href.includes('github.com') ? item.href : undefined,
    href: item.href && !item.href.includes('github.com') ? item.href : undefined,
    featured: false // You can manually set this later
  }));
}

function extractSkillsFromText(text: string): string[] {
  const commonSkills = [
    'React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#',
    'Machine Learning', 'AI', 'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes',
    'AWS', 'Azure', 'GCP', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis',
    'Git', 'Linux', 'API', 'REST', 'GraphQL', 'HTML', 'CSS', 'SQL'
  ];
  
  const foundSkills = commonSkills.filter(skill => 
    text.toLowerCase().includes(skill.toLowerCase())
  );
  
  return [...new Set(foundSkills)]; // Remove duplicates
}

function generateContentFile(experienceData: any[], projectsData: any[]) {
  return `// Centralized content configuration - edit this file to update your portfolio
export interface ExperienceItem {
  role: string;
  company: string;
  period?: string;
  location?: string;
  summary?: string;
  highlights?: string[];
  skills?: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
}

export interface CompetitionItem {
  title: string;
  event: string;
  placement: string;
  date: string;
  description?: string;
  team?: string;
  skills?: string[];
  href?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  honors?: string[];
  relevant_coursework?: string[];
}

// Your experience data - edit this to update your experience
export const experienceData: ExperienceItem[] = ${JSON.stringify(experienceData, null, 2)};

// Your projects data - edit this to update your projects
export const projectsData: ProjectItem[] = ${JSON.stringify(projectsData, null, 2)};

// Your competitions data - edit this to add competitions
export const competitionsData: CompetitionItem[] = [
  {
    title: "IMC Prosperity Trading Competition",
    event: "IMC Prosperity 3",
    placement: "Top 10%",
    date: "2024",
    description: "Developed algorithmic trading strategies for market making and arbitrage",
    skills: ["Algorithmic Trading", "Python", "Market Analysis"]
  }
  // Add more competitions here...
];

// Your education data
export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Engineering / Masters of Engineering",
    institution: "Your University",
    period: "2022 - 2026",
    honors: ["Computer Engineering Major", "Machine Learning Major"],
    relevant_coursework: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Computer Architecture",
      "Embedded Systems",
      "High Performance Computing"
    ]
  }
];

// Section configuration - controls which sections appear and their order
export const sectionConfig = {
  hero: { enabled: true, order: 1 },
  experience: { enabled: true, order: 2, title: "Experience" },
  projects: { enabled: true, order: 3, title: "Projects" },
  competitions: { enabled: true, order: 4, title: "Competitions & Achievements" },
  education: { enabled: false, order: 5, title: "Education" }, // disabled by default
  contact: { enabled: true, order: 6, title: "Contact" }
};`;
}

async function main() {
  console.log("🔄 Syncing resume data to modular content system...");
  
  // Read existing data
  const oldExperience = readJsonFile(EXPERIENCE_JSON);
  const oldProjects = readJsonFile(PROJECTS_JSON);
  
  // Convert to new format
  const newExperience = convertExperienceData(oldExperience);
  const newProjects = convertProjectData(oldProjects);
  
  // Generate new content file
  const contentFileContent = generateContentFile(newExperience, newProjects);
  
  // Write to content file
  fs.writeFileSync(CONTENT_FILE, contentFileContent);
  
  console.log("✅ Content synced successfully!");
  console.log("📝 Edit src/config/content.ts to customize your content");
  console.log("🏆 Don't forget to add your competitions and achievements!");
  console.log("⚙️  Enable/disable sections in the sectionConfig object");
}

main().catch(console.error);
