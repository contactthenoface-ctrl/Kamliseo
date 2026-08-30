// ===== Kamliseo — Navigation & Interactions =====

document.addEventListener('DOMContentLoaded', () => {

  // Inject small CSS to ensure mobile menu displays correctly when active
  if (!document.getElementById('kamliseo-nav-fix')) {
    const css = `
@media (max-width: 900px) {
  .hamburger { display: inline-flex !important; }
  .nav-menu { display: none !important; position: absolute; top: 72px; left: 16px; right: 16px; flex-direction: column !important; gap: 12px; background: var(--white); padding: 16px; border-radius: 12px; box-shadow: var(--shadow-lg); z-index: 1090; }
  .nav-menu.active { display: flex !important; }
  .nav-wrapper { align-items: center; }
  .nav-cta { margin-top: 8px; }
}

/* Lock scroll when menu open */
body.nav-open { overflow: hidden; }
`;
    const style = document.createElement('style');
    style.id = 'kamliseo-nav-fix';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }

  // =========================================================
  // HAMBURGER TOGGLE (improved)
  // =========================================================

  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {

    // ensure correct initial aria state
    if (!hamburger.hasAttribute('aria-expanded')) {
      hamburger.setAttribute('aria-expanded', 'false');
    }

    const openMenu = () => {
      hamburger.classList.add('active');
      navMenu.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
    };

    const closeMenu = () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    };

    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (hamburger.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    });

  }

  // =========================================================
  // NAVBAR SHADOW ON SCROLL
  // =========================================================

  const navbar = document.querySelector('.navbar');

  if (navbar) {

    const updateNavbar = () => {
      navbar.classList.toggle(
        'scrolled',
        window.scrollY > 10
      );
    };

    window.addEventListener(
      'scroll',
      updateNavbar,
      { passive: true }
    );

    // Vérifier immédiatement la position
    updateNavbar();

  }

  // =========================================================
  // HIGHLIGHT ACTIVE NAV LINK
  // =========================================================

  const currentPath =
    window.location.pathname.replace(/\/$/, '') || '/';

  document.querySelectorAll('.nav-link').forEach(link => {

    const href = link.getAttribute('href');
    if (!href) return;

    const linkPath = href.replace(/\/$/, '') || '/';

    if (
      linkPath === currentPath ||
      (
        currentPath !== '/' &&
        linkPath !== '/' &&
        currentPath.startsWith(linkPath)
      )
    ) {
      link.classList.add('active');
    }

  });

  // =========================================================
  // CONTACT FORM → WHATSAPP
  // =========================================================

  const contactForm = document.querySelector('#contact-form');

  if (contactForm) {

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Récupération des informations du formulaire
      const name = contactForm.querySelector('[name="name"]')?.value.trim() || '';
      const email = contactForm.querySelector('[name="email"]')?.value.trim() || '';
      const phone = contactForm.querySelector('[name="phone"]')?.value.trim() || '';
      const message = contactForm.querySelector('[name="message"]')?.value.trim() || '';

      if (!name || !message) {
        alert('Veuillez remplir votre nom et votre message.');
        return;
      }

      const whatsappNumber = '212673492502';

      const whatsappMessage = `Bonjour KAMLISEO 👋\n\n📩 Nouvelle demande depuis le site\n\n👤 Nom : ${name}\n📧 Email : ${email || 'Non renseigné'}\n📱 Téléphone : ${phone || 'Non renseigné'}\n\n💬 Message :\n${message}`;

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappURL, '_blank', 'noopener,noreferrer');

      contactForm.reset();

      // Optionnel : afficher message de succès si présent
      const success = document.getElementById('form-success');
      if (success) {
        success.style.display = 'block';
        setTimeout(() => { success.style.display = 'none'; }, 6000);
      }

    });

  }

  // =========================================================
  // FAQ ACCORDION
  // =========================================================

  document.querySelectorAll('.faq-item').forEach(item => {

    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Fermer les autres
      document.querySelectorAll('.faq-item.open').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      item.classList.toggle('open', !isOpen);
      answer.style.maxHeight = !isOpen ? answer.scrollHeight + 'px' : null;
    });

  });

});
