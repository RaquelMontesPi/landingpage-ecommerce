document.addEventListener('DOMContentLoaded', function() {

  // Menú hamburguesa para dispositivos móviles
  const menuIcon = document.getElementById('menu-icon');
  const navMenu = document.getElementById('nav-menu');

  menuIcon.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });

  // Botón para volver al inicio
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Slider en la cabecera (3 imágenes)
  const headerSlider = document.querySelector('.header-slider');
  if(headerSlider) {
    const headerSlides = headerSlider.querySelectorAll('.slide');
    let currentHeaderIndex = 0;
    setInterval(function() {
      headerSlides[currentHeaderIndex].classList.remove('active');
      currentHeaderIndex = (currentHeaderIndex + 1) % headerSlides.length;
      headerSlides[currentHeaderIndex].classList.add('active');
    }, 4000); // Cambia cada 4 segundos
  }

  // Slider para cada card de productos (2 imágenes)
  const cardSliders = document.querySelectorAll('.card-slider');
  cardSliders.forEach(function(slider) {
    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;
    if (slides.length > 1) {
      setInterval(function() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
      }, 3000); // Cambia cada 3 segundos
    }
  });

  // Validación del formulario de contacto
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Obtener campos del formulario
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Limpiar errores previos
    clearError(nameInput);
    clearError(emailInput);
    clearError(subjectInput);
    clearError(messageInput);

    // Validar campo nombre
    if (nameInput.value.trim() === '') {
      showError(nameInput, 'El nombre es obligatorio.');
      valid = false;
    }

    // Validar campo email
    if (emailInput.value.trim() === '') {
      showError(emailInput, 'El email es obligatorio.');
      valid = false;
    } else if (!validateEmail(emailInput.value)) {
      showError(emailInput, 'Por favor, introduce un email válido.');
      valid = false;
    }

    // Validar campo asunto
    if (subjectInput.value.trim() === '') {
      showError(subjectInput, 'El asunto es obligatorio.');
      valid = false;
    }

    // Validar campo mensaje
    if (messageInput.value.trim() === '') {
      showError(messageInput, 'El mensaje es obligatorio.');
      valid = false;
    }

    if (valid) {
      // Si el formulario es correcto, se muestra el modal de éxito
      showModal();
      contactForm.reset();
    }
  });

  function showError(input, message) {
    const formGroup = input.parentElement;
    const errorSpan = formGroup.querySelector('.error-message');
    errorSpan.textContent = message;
  }

  function clearError(input) {
    const formGroup = input.parentElement;
    const errorSpan = formGroup.querySelector('.error-message');
    errorSpan.textContent = '';
  }

  function validateEmail(email) {
    // Expresión regular básica para validar email
    const re = /^\S+@\S+\.\S+$/;
    return re.test(email);
  }

  // Manejo del modal de éxito
  const modal = document.getElementById('successModal');
  const modalClose = modal.querySelector('.close');

  function showModal() {
    modal.style.display = 'block';
  }

  modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

});
