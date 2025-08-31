# Logo Integration Guide

This guide shows you how to add company, organization, and project logos to your portfolio.

## 📁 Logo Storage

Logos are stored in the `public/logos/` directory and can be accessed via `/logos/filename.ext` in your content.

```
public/
├── logos/
│   ├── thiess.png
│   ├── uq.png
│   ├── uq-racing.png
│   ├── uq-computing.png
│   ├── uq-fintech.png
│   ├── imc.png
│   └── valorant.png
```

## 🖼️ Adding Logos to Content

### Experience Items
Add the `logo` property to any experience in `src/config/content.ts`:

```typescript
export const experienceData: ExperienceItem[] = [
  {
    role: "Data Science Intern",
    company: "Thiess",
    period: "Dec. 2024 -- Feb.2025",
    logo: "/logos/thiess.png", // Add this line
    highlights: [
      "Developed statistical learning models...",
    ],
    skills: ["AI"]
  }
];
```

### Project Items
Add logos to projects:

```typescript
export const projectsData: ProjectItem[] = [
  {
    title: "ValoStats",
    description: "Valorant statistics platform",
    logo: "/logos/valorant.png", // Add this line
    tags: ["Python", "Streamlit"],
    featured: false
  }
];
```

### Leadership Items
Add logos to leadership roles:

```typescript
export const leadershipData: LeadershipItem[] = [
  {
    role: "Treasurer",
    organization: "UQ Computing Society",
    period: "2025 -- Present",
    logo: "/logos/uq-computing.png", // Add this line
    highlights: [
      "Managed society finances...",
    ]
  }
];
```

## 🎨 Logo Specifications

### Recommended Format
- **Format**: PNG with transparent background (preferred) or SVG
- **Size**: 256x256px minimum (will be displayed at 32x32px)
- **Background**: Transparent or white
- **Style**: Clean, minimal company/organization logos

### Logo Sources
1. **Company websites** - Usually in press kits or about pages
2. **Wikipedia** - Often has official logos
3. **Brand guidelines** - Official brand asset downloads
4. **Logo repositories** - Like Brandfetch, LogoSearch, etc.

## 💡 Example Logo Updates

Here's how to add logos to your current content:

### 1. Thiess Experience
```typescript
{
  role: "Data Science Intern",
  company: "Thiess",
  logo: "/logos/thiess.png", // Download from Thiess website
  // ... rest of content
}
```

### 2. UQ Racing Experience
```typescript
{
  role: "Lead Software Engineer", 
  company: "UQ Racing",
  logo: "/logos/uq-racing.png", // UQ Racing team logo
  // ... rest of content
}
```

### 3. Leadership Roles
```typescript
{
  role: "Treasurer",
  organization: "UQ Computing Society", 
  logo: "/logos/uq-computing.png", // UQCS logo
  // ... rest of content
},
{
  role: "General Executive",
  organization: "UQ Fintech Society",
  logo: "/logos/uq-fintech.png", // UQ Fintech logo  
  // ... rest of content
}
```

### 4. Project Logos
```typescript
{
  title: "IMC Prosperity 3",
  description: "Trading competition project",
  logo: "/logos/imc.png", // IMC Trading logo
  // ... rest of content
},
{
  title: "ValoStats", 
  description: "Valorant stats platform",
  logo: "/logos/valorant.png", // Valorant game logo
  // ... rest of content
}
```

## 🔧 Technical Details

### Logo Display
- **Size**: 48x48px container with 32x32px image
- **Background**: Semi-transparent white (`bg-white/10`)
- **Position**: Top-left of each card
- **Fallback**: If no logo provided, shows default icon (briefcase, code, crown, etc.)

### Image Optimization
Next.js automatically optimizes images:
- Lazy loading
- WebP conversion (when supported)
- Responsive sizing
- Blur placeholder

### File Naming Convention
Use lowercase, hyphenated names:
- `thiess.png`
- `uq-computing.png` 
- `uq-fintech.png`
- `imc-trading.png`

## 🚀 Quick Setup Steps

1. **Download logos** for your companies/organizations
2. **Save them** in `public/logos/` directory
3. **Add logo paths** to your content in `src/config/content.ts`
4. **Refresh** your browser to see the changes

## 🎯 Logo Sources for Your Content

### Companies
- **Thiess**: https://thiess.com (check their press/media section)
- **University of Queensland**: Official UQ brand guidelines

### Organizations  
- **UQ Computing Society**: Contact UQCS for official logo
- **UQ Fintech Society**: Contact society for official logo
- **UQ Racing**: Team website or social media

### Projects
- **IMC Trading**: Official IMC website
- **Valorant**: Riot Games press kit
- **Generic tech logos**: For algorithms/coding projects

---

**Pro Tip**: Always use official logos and respect brand guidelines. If unsure about usage rights, contact the organization directly.
