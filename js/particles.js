/* ═══════════════════════════════════════════
   particles.js  —  Canvas Particle Background
   ═══════════════════════════════════════════ */

(function () {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [], animId;

  const COLORS = ['#9b30ff', '#00e5ff', '#ff2d55', '#bf7bff', '#80f5ff'];
  const COUNT  = Math.min(window.innerWidth < 600 ? 50 : 90, 90);

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function random(min, max) { return Math.random() * (max - min) + min; }

  function createParticle() {
    return {
      x:     random(0, W),
      y:     random(0, H),
      r:     random(0.8, 2.5),
      vx:    random(-0.3, 0.3),
      vy:    random(-0.5, -0.1),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: random(0.2, 0.7),
      life:  random(0.3, 1),
      decay: random(0.0015, 0.004),
    };
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < COUNT; i++) {
      const p = createParticle();
      p.life = Math.random(); // start scattered
      particles.push(p);
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x    += p.vx;
      p.y    += p.vy;
      p.life -= p.decay;
      p.alpha = p.life * 0.8;

      if (p.life <= 0 || p.y < -10) {
        particles[i] = createParticle();
        particles[i].y = H + 5;
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowBlur  = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.restore();
    }

    animId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    draw();
  });

  init();
  draw();
})();
