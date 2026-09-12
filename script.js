/* ==========================================================================
   SYNFOLIX CORPORATE WEBSITE - INTERACTIVE JAVASCRIPT ENGINE
   Features:
   - Dark / Light Theme Switching Engine with LocalStorage Memory
   - Three.js WebGL Interactive 3D Node Constellation Hero
   - 3D Card Hover Tilt Mechanics
   - Product Category Filter System
   - Animated Metrics Counter on Scroll
   - Demo Request Modal & Lead Generation Form Handlers
   - Toast Notifications
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     0. LOGO INTRO SPLASH ANIMATION
     ------------------------------------------------------------------------ */
  const splashOverlay = document.getElementById('splashOverlay');
  if (splashOverlay) {
    setTimeout(() => {
      splashOverlay.classList.add('fade-out');
      document.body.classList.add('site-loaded');
    }, 1800);
  }

  /* ------------------------------------------------------------------------
     CONCEPT 3: INTERACTIVE GLOWING LIGHT CONSTELLATION CANVAS
     ------------------------------------------------------------------------ */
  const heroCanvas = document.getElementById('heroConstellationCanvas');
  const heroSection = document.getElementById('hero');

  if (heroCanvas && heroSection) {
    const ctx = heroCanvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];
    let mouse = { x: -1000, y: -1000, active: false };

    function resizeCanvas() {
      width = heroSection.clientWidth;
      height = heroSection.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      heroCanvas.width = width * dpr;
      heroCanvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      initParticles();
    }

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2.8 + 1.8;
        this.baseAlpha = Math.random() * 0.45 + 0.4;
        this.alpha = this.baseAlpha;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            this.x -= (dx / dist) * force * 2.5;
            this.y -= (dy / dist) * force * 2.5;
            this.alpha = Math.min(1, this.baseAlpha + force * 0.5);
          } else {
            this.alpha = this.baseAlpha;
          }
        }
      }

      draw() {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        const mainColor = isLight ? 'rgba(0, 140, 130,' : 'rgba(0, 201, 183,';

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${mainColor} ${this.alpha})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `${mainColor} ${this.alpha * 0.25})`;
        ctx.fill();
      }
    }

    function initParticles() {
      const particleCount = Math.floor((width * height) / 14000);
      particles = [];
      for (let i = 0; i < Math.max(40, particleCount); i++) {
        particles.push(new Particle());
      }
    }

    function drawLines() {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const lineColor = isLight ? '0, 150, 138' : '0, 201, 183';
      const maxDistance = 145;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.45;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        if (mouse.active) {
          const mdx = particles[i].x - mouse.x;
          const mdy = particles[i].y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 160) {
            const mopacity = (1 - mdist / 160) * 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${mopacity})`;
            ctx.lineWidth = 1.8;
            ctx.stroke();
          }
        }
      }
    }

    function animateConstellation() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      drawLines();
      requestAnimationFrame(animateConstellation);
    }

    window.addEventListener('resize', resizeCanvas);
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    });

    heroSection.addEventListener('mouseleave', () => {
      mouse.active = false;
    });

    resizeCanvas();
    animateConstellation();
  }

  /* ------------------------------------------------------------------------
     1. THEME SWITCHER (DARK / LIGHT MODE)
     ------------------------------------------------------------------------ */
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const root = document.documentElement;

  // Initialize theme from LocalStorage or system preference
  const savedTheme = localStorage.getItem('synfolix-theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', (e) => {
      const sunIcon = themeToggleBtn.querySelector('.icon-sun');
      const moonIcon = themeToggleBtn.querySelector('.icon-moon');

      if (e.target === sunIcon || (sunIcon && sunIcon.contains(e.target))) {
        setTheme('light');
      } else if (e.target === moonIcon || (moonIcon && moonIcon.contains(e.target))) {
        setTheme('dark');
      } else {
        const currentTheme = root.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
      }
    });
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('synfolix-theme', theme);
  }

  /* ------------------------------------------------------------------------
     1B. FONT SIZE CONTROLLER (A- / A / A+)
     ------------------------------------------------------------------------ */
  const fontDecreaseBtn = document.getElementById('fontDecreaseBtn');
  const fontResetBtn = document.getElementById('fontResetBtn');
  const fontIncreaseBtn = document.getElementById('fontIncreaseBtn');

  const fontSizes = ['small', 'normal', 'large', 'xlarge'];
  let currentFontIndex = parseInt(localStorage.getItem('synfolix-font-index'), 10);
  if (isNaN(currentFontIndex)) currentFontIndex = 1; // Default: 'normal'

  function applyFontSize(index) {
    currentFontIndex = Math.max(0, Math.min(fontSizes.length - 1, index));
    root.setAttribute('data-font-size', fontSizes[currentFontIndex]);
    localStorage.setItem('synfolix-font-index', currentFontIndex);

    if (fontDecreaseBtn) fontDecreaseBtn.classList.toggle('active', currentFontIndex === 0);
    if (fontResetBtn) fontResetBtn.classList.toggle('active', currentFontIndex === 1);
    if (fontIncreaseBtn) fontIncreaseBtn.classList.toggle('active', currentFontIndex >= 2);
  }

  applyFontSize(currentFontIndex);

  if (fontDecreaseBtn) fontDecreaseBtn.addEventListener('click', () => applyFontSize(currentFontIndex - 1));
  if (fontResetBtn) fontResetBtn.addEventListener('click', () => applyFontSize(1));
  if (fontIncreaseBtn) fontIncreaseBtn.addEventListener('click', () => applyFontSize(currentFontIndex + 1));

  /* ------------------------------------------------------------------------
     4. PRODUCT CATEGORY FILTER SYSTEM
     ------------------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.product-filter-tabs .filter-btn');
  const productWraps = document.querySelectorAll('.products-3d-grid .card-3d-wrap');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productWraps.forEach(wrap => {
        const category = wrap.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          wrap.style.display = 'block';
          setTimeout(() => {
            wrap.style.opacity = '1';
            wrap.style.transform = 'scale(1)';
          }, 50);
        } else {
          wrap.style.opacity = '0';
          wrap.style.transform = 'scale(0.9)';
          setTimeout(() => {
            wrap.style.display = 'none';
          }, 300);
        }
      });
    });
  });



  /* ------------------------------------------------------------------------
     6. DEMO REQUEST MODAL & LEAD FORM HANDLERS
     ------------------------------------------------------------------------ */
  const demoModal = document.getElementById('demoModal');
  const openDemoBtns = document.querySelectorAll('.open-demo-modal');
  const closeDemoModalBtn = document.getElementById('closeDemoModalBtn');
  const demoModalProductTitle = document.getElementById('demoModalProductTitle');

  openDemoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productName = btn.getAttribute('data-product') || 'Synfolix Product Demo';
      if (demoModalProductTitle) demoModalProductTitle.textContent = `Request Demo: ${productName}`;
      if (demoModal) demoModal.classList.add('active');
    });
  });

  if (closeDemoModalBtn) {
    closeDemoModalBtn.addEventListener('click', () => {
      if (demoModal) demoModal.classList.remove('active');
    });
  }

  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) demoModal.classList.remove('active');
    });
  }

  // Demo Modal Submit Handler
  const demoModalForm = document.getElementById('demoModalForm');
  if (demoModalForm) {
    demoModalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('demoName').value;
      showToast(`Thank you ${name}! Your demo request has been received.`);
      demoModalForm.reset();
      if (demoModal) demoModal.classList.remove('active');
    });
  }

  // Synfolix Main Lead Form Submit Handler
  const synfolixLeadForm = document.getElementById('synfolixLeadForm');
  if (synfolixLeadForm) {
    synfolixLeadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('leadName').value;
      const industry = document.getElementById('leadIndustry').value;
      showToast(`Inquiry Received! Our engineering lead will contact ${name} for ${industry}.`);
      synfolixLeadForm.reset();
    });
  }

  /* ------------------------------------------------------------------------
     7. TOAST NOTIFICATIONS ENGINE
     ------------------------------------------------------------------------ */
  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<i data-lucide="check-circle-2" style="color: #10b981;"></i> <span>${message}</span>`;
    container.appendChild(toast);

    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  /* ------------------------------------------------------------------------
     8. HEADER SCROLL EFFECT & MOBILE MENU TOGGLE
     ------------------------------------------------------------------------ */
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-active');
    });
  }

  /* ------------------------------------------------------------------------
     9. SCROLL REVEAL ANIMATION ENGINE (INTERSECTION OBSERVER)
     ------------------------------------------------------------------------ */
  const revealTargets = document.querySelectorAll('.section-header, .pillar-card, .card-3d-wrap, .step-card, .tech-card, .case-card, .why-card, .process-step, .contact-card-wrapper, .service-slide-card');
  
  revealTargets.forEach(el => el.classList.add('reveal-on-scroll'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealTargets.forEach(el => revealObserver.observe(el));

  /* ------------------------------------------------------------------------
     10. SERVICES CAROUSEL CONTROLLER
     ------------------------------------------------------------------------ */
  const servicesTrack = document.getElementById('servicesTrack');
  const servicesPrevBtn = document.getElementById('servicesPrevBtn');
  const servicesNextBtn = document.getElementById('servicesNextBtn');
  const servicesDotsContainer = document.getElementById('servicesDots');
  const serviceCards = document.querySelectorAll('.service-slide-card');

  if (servicesTrack && serviceCards.length > 0) {
    let currentIndex = 0;

    function getVisibleSlides() {
      return window.innerWidth <= 768 ? 1 : 2;
    }

    function getMaxIndex() {
      const visible = getVisibleSlides();
      return Math.max(0, serviceCards.length - visible);
    }

    function renderDots() {
      if (!servicesDotsContainer) return;
      servicesDotsContainer.innerHTML = '';
      const maxIndex = getMaxIndex();
      
      for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === currentIndex ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        servicesDotsContainer.appendChild(dot);
      }
    }

    function updateCarousel() {
      const cardWidth = serviceCards[0].offsetWidth;
      const gap = 24;
      const offset = currentIndex * (cardWidth + gap);
      servicesTrack.style.transform = `translateX(-${offset}px)`;

      if (servicesPrevBtn) servicesPrevBtn.disabled = false;
      if (servicesNextBtn) servicesNextBtn.disabled = false;

      const dots = servicesDotsContainer ? servicesDotsContainer.querySelectorAll('.carousel-dot') : [];
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }

    function goToSlide(index) {
      const maxIndex = getMaxIndex();
      if (index > maxIndex) {
        currentIndex = 0;
      } else if (index < 0) {
        currentIndex = maxIndex;
      } else {
        currentIndex = index;
      }
      updateCarousel();
    }

    if (servicesPrevBtn) {
      servicesPrevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        startAutoPlay();
      });
    }

    if (servicesNextBtn) {
      servicesNextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        startAutoPlay();
      });
    }

    // Auto-Play Engine
    let autoPlayTimer = null;

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 4000);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    renderDots();
    updateCarousel();
    startAutoPlay();

    const carouselWrapper = document.querySelector('.services-carousel-wrapper');
    if (carouselWrapper) {
      carouselWrapper.addEventListener('mouseenter', stopAutoPlay);
      carouselWrapper.addEventListener('mouseleave', startAutoPlay);
      carouselWrapper.addEventListener('touchstart', stopAutoPlay, { passive: true });
      carouselWrapper.addEventListener('touchend', startAutoPlay, { passive: true });
    }

    window.addEventListener('resize', () => {
      renderDots();
      goToSlide(Math.min(currentIndex, getMaxIndex()));
    });
  }

});
