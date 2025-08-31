import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer>
      <p>© {year} Zainalabdeen Al‑Saffi</p>
    </footer>
  )
}

export default Footer
