// ===== Kamliseo — Navigation & Interactions =====

document.addEventListener('DOMContentLoaded', () => {

  // --- Hamburger toggle ---
  const hamburger = document.querySelector('.hamburger');
  const navMenu   = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // --- Navbar shadow on scroll ---
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // --- Highlight active nav link ---
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = link.getAttribute('href')?.replace(/\/$/, '') || '/';
    if (linkPath === currentPath || (currentPath !== '/' && linkPath !== '/' && currentPath.startsWith(linkPath))) {
      link.classList.add('active');
    }
  });

  // --- Contact form (front-end only) ---
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Envoi…';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = '✓ Message envoyé !';
        btn.style.background = '#10B981';
        contactForm.reset();
        setTimeout(() => {
          btn.textContent = original;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1200);
    });
  }

  // --- FAQ accordion ---
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    if (q) {
      q.addEventListener('click', () => {
        item.classList.toggle('open');
        const a = item.querySelector('.faq-answer');
        if (a) a.style.maxHeight = item.classList.contains('open') ? a.scrollHeight + 'px' : null;
      });
    }
  });

});
