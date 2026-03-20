/* ==============================
   script.js — Portfolio Interactions
   ============================== */

// ── Company Targeting (?c=xxx) ────────────────────────────────
const COMPANIES = {
  techtaka: {
    name: '테크타카',
    navLabel: 'Why Techtaka',
    jdTitle: '테크타카 JD ↔ 내 경험 매핑',
    whyTitle: '왜 테크타카인가',
    contactLine: '테크타카 B2B Marketing Lead 포지션에 지원합니다.',
    whyCards: [
      {
        num: '01',
        title: '아르고 퍼널, 바로 세팅할 수 있습니다',
        desc: '올거나이즈에서 MQL→세일즈 핸드오프 퍼널을 아무것도 없는 데서 만들어봤습니다. 아르고도 같은 구조라 빠르게 적용 가능합니다.'
      },
      {
        num: '02',
        title: '팀 없는 곳에서 시작하는 건 익숙합니다',
        desc: '"마케팅 팀이 없는 회사"에 두 번 들어가봤습니다. 채용, OKR 세팅, 성과 체계까지 직접 만들었고요. 테크타카 신설 조직도 비슷한 상황이라 어떻게 시작해야 하는지 알고 있습니다.'
      },
      {
        num: '03',
        title: '맥락 없는 시장에 들어가는 데 거부감이 없습니다',
        desc: '엔터프라이즈 AI, 글로벌 SaaS, 공공미술 — 매번 처음 보는 산업이었습니다. 그때마다 고객 인터뷰와 데이터로 시장을 파악했고, 결과적으로 성과를 냈습니다. 물류 SaaS도 같은 접근이면 충분하다고 생각합니다.'
      }
    ],
    jdRows: [
      { req: '전략 & 퍼널 관리',   project: '올거나이즈',           result: 'GTM·Mixpanel로 전환 퍼널 전체 직접 설계·운영' },
      { req: '리드 제너레이션',     project: '마롱컴퍼니',           result: '리드 KPI 118% 초과, 경쟁사가 랜딩 구조 모방. 매출 1.4배' },
      { req: '브랜드 & 메시징',     project: '사운드플랫폼',         result: '유튜브 데모 10만 뷰, 런칭 3개월 만에 7만 유저' },
      { req: '데이터 & 실행',       project: '올거나이즈',           result: 'SEO 점수 22점↑, 리포팅은 Python으로 자동화' },
      { req: '조직 리딩',           project: '사운드플랫폼 · 마롱',  result: '두 곳 다 마케팅 팀이 없어서, 직접 만들고 이끌었음' },
    ]
  }
};

function initCompany() {
  const key = new URLSearchParams(window.location.search).get('c');
  const co = COMPANIES[key];
  const whySection = document.getElementById('why');
  const navWhy = document.getElementById('nav-why');

  if (!co) {
    // 범용 모드 — Why 섹션 + nav 링크 숨김, JD 타이틀 일반화
    if (whySection) whySection.style.display = 'none';
    if (navWhy) navWhy.style.display = 'none';
    const jdTitle = document.getElementById('jd-section-title');
    if (jdTitle) jdTitle.textContent = '// JD ↔ 내 경험 매핑';
    return;
  }

  // Nav 라벨
  if (navWhy) navWhy.querySelector('a').textContent = co.navLabel;

  // JD 섹션 타이틀
  const jdTitle = document.getElementById('jd-section-title');
  if (jdTitle) jdTitle.textContent = '// ' + co.jdTitle;

  // JD 테이블 rows
  const jdBody = document.getElementById('jd-table-body');
  if (jdBody) {
    jdBody.innerHTML = co.jdRows.map(r => `
      <tr>
        <td><strong>${r.req}</strong></td>
        <td><span class="jd-badge">${r.project}</span></td>
        <td>${r.result}</td>
      </tr>`).join('');
  }

  // Why 섹션 타이틀
  const whyLabel = document.querySelector('#why .section-label');
  const whyTitle = document.querySelector('#why .section-title');
  if (whyLabel) whyLabel.textContent = '// why ' + key;
  if (whyTitle) whyTitle.textContent = co.whyTitle;

  // Why 카드
  const whyGrid = document.getElementById('why-grid');
  if (whyGrid) {
    whyGrid.innerHTML = co.whyCards.map(c => `
      <div class="why-card scroll-reveal">
        <span class="why-num">${c.num}</span>
        <div class="why-title">${c.title}</div>
        <div class="why-desc">${c.desc}</div>
      </div>`).join('');
  }

  // Contact 라인
  const contactLine = document.getElementById('contact-line');
  if (contactLine) contactLine.textContent = co.contactLine;

  // Hero 타겟 배지 — "for 테크타카"
  const heroTarget = document.getElementById('hero-target');
  if (heroTarget) {
    heroTarget.textContent = 'for ' + co.name;
    heroTarget.style.display = '';
  }
}

initCompany();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Theme Toggle ──────────────────────────────────────────────
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function getCurrentTheme() {
  return root.getAttribute('data-theme') || 'dark';
}

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
  if (themeToggle) themeToggle.textContent = theme === 'dark' ? '☀ Light' : '🌙 Dark';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    setTheme(getCurrentTheme() === 'dark' ? 'light' : 'dark');
  });
}

// Restore saved theme
const saved = localStorage.getItem('portfolio-theme');
if (saved) setTheme(saved);
else setTheme('dark');


// ── Typing Animation (Hero) ───────────────────────────────────
const phrases = [
  'B2B Marketing Strategist & Builder',
  'Funnel Architect | Team Builder',
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

if (prefersReducedMotion) {
  if (typingEl) typingEl.textContent = phrases[0];
} else {
  setTimeout(typeLoop, 800);
}


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

  if (prefersReducedMotion) {
    const formatted = target % 1 !== 0 ? target.toFixed(1) : Math.round(target).toLocaleString('ko-KR');
    el.textContent = prefix + formatted + suffix;
    return;
  }

  const duration = 1200;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = target * eased;

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
if (!prefersReducedMotion) {
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
}


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
