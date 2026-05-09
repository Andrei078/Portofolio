/* ═══════════════════════════════════════════
   setupprotest.js  —  Grid canvas background
                       + scroll-triggered cards
   ═══════════════════════════════════════════ */

/* ── Animated perspective grid ── */
(function () {
  const canvas = document.getElementById('grid-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, offset = 0;
  const COLS = 18;
  const GREEN = 'rgba(0, 255, 136,';

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    const cellW = W / COLS;
    const horizon = H * 0.52;

    // Vertical lines — converge to horizon centre
    for (let i = 0; i <= COLS; i++) {
      const xTop    = i * cellW;
      const xBottom = i * cellW;           // stays parallel at top
      const fadeX   = Math.abs(i - COLS / 2) / (COLS / 2); // 0=centre, 1=edge
      const alpha   = 0.08 + (1 - fadeX) * 0.05;

      ctx.beginPath();
      ctx.moveTo(xTop, 0);
      ctx.lineTo(xBottom, H);
      ctx.strokeStyle = `${GREEN}${alpha})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Horizontal lines — perspective rows
    const ROWS = 20;
    for (let j = 0; j <= ROWS; j++) {
      const t = (j / ROWS);                           // 0..1
      const p = Math.pow(t, 2.2);                     // ease-in curve for depth
      const y = horizon + (H - horizon) * p + (offset % (H / ROWS)) * p;

      if (y > H) continue;
      const alpha = t * 0.12;

      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.strokeStyle = `${GREEN}${alpha})`;
      ctx.lineWidth   = 0.5;
      ctx.stroke();
    }

    // Faint horizon glow line
    const grad = ctx.createLinearGradient(0, 0, W, 0);
    grad.addColorStop(0,   'rgba(0,255,136,0)');
    grad.addColorStop(0.5, 'rgba(0,255,136,0.12)');
    grad.addColorStop(1,   'rgba(0,255,136,0)');
    ctx.beginPath();
    ctx.moveTo(0, horizon);
    ctx.lineTo(W, horizon);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1;
    ctx.stroke();

    offset += 0.4;
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
})();

/* ── Card scroll reveal ── */
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.spt-tester-card');

  if (cards.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card  = entry.target;
          const index = Array.from(cards).indexOf(card);
          card.style.transitionDelay    = `${index * 0.07}s`;
          card.style.transitionDuration = '0.55s';
          card.classList.add('visible');
          obs.unobserve(card);
        }
      });
    }, { threshold: 0.08 });

    cards.forEach(c => obs.observe(c));
  }

  /* ── Stack items entrance ── */
  const stackItems = document.querySelectorAll('.spt-stack-item');
  if (stackItems.length) {
    const sObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el    = entry.target;
          const index = Array.from(stackItems).indexOf(el);
          el.style.opacity    = '0';
          el.style.transform  = 'translateY(16px)';
          el.style.transition = `opacity 0.45s ease ${index * 0.05}s, transform 0.45s ease ${index * 0.05}s`;
          requestAnimationFrame(() => {
            el.style.opacity   = '1';
            el.style.transform = 'translateY(0)';
          });
          sObs.unobserve(el);
        }
      });
    }, { threshold: 0.15 });

    stackItems.forEach(el => sObs.observe(el));
  }
});
