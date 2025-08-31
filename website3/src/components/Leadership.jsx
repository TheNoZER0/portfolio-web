import React from 'react'

const leadershipData = [
  {
    role: 'Treasurer',
    organization: 'UQ Computing Society',
    duration: '2025 -- Present',
    highlights: [
      'Derived a mathematical formula to model optimal ticket prices to break even on events that was integrated into a python frontend, preventing UQCS from entering a deficit',
      'Managed society finances and budget allocation for events and activities',
      'Maintained transparent financial records and reporting to executive committee'
    ],
    skills: ['Financial Management', 'Budget Planning', 'Leadership', 'Event Coordination']
  },
  {
    role: 'General Executive',
    organization: 'UQ Fintech Society',
    duration: '2025 -- Present',
    highlights: [
      'Contributed to strategic planning and execution of fintech educational events',
      'Assisted in organizing industry networking sessions and guest speaker events',
      'Supported recruitment and member engagement initiatives'
    ],
    skills: ['Strategic Planning', 'Event Management', 'Industry Relations', 'Team Collaboration']
  },
  {
    role: 'General Committee Member',
    organization: 'UQ Computing Society',
    duration: '2024',
    highlights: [
      'Participated in planning and executing computing-focused workshops and events',
      'Assisted in member engagement and community building activities',
      'Contributed to society initiatives and technical presentations'
    ],
    skills: ['Community Building', 'Event Planning', 'Technical Presentations']
  }
]

function Leadership() {
  return (
    <section id="leadership" className="section">
      <h2 className="section-title">Leadership</h2>
      <div className="leadership-grid">
        {leadershipData.map((role, idx) => (
          <div className="leadership-card" key={idx}>
            <div className="leadership-header">
              <div className="leadership-title-section">
                <h3 className="leadership-title">{role.role}</h3>
                <h4 className="leadership-organization">{role.organization}</h4>
              </div>
              <span className="leadership-duration">{role.duration}</span>
            </div>
            <ul className="leadership-highlights">
              {role.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
            {role.skills.length > 0 && (
              <div className="leadership-skills">
                <div className="skills-tags">
                  {role.skills.map((skill, skillIdx) => (
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

export default Leadership
