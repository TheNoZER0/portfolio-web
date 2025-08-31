# Modular Cyberpunk Portfolio

A fully modular, cyberpunk-themed portfolio website built with Next.js. Features a dynamic PCB circuit board background and easy content management.

## 🚀 Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Update your content** (see [Content Management](#-content-management)):
```bash
# Option 1: Edit content directly
# Edit src/config/content.ts

# Option 2: Sync from existing resume
npm run sync:content
```

3. **Run development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📝 Content Management

### Easy Updates (Recommended)
**Edit `src/config/content.ts`** - This is your main content file:

```typescript
// Add/edit your experience
export const experienceData = [
  {
    role: "Software Engineer",
    company: "Tech Corp",
    period: "2024 - Present",
    highlights: [
      "Built awesome things",
      "Led important projects"
    ],
    skills: ["React", "Python", "AI"]
  }
];

// Add/edit your projects  
export const projectsData = [
  {
    title: "Cool Project",
    description: "What it does",
    tags: ["React", "AI"],
    github: "https://github.com/user/repo",
    featured: true
  }
];

// Add competitions & achievements
export const competitionsData = [
  {
    title: "Hackathon Winner",
    event: "Major Hackathon 2024",
    placement: "1st Place",
    date: "2024"
  }
];
```

### Section Control
Enable/disable and reorder sections:
```typescript
export const sectionConfig = {
  hero: { enabled: true, order: 1 },
  experience: { enabled: true, order: 2, title: "Experience" },
  projects: { enabled: true, order: 3, title: "Projects" },
  competitions: { enabled: true, order: 4, title: "Competitions" },
  contact: { enabled: true, order: 5, title: "Contact" }
};
```

### Advanced: Resume Parsing
If you have a LaTeX resume:
1. Place `resume2page-2.tex` in project root
2. Run `npm run parse:resume` 
3. Run `npm run sync:content`

## 🎨 Features

- **🎯 Modular Content System** - Update content without touching code
- **🎮 Cyberpunk Theme** - Red/cyan PCB circuit board background
- **📱 Responsive Design** - Works on all devices  
- **⚡ Smooth Animations** - Framer Motion powered
- **🏆 Competition Section** - Showcase achievements
- **🔧 Easy Customization** - One file to rule them all

## 📁 Project Structure

```
src/
├── config/
│   ├── content.ts          # 🎯 EDIT THIS - Main content file
│   ├── profile.ts          # Personal info (name, email, etc.)
│   └── projectLinks.ts     # GitHub links mapping
├── components/
│   ├── sections/           # Individual section components
│   ├── items/             # Individual item components
│   └── DynamicPortfolio.tsx # Main portfolio renderer
└── app/
    ├── globals.css         # Cyberpunk styling
    └── page.tsx           # Main page
```

## 🛠️ Customization

### Personal Information
Update `src/config/profile.ts`:
```typescript
export const profile = {
  name: "Your Name",
  email: "your@email.com",
  githubUsername: "yourusername",
  // ...
};
```

### Styling & Theme
Customize cyberpunk colors in `src/app/globals.css`:
- PCB trace colors (red/cyan)
- Background effects
- Typography

### Adding New Sections
1. Define data types in `src/config/content.ts`
2. Create item/section components
3. Add to `sectionConfig`
4. Register in `DynamicPortfolio.tsx`

## 📖 Documentation

- **[CONTENT_GUIDE.md](CONTENT_GUIDE.md)** - Detailed content management guide
- **[scripts/](scripts/)** - Resume parsing and content sync tools

## 🚀 Deployment

```bash
npm run build
npm run start
```

Deploy to Vercel, Netlify, or any platform supporting Next.js.