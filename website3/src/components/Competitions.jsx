import React from 'react'

const competitions = [
  {
    title: 'IMC Prosperity Trading Competition',
    event: 'IMC Prosperity 3',
    placement: 'Top 0.4%',
    date: '2025',
    description: 'Developed algorithmic trading strategies for market making and arbitrage, 1st place QLD, 9th AU, 60th algorithmic globally out of 15,000 teams',
    skills: ['Algorithmic Trading', 'Python', 'Market Analysis']
  },
  {
    title: 'UQCS Hackathon',
    event: 'UQCS Hackathon',
    placement: 'People\'s Choice Award',
    date: '2024',
    description: 'Developed a machine learning model to predict match outcomes with 90% accuracy, receiving the People\'s Choice Award at the UQCS Hackathon',
    skills: ['Feature Engineering', 'Machine Learning', 'Python, Streamlit, Pytorch, Kaggle']
  },
  {
    title: 'UQ Fintech AlgoJam',
    event: 'UQ Fintech AlgoJam',
    placement: '3rd Place',
    date: '2024',
    description: 'Used ARIMA time-series models and pair trading strategies to secure third place in the competition sponsored by IMC Trading',
    skills: ['ARIMA', 'Pair Trading', 'Python, Git']
  },
  {
    title: 'Dean\'s Commendation for Academic Excellence',
    event: 'University of Queensland',
    placement: '',
    date: 'Semester 1 2025',
    description: 'Maintained a GPA of 6.67/7.0 over Semester 1 2025',
    skills: ['GPA', 'Academic Excellence']
  }
]

function Competitions() {
  return (
    <section id="competitions" className="section">
      <h2 className="section-title">Competitions & Achievements</h2>
      <div className="competitions-grid">
        {competitions.map((comp, idx) => (
          <div className="competition-card" key={idx}>
            <div className="competition-header">
              <div className="competition-title-section">
                <h3 className="competition-title">{comp.title}</h3>
                <h4 className="competition-event">{comp.event}</h4>
              </div>
              <div className="competition-meta">
                {comp.placement && (
                  <span className="competition-placement">{comp.placement}</span>
                )}
                <span className="competition-date">{comp.date}</span>
              </div>
            </div>
            <p className="competition-description">{comp.description}</p>
            {comp.skills.length > 0 && (
              <div className="competition-skills">
                <div className="skills-tags">
                  {comp.skills.map((skill, skillIdx) => (
                    <span className="skill-tag" key={skillIdx}>{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Competitions
