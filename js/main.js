/* ═══════════════════════════════════════════
   main.js  —  Header scroll, mobile nav,
               card animations, year
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Dynamic year ── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Header: add .scrolled class on scroll ── */
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* ── Mobile nav toggle ── */
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('is-open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open);
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('.mob-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target)) {
        mobileMenu.classList.remove('is-open');
        navToggle.classList.remove('open');
      }
    });
  }

  /* ── Project cards: scroll-triggered entrance animation ── */
  const cards = document.querySelectorAll('.project-card');
  if (cards.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    cards.forEach(card => observer.observe(card));
  }

  /* ── Cursor glow trail (desktop only) ── */
  if (window.matchMedia('(pointer: fine)').matches) {
    const trail = document.createElement('div');
    trail.style.cssText = `
      position: fixed;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
      background: radial-gradient(circle, rgba(155,48,255,0.06) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      transition: left 0.15s ease, top 0.15s ease;
    `;
    document.body.appendChild(trail);

    window.addEventListener('mousemove', (e) => {
      trail.style.left = e.clientX + 'px';
      trail.style.top  = e.clientY + 'px';
    }, { passive: true });
  }

});
