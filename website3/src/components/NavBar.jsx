import React from 'react'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">ZAINALABDEEN</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#leadership">Leadership</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#competitions">Competitions</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
