# Portfolio Content Management Guide

This guide explains how to easily update your portfolio content without touching the code structure.

## 📁 File Structure

```
src/
├── config/
│   ├── content.ts          # 🎯 MAIN CONTENT FILE - Edit this!
│   ├── profile.ts          # Personal info (name, email, etc.)
│   └── projectLinks.ts     # GitHub links for projects
├── components/
│   ├── sections/           # Individual section components
│   ├── items/             # Individual item components
│   └── DynamicPortfolio.tsx # Main portfolio renderer
```

## 🎯 Quick Start - Updating Your Content

### 1. Edit Your Experience
Open `src/config/content.ts` and find the `experienceData` array:

```typescript
export const experienceData: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    company: "Tech Company",
    period: "Summer 2024",
    location: "San Francisco, CA", // Optional
    highlights: [
      "Developed full-stack applications using React and Node.js",
      "Implemented machine learning models for data analysis",
      "Collaborated with cross-functional teams on product development"
    ],
    skills: ["React", "Node.js", "Python", "Machine Learning"] // Optional
  },
  // Add more experiences here...
];
```

**To add a new experience:**
1. Copy the structure above
2. Fill in your details
3. Add as many bullet points as you want in `highlights`
4. Save the file - changes appear immediately!

### 2. Edit Your Projects
Find the `projectsData` array:

```typescript
export const projectsData: ProjectItem[] = [
  {
    title: "Your Project Name",
    description: "Brief description of what the project does",
    tags: ["React", "Python", "AI"], // Technologies used
    github: "https://github.com/yourusername/repo",
    demo: "https://your-demo-link.com", // Optional
    featured: true // Shows "Featured" badge and appears first
  },
  // Add more projects...
];
```

### 3. Add Competitions & Achievements
Find the `competitionsData` array:

```typescript
export const competitionsData: CompetitionItem[] = [
  {
    title: "Hackathon Name",
    event: "Event/Organization Name",
    placement: "1st Place", // "Top 10%", "Winner", etc.
    date: "March 2024",
    description: "What you built or achieved",
    team: "Team of 4", // Optional
    skills: ["React", "Python", "Machine Learning"], // Optional
    href: "https://link-to-details.com" // Optional
  },
  // Add more competitions...
];
```

### 4. Control Which Sections Appear
Find the `sectionConfig` object:

```typescript
export const sectionConfig = {
  hero: { enabled: true, order: 1 },
  experience: { enabled: true, order: 2, title: "Experience" },
  projects: { enabled: true, order: 3, title: "Projects" },
  competitions: { enabled: true, order: 4, title: "Competitions & Achievements" },
  education: { enabled: false, order: 5, title: "Education" }, // disabled
  contact: { enabled: true, order: 6, title: "Contact" }
};
```

- Set `enabled: false` to hide a section
- Change `order` to reorder sections
- Change `title` to rename section headings

## 🔄 How to Update Content

### Method 1: Direct Editing (Recommended)
1. Open `src/config/content.ts`
2. Edit the data arrays directly
3. Save the file
4. Refresh your browser - changes appear immediately!

### Method 2: Resume Parsing (Advanced)
If you have a LaTeX resume, you can still use the parser:
1. Update your `resume2page-2.tex` file
2. Run `npm run parse:resume`
3. Copy the generated data to `src/config/content.ts`

## 📝 Content Types Explained

### ExperienceItem
```typescript
{
  role: string;           // Job title
  company: string;        // Company name
  period?: string;        // "Jan 2024 - Present"
  location?: string;      // "San Francisco, CA"
  summary?: string;       // Brief description (used if no highlights)
  highlights?: string[];  // Bullet points (preferred over summary)
  skills?: string[];      // Technologies/skills used
}
```

### ProjectItem
```typescript
{
  title: string;          // Project name
  description: string;    // What the project does
  tags: string[];         // Technologies used
  href?: string;          // General project link
  github?: string;        // GitHub repository
  demo?: string;          // Live demo link
  image?: string;         // Project image (future feature)
  featured?: boolean;     // Show "Featured" badge
}
```

### CompetitionItem
```typescript
{
  title: string;          // Competition/achievement name
  event: string;          // Event or organization
  placement: string;      // "1st Place", "Top 10%", etc.
  date: string;           // When it happened
  description?: string;   // What you achieved
  team?: string;          // "Team of 4"
  skills?: string[];      // Technologies used
  href?: string;          // Link to details
}
```

## 🎨 Styling Features

### Automatic Styling
- **Featured projects** get a cyan border and "Featured" badge
- **1st place** competitions get a gold trophy icon and yellow styling
- **Skills tags** are automatically styled with red cyberpunk theme
- **Links** automatically get appropriate icons (GitHub, external link, demo)

### Color Coding
- **Red elements**: Primary actions, skills, main traces
- **Cyan elements**: Secondary actions, featured items, vertical traces
- **Yellow elements**: Achievements, 1st place winners
- **White text**: Primary content
- **Gray text**: Secondary information

## 🚀 Adding New Sections

To add a completely new section (e.g., "Publications"):

1. **Define the data type** in `src/config/content.ts`:
```typescript
export interface PublicationItem {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  link?: string;
}

export const publicationsData: PublicationItem[] = [
  // Your publications...
];
```

2. **Add to section config**:
```typescript
export const sectionConfig = {
  // ... existing sections
  publications: { enabled: true, order: 5, title: "Publications" }
};
```

3. **Create the components** (or ask for help with this part):
   - `src/components/items/PublicationItem.tsx`
   - `src/components/sections/PublicationsSection.tsx`

4. **Register in DynamicPortfolio.tsx**

## 🔧 Troubleshooting

### Changes not appearing?
1. Make sure you saved the file
2. Check the browser console for errors
3. Ensure your JSON syntax is correct (trailing commas, quotes, etc.)

### TypeScript errors?
1. Make sure all required fields are filled
2. Check that optional fields use the `?` syntax
3. Ensure arrays and objects are properly formatted

### Section not showing?
1. Check that `enabled: true` in `sectionConfig`
2. Make sure the data array isn't empty
3. Verify the section is registered in `DynamicPortfolio.tsx`

## 💡 Tips

1. **Use featured projects** to highlight your best work
2. **Add skills arrays** to show your technical expertise
3. **Include links** wherever possible (GitHub, demos, competition pages)
4. **Write clear descriptions** - they help visitors understand your work
5. **Order matters** - put your most impressive items first
6. **Use consistent formatting** for dates and locations

---

**Need help?** The modular system makes it easy to update content without touching complex code. Just edit `src/config/content.ts` and you're good to go!
