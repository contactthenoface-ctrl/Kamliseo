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
