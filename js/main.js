/* ============================================================
   Bonnie Bennett — Personal Site
   Vanilla JS · no dependencies
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- Data ---------------- */

  const ROLES = [
    'Senior Data Analyst',
    'Data Scientist',
    'On-Chain Analytics Nerd',
    'BI & Automation Builder',
    'Crypto Data Explorer'
  ];

  const SKILLS = {
    'Acquisition': [
      ['DuneSQL', 95], ['SparkSQL', 92], ['Trino', 90], ['HiveSQL', 90],
      ['Neo4j / Cypher', 88], ['TiDB', 85], ['ClickHouse', 85], ['PromQL', 85],
      ['Etherscan API', 92], ['Nansen / Glassnode', 85], ['Kafka', 82],
      ['GraphQL', 82], ['Redis', 80], ['Flink', 78], ['NoSQL', 85]
    ],
    'Processing': [
      ['Python', 96], ['SQL', 96], ['JupyterLab', 94], ['Airflow', 90],
      ['DuckDB', 85], ['dbt', 85], ['R', 82], ['VBA', 80], ['Dagster', 80],
      ['Go', 72], ['SAS', 72], ['Rust', 68], ['Julia', 70], ['DataFlow', 78]
    ],
    'Analytics': [
      ['Conversion Funnel / RFM', 95], ['Root Cause Analysis', 92], ['Lifecycle', 90],
      ['Multivariate Analysis', 88], ['Predictive Modelling', 88], ['A/B Testing', 88],
      ['Tokenomics', 85], ['MEV', 78]
    ],
    'Visualization': [
      ['Datawind', 95], ['Grafana', 93], ['Tableau', 92], ['Jinja Automation', 90],
      ['Power BI', 88], ['Superset', 85], ['Looker', 85], ['Redash', 82],
      ['Kibana', 80], ['QlikView', 78]
    ],
    'Collaboration': [
      ['Stakeholder Management', 92], ['Async Collaboration', 90], ['Storytelling', 90],
      ['GitLab', 88], ['Agile Development', 88], ['Databricks', 85], ['Docker', 85],
      ['Jira', 85], ['Code Review', 85], ['CI/CD', 82]
    ]
  };

  const RADAR = [
    { label: 'Python / SQL', value: 96 },
    { label: 'On-Chain', value: 92 },
    { label: 'ML / Modeling', value: 85 },
    { label: 'BI & Dashboards', value: 94 },
    { label: 'Automation', value: 93 },
    { label: 'Business Acumen', value: 90 }
  ];

  const PROJECTS = [
    {
      icon: '📒', cat: 'research', catLabel: 'Research',
      title: 'Tokenomics · Blockchain Economics Research Notes — Gas-Fee Redistribution and Its Impact on Ethereum Validator Revenue',
      desc: 'A research-driven portfolio (not a code repo): an economics question answered with on-chain data. Note 01 asks whether EIP-1559\u2019s base-fee burn squeezes validator real yield \u2014 DuneSQL queries, a literature review, and a quantified \u201cstructural tax rate\u201d \u03c4 = burn / (burn + tip).',
      metrics: ['~4.7k-word note', 'Structural tax \u03c4 \u2248 40\u201370%'],
      tags: ['DuneSQL', 'Tokenomics', 'MEV', 'Research'],
      link: 'https://github.com/DingBangBang/tokenomics-research',
      linkLabel: 'Read the research note'
    },
    {
      icon: '⚖️', cat: 'research', catLabel: 'Research',
      title: 'Value Distribution in the MEV-Boost Era',
      desc: 'Micro · Validators, builders and searchers. Who captures ordering-rights rent under PBS? Evidence from 500 blocks across 5 MEV-Boost relays: MEV is power-law distributed and the top-3 builders capture ~40% of value (HHI ~0.09).',
      metrics: ['500 blocks', 'Top-3 builders ~40%'],
      tags: ['MEV', 'PBS', 'Relay API'],
      link: 'https://github.com/DingBangBang/tokenomics-research/blob/main/research/02-mev-boost-value-distribution.md',
      linkLabel: 'Read Note 02'
    },
    {
      icon: '🌾', cat: 'research', catLabel: 'Research',
      title: 'Liquidity Mining: How Much Subsidy Becomes Real Volume?',
      desc: 'Meso · The subsidy efficiency of token incentives. Across 985 pools (TVL >= $1M) the median yield is only 0.6% subsidised — yet 146 pools are >90% subsidised: a farm-and-dump long tail. Protocol revenue is highly concentrated at the top.',
      metrics: ['985 pools', '146 pools >90% subsidised'],
      tags: ['DeFiLlama', 'Token Incentives', 'DeFi'],
      link: 'https://github.com/DingBangBang/tokenomics-research/blob/main/research/03-liquidity-mining-subsidy-efficiency.md',
      linkLabel: 'Read Note 03'
    },
    {
      icon: '📉', cat: 'research', catLabel: 'Research',
      title: 'Does High Funding Predict a Pullback?',
      desc: 'Macro · Evidence from crypto derivatives. On 359 daily observations (BTC perps), corr(funding, forward 7-day return) is about -0.06 — a weak contrarian signal. Funding is a crowding gauge, not a reliable timing trigger.',
      metrics: ['359 days', 'Corr ~ -0.06'],
      tags: ['Funding Rate', 'Derivatives', 'Hyperliquid'],
      link: 'https://github.com/DingBangBang/tokenomics-research/blob/main/research/04-funding-rate-market-top-signal.md',
      linkLabel: 'Read Note 04'
    },
    {
      icon: '🐋', cat: 'onchain', catLabel: 'On-Chain',
      title: 'On-Chain Whale Behavior Monitoring',
      desc: 'Real-time polling pipeline ingesting large ETH transfers from Etherscan, detecting whale movements above a configurable USD threshold, persisting to SQLite and visualising flows and address relationships.',
      metrics: ['Real-time', 'Whale detection'],
      tags: ['Python', 'Docker', 'SQLite', 'Grafana'],
      link: 'https://github.com/DingBangBang/whale-alert-system'
    },
    {
      icon: '🔗', cat: 'onchain', catLabel: 'On-Chain',
      title: 'DeFi Arbitrage Path Discovery',
      desc: 'ETL pipeline using Web3.py to extract real-time Uniswap V2 liquidity reserves; modeled assets and pairs as a graph database in Neo4j and implemented Cypher multi-step traversals.',
      metrics: ['0.14% margin', 'Cypher traversal'],
      tags: ['Web3.py', 'Neo4j', 'Docker'],
      link: 'https://github.com/DingBangBang/Portfolio'
    },
    {
      icon: '🧠', cat: 'ml', catLabel: 'ML / DS',
      title: 'Crypto User Clustering & Churn Prediction',
      desc: 'Batch off-chain analytics for Ethereum users: Etherscan V2 ingestion, HDBSCAN behavioural clustering, LightGBM/XGBoost churn prediction with SHAP explainability and ARIMA frequency forecasting.',
      metrics: ['HDBSCAN', 'SHAP explainability'],
      tags: ['Python', 'XGBoost', 'Streamlit'],
      link: 'https://github.com/DingBangBang/crypto_churn_prediction_project'
    },
    {
      icon: '📈', cat: 'bi', catLabel: 'BI',
      title: 'Real-Time Exchange Market Share',
      desc: 'Dune Analytics dashboard tracking CEX / DEX / aggregator market share — 10 DuneSQL queries with docs and automation for competitive intelligence.',
      metrics: ['10 DuneSQL queries', 'CEX vs DEX'],
      tags: ['DuneSQL', 'HTML', 'Automation'],
      link: 'https://github.com/DingBangBang/dune-dashboard'
    },
    {
      icon: '🤖', cat: 'bi', catLabel: 'BI',
      title: 'Automated Market Reporting Engine',
      desc: 'Automated market reporting and competitive attribution engine — scheduled jobs that turn multi-source data into shareable periodic reports.',
      metrics: ['Fully automated', 'Attribution'],
      tags: ['Python', 'Airflow', 'Reporting'],
      link: 'https://github.com/DingBangBang/report_competitor_monitor'
    },
    {
      icon: '🛒', cat: 'ml', catLabel: 'ML / DS',
      title: 'Sales Data Analysis · 18M records',
      desc: 'Deep dive into online-shop sales: RFM segmentation, Sankey CVR analysis, basket analysis and probabilistic LTV models across CVR, retention, churn, ARPU and ARPPU.',
      metrics: ['+50% efficiency', '+8% retention'],
      tags: ['pandas', 'plotly', 'scikit-learn'],
      link: 'https://github.com/DingBangBang/Portfolio'
    },
    {
      icon: '📊', cat: 'bi', catLabel: 'BI',
      title: 'Key Accounts Dashboard (KA)',
      desc: 'Stand-alone process delivering a complex VIP / Key-Account dashboard across transactions, profits, engagement, RFM scores and reviews.',
      metrics: ['RFM scoring', 'Grafana'],
      tags: ['TiDB', 'Grafana', 'SQL'],
      link: 'https://github.com/DingBangBang/Portfolio'
    },
    {
      icon: '📮', cat: 'bi', catLabel: 'BI',
      title: 'Automated Periodic Reports',
      desc: 'Stand-alone automation producing periodic reports in HTML, email and Excel formats — removing manual reporting work end-to-end.',
      metrics: ['HTML + Email + Excel'],
      tags: ['Python', 'Trino', 'Jinja'],
      link: 'https://github.com/DingBangBang/Portfolio'
    },
    {
      icon: '🧾', cat: 'bi', catLabel: 'BI',
      title: 'Customer Transaction Series Analysis',
      desc: 'Series analysis encompassing customer transactions on the platform — an ETL pipeline turning raw events into behavioural insight.',
      metrics: ['ETL pipeline'],
      tags: ['Python', 'SQL', 'R'],
      link: 'https://github.com/DingBangBang/Portfolio'
    },
    {
      icon: '💬', cat: 'nlp', catLabel: 'NLP',
      title: 'Sentiment Analysis (Dissertation)',
      desc: 'Web crawling on unstructured data, cleaning, EDA and text processing; applied topic modeling and sentiment scoring to 1M reviews with word-cloud visualisations.',
      metrics: ['1M reviews', 'Topic modeling'],
      tags: ['scrapy', 'selenium', 'NLP'],
      link: 'https://github.com/DingBangBang/Portfolio'
    }
  ];



  const CERTS = [
    { icon: '🏅', name: 'Google Data Analytics', issuer: 'Professional Certificate' },
    { icon: '📊', name: 'Google Advanced Data Analytics', issuer: 'Professional Certificate' },
    { icon: '🧭', name: 'Google Business Intelligence', issuer: 'Professional Certificate' },
    { icon: '🔬', name: 'Google Data Science', issuer: 'Professional Certificate' },
    { icon: '🚀', name: 'Google Advanced Data Science', issuer: 'Professional Certificate' }
  ];

  const TICKER = [
    'Python', 'SQL', 'On-Chain Analytics', 'Tokenomics', 'Machine Learning',
    'BI Automation', 'Crypto Exchange', 'User Behavior', 'Neo4j', 'Dune',
    'Grafana', 'Airflow DAGs', 'Real-Time Streaming', 'Predictive Modelling',
    'Root Cause Analysis', 'DuckDB', 'SparkSQL', 'R', 'dbt', 'HDBSCAN'
  ];

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- Navigation & scroll chrome ---------------- */

  const nav = $('#nav');
  const navToggle = $('#navToggle');
  const navLinks = $('#navLinks');
  const progress = $('#scrollProgress');
  const toTop = $('#toTop');
  const sections = $$('main section[id]');

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 40);
    toTop.classList.toggle('show', y > 600);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';

    let current = '';
    sections.forEach(sec => {
      if (sec.offsetTop - 140 <= y) current = sec.id;
    });
    $$('.nav-link').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  $$('.nav-link').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' }));

  /* ---------------- Reveal on scroll ---------------- */

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        if (e.target.classList.contains('skill-item')) return;
        e.target.style.transitionDelay = Math.min(i * 60, 240) + 'ms';
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach(n => io.observe(n));

  /* ---------------- Typewriter ---------------- */

  const typed = $('#typedRole');
  if (typed) {
    let ri = 0, ci = 0, deleting = false;
    (function type() {
      const role = ROLES[ri];
      typed.textContent = role.slice(0, ci);
      if (!deleting && ci < role.length) { ci++; setTimeout(type, 65); }
      else if (!deleting && ci === role.length) { deleting = true; setTimeout(type, 1500); }
      else if (deleting && ci > 0) { ci--; setTimeout(type, 32); }
      else { deleting = false; ri = (ri + 1) % ROLES.length; setTimeout(type, 320); }
    })();
  }

  /* ---------------- Count-up stats ---------------- */

  const counters = $$('.stat-num');
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const node = e.target;
      const target = parseFloat(node.dataset.count);
      const suffix = node.dataset.suffix || '';
      const dur = 1400; const start = performance.now();
      (function step(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        node.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      })(start);
      cio.unobserve(node);
    });
  }, { threshold: 0.5 });
  counters.forEach(n => cio.observe(n));

  /* ---------------- Ticker ---------------- */

  const track = $('#tickerTrack');
  if (track) {
    const build = () => TICKER.map(t => '<span class="tick"><span class="up">▲</span> ' + esc(t) + '</span>').join('');
    track.innerHTML = build() + build();
  }


  /* ---------------- Skills ---------------- */

  const skillTabs = $('#skillTabs');
  const skillList = $('#skillList');

  function renderSkills(key) {
    const data = SKILLS[key] || [];
    skillList.innerHTML = '';
    data.forEach(([name, pct], i) => {
      const item = el('div', 'skill-item');
      item.style.animationDelay = (i * 45) + 'ms';
      item.innerHTML =
        '<div class="s-row"><span class="s-name">' + esc(name) + '</span><span class="s-pct">' + pct + '%</span></div>' +
        '<div class="skill-bar"><i></i></div>';
      skillList.appendChild(item);
      const bar = $('i', item);
      requestAnimationFrame(() => { setTimeout(() => { bar.style.width = pct + '%'; }, 60); });
    });
  }

  if (skillTabs) {
    Object.keys(SKILLS).forEach((key, i) => {
      const b = el('button', 'skill-tab' + (i === 0 ? ' active' : ''), esc(key));
      b.type = 'button';
      b.addEventListener('click', () => {
        $$('.skill-tab', skillTabs).forEach(t => t.classList.remove('active'));
        b.classList.add('active');
        renderSkills(key);
      });
      skillTabs.appendChild(b);
    });
    renderSkills(Object.keys(SKILLS)[0]);
  }

  /* ---------------- Radar chart ---------------- */

  const radar = $('#radarCanvas');
  if (radar) {
    const ctx = radar.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const size = 360;
    radar.width = size * dpr; radar.height = size * dpr;
    ctx.scale(dpr, dpr);
    const cx = size / 2, cy = size / 2, R = size / 2 - 62;
    let hovered = -1;

    function draw(progress) {
      ctx.clearRect(0, 0, size, size);
      const n = RADAR.length;
      const step = (Math.PI * 2) / n;
      const start = -Math.PI / 2;

      // grid rings
      for (let r = 1; r <= 4; r++) {
        ctx.beginPath();
        for (let i = 0; i <= n; i++) {
          const a = start + i * step;
          const rr = (R * r) / 4;
          const x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr;
          i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.strokeStyle = 'rgba(255,255,255,' + (r === 4 ? 0.16 : 0.07) + ')';
        ctx.lineWidth = 1; ctx.stroke();
      }
      // spokes
      for (let i = 0; i < n; i++) {
        const a = start + i * step;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
        ctx.strokeStyle = 'rgba(255,255,255,0.07)'; ctx.stroke();
      }
      // data polygon
      ctx.beginPath();
      RADAR.forEach((d, i) => {
        const a = start + i * step;
        const rr = R * (d.value / 100) * progress;
        const x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr;
        i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      });
      ctx.closePath();
      const g = ctx.createLinearGradient(cx - R, cy - R, cx + R, cy + R);
      g.addColorStop(0, 'rgba(34,211,238,0.35)');
      g.addColorStop(0.5, 'rgba(139,92,246,0.35)');
      g.addColorStop(1, 'rgba(0,255,163,0.35)');
      ctx.fillStyle = g; ctx.fill();
      ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 2; ctx.stroke();
      // vertices + labels
      RADAR.forEach((d, i) => {
        const a = start + i * step;
        const rr = R * (d.value / 100) * progress;
        const x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr;
        ctx.beginPath(); ctx.arc(x, y, i === hovered ? 5.5 : 3.5, 0, Math.PI * 2);
        ctx.fillStyle = i === hovered ? '#00ffa3' : '#22d3ee'; ctx.fill();
        const lx = cx + Math.cos(a) * (R + 26), ly = cy + Math.sin(a) * (R + 20);
        ctx.font = (i === hovered ? '600 ' : '') + '11px "JetBrains Mono", monospace';
        ctx.fillStyle = i === hovered ? '#e7edf5' : 'rgba(139,152,171,0.95)';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(d.label, lx, ly);
      });
    }
    function animateRadar() {
      const t0 = performance.now(), dur = 1100;
      (function step(now) {
        const p = Math.min((now - t0) / dur, 1);
        draw(1 - Math.pow(1 - p, 3));
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    }
    const rio = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { reducedMotion ? draw(1) : animateRadar(); rio.disconnect(); } }), { threshold: 0.4 });
    rio.observe(radar);
    draw(reducedMotion ? 1 : 0);

    radar.addEventListener('mousemove', (ev) => {
      const rect = radar.getBoundingClientRect();
      const mx = (ev.clientX - rect.left) / rect.width * size;
      const my = (ev.clientY - rect.top) / rect.height * size;
      let best = -1, bd = 1e9;
      const step = (Math.PI * 2) / RADAR.length, start = -Math.PI / 2;
      RADAR.forEach((d, i) => {
        const a = start + i * step;
        const lx = cx + Math.cos(a) * (R + 26), ly = cy + Math.sin(a) * (R + 20);
        const dist = Math.hypot(mx - lx, my - ly);
        if (dist < bd) { bd = dist; best = i; }
      });
      const nh = bd < 40 ? best : -1;
      if (nh !== hovered) { hovered = nh; draw(1); }
    });
    radar.addEventListener('mouseleave', () => { if (hovered !== -1) { hovered = -1; draw(1); } });
  }


  /* ---------------- Projects ---------------- */

  const grid = $('#projectGrid');
  if (grid) {
    PROJECTS.forEach((p, i) => {
      const card = el('article', 'project-card reveal');
      card.dataset.cat = p.cat;
      card.style.transitionDelay = Math.min(i * 40, 200) + 'ms';
      card.innerHTML =
        '<div class="pc-head">' +
          '<div class="pc-icon">' + p.icon + '</div>' +
          '<span class="pc-cat">' + esc(p.catLabel) + '</span>' +
        '</div>' +
        '<h3 class="pc-title">' + esc(p.title) + '</h3>' +
        '<p class="pc-desc">' + esc(p.desc) + '</p>' +
        '<div class="pc-metrics">' + p.metrics.map(m => '<span>' + esc(m) + '</span>').join('') + '</div>' +
        '<div class="pc-tags">' + p.tags.map(t => '<i>' + esc(t) + '</i>').join('') + '</div>' +
        '<a class="pc-link" href="' + p.link + '" target="_blank" rel="noopener" data-cursor="hover">' + esc(p.linkLabel || 'View on GitHub') + ' <span>→</span></a>';
      grid.appendChild(card);

      // 3D tilt + spotlight
      if (!reducedMotion) {
        card.addEventListener('mousemove', (ev) => {
          const r = card.getBoundingClientRect();
          const px = (ev.clientX - r.left) / r.width;
          const py = (ev.clientY - r.top) / r.height;
          card.style.setProperty('--mx', (px * 100) + '%');
          card.style.setProperty('--my', (py * 100) + '%');
          card.style.transform = 'perspective(800px) rotateX(' + ((0.5 - py) * 7) + 'deg) rotateY(' + ((px - 0.5) * 7) + 'deg) translateY(-4px)';
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
      }
    });

    // observe newly added reveal cards
    $$('.project-card.reveal', grid).forEach(n => io.observe(n));

    const filters = $$('.filter', $('#projectFilters'));
    filters.forEach(f => f.addEventListener('click', () => {
      filters.forEach(x => x.classList.remove('active'));
      f.classList.add('active');
      const key = f.dataset.filter;
      $$('.project-card', grid).forEach(c => {
        const show = key === 'all' || c.dataset.cat === key;
        c.classList.toggle('hide', !show);
      });
    }));
  }

  /* ---------------- Certificates ---------------- */

  const certGrid = $('#certGrid');
  if (certGrid) {
    CERTS.forEach((c, i) => {
      const card = el('div', 'cert-card reveal');
      card.style.transitionDelay = Math.min(i * 60, 260) + 'ms';
      card.innerHTML =
        '<div class="cert-badge">' + c.icon + '</div>' +
        '<div class="cert-name">' + esc(c.name) + '</div>' +
        '<div class="cert-issuer">' + esc(c.issuer) + '</div>';
      certGrid.appendChild(card);
      io.observe(card);
    });
  }


  /* ---------------- Interactive terminal ---------------- */

  const termBody = $('#termBody');
  const termInput = $('#termInput');
  const termBox = $('#terminalBox');

  const HELP = [
    'help       — show this list of commands',
    'whoami     — who is Bonnie?',
    'skills     — tech stack overview',
    'experience — work history',
    'projects   — highlight portfolio projects',
    'contact    — how to reach me',
    'resume     — download my résumé',
    'sudo       — do not try this 🙃',
    'clear      — clear the screen'
  ];

  function termLine(text, cls) { const l = el('div', 'term-line ' + (cls || '')); l.textContent = text; termBody.appendChild(l); termBody.scrollTop = termBody.scrollHeight; }

  const COMMANDS = {
    help: () => HELP.join('\n'),
    whoami: () => 'Bonnie Bennett — Senior Data Analyst / Data Scientist.\n5+ yrs across top-tier crypto exchanges & Fortune Global 500.\nBased in Dubai, UAE. ENTP. Lives for clean pipelines.',
    skills: () => 'Acquisition .... DuneSQL, SparkSQL, Trino, HiveSQL, Neo4j, Kafka, ClickHouse\nProcessing ..... Python, SQL, Airflow, dbt, DuckDB, R, Go\nAnalytics ...... Funnels/RFM, RCA, Predictive Modelling, Tokenomics, MEV\nVisualization .. Datawind, Grafana, Tableau, Power BI, Superset\nSoft power ..... Stakeholder mgmt, Storytelling, Async collaboration',
    experience: () => '2024–2026  Senior Data Analyst      @ Bybit (Dubai)\n2021–2024  Business Intelligence    @ NovaDAX (Beijing/Brazil)\n2020–2021  Strategy Analyst         @ BlueFocus (Shanghai)\n2020       Business Analyst         @ Estée Lauder (Shanghai)\n2019–2020  Operation Analyst        @ JD.com (Beijing)',
    projects: () => PROJECTS.slice(0, 5).map(p => '• ' + p.title).join('\n') + '\n\n→ scroll up to the Projects section for details',
    contact: () => 'email .... dingbangchu@gmail.com\ngithub ... github.com/DingBangBang\nlinkedin . linkedin.com/in/bonniebennett333\ntelegram . @bonniebennett333\nwhatsapp . +971 55 610 6241',
    social: () => COMMANDS.contact(),
    resume: () => { window.open('assets/Resume.pdf', '_blank'); return 'opening assets/Resume.pdf …'; },
    sudo: () => 'nice try. Permission denied — you are not in the sudoers file. 🚫',
    ls: () => 'about/  skills/  experience/  projects/  certificates/  contact/  Resume.pdf',
    date: () => new Date().toString(),
    echo: (args) => args.join(' '),
    clear: () => { termBody.innerHTML = ''; return ''; }
  };

  function runCommand(raw) {
    const input = raw.trim();
    if (!input) return;
    termLine(input, 'cmd');
    const [name, ...args] = input.split(/\s+/);
    const fn = COMMANDS[name.toLowerCase()];
    if (!fn) { termLine("command not found: " + name + " — type 'help'", 'err'); return; }
    const out = fn(args);
    if (out) termLine(out, name === 'help' ? 'out' : 'acc');
  }

  if (termBody && termInput) {
    termLine("Welcome to Bonnie's data-lab shell 🧪", 'ok');
    termLine("Type 'help' to list commands, or try 'whoami'.", 'out');
    termBody.scrollTop = 0;

    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { runCommand(termInput.value); termInput.value = ''; }
    });
    termBox.addEventListener('click', (e) => { if (e.target.tagName !== 'A') termInput.focus(); });
  }

  /* ---------------- Custom cursor ---------------- */

  const dot = $('#cursorDot');
  const ring = $('#cursorRing');
  if (dot && ring && window.matchMedia('(hover: hover)').matches) {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
    });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
      requestAnimationFrame(loop);
    })();
    const hov = 'a, button, .project-card, .contact-item, .point, .chip-link, .filter, .skill-tab, .filter, input, .avatar-wrap';
    document.addEventListener('mouseover', (e) => { if (e.target.closest(hov)) ring.classList.add('hover'); });
    document.addEventListener('mouseout', (e) => { if (e.target.closest(hov)) ring.classList.remove('hover'); });
  }

  /* ---------------- Year ---------------- */

  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();


  /* ---------------- Particle constellation background ---------------- */

  const canvas = $('#bgCanvas');
  if (canvas && !reducedMotion) {
    const ctx = canvas.getContext('2d');
    let W, H, particles = [], dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const density = Math.min(Math.floor((W * H) / 15000), 110);
      particles = [];
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.6 + 0.5
        });
      }
    }
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

    function tick() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        // gentle repulsion from cursor
        const dxm = p.x - mouse.x, dym = p.y - mouse.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < 120) { p.x += (dxm / dm) * 0.6; p.y += (dym / dm) * 0.6; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34,211,238,0.55)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = 'rgba(139,92,246,' + (0.18 * (1 - d / 120)) + ')';
            ctx.lineWidth = 0.7; ctx.stroke();
          }
        }
        // link to cursor
        if (dm < 160) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = 'rgba(34,211,238,' + (0.22 * (1 - dm / 160)) + ')';
          ctx.lineWidth = 0.7; ctx.stroke();
        }
      }
      requestAnimationFrame(tick);
    }
    tick();
  }

})();

