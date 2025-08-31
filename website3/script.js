// IntersectionObserver to reveal sections and animate skill bars
document.addEventListener('DOMContentLoaded', () => {
  // Update copyright year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const sections = document.querySelectorAll('.section');
  const options = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        // Animate stat bars inside this section
        entry.target.querySelectorAll('.stat-bar').forEach(bar => {
          const fill = bar.getAttribute('data-fill');
          const inner = bar.querySelector('.stat-fill');
          if (inner && fill) {
            inner.style.width = fill + '%';
          }
        });
        obs.unobserve(entry.target);
      }
    });
  }, options);
  sections.forEach(sec => observer.observe(sec));
});