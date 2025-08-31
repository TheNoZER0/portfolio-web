import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Leadership from './components/Leadership'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Competitions from './components/Competitions'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NeonLines from './components/NeonLines'
import CrossOverlay from './components/CrossOverlay'

function App() {
  useEffect(() => {
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

  return (
    <React.Fragment>
      <CrossOverlay />
      <NeonLines />
      <NavBar />
      <Hero />
      <main>
        <About />
        <Education />
        <Leadership />
        <Experience />
        <Projects />
        <Competitions />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App
