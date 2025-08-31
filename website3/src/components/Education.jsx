import React from 'react'

// Education data from content.ts
const educationData = [
  {
    degree: 'Bachelor of Engineering / Masters of Engineering',
    school: 'University of Queensland',
    duration: 'Feb 2026 - Jun 2029',
    gpa: '6.67/7.0',
    specialization: ['Software Engineering'],
    major: ['Computer Engineering', 'Machine Learning'],
    courses: [
      'Data Structures & Algorithms',
      'Machine Learning',
      'Pattern Recognition and Analysis',
      'Computer Architecture',
      'Embedded Systems',
      'High Performance Computing',
      'Software Engineering',
      'Statistical Learning',
      'Mathematical Probability'
    ]
  },
  {
    degree: 'Bachelor of Economics / Computer Science (discontinued)',
    school: 'University of Queensland',
    duration: 'Feb 2025 - Dec 2025',
    gpa: '6.75/7.0',
    specialization: [],
    major: ['Quantitative Analysis', 'Machine Learning'],
    courses: [
      'Data Structures & Algorithms',
      'Machine Learning',
      'Pattern Recognition and Analysis',
      'Econometric Analysis',
      'Macroeconomics',
      'Microeconomics'
    ]
  }
]

function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {educationData.map((edu, idx) => (
          <div className="education-card" key={idx}>
            <div className="education-header">
              <div>
                <h3 className="education-title">{edu.degree}</h3>
                <h4 className="education-school">{edu.school}</h4>
              </div>
              <span className="education-duration">{edu.duration}</span>
            </div>
            
            <div className="education-details">
              <div className="education-detail">
                <span className="detail-label">GPA:</span>
                <span className="detail-value">{edu.gpa}</span>
              </div>
              {edu.specialization.length > 0 && (
                <div className="education-detail">
                  <span className="detail-label">Specialization:</span>
                  <span className="detail-value">{edu.specialization.join(', ')}</span>
                </div>
              )}
              {edu.major.length > 0 && (
                <div className="education-detail">
                  <span className="detail-label">Major:</span>
                  <span className="detail-value">{edu.major.join(', ')}</span>
                </div>
              )}
            </div>
            
            <div className="education-courses">
              <h5 className="courses-title">Relevant Coursework:</h5>
              <div className="courses-list">
                {edu.courses.map((course, courseIdx) => (
                  <span className="course-tag" key={courseIdx}>{course}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
