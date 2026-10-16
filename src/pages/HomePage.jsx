import React, { useState } from 'react';
import './HomePage.css';

const WhatsAppIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const ChevronIcon = ({ isOpen }) => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={`chevron-icon ${isOpen ? 'open' : ''}`}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const WHATSAPP_NUMBER = '917559384315';
const WHATSAPP_MSG = encodeURIComponent("Hi, I'm interested in the Forex Basic to Advanced Masterclass Batch starting 5 Nov 2026 (Morning 9:00 - 11:00 AM).");
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const smcModules = [
  {
    id: "smc-1",
    num: "01",
    title: "Structure Mapping",
    tagline: "BOS | IDM | CHOCH",
    icon: "🗺️",
    badge: "Structure Basics",
    topics: [
      { text: "BOS – Break of Structure Mapping", icon: "📐" },
      { text: "IDM – Inducement Identification & Rule", icon: "🎯" },
      { text: "CHOCH – Change of Character / Major Shift", icon: "🔄" },
      { text: "Complete Professional Structure Mapping Flow", icon: "📊" }
    ]
  },
  {
    id: "smc-2",
    num: "02",
    title: "Multi-Timeframe Structure Mapping",
    tagline: "Separate In-Depth Session",
    icon: "⏱️",
    badge: "Dedicated Session",
    topics: [
      { text: "1W MAPPING – Weekly Structure & Major Swings", icon: "📅" },
      { text: "1D MAPPING – Daily Range & Institutional Bias", icon: "📆" },
      { text: "4H MAPPING – Key Intermediate Swing Levels", icon: "⏳" },
      { text: "2H MAPPING – Structure Transition Refinement", icon: "⌛" },
      { text: "1H MAPPING – Intraday Session Liquidity Pools", icon: "⏰" },
      { text: "30 / 45 MIN MAPPING – Intraday Precision Zones", icon: "⏱️" },
      { text: "15 / 5 MIN MAPPING – Sniper Entry Models & Trigger", icon: "🎯" },
      { text: "Multi-Timeframe Confluence – Complete Separate Session", icon: "🔥" }
    ]
  },
  {
    id: "smc-3",
    num: "03",
    title: "Higher Time Frame Study + Lower TF Entry Model",
    tagline: "HTF Direction to LTF Execution",
    icon: "🎯",
    badge: "HTF + LTF Model",
    topics: [
      { text: "Higher Time Frame (HTF) Market Narrative & Study", icon: "🔭" },
      { text: "Lower Time Frame (LTF) Precise Confirmation & Entry", icon: "🎯" },
      { text: "High RR (Risk to Reward) Setup Identification", icon: "💎" },
      { text: "Complete HTF to LTF Execution Rulebook", icon: "⚡" }
    ]
  },
  {
    id: "smc-4",
    num: "04",
    title: "ORDERBLOCK Mastery",
    tagline: "10 Specialized Institutional OrderBlock Models",
    icon: "🧱",
    badge: "10 OB Models",
    topics: [
      { text: "Bullish OrderBlock + Structure Study HTF to LTF Entry Model", icon: "🟢", type: "bull" },
      { text: "Bearish OrderBlock + Structure Study HTF to LTF Entry Model", icon: "🔴", type: "bear" },
      { text: "Bullish Mitigation OrderBlock + Structure Study HTF to LTF Entry Model", icon: "🟢", type: "bull" },
      { text: "Bearish Mitigation OrderBlock + Structure Study HTF to LTF Entry Model", icon: "🔴", type: "bear" },
      { text: "Bullish Rejection OrderBlock + Structure Study HTF to LTF Entry Model", icon: "🟢", type: "bull" },
      { text: "Bearish Rejection OrderBlock + Structure Study HTF to LTF Entry Model", icon: "🔴", type: "bear" },
      { text: "Bullish Breaker OrderBlock + Structure Study HTF to LTF Entry Model", icon: "🟢", type: "bull" },
      { text: "Bearish Breaker OrderBlock + Structure Study HTF to LTF Entry Model", icon: "🔴", type: "bear" },
      { text: "Volumetric Bullish OrderBlock + Structure Study HTF to LTF Entry Model", icon: "🟢", type: "bull" },
      { text: "Volumetric Bearish OrderBlock + Structure Study HTF to LTF Entry Model", icon: "🔴", type: "bear" }
    ]
  },
  {
    id: "smc-5",
    num: "05",
    title: "Imbalance Gap Theory",
    tagline: "FVG, BISI, SIBI, Inversion & Balanced Price Ranges",
    icon: "⚖️",
    badge: "9 Gap Models",
    topics: [
      { text: "Bullish Fair Value Gap + Structure Study HTF to LTF Entry Model", icon: "🟢", type: "bull" },
      { text: "Bearish Fair Value Gap + Structure Study HTF to LTF Entry Model", icon: "🔴", type: "bear" },
      { text: "( BISI ) Buy Side Imbalance Sell Side Inefficiency + Structure Study HTF to LTF Entry Model", icon: "📈", type: "bull" },
      { text: "( SIBI ) Sell Side Imbalance Buy Side Inefficiency + Structure Study HTF to LTF Entry Model", icon: "📉", type: "bear" },
      { text: "Bullish Inversion + Structure Study HTF to LTF Entry Model", icon: "🟢", type: "bull" },
      { text: "Bearish Inversion + Structure Study HTF to LTF Entry Model", icon: "🔴", type: "bear" },
      { text: "Bullish BPR (Balanced Price Range) + Structure Study HTF to LTF Entry Model", icon: "🟢", type: "bull" },
      { text: "Bearish BPR (Balanced Price Range) + Structure Study HTF to LTF Entry Model", icon: "🔴", type: "bear" },
      { text: "Volume Imbalance Bullish + Volume Imbalance Bearish + Structure Study HTF to LTF Entry Model", icon: "📊" }
    ]
  },
  {
    id: "smc-6",
    num: "06",
    title: "Liquidity Concepts & Sweep Models",
    tagline: "14 Deep Liquidity Models including CRT & DOL",
    icon: "💧",
    badge: "14 Liquidity Setups",
    topics: [
      { text: "Basic Liquidity Concept & Market Engineering", icon: "💧" },
      { text: "Swing High + Swing Low Liquidity", icon: "📈" },
      { text: "Buy Side Liquidity + Sell Side Liquidity + Structure Mapping Deep", icon: "🎯" },
      { text: "EQL (Equal Low Liquidity) Structure Mapping Deep", icon: "🟢" },
      { text: "EQH (Equal High Liquidity) Structure Mapping Deep", icon: "🔴" },
      { text: "1D to 1H Time Base Liquidity + Structure Mapping Deep Entry Model Bullish + Bearish", icon: "⏰" },
      { text: "PDL – Previous Day Low Liquidity + Structure Mapping Deep", icon: "📉" },
      { text: "PDH – Previous Day High Liquidity + Structure Mapping Deep", icon: "📈" },
      { text: "PWH – Previous Weekly High Liquidity + Structure Mapping Deep Entry Model", icon: "📅" },
      { text: "PWL – Previous Weekly Low Liquidity + Structure Mapping Deep Entry Model", icon: "📅" },
      { text: "CRT LIQUIDITY CONCEPT FIRST TIME IN INDIA 🇮🇳", icon: "🇮🇳", special: true },
      { text: "FVG / OB Sweep Liquidity Entry Model", icon: "⚡" },
      { text: "DOL – Draw On Liquidity Entry Model", icon: "🎯" },
      { text: "S-DOL – Short Term Liquidity Entry Model", icon: "⏱️" }
    ]
  }
];

const ictModules = [
  {
    id: "ict-1",
    num: "01",
    title: "AMD & Institutional Price Delivery",
    tagline: "Accumulation, Manipulation, Distribution, CISD & SDTV",
    icon: "🔄",
    badge: "Delivery Models",
    topics: [
      { text: "BULLISH AMD – Bullish Accumulation Manipulation Distribution Entry Model Strategy", icon: "🟢", type: "bull" },
      { text: "BEARISH AMD – Bearish Accumulation Manipulation Distribution", icon: "🔴", type: "bear" },
      { text: "Time Base Liquidity + LTF CH Entry Model Bullish + Bearish", icon: "⏰" },
      { text: "Bullish CISD – Change In State Delivery", icon: "🟢", type: "bull" },
      { text: "Bearish CISD – Change In State Delivery", icon: "🔴", type: "bear" },
      { text: "CISD + SSL / BSL / POI ENTRY MODEL", icon: "🎯" },
      { text: "SDTV – Standard Deviation Different Different 5 Strategies", icon: "📊" }
    ]
  },
  {
    id: "ict-2",
    num: "02",
    title: "Intraday Candle Delivery & Judas Swing",
    tagline: "H4, H1, 1D Models, Turtle Soup & Reversals",
    icon: "🕯️",
    badge: "Candle Delivery",
    topics: [
      { text: "H4 INTRADAY CANDLE DELIVERY MODEL", icon: "⏳" },
      { text: "H1 INTRADAY CANDLE DELIVERY MODEL", icon: "⏰" },
      { text: "1D INTRADAY CANDLE DELIVERY MODEL", icon: "📆" },
      { text: "BULLISH JUDAS SWING STRATEGY INTRADAY MODEL REVERSAL", icon: "🟢", type: "bull" },
      { text: "BEARISH JUDAS SWING STRATEGY INTRADAY MODEL REVERSAL", icon: "🔴", type: "bear" },
      { text: "TBS – Bullish Turtle Soup", icon: "🟢", type: "bull" },
      { text: "TBS – Bearish Turtle Soup", icon: "🔴", type: "bear" },
      { text: "ERL + IRL STRUCTURE MAPPING (External & Internal Range Liquidity)", icon: "🗺️" }
    ]
  },
  {
    id: "ict-3",
    num: "03",
    title: "High-Probability ICT Profiles & Algorithms",
    tagline: "IPDA Algorithm, SMT, One Shot One Kill & Daily Bias",
    icon: "⚡",
    badge: "IPDA & Profiles",
    topics: [
      { text: "One Shot One Kill Model – Bullish Weekly Profile Model", icon: "🟢", type: "bull" },
      { text: "One Shot One Kill Model – Bearish Weekly Profile Model", icon: "🔴", type: "bear" },
      { text: "Bullish SMT – Smart Money Technique", icon: "🟢", type: "bull" },
      { text: "Bearish SMT – Smart Money Technique", icon: "🔴", type: "bear" },
      { text: "ITH + ITL (Intermediate Term High) + (Intermediate Term Low) Best Entry Model", icon: "🎯" },
      { text: "Intraday Daily Bias Model", icon: "🧭" },
      { text: "FRVP – Fixed Range Volume Profile + Time Base Liq Model", icon: "📊" },
      { text: "IPDA – Interbank Price Delivery Algorithm Bullish Entry Model Strategy", icon: "🟢", type: "bull" },
      { text: "IPDA – Interbank Price Delivery Algorithm Bearish Entry Model Strategy", icon: "🔴", type: "bear" }
    ]
  },
  {
    id: "ict-4",
    num: "04",
    title: "Kill Zones, Midnight & Gold Models",
    tagline: "London, NY, Asian Sessions & Gold Phantom Strategy",
    icon: "🎯",
    badge: "Session Mastery",
    topics: [
      { text: "Kill Zone – Bullish Kill Zone Intraday Strategy", icon: "🟢", type: "bull" },
      { text: "Kill Zone – Bearish Kill Zone Intraday Strategy", icon: "🔴", type: "bear" },
      { text: "Kill Zone – Bullish Kill Zone Continuation Model", icon: "🟢", type: "bull" },
      { text: "Kill Zone – Bearish Kill Zone Continuation Model", icon: "🔴", type: "bear" },
      { text: "Asian Session H1 Candle Model", icon: "🌏" },
      { text: "Phantom Model – 3.30 TO 5.30 GOLD Intraday Strategie", icon: "🥇", special: true },
      { text: "12.00 TO 12.30 Midnight Reversal Model", icon: "🌙" },
      { text: "MRM MODEL + MONTHLY LIQ", icon: "📅" },
      { text: "DOL BIAS + SYD MANIPULATION MODEL", icon: "🎯" }
    ]
  },
  {
    id: "ict-5",
    num: "05",
    title: "CRT – Candle Range Theory & XAU-USD 95% Accuracy",
    tagline: "Time Theory (10.30/2.30/9.30) & High-Accuracy Strategy",
    icon: "🔥",
    badge: "95% Accuracy XAU-USD",
    topics: [
      { text: "ICT Time Theory Model – 10.30 / 2.30 / 9.30 Bullish CRT Continuation", icon: "🟢", type: "bull" },
      { text: "ICT Time Theory Model – 10.30 / 2.30 / 9.30 Bearish CRT Continuation", icon: "🔴", type: "bear" },
      { text: "ICT Time Theory Model – 10.30 / 2.30 / 9.30 Bullish CRT Reversal", icon: "🟢", type: "bull" },
      { text: "ICT Time Theory Model – 10.30 / 2.30 / 9.30 Bearish CRT Reversal", icon: "🔴", type: "bear" },
      { text: "KILL ZONE + CRT ALIGNMENTS FOR XAU-USD STRATEGY (TOP STRATEGY 95% ACCURACY)", icon: "🏆", special: true },
      { text: "CRT BIAS + KILL ZONE BIAS NARRATIVE STUDY", icon: "🧠" }
    ]
  },
  {
    id: "ict-6",
    num: "06",
    title: "FIBONACCI & Alchemist Precision Models",
    tagline: "OTE, Premium/Discount, SDTV & Circle Models",
    icon: "✨",
    badge: "Alchemist Fibo",
    topics: [
      { text: "FIBONACCI – Alchemist Entry Model", icon: "📐" },
      { text: "Premium / Discount Entry Model Intraday Daily", icon: "⚖️" },
      { text: "OTE – OPTIMAL ENTRY MODEL (Bullish + Bearish)", icon: "🎯" },
      { text: "CRT - H | CRT - L + SDTV FIBO", icon: "📊" },
      { text: "Judas Swing Target + Reversal Model Fibo", icon: "🏹" },
      { text: "SDTV + SWING CANDLE ALCHEMIST MODEL", icon: "🔮" },
      { text: "CISD + ALCHEMIST SDTV MODEL", icon: "⚡" },
      { text: "ALCHEMIST CIRCLE FIBO MODEL", icon: "⭕" }
    ]
  }
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('smc');
  const [openModules, setOpenModules] = useState({
    'smc-1': true, 'smc-2': true, 'smc-3': true, 'smc-4': true, 'smc-5': true, 'smc-6': true,
    'ict-1': true, 'ict-2': true, 'ict-3': true, 'ict-4': true, 'ict-5': true, 'ict-6': true
  });

  const toggleModule = (id) => {
    setOpenModules(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const currentModules = activeTab === 'smc' ? smcModules : ictModules;
  const currentTabOpenCount = currentModules.filter(m => openModules[m.id]).length;
  const isCurrentAllOpen = currentTabOpenCount === currentModules.length;

  const toggleCurrentAll = () => {
    const targetState = !isCurrentAllOpen;
    setOpenModules(prev => {
      const updated = { ...prev };
      currentModules.forEach(m => {
        updated[m.id] = targetState;
      });
      return updated;
    });
  };

  return (
    <div className="home-page">

      {/* ── HERO ── */}
      <section className="hero">
        <h1 className="hero-title">
          Forex Basic ते Advanced
          <span className="gradient-text"> – Deep Market Knowledge Masterclass</span>
        </h1>
        <p className="hero-sub">
          फक्त Buy–Sell Calls वर अवलंबून न राहता स्वतःच्या Analysis आणि Confidence वर ट्रेड करायला शिका
        </p>
      </section>

      {/* ── BATCH INFO ── */}
      <div className="batch-strip">
        <div className="batch-chip"><span className="chip-icon">📅</span><div><small>नवीन Batch सुरू</small><strong>5 Nov 2026</strong></div></div>
        <div className="batch-chip"><span className="chip-icon">⏰</span><div><small>वेळ (Batch Time)</small><strong>सकाळी 9:00 – 11:00</strong></div></div>
        <div className="batch-chip"><span className="chip-icon">💻</span><div><small>Mode</small><strong>Live Online Sessions</strong></div></div>
      </div>

      {/* ── CTA 1 ── */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="wa-btn wa-btn-big">
        <WhatsAppIcon size={26} />
        <span>Join – WhatsApp</span>
      </a>

      {/* ── WHAT YOU LEARN ── */}
      <section className="card-section">
        <h2 className="sec-heading"><span>🎯</span> या Batch मध्ये काय शिकणार?</h2>
        <ul className="tick-list">
          <li>Smart Money Concepts – SMC (Complete 6 In-Depth Modules)</li>
          <li>Inner Circle Trader – ICT Models &amp; IPDA Algorithm (Complete Detailed Syllabus)</li>
          <li>CRT – Candle Range Theory (First Time in India 🇮🇳 &amp; 95% Accuracy XAU-USD Model)</li>
          <li>Fibonacci Alchemist &amp; OTE Precision Entry Models</li>
          <li>Order Flow Trading</li>
          <li>Bookmap &amp; Market Liquidity Analysis</li>
          <li>Institutional Entry आणि Exit Models</li>
          <li>Liquidity Sweep आणि Stop Hunt Concepts GOLD XAU-USD MODEL</li>
          <li>High-Probability Trade Setups</li>
          <li>Fundamental + Technical Market Analysis</li>
          <li>Entry, Stop Loss आणि Target Planning GOLD SETUP</li>
          <li>Risk Management आणि Trading Psychology</li>
        </ul>
      </section>

      {/* ── SYLLABUS SECTION WITH TABS ── */}
      <section className="card-section smc-syllabus-section glow-section">
        <div className="smc-header-block">
          <div className="smc-badge-pill">
            <span className="pill-dot"></span>
            COMPLETE MASTERCLASS SYLLABUS
          </div>
          <h2 className="smc-title">
            <span>📚</span> Complete Trading Mastery Syllabus
          </h2>
          <p className="smc-desc">
            SMC, ICT, CRT आणि Alchemist मॉडेलची संपूर्ण माहिती – बेसिक पासून 95% ॲक्युरसी स्ट्रॅटेजी पर्यंत सर्व समाविष्ट.
          </p>

          {/* TAB SWITCHER */}
          <div className="syllabus-tabs-nav">
            <button 
              type="button" 
              className={`syllabus-tab-btn ${activeTab === 'smc' ? 'active' : ''}`}
              onClick={() => setActiveTab('smc')}
            >
              <span className="tab-icon">🧠</span>
              <div className="tab-btn-text">
                <strong>SMC (Smart Money)</strong>
                <small>6 Modules • All Concepts</small>
              </div>
            </button>
            <button 
              type="button" 
              className={`syllabus-tab-btn ${activeTab === 'ict' ? 'active' : ''}`}
              onClick={() => setActiveTab('ict')}
            >
              <span className="tab-icon">🎯</span>
              <div className="tab-btn-text">
                <strong>ICT, CRT &amp; Alchemist</strong>
                <small>6 Modules • IPDA &amp; Time Theory</small>
              </div>
            </button>
          </div>

          <div className="smc-toolbar">
            <span className="smc-count-text">
              {activeTab === 'smc' ? '🧠 SMC: 6 प्रमुख Modules' : '🎯 ICT & CRT: 6 प्रगत Modules'}
            </span>
            <button type="button" onClick={toggleCurrentAll} className="smc-toggle-all-btn">
              {isCurrentAllOpen ? 'सर्व बंद करा (Collapse All)' : 'सर्व उघडा (Expand All)'}
            </button>
          </div>
        </div>

        <div className="smc-modules-container">
          {currentModules.map((mod) => {
            const isOpen = !!openModules[mod.id];
            return (
              <div key={mod.id} className={`smc-card ${isOpen ? 'active' : ''}`}>
                <div 
                  className="smc-card-header" 
                  onClick={() => toggleModule(mod.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleModule(mod.id); }}
                >
                  <div className="smc-card-header-left">
                    <span className="smc-num">{mod.num}</span>
                    <span className="smc-module-icon">{mod.icon}</span>
                    <div className="smc-title-box">
                      <h3 className="smc-module-name">{mod.title}</h3>
                      <span className="smc-module-tagline">{mod.tagline}</span>
                    </div>
                  </div>
                  <div className="smc-card-header-right">
                    <span className="smc-badge-chip">{mod.badge}</span>
                    <ChevronIcon isOpen={isOpen} />
                  </div>
                </div>

                {isOpen && (
                  <div className="smc-card-body">
                    <ul className="smc-topic-list">
                      {mod.topics.map((t, idx) => (
                        <li 
                          key={idx} 
                          className={`smc-topic-item ${t.special ? 'smc-topic-special' : ''} ${t.type ? `smc-${t.type}` : ''}`}
                        >
                          <span className="smc-item-icon">{t.icon}</span>
                          <span className="smc-item-text">{t.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 80+ SESSIONS ── */}
      <section className="card-section glow-section">
        <h2 className="sec-heading"><span>📚</span> 80+ Deep Knowledge Sessions</h2>
        <p className="sec-body">80+ Live Sessions मध्ये मिळवा Complete Market Knowledge</p>
        <p className="sec-body">Basic पासून Advanced Level पर्यंत प्रत्येक Concept Step-by-Step आणि Practical Chart Examples सोबत शिकवला जाईल.</p>
        <div className="pill-row">
          <span className="pill">Theory</span>
          <span className="pill">Live Chart Analysis</span>
          <span className="pill">Backtesting</span>
          <span className="pill">Trade Management</span>
        </div>
      </section>

      {/* ── CTA 2 ── */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="wa-btn wa-btn-big">
        <WhatsAppIcon size={26} />
        <span>Join – WhatsApp</span>
      </a>

      {/* ── RECORDED LECTURES ── */}
      <section className="card-section">
        <h2 className="sec-heading"><span>🎥</span> Recorded Lectures उपलब्ध</h2>
        <p className="sec-body muted-text">एखादे Live Lecture Miss झाले तरी काळजी करण्याची गरज नाही.</p>
        <ul className="tick-list">
          <li>प्रत्येक दिवसाचे Recorded Lecture</li>
          <li>Telegram Batch Group मध्ये उपलब्ध</li>
          <li>Revision आणि Backtesting साठी उपयोगी</li>
          <li>कोणताही Concept पुन्हा पाहण्याची सुविधा</li>
        </ul>
      </section>

      {/* ── WHO IS THIS FOR ── */}
      <section className="card-section">
        <h2 className="sec-heading"><span>💎</span> ही Batch कोणासाठी आहे?</h2>
        <p className="sec-body muted-text">ही Batch तुमच्यासाठी आहे, जर तुम्हाला:</p>
        <ul className="gem-list">
          <li>मार्केटचा पुढचा Move स्वतः Predict करायचा असेल</li>
          <li>Gold आणि Forex मध्ये Confidence ने ट्रेड करायचा असेल</li>
          <li>ICT, SMC, CRT आणि Order Flow Deep मध्ये शिकायचे असेल</li>
          <li>Random Entries बंद करून Proper Setup वर ट्रेड करायचा असेल</li>
          <li>स्वतःचा Analysis तयार करून Independent Trader बनायचे असेल</li>
        </ul>
      </section>

      {/* ── BATCH DETAILS ── */}
      <section className="card-section glow-section">
        <h2 className="sec-heading"><span>⚡</span> Batch Details</h2>
        <div className="info-table">
          <div className="info-row"><span className="info-label">Batch Start Date</span><span className="info-value">5 Nov 2026 (5 नोव्हेंबर)</span></div>
          <div className="info-row"><span className="info-label">Lecture Time</span><span className="info-value">सकाळी 9:00 ते 11:00 (Morning)</span></div>
          <div className="info-row"><span className="info-label">Mode</span><span className="info-value">Live Online</span></div>
          <div className="info-row"><span className="info-label">Sessions</span><span className="info-value">80+</span></div>
          <div className="info-row"><span className="info-label">Recordings</span><span className="info-value">Telegram Batch Group मध्ये Daily</span></div>
          <div className="info-row"><span className="info-label">Language</span><span className="info-value">हिंदी + मराठी</span></div>
          <div className="info-row info-row-col"><span className="info-label">Topics</span><span className="info-value topics-val">SMC (6 Modules) | ICT &amp; CRT (6 Modules) | Fibonacci Alchemist | Order Flow | Bookmap | Fundamentals</span></div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="wa-btn wa-btn-big wa-btn-final">
        <WhatsAppIcon size={26} />
        <span>Join – WhatsApp</span>
      </a>

      {/* ── FLOATING WHATSAPP ── */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Join WhatsApp">
        <WhatsAppIcon size={28} />
      </a>

    </div>
  );
};

export default HomePage;

