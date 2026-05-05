/* ==============================
   script.js — Portfolio Interactions
   ============================== */

// ── Company Targeting (?c=xxx) ────────────────────────────────
const COMPANIES = {
    moyoplan: {
    name: "모요플랜",
    navLabel: "Why Moyoplan",
    jdTitle: "모요플랜 JD ↔ 내 경험 매핑",
    whyTitle: "왜 모요플랜인가",
    contactLine: "모요플랜 Marketing Lead 포지션에 지원합니다.",
    downloads: { portfolio: "김지수_포트폴리오_모요플랜.pdf", cover: "김지수_자소서_모요플랜.pdf", resume: "김지수_이력서_모요플랜.pdf" },
    whyCards: [
      { num: "01", title: "마케팅 성장 엔진을 이미 3번 만들어봤습니다", desc: "문의 118%↑·매출 140%↑, 80개국 5만 유저, 문의 200%. 모요플랜이 필요한 독립 성장 엔진을 이미 만들어봤습니다." },
      { num: "02", title: "LTV/CAC로 예산을 배분하는 리드", desc: "LTV 9만원 측정→CAC 역산→채널별 배분. CPA 83%↓, 유료전환 42%↓." },
      { num: "03", title: "AI 자동화로 1인=팀급 산출", desc: "Claude Code 20편 2주, Python Mixpanel, Semrush API. 합류 첫날부터 같은 방식으로." }
    ],
    jdRows: [
      { req: "통합 마케팅 + 예산", project: "사운드·올거나이즈", result: "CEO 직보, LTV/CAC 월 1억 배분" },
      { req: "퍼포먼스·CRM·SEO 통합", project: "올거나이즈", result: "1인 체제, 문의 200%" },
      { req: "가설-실험-측정", project: "마롱·사운드", result: "OKR·PDCA, CPA 83%↓" },
      { req: "팀 빌딩 + 채용", project: "사운드·마롱", result: "0→1 2회, 다국적 팀" },
      { req: "AI 활용 (우대)", project: "올거나이즈", result: "Claude Code·Python·API" },
      { req: "LTV/CAC (우대)", project: "사운드플랫폼", result: "LTV→CAC 역산→배분" }
    ]
  },

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
        desc: '기술 검증과 비즈니스 검증이 동시에 진행되는 긴 의사결정 여정 — 이 구조를 읽고 각 단계에 맞는 캠페인을 설계하는 것이 12년간 해온 일입니다. 올거나이즈에서 엔터프라이즈 AI SaaS의 인바운드 퍼널을 0에서 구축해 10개월간 전년 월평균 대비 문의 200%를 달성했습니다.'
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
      { req: '리드젠→전환 퍼널 설계·실행',       project: '올거나이즈 · 마롱',    result: 'GTM·Mixpanel 퍼널 구축, 전년 월평균 대비 문의 200%' },
      { req: '다양한 채널 맞춤 전략',             project: '사운드플랫폼',          result: 'Google·YouTube·META·Reddit·LinkedIn 글로벌 1억 운영' },
      { req: '홈페이지·콘텐츠 UX 최적화',         project: '올거나이즈 · 마롱',    result: 'Webflow 한/영, 랜딩 A/B 테스트, 체류시간 +80%' },
      { req: 'AI 활용 아웃바운드 CRM 자동화',     project: '올거나이즈',            result: '인바운드 CRM 자동화 (Zapier·Python) → 아웃바운드 전이 가능' },
      { req: '캠페인 성과 모니터링·KPI 관리',     project: '올거나이즈 · 사운드 · 마롱', result: 'Mixpanel 퍼널 분석, A/B 6개월 반복, OKR·PDCA' },
      { req: 'Data-Driven 콘텐츠 마케팅 (우대)',  project: '올거나이즈',            result: '콘텐츠별 전환율 추적, 전환율 기반 다음 콘텐츠 기획' },
      { req: '어트리뷰션 기반 퍼포먼스 추적 (우대)', project: '올거나이즈 · 사운드',  result: 'GTM 이벤트 태깅, 채널별 분리 추적, 국가별 CPA 실시간' },
    ]
  },

  holiday: {
    name: '홀리데이 로보틱스',
    navLabel: 'Why Holiday',
    jdTitle: '홀리데이 로보틱스 JD ↔ 내 경험 매핑',
    whyTitle: '왜 홀리데이 로보틱스인가',
    contactLine: '홀리데이 로보틱스 마케팅 리드 포지션에 지원합니다.',
    downloads: {
      portfolio: '김지수_포트폴리오_홀리데이.pdf',
      cover: '김지수_자소서_홀리데이.pdf'
    },
    whyCards: [
      {
        num: '01',
        title: '개발자·의사결정자 타겟 기술블로그를 실무에서 제작해 왔습니다',
        desc: '올거나이즈에서 엔터프라이즈 AI 필드리포트 한글 4편(타임아웃·PII 마스킹·GPU 경합·RAG 사일런트 장애)과 영문 2편(EP.01/02), 에이전틱 AI 가이드 시리즈 10편을 기획·초안·발행까지 주도했습니다. 기술 리더십 검수와 AI 도구 보조를 결합해 완성하는 루틴이며, 상위 5개 콘텐츠 기준 문의 전년 월평균 대비 문의 200% 달성. 올거나이즈 신규 홈페이지 개편도 주도하고 있습니다 (프로토타입 allganize-home-v4.surge.sh). LLM·RAG·MCP·온프레미스·보안 같은 개념을 엔터프라이즈 IT·AI 리더와 개발자 독자층으로 번역한 실무이며, VLS·로봇 제어 콘텐츠에도 같은 프로세스를 출발점으로 삼을 수 있습니다.'
      },
      {
        num: '02',
        title: '다섯 도메인을 거치며 매번 새 분야의 언어를 빠르게 익혔습니다',
        desc: '순수 B2B 실무는 약 3년 5개월(마롱 2년 5개월 + 올거나이즈 약 1년), 디지털 대행사에서 수행한 B2B/B2G 캠페인은 2년 7개월, 나머지 경력은 B2C SaaS·하드웨어 유통 영역입니다. 음향기기 하드웨어(리앤사) → 교육·문화·정부정책사업 대행(무버먼) → B2B 미술(마롱) → AI 오디오 B2C SaaS(사운드플랫폼) → 엔터프라이즈 AI B2B SaaS(올거나이즈). 매번 도메인이 바뀌었고, 매번 현장 사람들의 질문을 파악해 콘텐츠와 퍼널로 옮겼습니다. 리앤사에서는 하드웨어 브랜드 3종을 인지도 0에서 국내 런칭했고, 마롱에서는 경쟁사 3곳이 카피하는 상황에서 매출 140% 성장을 만들었고, 사운드플랫폼에서는 10개월 만에 80개국 5만 유저를 확보했습니다. 휴머노이드 로봇·VLS도 같은 방식을 시작점으로 삼되, 현장 제약이 더 큰 만큼 학습·검증 기간을 넓혀 진입할 예정입니다.'
      },
      {
        num: '03',
        title: '셋업 단계에서 1인 풀퍼널 + 자동화 인프라를 구축해 본 리드입니다',
        desc: '올거나이즈에서 콘텐츠 마케터 퇴사 후 후임 채용 대신 자동화로 해결했습니다. Webflow API 발행, Mixpanel Export API 기반 퍼널 분석 Python 6모듈, Semrush API SEO 자동 리포팅을 직접 구축해 혼자 풀퍼널을 운영 중입니다. Site Health 67→90점(2025.05→2026.03). 사운드플랫폼에서 다국적 팀 0→1 신설, 마롱에서 전임자 1명 체제에서 팀 확장 경험도 있습니다. 홀리데이의 마케팅 부문 셋업 단계에서 구조를 세우는 데 기여할 수 있습니다.'
      }
    ],
    jdRows: [
      { req: '10년+ 딥테크/AI/로보틱스/하드웨어 기술 콘텐츠', project: '올거나이즈 · 사운드 · 리앤사', result: '마케팅 실무 12년 중 AI 2.5년+ · 하드웨어 2년+. 로보틱스 직접 경험은 없음' },
      { req: '엔지니어 대상 기술 글쓰기',                      project: '올거나이즈',                  result: '엔터프라이즈 AI 필드리포트 한글 4편(EP.01~04) + 영문 2편 + 에이전틱 AI 가이드 10편. 인바운드 문의 연결' },
      { req: '복잡한 기술 개념을 읽기 쉽게 전달',             project: '올거나이즈',                  result: 'LLM·RAG·MCP·온프레미스·GPU·보안 콘텐츠 제작 · 사범대 국어교육 전공' },
      { req: '한국어·영어 기술 문서 작성',                    project: '올거나이즈',                  result: '한글 4편 + 영문 2편 제작 주도(AI 도구 보조 + 자체 교정) · 글로벌팀 영문 보고. 실시간 영어 대화는 거의 자신 없음' },
      { req: '기술 블로그·뉴스레터 직접 운영',                project: '올거나이즈',                  result: 'Webflow API 기반 블로그 기획~발행 자동화, 신규 홈페이지 개편 주도(allganize-home-v4.surge.sh)' },
      { req: '컨퍼런스·전시 기획',                            project: '올거나이즈 · 사운드 · 리앤사', result: '2026 AI 엑스포(COEX) 기획·준비, 2024 월드IT쇼 부스, KOBA 음향기기 전시' },
      { req: 'CEO 미디어 인터뷰 준비 서포트',                 project: '올거나이즈',                  result: 'CEO·글로벌 리더십 영문 커뮤니케이션 (근접 경험, 미디어 인터뷰 답변 초안은 입사 후 보완)' },
      { req: '연구자 채용 브랜딩',                            project: '사운드 · 올거나이즈 · 무버먼', result: '다국적 팀 채용·교육 경험. KAIST 경영대학 캠페인 CTR 0.04%→1.26%. 대학 연구자 커뮤니티 브랜딩은 입사 후 새로 설계' }
    ]
  },

  tosscore: {
    name: '토스코어',
    navLabel: 'Why Toss Core',
    jdTitle: '토스코어 JD ↔ 내 경험 매핑',
    whyTitle: '왜 토스코어인가',
    contactLine: '토스코어 Marketing Manager (Growth) 포지션에 지원합니다.',
    downloads: {
      portfolio: '김지수_포트폴리오_토스코어.pdf'
    },
    whyCards: [
      {
        num: '01',
        title: '가설→실험→검증을 쉬지 않는 사람입니다',
        desc: '사운드플랫폼에서 10개월간 약 30~40회 A/B 테스트를 주 단위로 반복하며 CPA를 12,000원에서 2,000원으로 낮췄습니다. K-POP 가설이 틀렸다는 걸 3주 만에 잡고 방향을 전환한 경험이 있습니다. 가설이 틀리면 빠르게 바꾸는 데 익숙합니다.'
      },
      {
        num: '02',
        title: 'Paid Raw Data를 직접 다루는 마케터입니다',
        desc: 'Google Ads·Mixpanel 로데이터를 CSV로 내려받아 Python으로 정제하고, 개발자와 협업해 서버 로그를 매칭 분석해왔습니다. 대시보드 평균이 아닌 전환 유저 기준으로 판단하며, 모수 500건 이상에서만 결론을 내립니다.'
      },
      {
        num: '03',
        title: '도메인은 새롭지만, 방법론은 검증됐습니다',
        desc: '에듀테크→음악→뷰티/조형물→AI SaaS까지 5번의 도메인 전환에서 매번 성과를 냈습니다. 토스코어의 실험 문화와 데이터 기반 의사결정 방식을 깊이 공부하면서 이 환경에서 일하고 싶다는 확신이 생겼습니다.'
      }
    ],
    jdRows: [
      { req: 'CRM+Paid 기반 Growth',          project: '올거나이즈 · 사운드',    result: 'CPA 83%↓, 문의 200%. 세그먼트별 메시지 분리 운영' },
      { req: '가설 검증으로 숫자 만든 경험',     project: '사운드플랫폼',           result: '30~40회 A/B 테스트, 캠페인 v1→v6 주 단위 반복' },
      { req: '유저 Raw Data 직접 다룬 경험',     project: '사운드 · 올거나이즈',    result: 'Google Ads CSV + 서버 로그 Python 매칭 분석' },
      { req: 'CVR 개선',                        project: '마롱 · 올거나이즈',      result: '세그먼트별 랜딩 분리, CTA 구체화로 문의·계약 증가' },
      { req: 'SQL 세그먼트 추출 (우대)',          project: '올거나이즈',             result: 'Mixpanel·Python 기반 세그먼트 추출, AI 도구 활용' },
      { req: 'Tableau 대시보드 (우대)',           project: '-',                     result: '직접 경험 없음. Mixpanel·GA·Python 대시보드 구축 경험' },
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
