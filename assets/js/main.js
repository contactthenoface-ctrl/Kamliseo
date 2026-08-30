// ===== Kamliseo — Navigation & Interactions =====

document.addEventListener('DOMContentLoaded', () => {


  // =========================================================
  // HAMBURGER TOGGLE
  // =========================================================

  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {

    hamburger.addEventListener('click', () => {

      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');

    });


    // Fermer le menu après avoir cliqué sur un lien

    navMenu.querySelectorAll('a').forEach(link => {

      link.addEventListener('click', () => {

        hamburger.classList.remove('active');
        navMenu.classList.remove('active');

      });

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

    const linkPath =
      href.replace(/\/$/, '') || '/';


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

  const contactForm =
    document.querySelector('#contact-form');

  if (contactForm) {

    contactForm.addEventListener('submit', (e) => {

      e.preventDefault();


      // -------------------------------------------------------
      // Récupération des informations du formulaire
      // -------------------------------------------------------

      const name =
        contactForm
          .querySelector('[name="name"]')
          ?.value
          .trim() || '';

      const email =
        contactForm
          .querySelector('[name="email"]')
          ?.value
          .trim() || '';

      const phone =
        contactForm
          .querySelector('[name="phone"]')
          ?.value
          .trim() || '';

      const message =
        contactForm
          .querySelector('[name="message"]')
          ?.value
          .trim() || '';


      // -------------------------------------------------------
      // Vérification des champs obligatoires
      // -------------------------------------------------------

      if (!name || !message) {

        alert(
          'Veuillez remplir votre nom et votre message.'
        );

        return;

      }


      // -------------------------------------------------------
      // Numéro WhatsApp KAMLISEO
      // -------------------------------------------------------

      const whatsappNumber =
        '212673492502';


      // -------------------------------------------------------
      // Message WhatsApp
      // -------------------------------------------------------

      const whatsappMessage =
`Bonjour KAMLISEO 👋

📩 Nouvelle demande depuis le site

👤 Nom : ${name}
📧 Email : ${email || 'Non renseigné'}
📱 Téléphone : ${phone || 'Non renseigné'}

💬 Message :
${message}`;


      // -------------------------------------------------------
      // Création du lien WhatsApp
      // -------------------------------------------------------

      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`;


      // -------------------------------------------------------
      // Ouvrir WhatsApp
      // -------------------------------------------------------

      window.open(
        whatsappURL,
        '_blank',
        'noopener,noreferrer'
      );


      // -------------------------------------------------------
      // Réinitialiser le formulaire
      // -------------------------------------------------------

      contactForm.reset();

    });

  }


  // =========================================================
  // FAQ ACCORDION
  // =========================================================

  document
    .querySelectorAll('.faq-item')
    .forEach(item => {

      const question =
        item.querySelector('.faq-question');

      const answer =
        item.querySelector('.faq-answer');


      if (!question || !answer) return;


      question.addEventListener('click', () => {

        const isOpen =
          item.classList.contains('open');


        // -----------------------------------------------------
        // Fermer les autres questions
        // -----------------------------------------------------

        document
          .querySelectorAll('.faq-item.open')
          .forEach(otherItem => {

            if (otherItem !== item) {

              otherItem.classList.remove('open');


              const otherAnswer =
                otherItem.querySelector(
                  '.faq-answer'
                );


              if (otherAnswer) {

                otherAnswer.style.maxHeight =
                  null;

              }

            }

          });


        // -----------------------------------------------------
        // Ouvrir / fermer la question actuelle
        // -----------------------------------------------------

        item.classList.toggle(
          'open',
          !isOpen
        );


        answer.style.maxHeight =
          !isOpen
            ? answer.scrollHeight + 'px'
            : null;

      });

    });

});


// =========================================================
// FLOATING WHATSAPP BUTTON (inject on all pages)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  // Don't add if already present
  if (document.querySelector('.whatsapp-float')) return;

  // WhatsApp number in international format without +
  const whatsappNumber = '212673492502';

  // Default prefilled message (can be short)
  const defaultMessage = "Bonjour Kamliseo, je souhaite obtenir des informations.";

  // Create style
  const style = document.createElement('style');
  style.textContent = `
  .whatsapp-float{
    position:fixed;
    right:16px;
    bottom:20px;
    width:56px;
    height:56px;
    border-radius:50%;
    background:#25D366;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow:0 8px 20px rgba(0,0,0,0.12);
    z-index:1200;
    transition:transform .15s ease,opacity .15s ease;
    opacity:.98;
  }
  .whatsapp-float svg{width:26px;height:26px;display:block;fill:#fff}
  .whatsapp-float:hover{transform:translateY(-4px);opacity:1}
  @media (max-width:420px){
    .whatsapp-float{right:12px;bottom:16px;width:48px;height:48px}
    .whatsapp-float svg{width:22px;height:22px}
  }
  `;

  document.head.appendChild(style);

  // Create anchor
  const a = document.createElement('a');
  a.className = 'whatsapp-float';
  a.setAttribute('aria-label', 'Contacter Kamliseo sur WhatsApp');
  a.setAttribute('title', 'Contactez-nous sur WhatsApp');
  a.setAttribute('rel', 'noopener noreferrer');

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');

  // Inline WhatsApp SVG icon (white)
  a.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 .01 5.37 0 12a11.9 11.9 0 0 0 1.64 6.06L0 24l6.15-1.62A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.6c-1.2 0-2.38-.32-3.4-.92l-.24-.14-3.66.96.98-3.57-.15-.25A8.4 8.4 0 0 1 3.6 12c0-4.68 3.78-8.46 8.4-8.46 4.65 0 8.43 3.78 8.43 8.46 0 4.66-3.78 8.46-8.43 8.46z" />
      <path d="M17.1 14.03c-.29-.15-1.72-.85-1.98-.95-.26-.1-.45-.15-.64.15s-.73.95-.9 1.14c-.17.19-.33.22-.62.07-.29-.15-1.22-.45-2.33-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.18-.29.29-.48.09-.19.04-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.56-.46-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-.99.97-.99 2.35 0 1.38 1.01 2.72 1.15 2.91.14.19 1.97 3.12 4.78 4.36 2.81 1.25 2.81.83 3.31.78.49-.04 1.55-.63 1.77-1.23.22-.6.22-1.12.15-1.23-.07-.1-.26-.15-.55-.29z" />
    </svg>
  `;

  document.body.appendChild(a);

});
