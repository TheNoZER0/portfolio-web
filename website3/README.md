# Zainalabdeen Al-Saffi Portfolio

A modern, responsive portfolio website built with React and Vite, featuring a Need for Speed Carbon-inspired design with neon aesthetics and smooth animations.

## Features

- 🎨 **Modern Design**: Need for Speed Carbon-inspired dark theme with neon accents
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Vite for lightning-fast development and builds
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML
- 🚀 **Easy Deployment**: Ready for deployment on Vercel, Netlify, or GitHub Pages

## Sections

- **Hero**: Introduction with animated tags
- **About**: Personal background and interests
- **Education**: Academic background with customizable degree, GPA, specialization, and courses
- **Experience**: Professional experience and achievements
- **Projects**: Portfolio of projects and awards
- **Skills**: Technical and soft skills with animated progress bars
- **Contact**: Social links and contact information

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd website3
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Customization

### Education Section

The education section is easily customizable. Edit the `educationData` array in `src/components/Education.jsx`:

```javascript
const educationData = [
  {
    degree: 'Your Degree',
    school: 'Your University',
    duration: '2020 - 2024',
    gpa: '3.8/4.0',
    specialization: 'Your Specialization',
    major: 'Your Major',
    courses: [
      'Course 1 - Description',
      'Course 2 - Description',
      // Add more courses...
    ]
  }
]
```

### Other Sections

- **Experience**: Edit the `experiences` array in `src/components/Experience.jsx`
- **Projects**: Edit the `projects` array in `src/components/Projects.jsx`
- **Skills**: Edit the `skills` array in `src/components/Skills.jsx`
- **Contact**: Update links in `src/components/Contact.jsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Run: `npm run deploy`

## Build

```bash
npm run build
```

This creates a `dist` folder with the production build.

## Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom styling with CSS Grid and Flexbox
- **Google Fonts**: Orbitron and Rajdhani fonts

## File Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── NavBar.jsx
│   ├── NeonLines.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: zainalsaffi@gmail.com
- GitHub: [TheNoZER0](https://github.com/TheNoZER0)
- LinkedIn: [Zain Al-Saffi](https://www.linkedin.com/in/zain-al-saffi-881492250/)
