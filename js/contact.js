/* ═══════════════════════════════════════════
   contact.js  —  Contact Form Handler
   ═══════════════════════════════════════════ */

/*
  ╔══════════════════════════════════════════════════╗
  ║  SET YOUR EMAIL ADDRESS HERE ↓                   ║
  ╚══════════════════════════════════════════════════╝
*/
const RECIPIENT_EMAIL = "andreiioan806@gmail.com";


document.addEventListener('DOMContentLoaded', () => {
  const form    = document.getElementById('contact-form');
  const sendBtn = document.getElementById('send-btn');
  const status  = document.getElementById('form-status');
  const loader  = document.getElementById('btn-loader');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    /* ── Basic validation ── */
    if (!name || !email || !message) {
      showStatus('Please fill in all fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    /* ── Show loading state ── */
    sendBtn.classList.add('loading');
    sendBtn.disabled = true;
    clearStatus();

    /*
      ── Email sending via mailto ──────────────────────────────────────
      This opens the user's default email client with the form pre-filled.
      For a server-side solution (no email client popup), replace this
      section with a fetch() call to your own backend or a service like
      EmailJS / Formspree.
      ──────────────────────────────────────────────────────────────────
    */
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body    = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;

    // Small delay for UX feel
    setTimeout(() => {
      sendBtn.classList.remove('loading');
      sendBtn.disabled = false;

      // Open mail client
      window.location.href = mailtoLink;

      // Show success & reset
      showStatus('✓ Your email client has been opened. Thank you!', 'success');
      form.reset();
    }, 800);
  });

  /* ── Helpers ── */
  function showStatus(msg, type) {
    status.textContent = msg;
    status.className = 'form-status ' + type;
  }

  function clearStatus() {
    status.textContent = '';
    status.className = 'form-status';
  }

  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  /* ── Live input focus effects ── */
  document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('focus', () => {
      input.closest('.form-group')?.classList.add('focused');
    });
    input.addEventListener('blur', () => {
      input.closest('.form-group')?.classList.remove('focused');
    });
  });
});
