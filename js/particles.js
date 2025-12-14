// ============================================
// SCRIPT DE PARTÍCULAS Y EFECTOS
// ============================================

// Crear partículas de fondo
function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  particlesContainer.id = 'particles';
  document.body.insertBefore(particlesContainer, document.body.firstChild);

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.width = Math.random() * 4 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
    particlesContainer.appendChild(particle);
  }
}

// Header scroll effect
function initHeaderScroll() {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Smooth scroll para navegación
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Animación de barras de habilidades
function initSkillBars() {
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
  });
}

// Inicializar todo cuando cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
  createParticles();
  initHeaderScroll();
  initSmoothScroll();
  
  // Solo inicializar skill bars si existen en la página
  if (document.querySelector('.skill-card')) {
    initSkillBars();
  }
});