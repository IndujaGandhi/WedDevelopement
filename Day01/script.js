(() => {
  const page = document.body.dataset.page;
  const navLinks = document.querySelectorAll('.main-nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (page === 'home' && href === 'Portfolio.html') {
      link.classList.add('active');
    } else if (page && href && href.includes(page)) {
      link.classList.add('active');
    }
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
