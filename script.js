/* ==============================
   script.js — Portfolio Interactions
   ============================== */

// ── Theme Toggle ──────────────────────────────────────────────
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function getCurrentTheme() {
  return root.getAttribute('data-theme') || 'dark';
}

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀ Light' : '🌙 Dark';
}

themeToggle.addEventListener('click', () => {
  setTheme(getCurrentTheme() === 'dark' ? 'light' : 'dark');
});

// Restore saved theme
const saved = localStorage.getItem('portfolio-theme');
if (saved) setTheme(saved);
else setTheme('dark');


// ── Typing Animation (Hero) ───────────────────────────────────
const phrases = [
  'B2B Marketing Strategist & Builder',
  'Funnel Architect | 0→1 Builder',
  'Data-Driven Marketer | 12yr',
  'Lead Gen · SEO · Automation',
];

let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typingEl = document.getElementById('typing-text');

function typeLoop() {
  if (!typingEl) return;
  const current = phrases[phraseIdx];

  if (isDeleting) {
    charIdx--;
    typingEl.textContent = current.slice(0, charIdx);
  } else {
    charIdx++;
    typingEl.textContent = current.slice(0, charIdx);
  }

  let delay = isDeleting ? 40 : 70;

  if (!isDeleting && charIdx === current.length) {
    delay = 2200;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx = (phraseIdx + 1) % phrases.length;
    delay = 400;
  }

  setTimeout(typeLoop, delay);
}

setTimeout(typeLoop, 800);


// ── Scroll Reveal (IntersectionObserver) ─────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.scroll-reveal, .git-entry').forEach((el) => {
  revealObserver.observe(el);
});


// ── Number Count-up Animation ────────────────────────────────
function animateCountUp(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1200;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = target * eased;

    // Format: show decimal if target has decimal
    const formatted =
      target % 1 !== 0 ? current.toFixed(1) : Math.round(current).toLocaleString('ko-KR');
    el.textContent = prefix + formatted + suffix;

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCountUp(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-target]').forEach((el) => {
  countObserver.observe(el);
});


// ── Skill Bar Animation ───────────────────────────────────────
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.skill-bar-fill');
        if (fill) {
          const pct = fill.dataset.pct;
          setTimeout(() => { fill.style.width = pct + '%'; }, 100);
        }
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.skill-bar-item').forEach((el) => {
  barObserver.observe(el);
});


// ── 3D Card Tilt ──────────────────────────────────────────────
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -4;
    const rotateY = ((x - cx) / cx) * 4;
    card.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});


// ── Smooth Active Nav Link ────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.style.color = link.getAttribute('href') === '#' + id
            ? 'var(--accent-blue)'
            : '';
        });
      }
    });
  },
  { rootMargin: '-30% 0px -60% 0px' }
);

sections.forEach((s) => navObserver.observe(s));


// ── Print Button ──────────────────────────────────────────────
const printBtn = document.getElementById('print-btn');
if (printBtn) {
  printBtn.addEventListener('click', () => window.print());
}
