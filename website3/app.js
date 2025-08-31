/*
  React application powering the Need for Speed‑inspired portfolio.

  Components assemble the page into distinct sections. An
  IntersectionObserver hook animates elements into view and fills
  progress bars once scrolled into view. Data for experience,
  projects and skills lives in top‑level constants to keep the
  component definitions clean.
*/

const experiences = [
  {
    title: 'Data Science Intern',
    company: 'Thiess',
    duration: 'Dec 2024 – Feb 2025',
    bullets: [
      'Designed a GMM + IMM‑EKF state machine for real‑time truck classification, boosting reliability and cutting costs by 20%.',
      'Implemented a timestamp synchronisation model across disparate telemetry streams using PySpark and SQL.',
      'Optimised model performance via BIC, AIC and custom penalty matrices.'
    ]
  },
  {
    title: 'Lead Software Engineer',
    company: 'UQ Racing',
    duration: 'Nov 2024 – Jun 2025',
    bullets: [
      'Led ROS1→ROS2 migration in Python/C++, integrating TensorRT‑quantised YOLOv11 for rapid cone detection.',
      'Built a Dockerised ROS2–Gazebo simulation environment for remote autonomous testing.',
      'Explored advanced sensor fusion (EKF/UKF) and FAST‑LIO SLAM for high‑fidelity track mapping.'
    ]
  },
  {
    title: 'Academic Tutor & Ambassador',
    company: 'University of Queensland',
    duration: '2025 – Present',
    bullets: [
      'Educate 20+ students weekly in pattern recognition and deep learning (COMP3710).',
      'Serve as Student Services & Future Students ambassador, guiding prospective engineers.'
    ]
  }
];

const projects = [
  {
    title: 'IMC Prosperity 3',
    description: 'Algorithmic trading challenge — built mean‑reversion pairs & options strategies using cointegration, OU models, Black‑Scholes & delta‑hedging to finish 1st QLD, 9th AU.'
  },
  {
    title: 'ValoStats',
    description: 'Full‑stack analytics platform pulling real‑time match data via the RIOT API; engineered features and developed ensemble models achieving ~90% prediction accuracy.'
  },
  {
    title: 'AlgoJam',
    description: 'Developed ARIMA‑based strategies and pair trading for the UQ FinTech Algothon, securing a podium finish.'
  },
  {
    title: 'SkinDetect',
    description: 'Siamese ResNet50 with triplet loss to classify skin lesions (ISIC 2020); reached 95% accuracy with balanced sampling.'
  }
];

const skills = [
  {
    name: 'Languages',
    level: 90,
    details: 'Python, C/C++, Java, JavaScript, TypeScript'
  },
  {
    name: 'Frameworks & SDKs',
    level: 85,
    details: 'ROS, TensorRT, PyTorch, scikit‑learn, Streamlit'
  },
  {
    name: 'Tools',
    level: 80,
    details: 'Docker, Git, VS Code, Jupyter, Azure Databricks'
  },
  {
    name: 'Soft Skills',
    level: 75,
    details: 'Leadership, Collaboration, Public Speaking'
  }
];

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">ZAINALABDEEN</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  const tags = ['Embedded Systems', 'Machine Learning', 'Quant Developer', 'Researcher'];
  return (
    <section id="hero" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Zainalabdeen Al‑Saffi</h1>
        <p className="hero-subtitle">
          Engineering & Mathematics student transferring into the Bachelor / Masters of
          Engineering at UQ. I build intelligent systems, optimise autonomy and seek
          alpha in markets.
        </p>
        <div className="hero-tags">
          {tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <p style={{fontSize: '1rem', colour: '#b5c1db', maxWidth: '850px'}}>
        I’m a Brisbane‑based engineering student transitioning into the Bachelor / Masters of
        Engineering program at the University of Queensland. With a strong foundation in
        mathematics and computer science, my passion lies at the intersection of
        embedded systems, machine learning and quantitative research. Whether it’s building
        autonomous race cars, developing generative models for medical data or crafting
        trading algorithms, I enjoy tackling challenging problems and translating
        cutting‑edge research into real‑world impact.
      </p>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="cards">
        {experiences.map((exp, idx) => (
          <div className="card" key={idx}>
            <h3>{exp.title}</h3>
            <h4>{exp.company} — {exp.duration}</h4>
            <ul>
              {exp.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects & Awards</h2>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div className="skill-group" key={idx} data-fill={skill.level}>
            <h4>{skill.name}</h4>
            <div className="stat-bar" data-fill={skill.level}>
              <div className="stat-fill"></div>
            </div>
            <small>{skill.details}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-text">
        Looking for roles in embedded systems, machine learning or quantitative research?
        Let’s connect.
      </p>
      <div className="contact-links">
        <a href="mailto:zainalsaffi@gmail.com"><img src="assets/email.svg" alt="Email" /></a>
        <a href="https://github.com/TheNoZER0" target="_blank" rel="noopener noreferrer"><img src="assets/github.svg" alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/zain-al-saffi-881492250/" target="_blank" rel="noopener noreferrer"><img src="assets/linkedin.svg" alt="LinkedIn" /></a>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>© {year} Zainalabdeen Al‑Saffi</p>
    </footer>
  );
}

function useRevealObserver() {
  React.useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const options = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          // Fill any stat bars inside this section
          entry.target.querySelectorAll('.stat-bar').forEach(bar => {
            const fill = bar.getAttribute('data-fill');
            const inner = bar.querySelector('.stat-fill');
            if (inner) {
              inner.style.width = fill + '%';
            }
          });
          obs.unobserve(entry.target);
        }
      });
    }, options);
    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);
}

function App() {
  useRevealObserver();
  return (
    <React.Fragment>
      <div id="neon-lines"></div>
      <NavBar />
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));