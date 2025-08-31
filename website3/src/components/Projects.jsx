import React from 'react'

const projects = [
  {
    title: 'IMC Prosperity 3',
    description: 'Applied advanced statistical techniques in a 5-person team during IMC Trading\'s global competition, including cointegration and Ornstein-Uhlenbeck modeling for mean-reversion, Black-Scholes-based option pricing, IV curve fitting, and delta-hedging to build robust pairs, basket, and options arbitrage strategies. Developed a custom Python visualiser to automate stationarity checks and monitor real-time PnL, contributing to a 1st place QLD finish, 9th AU, 60th algorithmic globally out of 15,000 teams).',
    tags: ['Python', 'Git', 'Jupyter', 'Sk-Learn'],
    github: 'https://github.com/TheNoZER0/imc-prosperity3'
  },
  {
    title: 'ValoStats',
    description: 'Led a team of 6 engineers to develop ValoStats, a full-stack web application using Python and Streamlit that integrates RIOT\'s API for real-time match data; Kaggle dataset was pulled and featured engineered while implemented Gradient Boosting and Logistic Regression ensemble methods to accurately predict match outcomes with 90% accuracy, receiving the People\'s Choice Award at the UQCS Hackathon',
    tags: ['Python', 'Streamlit', 'Jupyter'],
    github: 'https://github.com/XLeling727/Valostats'
  },
  {
    title: 'AlgoJam',
    description: 'Coordinated a team of 3 to analyze and strategize financial instruments for the UQ Fintech Algothon by developing ARIMA time-series models and pair trading strategies, applying exponential moving averages to optimize asset performance, and securing third place in the competition sponsored by IMC Trading',
    tags: ['Python', 'Git'],
    github: 'https://github.com/TheNoZER0/AlgoJam2024'
  },
  {
    title: 'SkinDetect',
    description: 'Designed and implemented a Siamese network with ResNet50 and triplet loss in PyTorch to classify benign and malignant skin lesions for the ISIC 2020 Challenge, achieving 95% accuracy with balanced sampling.',
    tags: ['Python', 'Git', 'Pytorch'],
    github: 'https://github.com/TheNoZER0/SkinDetect'
  }
]

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects & Awards</h2>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-header">
              <h3>{proj.title}</h3>
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <img src="/assets/github.svg" alt="GitHub" />
                </a>
              )}
            </div>
            <p>{proj.description}</p>
            <div className="project-tags">
              {proj.tags.map((tag, tagIdx) => (
                <span className="project-tag" key={tagIdx}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
