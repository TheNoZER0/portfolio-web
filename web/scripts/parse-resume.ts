/*
  Node script to parse resume PDF into structured JSON for Experience and Projects.
  Usage: npx tsx scripts/parse-resume.ts
*/

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - pdf-parse has no types
import pdf from "pdf-parse";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");
const PDF_PATH = path.resolve(ROOT, "../ZainFinal27.pdf");
const TEX_PATH = path.resolve(ROOT, "../resume2page-2.tex");
const OUT_DIR = path.resolve(ROOT, "src/data");

type Experience = {
  role: string;
  company: string;
  period?: string;
  summary?: string;
  highlights?: string[];
};

type Project = {
  title: string;
  description?: string;
  tags?: string[];
  href?: string;
};

function ensureOutDir() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
}

function normalize(text: string): string {
  return text
    .replace(/\r/g, "\n")
    .replace(/\n{2,}/g, "\n")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function extractSections(text: string) {
  // Heuristics: split by section headers commonly found in resumes
  const lines = text.split(/\n/).map((l) => l.trim());
  const sections: Record<string, string[]> = {};
  let current = "";
  for (const line of lines) {
    const headerMatch = /^(experience|work experience|projects|project experience|education|skills)\b/i.exec(
      line
    );
    if (headerMatch) {
      current = headerMatch[1].toLowerCase();
      if (!sections[current]) sections[current] = [];
      continue;
    }
    if (current) sections[current].push(line);
  }
  return sections;
}

function parseExperience(lines: string[]): Experience[] {
  const items: Experience[] = [];
  let buffer: string[] = [];

  const flush = () => {
    const block = buffer.join(" ").trim();
    buffer = [];
    if (!block) return;
    // Patterns like: Role – Company (Period)
    const m = block.match(/^(.*?)\s+[–-]\s+(.*?)\s+\(([^)]+)\)/);
    let role = "";
    let company = "";
    let period: string | undefined;
    let summary = block;
    if (m) {
      role = m[1].trim();
      company = m[2].trim();
      period = m[3].trim();
    } else {
      // Fallback: Role @ Company
      const n = block.match(/^(.*?)\s+@\s+(.*?)(?:\s+\(([^)]+)\))?$/);
      if (n) {
        role = n[1].trim();
        company = n[2].trim();
        period = n[3]?.trim();
      }
    }
    items.push({ role: role || "Experience", company: company || "", period, summary });
  };

  for (const line of lines) {
    if (!line) continue;
    // New bullet or strong separator likely indicates new item
    if (/^[•\-\*]/.test(line) && buffer.length) {
      flush();
      buffer.push(line.replace(/^[•\-\*]\s*/, ""));
    } else if (/^\s*$/.test(line)) {
      if (buffer.length) flush();
    } else {
      buffer.push(line);
    }
  }
  if (buffer.length) flush();
  return items;
}

function parseProjects(lines: string[]): Project[] {
  const items: Project[] = [];
  let buffer: string[] = [];

  const flush = () => {
    const block = buffer.join(" ").trim();
    buffer = [];
    if (!block) return;
    // Patterns like: Title – Tech: desc
    const m = block.match(/^(.*?)\s+[–-]\s+(.*)$/);
    let title = "";
    let description = block;
    if (m) {
      title = m[1].trim();
      description = m[2].trim();
    }
    items.push({ title: title || "Project", description });
  };

  for (const line of lines) {
    if (!line) continue;
    if (/^[•\-\*]/.test(line) && buffer.length) {
      flush();
      buffer.push(line.replace(/^[•\-\*]\s*/, ""));
    } else if (/^\s*$/.test(line)) {
      if (buffer.length) flush();
    } else {
      buffer.push(line);
    }
  }
  if (buffer.length) flush();
  return items;
}

function stripLatex(input: string): string {
  // Preserve escaped percent first
  const ESCAPED_PERCENT_PLACEHOLDER = "§PERCENT§";
  let s = input.replace(/\\%/g, ESCAPED_PERCENT_PLACEHOLDER);
  // Drop LaTeX comments (only unescaped %)
  s = s.replace(/(^|[^\\])%.*$/gm, (_m, p1) => p1);
  // Now handle formatting commands and escapes
  s = s
    .replace(/\\textbf\{([^}]*)\}/g, "$1")
    .replace(/\\emph\{([^}]*)\}/g, "$1")
    .replace(/\\&/g, "&")
    .replace(/\\_/g, "_")
    .replace(/\\\\/g, " ")
    .replace(/\\vspace\{[^}]*\}/g, "")
    .replace(/\\newline/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  // Restore escaped percent
  s = s.replace(new RegExp(ESCAPED_PERCENT_PLACEHOLDER, "g"), "%");
  return s;
}

// Balanced-argument parser
function findCommandArgsAll(
  tex: string,
  command: string,
  section?: { start: number; end: number }
): Array<{ args: string[]; start: number; end: number }> {
  const results: Array<{ args: string[]; start: number; end: number }> = [];
  const startBound = section ? section.start : 0;
  const endBound = section ? section.end : tex.length;
  const cmd = "\\" + command;
  let i = startBound;
  while (i < endBound) {
    const idx = tex.indexOf(cmd, i);
    if (idx === -1 || idx >= endBound) break;
    let cursor = idx + cmd.length;
    const args: string[] = [];
    for (let a = 0; a < 8; a++) {
      while (cursor < endBound && /\s/.test(tex[cursor]!)) cursor++;
      if (tex[cursor] !== '{') break;
      let depth = 0;
      let argStart = cursor + 1;
      let j = cursor;
      for (; j < endBound; j++) {
        const ch = tex[j]!;
        if (ch === '{') depth++;
        else if (ch === '}') {
          depth--;
          if (depth === 0) {
            const content = tex.slice(argStart, j);
            args.push(content);
            cursor = j + 1;
            break;
          }
        }
      }
    }
    if (args.length >= 1) results.push({ args, start: idx, end: cursor });
    i = cursor + 1;
  }
  return results;
}

function sectionBounds(tex: string, sectionTitlePrefix: string): { start: number; end: number } | null {
  const start = tex.indexOf(`\\section{${sectionTitlePrefix}`);
  if (start === -1) return null;
  const next = tex.indexOf("\\section{", start + 9);
  return { start, end: next === -1 ? tex.length : next };
}

function sliceBetween(tex: string, start: number, end: number, patternStart: RegExp, patternEnd: RegExp): string[] {
  // Returns all body slices between patternStart and patternEnd within [start, end)
  const region = tex.slice(start, end);
  const bodies: string[] = [];
  let matchStart: RegExpExecArray | null;
  patternStart.lastIndex = 0;
  while ((matchStart = patternStart.exec(region))) {
    const afterStart = matchStart.index + matchStart[0].length;
    patternEnd.lastIndex = afterStart;
    const matchEnd = patternEnd.exec(region);
    if (!matchEnd) break;
    const body = region.slice(afterStart, matchEnd.index);
    bodies.push(body);
    patternStart.lastIndex = matchEnd.index + matchEnd[0].length;
  }
  return bodies;
}

function parseTexExperience(tex: string): Experience[] {
  const bounds = sectionBounds(tex, "Experience");
  if (!bounds) return [];
  const blocks = findCommandArgsAll(tex, "resumeSubheading", bounds);
  const items: Experience[] = [];
  let lastCompany = "";
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    const [companyRaw = "", _locationRaw = "", roleRaw = "", periodRaw = ""] = b.args;
    const companyClean = stripLatex(companyRaw);
    const roleClean = stripLatex(roleRaw);
    const periodClean = stripLatex(periodRaw);
    const company = companyClean || lastCompany || "";
    if (companyClean) lastCompany = companyClean;

    const nextStart = i + 1 < blocks.length ? blocks[i + 1].start : bounds.end;
    const listBodies = sliceBetween(tex, b.end, nextStart, /\\resumeItemListStart/g, /\\resumeItemListEnd/g);
    const highlights: string[] = [];
    for (const body of listBodies) {
      const bulletBlocks = findCommandArgsAll(body, "resumeItem");
      for (const bb of bulletBlocks) {
        const bullet = stripLatex(bb.args[0] || "");
        if (bullet) highlights.push(bullet);
      }
    }
    const summary = highlights.join(" ");
    items.push({ role: roleClean, company, period: periodClean, summary, highlights });
  }
  return items;
}

function parseTexProjects(tex: string): Project[] {
  const bounds = sectionBounds(tex, "Projects");
  if (!bounds) return [];
  const blocks = findCommandArgsAll(tex, "resumeProjectHeading", bounds);
  const items: Project[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    const [firstArg = "", _dateRaw = ""] = b.args;
    const titleMatch = /\\textbf\{([\s\S]*?)\}/.exec(firstArg);
    const title = stripLatex(titleMatch ? titleMatch[1] : firstArg.split("|")[0]);
    const tagsMatch = /\\emph\{([\s\S]*?)\}/.exec(firstArg);
    const tags = tagsMatch ? stripLatex(tagsMatch[1]).split(/,\s*/).filter(Boolean) : [];

    const nextStart = i + 1 < blocks.length ? blocks[i + 1].start : bounds.end;
    const listBodies = sliceBetween(tex, b.end, nextStart, /\\resumeItemListStart/g, /\\resumeItemListEnd/g);
    const bullets: string[] = [];
    for (const body of listBodies) {
      const bulletBlocks = findCommandArgsAll(body, "resumeItem");
      for (const bb of bulletBlocks) {
        const bullet = stripLatex(bb.args[0] || "");
        if (bullet) bullets.push(bullet);
      }
    }
    const description = bullets.join(" ");

    items.push({ title: stripLatex(title), description: stripLatex(description), tags });
  }
  return items;
}

async function main() {
  let exp: Experience[] = [];
  let pro: Project[] = [];
  if (fs.existsSync(TEX_PATH)) {
    const tex = fs.readFileSync(TEX_PATH, "utf8");
    exp = parseTexExperience(tex);
    pro = parseTexProjects(tex);
  } else if (fs.existsSync(PDF_PATH)) {
    const buf = fs.readFileSync(PDF_PATH);
    const data = await pdf(buf);
    const text = normalize(String(data.text || ""));
    const sections = extractSections(text);
    exp = parseExperience(sections["experience"] || sections["work experience"] || []);
    pro = parseProjects(sections["projects"] || sections["project experience"] || []);
  } else {
    console.error("No resume source found. Expected:", TEX_PATH, "or", PDF_PATH);
    process.exit(1);
  }

  ensureOutDir();
  fs.writeFileSync(path.join(OUT_DIR, "experience.json"), JSON.stringify(exp, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, "projects.json"), JSON.stringify(pro, null, 2));
  console.log(`Wrote ${exp.length} experience and ${pro.length} projects to src/data/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


