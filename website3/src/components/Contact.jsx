import React from 'react'

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-text">
        Looking for roles in embedded systems, machine learning or quantitative research?
        Let's connect.
      </p>
      <div className="contact-links">
        <a href="mailto:zainalsaffi@gmail.com">
          <img src="/assets/email.svg" alt="Email" />
        </a>
        <a href="https://github.com/TheNoZER0" target="_blank" rel="noopener noreferrer">
          <img src="/assets/github.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/zain-al-saffi-881492250/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </section>
  )
}

export default Contact
