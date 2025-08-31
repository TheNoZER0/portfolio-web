import React from 'react'

const experiences = [
  {
    title: 'Data Science Intern',
    company: 'Thiess',
    duration: 'Dec. 2024 -- Feb.2025',
    bullets: [
      'Developed a statistical learning state machine using Gaussian Mixture Models and IMM-EKF for real-time truck operation classification and sensor fusion, enhancing reliability and reducing costs by 20%.',
      'Developed a linear model to correct timestamp misalignment, ensuring synchronisation across data sources.',
      'Optimised GMM performance via BIC, AIC, Elbow Method, Calinski-Harabasz Index, and the EM algorithm'
    ],
    skills: ['AI']
  },
  {
    title: 'Lead Software Engineer',
    company: 'UQ Racing',
    duration: 'Nov. 2024 -- June 2025',
    bullets: [
      'Led ROS-to-ROS2 migration in Python and C++, integrating TensorRT-quantised YOLOv11 for faster, more accurate cone detection in real-time autonomous navigation.',
      'Researched and experimented with advanced sensor fusion techniques (EKF, UKF) and FAST-LIO SLAM to produce high-fidelity simulation maps of test tracks.'
    ],
    skills: ['Python', 'C++']
  },
  {
    title: 'Software Engineer',
    company: 'UQ Racing',
    duration: 'Feb. 2024 -- Nov. 2024',
    bullets: [
      'Developed path planning algorithms using a perception stack integrating YOLOv8, Lidar, and INS data with Delaunay Triangulation for track driving.'
    ],
    skills: []
  },
  {
    title: 'Casual Academic Tutor',
    company: 'University of Queensland',
    duration: 'June. 2025 -- Present',
    bullets: [
      'COMP3710 (Pattern Recognition and Analysis): Instructed 20+ students weekly on machine and deep learning models and techniques'
    ],
    skills: []
  },
  {
    title: 'Student Services Ambassador',
    company: 'University of Queensland',
    duration: 'Jan. 2025 -- Present',
    bullets: [
      'Assisted students with selection of courses and navigating UQ\'s proprietary software for enrollments, while representing the university as one of 30 ambassadors'
    ],
    skills: []
  },
  {
    title: 'Future Students Ambassador',
    company: 'University of Queensland',
    duration: 'Mar. 2025 -- Present',
    bullets: [
      'Represented the university and EAIT faculty in school expos, talks and careers fairs to guide prospective students in degree selection'
    ],
    skills: ['AI']
  }
]

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, idx) => (
          <div className="experience-item" key={idx}>
            <div className="experience-header">
              <div className="experience-title-section">
                <h3 className="experience-title">{exp.title}</h3>
                <h4 className="experience-company">{exp.company}</h4>
              </div>
              <span className="experience-duration">{exp.duration}</span>
            </div>
            <ul className="experience-bullets">
              {exp.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {exp.skills.length > 0 && (
              <div className="experience-skills">
                <div className="skills-tags">
                  {exp.skills.map((skill, skillIdx) => (
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

export default Experience
