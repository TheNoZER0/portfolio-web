import React from 'react'

function Hero() {
  const tags = ['Embedded Systems', 'Machine Learning', 'Quant Developer', 'Researcher']
  
  return (
    <section id="hero" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Zainalabdeen Al‑Saffi</h1>
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
  )
}

export default Hero
