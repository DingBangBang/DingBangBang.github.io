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
      link: 'https://github.com/DingBangBang/tokenomics-research/blob/main/research/01-eip1559-gas-fee-redistribution.md',
      linkLabel: 'Read Note 01'
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
      title: 'Onchain AML & Arbitrage Graph Mining',
      desc: 'Ethereum on-chain data + Neo4j graph database: identify AML money-laundering fund-split patterns and mine multi-hop Uniswap arbitrage paths with Cypher traversals.',
      metrics: ['AML graph', 'Uniswap multi-hop'],
      tags: ['Web3.py', 'Neo4j', 'Cypher', 'Docker'],
      link: 'https://github.com/DingBangBang/Portfolio/tree/main/projects/06_Onchain_AML_Arbitrage'
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
      link: 'https://github.com/DingBangBang/dune_dashboard_formarketshare'
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
      icon: '🧩', cat: 'ai', catLabel: 'AI Agent · LLM',
      title: 'Text-to-SQL Analytics Agent',
      desc: 'Local-first Text-to-SQL analytics agent: LangGraph orchestration + DuckDB + DeepSeek, with semantic metrics, deterministic attribution and hard token/cost guardrails for trustworthy natural-language analytics.',
      metrics: ['LangGraph agent', 'Token/cost guardrails'],
      tags: ['LangGraph', 'DuckDB', 'DeepSeek', 'Streamlit'],
      link: 'https://github.com/DingBangBang/Text-to-SQL_agent_framework'
    },
    {
      icon: '🕸️', cat: 'ai', catLabel: 'AI Agent · GenAI',
      title: 'Opinion & Event Graph System',
      desc: 'GenAI-native, real-time multi-agent opinion analysis and GraphRAG event-graph system — LLM-as-a-Judge and ABSA over a Kafka → Neo4j pipeline for streaming sentiment and event intelligence.',
      metrics: ['Real-time multi-agent', 'GraphRAG'],
      tags: ['Kafka', 'Neo4j', 'FastAPI', 'GraphRAG'],
      link: 'https://github.com/DingBangBang/opinion-and-event-graph-system'
    },
    {
      icon: '🛒', cat: 'ml', catLabel: 'ML / DS',
      title: 'Sales Data Analysis · 18M records',
      desc: 'Deep dive into online-shop sales: RFM segmentation, Sankey CVR analysis, basket analysis and probabilistic LTV models across CVR, retention, churn, ARPU and ARPPU.',
      metrics: ['+50% efficiency', '+8% retention'],
      tags: ['pandas', 'plotly', 'scikit-learn'],
      link: 'https://github.com/DingBangBang/Portfolio/tree/main/projects/01_Sales_EDA'
    },
    {
      icon: '📊', cat: 'bi', catLabel: 'BI',
      title: 'Key Accounts Dashboard (KA)',
      desc: 'Stand-alone process delivering a complex VIP / Key-Account dashboard across transactions, profits, engagement, RFM scores and reviews.',
      metrics: ['RFM scoring', 'Grafana'],
      tags: ['TiDB', 'Grafana', 'SQL'],
      link: 'https://github.com/DingBangBang/Portfolio/tree/main/projects/02_KA_Dashboard'
    },
    {
      icon: '📮', cat: 'bi', catLabel: 'BI',
      title: 'Automated Periodic Reports',
      desc: 'Stand-alone automation producing periodic reports in HTML, email and Excel formats — removing manual reporting work end-to-end.',
      metrics: ['HTML + Email + Excel'],
      tags: ['Python', 'Trino', 'Jinja'],
      link: 'https://github.com/DingBangBang/Portfolio/tree/main/projects/03_Periodic_Reports_Automation'
    },
    {
      icon: '📈', cat: 'ml', catLabel: 'ML / DS',
      title: 'Growth Analysis & Strategy (User Lifecycle)',
      desc: 'Exchange user-lifecycle blueprint: registration conversion funnel, RFM + dimensionality segmentation, churn survival analysis, LTV forecasting, marketing attribution and incremental-ROI measurement.',
      metrics: ['Funnel + RFM', 'LTV & ROI'],
      tags: ['scikit-learn', 'lifetimes', 'prophet', 'Streamlit'],
      link: 'https://github.com/DingBangBang/Portfolio/tree/main/projects/04_Customer_Analysis_BA'
    },
    {
      icon: '💬', cat: 'nlp', catLabel: 'NLP',
      title: 'Sentiment Analysis (Dissertation)',
      desc: 'Web crawling on unstructured data, cleaning, EDA and text processing; applied topic modeling and sentiment scoring to 1M reviews with word-cloud visualisations.',
      metrics: ['1M reviews', 'Topic modeling'],
      tags: ['scrapy', 'selenium', 'NLP'],
      link: 'https://github.com/DingBangBang/Portfolio/tree/main/projects/05_Comments_NLP'
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

  /* ---------------- i18n core ---------------- */
  let LANG = 'en';
  try { LANG = localStorage.getItem('site-lang') === 'zh' ? 'zh' : 'en'; } catch (e) {}
  const isZh = () => LANG === 'zh';
  const pick = (en, zh) => (isZh() ? zh : en);

  const SKILL_CAT = {
    Acquisition:   { en: 'Acquisition',   zh: '数据获取' },
    Processing:    { en: 'Processing',    zh: '数据处理' },
    Analytics:     { en: 'Analytics',     zh: '分析框架' },
    Visualization: { en: 'Visualization', zh: '可视化' },
    Collaboration: { en: 'Collaboration', zh: '协作 / 工程' }
  };
  const CAT_ZH = {
    'Research': '研究笔记', 'On-Chain': '链上', 'BI': '商业智能',
    'ML / DS': '机器学习 / 数据科学', 'NLP': '自然语言处理',
    'AI Agent · LLM': 'AI 智能体 · LLM', 'AI Agent · GenAI': 'AI 智能体 · 生成式 AI'
  };
  const catLabelOf = (p) => (isZh() ? (CAT_ZH[p.catLabel] || p.catLabel) : p.catLabel);

  const ROLES_ZH = ['高级数据分析师', '数据科学家', '链上分析爱好者', 'BI 与自动化搭建者', '加密数据探索者'];
  const rolesList = () => (isZh() ? ROLES_ZH : ROLES);
  const RADAR_ZH = { 'Python / SQL': 'Python / SQL', 'On-Chain': '链上', 'ML / Modeling': '机器学习 / 建模', 'BI & Dashboards': 'BI 与看板', 'Automation': '自动化', 'Business Acumen': '商业洞察' };
  function rlabel(d) { return isZh() ? (RADAR_ZH[d.label] || d.label) : d.label; }

  /* generic bilingual bind helpers: capture English in the DOM on first call */
  function T(sel, zh) { const n = $(sel); if (!n) return; if (n.__en == null) n.__en = n.textContent; n.textContent = isZh() ? zh : n.__en; }
  function H(sel, zh) { const n = $(sel); if (!n) return; if (n.__enH == null) n.__enH = n.innerHTML; n.innerHTML = isZh() ? zh : n.__enH; }
  function TL(sel, zhArr) { const ns = $$(sel); ns.forEach((n, i) => { if (n.__en == null) n.__en = n.textContent; n.textContent = (isZh() && zhArr[i] != null) ? zhArr[i] : n.__en; }); }
  function ATTR(sel, attr, zh) { const n = $(sel); if (!n) return; const k = '__en_' + attr; if (n[k] == null) n[k] = n.getAttribute(attr) || ''; n.setAttribute(attr, isZh() ? zh : n[k]); }
  function TLH(sel, zhArr) { const ns = $$(sel); ns.forEach((n, i) => { if (n.__enH == null) n.__enH = n.innerHTML; n.innerHTML = (isZh() && zhArr[i] != null) ? zhArr[i] : n.__enH; }); }

  /* Chinese titles/descriptions for projects — MUST stay aligned with PROJECTS order */
  const PROJ_ZH = [
    { t: '代币经济学 · 区块链经济学研究笔记：Gas 费再分配及其对以太坊验证者收益的影响', d: '研究驱动型作品集（非代码仓库）：用链上数据回答经济学问题。第 01 篇探究 EIP-1559 基础费销毁是否挤压验证者真实收益——含 DuneSQL 查询、文献综述与量化的“结构性税率”τ。' },
    { t: 'MEV-Boost 时代的价值分配', d: '微观视角：验证者、构建者与搜索者谁拿走了排序权租金？基于 5 个 MEV-Boost 中继 500 个区块的证据，MEV 呈幂律分布，前 3 大构建者拿走约 40% 价值（HHI≈0.09）。' },
    { t: '流动性挖矿：多少补贴变成了真实交易量？', d: '中观视角：代币激励的补贴效率。985 个池子（TVL≥100 万美元）收益中位数仅 0.6% 来自补贴，但有 146 个池子补贴占比超 90%——长尾“挖提卖”。' },
    { t: '高资金费率是否预示市场回调？', d: '宏观视角：来自加密衍生品的证据。359 个日频样本上，资金费率与未来 7 日收益相关系数约 -0.06——只是弱反向信号，是“拥挤度”而非可靠择时开关。' },
    { t: '链上巨鲸行为监控', d: '实时轮询管道：从 Etherscan 抓取大额 ETH 转账，检测超过阈值（美元）的巨鲸动作，落地 SQLite 并可视化资金流向与地址关系。' },
    { t: '链上反洗钱与套利图挖掘', d: '以太坊链上数据 + Neo4j 图数据库：识别反洗钱资金拆分模式，并用 Cypher 遍历挖掘 Uniswap 多跳套利路径。' },
    { t: '加密用户聚类与流失预测', d: '以太坊用户链下批量分析：Etherscan V2 取数、HDBSCAN 行为聚类、LightGBM/XGBoost 流失预测 + SHAP 解释，ARIMA 频率预测。' },
    { t: '实时交易所市场份额', d: 'Dune 看板追踪 CEX/DEX/聚合器市场份额——10 条 DuneSQL 查询，含文档与自动化。' },
    { t: '市场报告与竞品归因自动化引擎', d: '自动化市场报告与竞品归因引擎——定时任务把多源数据变成可分享的周期报告。' },
    { t: 'Text-to-SQL 分析智能体', d: '本地优先的 Text-to-SQL 分析智能体：LangGraph 编排 + DuckDB + DeepSeek，具备语义指标、确定性归因与严格的 token/成本护栏。' },
    { t: '观点与事件图系统', d: '生成式 AI 原生的实时多智能体观点分析与 GraphRAG 事件图系统——LLM-as-a-Judge 与 ABSA，基于 Kafka→Neo4j 管道做流式情感与事件洞察。' },
    { t: '销售数据分析 · 1800 万条记录', d: '电商销售深度分析：RFM 分层、桑基 CVR 分析、购物篮分析与概率化 LTV 模型，覆盖转化率、留存、流失、ARPU/ARPPU。' },
    { t: '关键客户看板（KA）', d: '独立流程产出的复杂 VIP/关键客户看板，覆盖交易、利润、活跃、RFM 评分与评论。' },
    { t: '周期报表自动化', d: '独立自动化，按 HTML、邮件与 Excel 三种形式产出周期报表，端到端消除手工工作。' },
    { t: '增长分析与策略（用户生命周期）', d: '交易所用户生命周期蓝图：注册转化漏斗、RFM+降维细分、流失生存分析、LTV 预测、营销归因与增量 ROI 测算。' },
    { t: '情感分析（毕业论文）', d: '对非结构化数据做爬虫、清洗、探索与文本处理；对 100 万条评论做主题建模与情感打分并可视化词云。' }
  ];

  /* Chinese experience — aligned with the .tl-item order in index.html */
  const EXP_ZH = [
    { role: '高级数据分析师', company: 'Bybit · 迪拜，阿联酋 · 全职', bullets: [
      '<b>产品：</b>在 Datawind 上搭建 150+ 自动化营销看板；实时流处理整合多源数据（数据库、GA4、Firebase、AppsFlyer、线下名单），构建实时用户画像与活动追踪系统——注册转化 +2.7%，CPA 降低 6.3%。',
      '<b>服务：</b>自助式用户行为分析框架，自动化处理 Sensor 前端数据（浏览、停留、点击、流失、漏斗、跳转）——决策周期提速 80%，支撑 1000+ 跨部门数据需求，营销预算优化 15%。',
      '<b>业务支持：</b>每季度约 26 份深度报告——ROI 拆解、注册/eftd/cpa/arpu7/ltv 转化瓶颈归因、活动表现与排名、广告花费与社媒相关性、CTA 组件转化归因。',
      '<b>数据驱动决策：</b>制定核心毛利目标、测算环比增长与市场预测，并落地为 Airflow DAG 实现季度预测自动化与误差自监控。'
    ] },
    { role: '商业智能分析师', company: 'NovaDAX · 北京 / 巴西 · 全职', bullets: [
      '<b>产品：</b>搭建并优化 Grafana / Dune 看板框架，监控 200+ 指标。',
      '<b>服务：</b>自动化加密交易与链上数据报告——处理时间从 2 小时缩短到 20 分钟。',
      '<b>业务支持：</b>用 Google Analytics API 衡量广告渠道 ROI（获客成本降低 11.5%）；用 LTV 预测评估空投活动（交易转化提升约 6%）。',
      '<b>数据驱动决策：</b>搭建用户风险评分框架（整体风险评分降低 9.5%）；在客服中引入关键词触发（投诉率降低 32%）。'
    ] },
    { role: '增长策略分析师', company: '蓝色光标 · 上海 · 实习' },
    { role: '电商商业分析师', company: '雅诗兰黛 · 上海 · 实习' },
    { role: '运营分析师', company: '京东（京东零售）· 北京 · 实习' },
    { role: '风险分析师', company: '京东科技（原京东金融）· 北京 · 实习' }
  ];

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
  let typingTimer = null;
  function startTyping() {
    if (!typed) return;
    if (typingTimer) { clearTimeout(typingTimer); typingTimer = null; }
    let ri = 0, ci = 0, deleting = false;
    typed.textContent = '';
    (function type() {
      const roles = rolesList();
      const role = roles[ri];
      typed.textContent = role.slice(0, ci);
      if (!deleting && ci < role.length) { ci++; typingTimer = setTimeout(type, 65); }
      else if (!deleting && ci === role.length) { deleting = true; typingTimer = setTimeout(type, 1500); }
      else if (deleting && ci > 0) { ci--; typingTimer = setTimeout(type, 32); }
      else { deleting = false; ri = (ri + 1) % roles.length; typingTimer = setTimeout(type, 320); }
    })();
  }
  startTyping();

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
  let activeSkill = Object.keys(SKILLS)[0];

  function renderSkills(key) {
    activeSkill = key;
    if (!skillList) return;
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

  function catText(key) {
    const m = SKILL_CAT[key];
    return m ? (isZh() ? m.zh : m.en) : key;
  }

  function buildSkillTabs() {
    if (!skillTabs) return;
    skillTabs.innerHTML = '';
    Object.keys(SKILLS).forEach((key) => {
      const b = el('button', 'skill-tab' + (key === activeSkill ? ' active' : ''), esc(catText(key)));
      b.type = 'button';
      b.addEventListener('click', () => {
        $$('.skill-tab', skillTabs).forEach(t => t.classList.remove('active'));
        b.classList.add('active');
        renderSkills(key);
      });
      skillTabs.appendChild(b);
    });
    renderSkills(activeSkill);
  }
  buildSkillTabs();

  /* ---------------- Radar chart ---------------- */

  const radar = $('#radarCanvas');
  let drawRadarNow = null;
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
        ctx.fillText(rlabel(d), lx, ly);
      });
    }
    drawRadarNow = function () { try { draw(1); } catch (e) {} };
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
  let activeFilter = 'all';

  function applyFilter() {
    if (!grid) return;
    $$('.project-card', grid).forEach(c => {
      c.classList.toggle('hide', !(activeFilter === 'all' || c.dataset.cat === activeFilter));
    });
  }

  function buildProjects() {
    if (!grid) return;
    grid.innerHTML = '';
    PROJECTS.forEach((p, i) => {
      const zh = PROJ_ZH[i] || {};
      const title = (isZh() && zh.t) ? zh.t : p.title;
      const desc = (isZh() && zh.d) ? zh.d : p.desc;
      const card = el('article', 'project-card reveal');
      card.dataset.cat = p.cat;
      card.style.transitionDelay = Math.min(i * 40, 200) + 'ms';
      card.innerHTML =
        '<div class="pc-head">' +
          '<div class="pc-icon">' + p.icon + '</div>' +
          '<span class="pc-cat">' + esc(catLabelOf(p)) + '</span>' +
        '</div>' +
        '<h3 class="pc-title">' + esc(title) + '</h3>' +
        '<p class="pc-desc">' + esc(desc) + '</p>' +
        '<div class="pc-metrics">' + p.metrics.map(m => '<span>' + esc(m) + '</span>').join('') + '</div>' +
        '<div class="pc-tags">' + p.tags.map(t => '<i>' + esc(t) + '</i>').join('') + '</div>' +
        '<a class="pc-link" href="' + p.link + '" target="_blank" rel="noopener" data-cursor="hover">' + esc(isZh() ? '在 GitHub 查看' : (p.linkLabel || 'View on GitHub')) + ' <span>→</span></a>';
      grid.appendChild(card);

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
    $$('.project-card.reveal', grid).forEach(n => io.observe(n));
    applyFilter();
  }
  buildProjects();

  const filterBtns = $$('.filter', $('#projectFilters'));
  filterBtns.forEach(f => f.addEventListener('click', () => {
    filterBtns.forEach(x => x.classList.remove('active'));
    f.classList.add('active');
    activeFilter = f.dataset.filter;
    applyFilter();
  }));

  /* ---------------- Certificates ---------------- */

  const certGrid = $('#certGrid');

  function buildCerts() {
    if (!certGrid) return;
    certGrid.innerHTML = '';
    CERTS.forEach((c, i) => {
      const card = el('div', 'cert-card reveal');
      card.style.transitionDelay = Math.min(i * 60, 260) + 'ms';
      const issuer = isZh() ? '专业证书' : c.issuer;
      card.innerHTML =
        '<div class="cert-badge">' + c.icon + '</div>' +
        '<div class="cert-name">' + esc(c.name) + '</div>' +
        '<div class="cert-issuer">' + esc(issuer) + '</div>';
      certGrid.appendChild(card);
      io.observe(card);
    });
  }
  buildCerts();


  /* ---------------- Interactive terminal ---------------- */

  const termBody = $('#termBody');
  const termInput = $('#termInput');
  const termBox = $('#terminalBox');

  const HELP_EN = [
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
  const HELP_ZH = [
    'help       — 显示命令列表',
    'whoami     — 我是谁？',
    'skills     — 技术栈概览',
    'experience — 工作经历',
    'projects   — 精选项目',
    'contact    — 联系方式',
    'resume     — 下载简历',
    'sudo       — 别试这个 🙃',
    'clear      — 清屏'
  ];

  function termLine(text, cls) { const l = el('div', 'term-line ' + (cls || '')); l.textContent = text; termBody.appendChild(l); termBody.scrollTop = termBody.scrollHeight; }

  const COMMANDS = {
    help: () => (isZh() ? HELP_ZH : HELP_EN).join('\n'),
    whoami: () => pick(
      'Bonnie Bennett — Senior Data Analyst / Data Scientist.\n5+ yrs across top-tier crypto exchanges & Fortune Global 500.\nBased in Dubai, UAE. ENTP. Lives for clean pipelines.',
      'Bonnie Bennett — 高级数据分析师 / 数据科学家。\n5+ 年经验，横跨头部加密交易所与世界 500 强。\n现居迪拜。ENTP。热爱干净的数据管道。'
    ),
    skills: () => pick(
      'Acquisition .... DuneSQL, SparkSQL, Trino, HiveSQL, Neo4j, Kafka, ClickHouse\nProcessing ..... Python, SQL, Airflow, dbt, DuckDB, R, Go\nAnalytics ...... Funnels/RFM, RCA, Predictive Modelling, Tokenomics, MEV\nVisualization .. Datawind, Grafana, Tableau, Power BI, Superset\nSoft power ..... Stakeholder mgmt, Storytelling, Async collaboration',
      '数据获取 .... DuneSQL, SparkSQL, Trino, HiveSQL, Neo4j, Kafka, ClickHouse\n数据处理 .... Python, SQL, Airflow, dbt, DuckDB, R, Go\n分析框架 .... 漏斗/RFM, 根因分析, 预测建模, 代币经济学, MEV\n可视化 ...... Datawind, Grafana, Tableau, Power BI, Superset\n软实力 ...... 利益相关方管理, 讲故事, 异步协作'
    ),
    experience: () => pick(
      '2024–2026  Senior Data Analyst      @ Bybit (Dubai)\n2021–2024  Business Intelligence    @ NovaDAX (Beijing/Brazil)\n2020–2021  Strategy Analyst         @ BlueFocus (Shanghai)\n2020       Business Analyst         @ Estée Lauder (Shanghai)\n2019–2020  Operation Analyst        @ JD.com (Beijing)',
      '2024–2026  高级数据分析师   @ Bybit（迪拜）\n2021–2024  商业智能分析师   @ NovaDAX（北京/巴西）\n2020–2021  增长策略分析师   @ 蓝色光标（上海）\n2020       电商商业分析师   @ 雅诗兰黛（上海）\n2019–2020  运营/风险分析师  @ 京东（北京）'
    ),
    projects: () => {
      var lines = PROJECTS.slice(0, 5).map(function (p, i) { return '• ' + ((isZh() && PROJ_ZH[i]) ? PROJ_ZH[i].t : p.title); });
      lines.push('', pick('→ scroll up to the Projects section for details', '→ 向上滚动到「项目」区查看详情'));
      return lines.join('\n');
    },
    contact: () => 'email .... dingbangchu@gmail.com\ngithub ... github.com/DingBangBang\nlinkedin . linkedin.com/in/bonniebennett333\ntelegram . @bonniebennett333\nwhatsapp . +971 55 610 6241',
    social: () => COMMANDS.contact(),
    resume: () => { window.open('assets/Resume.pdf', '_blank'); return pick('opening assets/Resume.pdf …', '正在打开 assets/Resume.pdf …'); },
    sudo: () => pick('nice try. Permission denied — you are not in the sudoers file. 🚫', '想得美。权限被拒绝——你不在 sudoers 名单里。🚫'),
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
    if (!fn) { termLine(pick("command not found: " + name + " — type 'help'", "未找到命令：" + name + " —— 输入 'help'"), 'err'); return; }
    const out = fn(args);
    if (out) termLine(out, name === 'help' ? 'out' : 'acc');
  }

  function terminalIntro() {
    termLine(pick("Welcome to Bonnie's data-lab shell 🧪", '欢迎来到 Bonnie 的数据实验室 shell 🧪'), 'ok');
    termLine(pick("Type 'help' to list commands, or try 'whoami'.", "输入 'help' 查看命令，或试试 'whoami'。"), 'out');
  }
  function resetTerminal() { if (!termBody) return; termBody.innerHTML = ''; terminalIntro(); }

  if (termBody && termInput) {
    terminalIntro();
    termBody.scrollTop = 0;

    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { runCommand(termInput.value); termInput.value = ''; }
    });
    termBox.addEventListener('click', (e) => { if (e.target.tagName !== 'A') termInput.focus(); });
  }

  /* ---------------- Apply static translations ---------------- */
  function applyStaticLang() {
    // nav
    T('.nav-link[href="#home"]', '首页');
    T('.nav-link[href="#about"]', '关于');
    T('.nav-link[href="#skills"]', '技能');
    T('.nav-link[href="#experience"]', '经历');
    T('.nav-link[href="#projects"]', '项目');
    T('.nav-link[href="#contact"]', '联系');
    T('.nav-actions .btn-ghost', '简历');
    // hero
    H('.hero-badge', '<span class="pulse-dot"></span> 开放数据科学机会');
    H('.hero-sub', '我把海量、杂乱的数据变成决策 — 5+ 年经验横跨 <b>头部加密交易所</b> 与 <b>世界 500 强</b>。目前专注用户行为分析、链上智能与机器学习管道。');
    T('.hero-cta .btn-primary', '查看作品集');
    T('.hero-cta .btn-outline', '联系我');
    TL('.hero-stats .stat-label', ['数据领域年限', '看板交付', '数据需求交付', '生产数据记录']);
    T('.cue-text', '滚动');
    // section titles
    H('#about .section-title', '关于<span class="gradient-text">我</span>');
    H('#skills .section-title', '技术<span class="gradient-text">栈</span>');
    H('#experience .section-title', '工作<span class="gradient-text">经历</span>');
    H('#projects .section-title', '精选<span class="gradient-text">项目</span>');
    H('#certs .section-title', '资格<span class="gradient-text">证书</span>');
    H('#terminal .section-title', '互动<span class="gradient-text">终端</span>');
    H('#contact .section-title', '保持<span class="gradient-text">联系</span>');
    // filters
    T('.filter[data-filter="all"]', '全部');
    T('.filter[data-filter="research"]', '研究');
    T('.filter[data-filter="onchain"]', '链上');
    T('.filter[data-filter="ml"]', '机器学习 / 数据科学');
    T('.filter[data-filter="ai"]', 'AI 智能体');
    T('.filter[data-filter="bi"]', 'BI / 分析');
    T('.filter[data-filter="nlp"]', 'NLP');
    // about
    T('.about-role', '高级数据分析师 / 数据科学家');
    TL('.about-meta li', ['📍 迪拜，阿联酋', '🏢 Bybit', '🎓 数据科学硕士（在读）', '🗣️ 多语言 · ENTP']);
    TL('.about-socials .chip-link', ['GitHub', 'LinkedIn', '简历']);
    H('.about-text .lead', '我是一名从数据分析转向数据科学的从业者，来自亚洲 🇨🇳，现居迪拜 🇦🇪。我喜欢写脚本、折腾再重建得更好——偏爱 <b>自动化</b>、<b>性价比</b>，以及真正能推动业务增长的决策。');
    var pts = [
      ['📊 数据 → 决策', '回答“如何”与“为什么”，并提出有数据支撑、能驱动增长的建议。'],
      ['🧠 用户心理', '像产品经理一样深挖行为根因——漏斗、生命周期、RFM、流失、LTV。'],
      ['⚡ 沉浸式编码', '结构化思维与工作流自动化——从 Airflow DAG 到 AI 智能体。'],
      ['🌍 数字游民', '环球旅行、极限运动与旅行——内心平静而笃定。']
    ];
    $$('.about-points .point').forEach(function (pt, i) {
      var h = $('h4', pt), p = $('p', pt);
      [[h, 0], [p, 1]].forEach(function (pair) {
        var node = pair[0]; if (!node) return;
        if (node.__en == null) node.__en = node.textContent;
        if (isZh()) { node.textContent = pts[i][pair[1]]; node.__mod = 1; }
        else if (node.__mod) { node.textContent = node.__en; node.__mod = 0; }
      });
    });
    TL('.tag-row .tag', ['链上分析', '加密交易所', '用户行为', '线上零售', '代币经济学']);
    // skills panel
    T('.radar-panel .panel-title', '核心能力');
    T('.radar-note', '悬停 / 点击标签查看');
    // experience
    TL('.tl-role', EXP_ZH.map(function (e) { return e.role; }));
    TL('.tl-company', EXP_ZH.map(function (e) { return e.company; }));
    var bz = []; EXP_ZH.forEach(function (e) { if (e.bullets) e.bullets.forEach(function (b) { bz.push(b); }); });
    TLH('.tl-list li', bz);
    // contact
    H('.contact-left .lead', '开放数据科学岗位、分析协作，以及有意思的链上问题。随时通过下面的方式联系我——回复很快。🐱');
    T('.contact-right .panel-title', '速览');
    TL('.fact-list li span', ['职位', '方向', '领域', '技术栈', '所在地', '状态']);
    TL('.fact-list li b', ['高级数据分析师', '数据科学 / 链上', '加密交易所 · 零售', 'Python · SQL · ML · BI', '迪拜，阿联酋（UTC+4）', '欢迎机会']);
    T('.contact-right .btn-primary', '下载简历 ↓');
    // footer
    H('.footer-brand', 'Bonnie Bennett <span>·</span> 高级数据分析师 / 数据科学家');
    T('.footer-note', '从零手写——原生 HTML · CSS · JS。托管于 GitHub Pages。');
    H('.footer-copy', '© <span id="year"></span> Bonnie Bennett. 保留所有权利。');
    var yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();
    // terminal
    ATTR('#termInput', 'placeholder', '输入 help 回车…');
    document.documentElement.setAttribute('lang', isZh() ? 'zh-CN' : 'en');
    var lbl = $('#langLabel'); if (lbl) lbl.textContent = isZh() ? 'EN' : '中文';
  }

  function setLang(lang) {
    LANG = (lang === 'zh') ? 'zh' : 'en';
    try { localStorage.setItem('site-lang', LANG); } catch (e) {}
    applyStaticLang();
    buildSkillTabs();
    buildProjects();
    buildCerts();
    if (drawRadarNow) drawRadarNow();
    startTyping();
    resetTerminal();
  }

  const langToggle = $('#langToggle');
  if (langToggle) langToggle.addEventListener('click', function () { setLang(isZh() ? 'en' : 'zh'); });

  setLang(LANG);

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

