import React from 'react';
import './HomePage.css';

const WhatsAppIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const WHATSAPP_NUMBER = '917559384315';
const WHATSAPP_MSG = encodeURIComponent("Hi, I'm interested in the Forex Basic to Advanced Masterclass Batch starting 8th August 2026.");
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const HomePage = () => {
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
        <div className="batch-chip"><span className="chip-icon">📅</span><div><small>नवीन Batch सुरू</small><strong>8 ऑगस्ट 2026</strong></div></div>
        <div className="batch-chip"><span className="chip-icon">⏰</span><div><small>वेळ</small><strong>रात्री 9:00 – 11:00</strong></div></div>
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
          <li>Smart Money Concepts – SMC</li>
          <li>Inner Circle Trader – ICT Concepts</li>
          <li>CRT – Candle Range Theory</li>
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
          <div className="info-row"><span className="info-label">Batch Start Date</span><span className="info-value">8 ऑगस्ट 2026</span></div>
          <div className="info-row"><span className="info-label">Lecture Time</span><span className="info-value">रात्री 9:00 ते 11:00</span></div>
          <div className="info-row"><span className="info-label">Mode</span><span className="info-value">Live Online</span></div>
          <div className="info-row"><span className="info-label">Sessions</span><span className="info-value">80+</span></div>
          <div className="info-row"><span className="info-label">Recordings</span><span className="info-value">Telegram Batch Group मध्ये Daily</span></div>
          <div className="info-row"><span className="info-label">Language</span><span className="info-value">हिंदी + मराठी</span></div>
          <div className="info-row info-row-col"><span className="info-label">Topics</span><span className="info-value topics-val">SMC | ICT | CRT | Order Flow | Bookmap | Fundamentals | Technical Analysis</span></div>
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
