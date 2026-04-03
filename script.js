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
    downloads: {
      portfolio: '김지수_포트폴리오_테크타카.pdf',
      cover: '김지수_자기소개서_테크타카.pdf'
    },
    whyCards: [
      {
        num: '01',
        title: '아르고의 세일즈 사이클에 맞는 퍼널을 세팅할 수 있습니다',
        desc: '물류 SaaS는 도입 검토만 3~6개월, 의사결정자가 물류팀장·IT·경영진으로 나뉩니다. 올거나이즈에서 엔터프라이즈 AI 솔루션의 MQL→세일즈 핸드오프 퍼널을 0에서 구축·운영하고 있고, 리드 스코어링과 장기 너처링 설계가 현재 제 주 업무입니다. 아르고 5PL 제품 구조(CMS→OMS→WMS→TMS→SCM)에 맞춰 도입 단계별 콘텐츠와 터치포인트를 설계하는 건 바로 시작할 수 있습니다.'
      },
      {
        num: '02',
        title: '시리즈B 66명 조직에서 마케팅 KPI를 처음 세우는 단계 — 두 번 해봤습니다',
        desc: '사운드플랫폼(20명)에서 마케팅팀 자체를 신설했고, 마롱컴퍼니에서 전임자 1명을 이어받아 팀으로 확장했습니다. 두 곳 모두 처음 3개월은 혼자 KPI 정의·트래킹 세팅·초기 성과 확보에 집중했고, 그 데이터로 채용 근거를 만들어서 팀을 꾸렸습니다. 테크타카의 \'마케팅 조직 신설\' 단계에서 이 순서가 그대로 적용됩니다.'
      },
      {
        num: '03',
        title: 'SaaS 지표 체계는 알고, 물류 도메인은 고객부터 배울 겁니다',
        desc: 'MRR·Churn·NRR 같은 SaaS 핵심 지표, 엔터프라이즈 세일즈 인에이블먼트, 다국어 GTM 확장은 현직에서 매일 다루고 있습니다. 물류 도메인은 처음이지만, 올거나이즈 합류 때도 엔터프라이즈 AI를 몰랐고, 사운드플랫폼 때도 음악 SaaS 시장을 몰랐습니다. 매번 고객 인터뷰 10건부터 시작해서 ICP를 잡았고, 아르고의 이커머스 셀러·3PL 고객도 같은 방식으로 파악할 겁니다.'
      }
    ],
    jdRows: [
      { req: '전략 & 퍼널 관리',   project: '올거나이즈',           result: 'GTM·Mixpanel로 전환 퍼널 전체 직접 설계·운영' },
      { req: '리드 제너레이션',     project: '마롱컴퍼니',           result: '리드 KPI 118% 초과, 경쟁사가 랜딩 구조 모방. 매출 1.4배' },
      { req: '브랜드 & 메시징',     project: '사운드플랫폼',         result: '유튜브 데모 10만 뷰, 런칭 3개월 만에 7만 유저' },
      { req: '데이터 & 실행',       project: '올거나이즈',           result: 'SEO 점수 23점↑, 리포팅은 Python으로 자동화' },
      { req: '조직 리딩',           project: '사운드플랫폼 · 마롱',  result: '사운드플랫폼 팀 신설 + 마롱 전임자 이어받아 팀 확장·리드' },
    ]
  },

  tosspayments: {
    name: '토스페이먼츠',
    navLabel: 'Why Toss Payments',
    jdTitle: '토스페이먼츠 JD ↔ 내 경험 매핑',
    whyTitle: '왜 토스페이먼츠인가',
    contactLine: '토스페이먼츠 Marketing Manager (B2B) 포지션에 지원합니다.',
    downloads: {
      portfolio: '김지수_포트폴리오_토스페이먼츠.pdf',
      cover: '김지수_자기소개서_토스페이먼츠.pdf'
    },
    embedSources: {
      cover: '자기소개서_토스페이먼츠_embed.html'
    },
    whyCards: [
      {
        num: '01',
        title: 'PG 시장의 가맹점 획득 퍼널을 설계할 수 있습니다',
        desc: '기술 검증과 비즈니스 검증이 동시에 진행되는 긴 의사결정 여정 — 이 구조를 읽고 각 단계에 맞는 캠페인을 설계하는 것이 12년간 해온 일입니다. 올거나이즈에서 엔터프라이즈 AI SaaS의 인바운드 퍼널을 0에서 구축해 10개월간 유효 리드 226건(유효율 84.3%), 전환율 최대 14.3%를 기록했습니다.'
      },
      {
        num: '02',
        title: 'CRM 자동화와 세일즈 연계 — 인바운드에서 아웃바운드로 전이 가능합니다',
        desc: 'INQ- 번호 체계 설계, Zapier→슬랙 자동 전달, MQL/SQL 분류 후 세일즈 핸드오프, 미처리 48시간 리마인드까지 — 인바운드 CRM 파이프라인을 단독 구축했습니다. 리드 스코어링, 세그먼트 분류, 핸드오프 기준 정의는 이미 갖추고 있고, 아웃바운드 도구 적응은 빠릅니다. 착수 1개월 내 퍼널 설계·가동한 경험이 있습니다.'
      },
      {
        num: '03',
        title: 'AI와 자동화로 1인이 시스템을 만든 경험 — 수치로 판단합니다',
        desc: 'Python으로 Mixpanel 퍼널 분석 자동화, Semrush API 기반 SEO 리포팅 시스템을 직접 구축했습니다. 1인 체제에서 자동화로 커버 범위를 넓힌 경험, 글로벌 1억 예산을 A/B 테스트로 CPA 83% 절감한 경험, 데이터를 먼저 보고 감수할 대가를 경영진에 공유하는 습관. 토스가 말하는 "수치로 소통하는 문화"가 제가 일하는 방식입니다.'
      }
    ],
    jdRows: [
      { req: '리드젠→전환 퍼널 설계·실행',       project: '올거나이즈 · 마롱',    result: 'GTM·Mixpanel 퍼널 구축, 전환율 14.3%, 유효 리드 226건' },
      { req: '다양한 채널 맞춤 전략',             project: '사운드플랫폼',          result: 'Google·YouTube·META·Reddit·LinkedIn 글로벌 1억 운영' },
      { req: '홈페이지·콘텐츠 UX 최적화',         project: '올거나이즈 · 마롱',    result: 'Webflow 한/영, 랜딩 A/B 테스트, 체류시간 +80%' },
      { req: 'AI 활용 아웃바운드 CRM 자동화',     project: '올거나이즈',            result: '인바운드 CRM 자동화 (Zapier·Python) → 아웃바운드 전이 가능' },
      { req: '캠페인 성과 모니터링·KPI 관리',     project: '올거나이즈 · 사운드 · 마롱', result: 'Mixpanel 퍼널 분석, A/B 6개월 반복, OKR·PDCA' },
      { req: 'Data-Driven 콘텐츠 마케팅 (우대)',  project: '올거나이즈',            result: '콘텐츠별 전환율 추적, 전환율 기반 다음 콘텐츠 기획' },
      { req: '어트리뷰션 기반 퍼포먼스 추적 (우대)', project: '올거나이즈 · 사운드',  result: 'GTM 이벤트 태깅, 채널별 분리 추적, 국가별 CPA 실시간' },
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

  // Hero 타겟 배지 — "for 토스페이먼츠"
  const heroTarget = document.getElementById('hero-target');
  if (heroTarget) {
    heroTarget.textContent = 'for ' + co.name;
    heroTarget.style.display = '';
  }

  // 다운로드 링크 동적 교체
  if (co.downloads) {
    // Hero 포트폴리오 PDF
    const heroPdf = document.querySelector('a[href="김지수_포트폴리오.pdf"]');
    if (heroPdf && co.downloads.portfolio) heroPdf.setAttribute('href', co.downloads.portfolio);

    // Contact 포트폴리오 PDF
    const contactPdf = document.querySelector('#contact a[href="김지수_포트폴리오.pdf"]');
    if (contactPdf && co.downloads.portfolio) contactPdf.setAttribute('href', co.downloads.portfolio);

    // 드롭다운 자기소개서 PDF
    const coverPdf = document.querySelector('.dropdown-menu a[href="김지수_자기소개서.pdf"]');
    if (coverPdf && co.downloads.cover) coverPdf.setAttribute('href', co.downloads.cover);
  }

  // Documents 섹션 embed 교체
  if (co.embedSources) {
    if (co.embedSources.cover) {
      const coverFrame = document.querySelector('#doc-cover iframe');
      if (coverFrame) coverFrame.setAttribute('src', co.embedSources.cover);
      const coverPdfBtn = document.querySelector('#doc-cover a[download]');
      if (coverPdfBtn && co.downloads && co.downloads.cover) coverPdfBtn.setAttribute('href', co.downloads.cover);
    }
  }
}

initCompany();

// ── Mobile Hamburger Menu ────────────────────────────────────
const hamburger = document.getElementById('nav-hamburger');
const mobileNav = document.querySelector('.nav-links');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.textContent = isOpen ? '✕' : '☰';
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.textContent = '☰';
    });
  });
}

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
  'B2B 마케팅 12년 · 전략부터 실행까지',
  '전략 수립 · 팀 빌딩 · 퍼널 설계',
  '팀 없는 곳에서 조직을 만드는 리더',
  '리드 퍼널 · 데이터 기반 의사결정 · 자동화',
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

// ── Bar Chart Animation (horizontal bars) ────────────────────
const barChartObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.bar-fill-anim');
        fills.forEach((fill, i) => {
          const w = fill.dataset.width;
          if (w) {
            setTimeout(() => { fill.style.width = w + '%'; }, 100 + i * 150);
          }
        });
        barChartObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.bar-chart-h, .comparison-bar-container, [style*="display:flex"][style*="gap:2rem"]').forEach((el) => {
  barChartObserver.observe(el);
});

// ── SVG Progress Ring Animation ──────────────────────────────
const ringObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const circle = entry.target.querySelector('.progress-ring-circle');
        if (circle) {
          const pct = parseFloat(circle.dataset.targetPct) || 100;
          const circumference = 2 * Math.PI * 42; // r=42
          const offset = circumference * (1 - Math.min(pct, 100) / 100);
          setTimeout(() => { circle.style.strokeDashoffset = offset; }, 200);
        }
        ringObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.progress-ring').forEach((el) => {
  ringObserver.observe(el);
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


// ── Generic Tab Handler ──────────────────────────────────────
function initTabs(tabAttr, panelSelector) {
  document.querySelectorAll(`[${tabAttr}]`).forEach((tab) => {
    tab.addEventListener('click', () => {
      const idx = tab.getAttribute(tabAttr);
      const container = tab.closest('.strength-tabs');
      container.querySelectorAll(`[${tabAttr}]`).forEach((t) => t.classList.remove('active'));
      const panels = container.querySelectorAll(panelSelector);
      panels.forEach((p) => p.classList.remove('active'));
      tab.classList.add('active');
      if (panels[idx]) panels[idx].classList.add('active');
    });
  });
}

// About 강점 탭
initTabs('data-tab', '.strength-panel');
// Skills 역량 탭
initTabs('data-skills-tab', '.skills-tab-panel');
// Project 02 탭
initTabs('data-p02-tab', '.p02-panels > .strength-panel');


// ── Print Button ──────────────────────────────────────────────
const printBtn = document.getElementById('print-btn');
if (printBtn) {
  printBtn.addEventListener('click', () => window.print());
}


// ── Dropdown Toggle (Hero CTA) ──────────────────────────────
document.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const menu = toggle.nextElementSibling;
    const isOpen = menu.classList.contains('open');
    // 모든 드롭다운 닫기
    document.querySelectorAll('.dropdown-menu').forEach((m) => m.classList.remove('open'));
    if (!isOpen) menu.classList.add('open');
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-menu').forEach((m) => m.classList.remove('open'));
});


// ── Document Tabs (Documents Section) ───────────────────────
document.querySelectorAll('.doc-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const docKey = tab.getAttribute('data-doc');

    // 탭 활성화 전환
    document.querySelectorAll('.doc-tab').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    // 패널 전환
    document.querySelectorAll('.doc-panel').forEach((p) => p.classList.remove('active'));
    const target = document.getElementById('doc-' + docKey);
    if (target) target.classList.add('active');
  });
});
