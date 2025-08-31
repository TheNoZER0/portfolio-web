import React from 'react'

const skills = [
  {
    name: 'Languages',
    level: 95,
    details: 'Python, C/C++, Java, JavaScript, TypeScript'
  },
  {
    name: 'Frameworks & SDKs',
    level: 90,
    details: 'ROS, TensorRT, PyTorch, scikit‑learn, Streamlit'
  },
  {
    name: 'Tools',
    level: 85,
    details: 'Docker, Git, VS Code, Jupyter, Azure Databricks'
  },
  {
    name: 'Soft Skills',
    level: 100,
    details: 'Leadership, Collaboration, Public Speaking'
  }
]

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
  )
}

export default Skills
