/* ═══════════════════════════════════════════
   akibabot.js  —  Matrix rain canvas +
                   scroll-triggered animations
   ═══════════════════════════════════════════ */

/* ── Bot image fallback (SVG <image> tag) ── */
document.addEventListener('DOMContentLoaded', () => {
  const botImg = document.getElementById('bot-photo');
  if (!botImg) return;

  const src = botImg.getAttribute('href') || botImg.getAttribute('xlink:href');
  if (!src) return;

  const testImg = new Image();
  testImg.crossOrigin = 'anonymous';
  testImg.onerror = () => {
    // Photo missing — swap to illustrated fallback
    botImg.setAttribute('href', '../assets/img/akibabot-fallback.svg');
    botImg.setAttribute('xlink:href', '../assets/img/akibabot-fallback.svg');
  };
  testImg.src = src;
});

/* ── Matrix Rain ── */
(function () {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, cols, drops;

  // Mix of katakana, hiragana, and latin
  const CHARS =
    'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン' +
    'abcdefghijklmnopqrstuvwxyz0123456789@#$%';

  const FONT_SIZE = 14;

  function init() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    cols = Math.floor(W / FONT_SIZE);
    drops = new Array(cols).fill(1).map(() => Math.random() * -50);
  }

  function draw() {
    ctx.fillStyle = 'rgba(6, 8, 16, 0.05)';
    ctx.fillRect(0, 0, W, H);

    for (let i = 0; i < drops.length; i++) {
      const char = CHARS[Math.floor(Math.random() * CHARS.length)];
      const x = i * FONT_SIZE;
      const y = drops[i] * FONT_SIZE;

      // Alternate pink/blue for a richer effect
      ctx.fillStyle = i % 3 === 0
        ? 'rgba(255, 45, 120, 0.85)'
        : i % 3 === 1
          ? 'rgba(0, 212, 255, 0.85)'
          : 'rgba(123, 47, 255, 0.6)';

      ctx.font = `${FONT_SIZE}px 'JetBrains Mono', monospace`;
      ctx.fillText(char, x, y);

      // Reset column when it passes the bottom
      if (y > H && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i] += 0.5;
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', init);
  init();
  draw();
})();

/* ── Feature card scroll reveal ── */
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.feature-card');

  if (cards.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger each card slightly
          const card = entry.target;
          const index = Array.from(cards).indexOf(card);
          card.style.transitionDelay = `${index * 0.08}s`;
          card.classList.add('visible');
          observer.unobserve(card);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
  }

  /* ── Stack items entrance ── */
  const stackItems = document.querySelectorAll('.stack-item');
  if (stackItems.length) {
    const stackObs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const index = Array.from(stackItems).indexOf(el);
          el.style.opacity = '0';
          el.style.transform = 'translateY(20px)';
          el.style.transition = `opacity 0.5s ease ${index * 0.06}s, transform 0.5s ease ${index * 0.06}s`;
          requestAnimationFrame(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          });
          stackObs.unobserve(el);
        }
      });
    }, { threshold: 0.15 });

    stackItems.forEach(item => stackObs.observe(item));
  }
});
