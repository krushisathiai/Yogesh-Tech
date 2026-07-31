import React from 'react';
import './TelegramPage.css';

const TelegramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const TELEGRAM_LINK = 'https://t.me/YogeshTechPune';

const TelegramPage = () => {
  return (
    <div className="tg-page">

      {/* ── HERO ── */}
      <section className="tg-hero">
        <div className="tg-badge">🏆 INDIA'S FASTEST GROWING GOLD TRADING COMMUNITY</div>
        <h1 className="tg-title">
          🥇 YOGESH TECH XAUUSD PUNE
        </h1>
        <p className="tg-tagline">📈 FREE DAILY MARKET ANALYSIS</p>
        <div className="tg-pairs">
          <span>💰 XAUUSD</span>
          <span className="dot">•</span>
          <span>NAS100</span>
          <span className="dot">•</span>
          <span>US30</span>
          <span className="dot">•</span>
          <span>FOREX</span>
        </div>
      </section>

      {/* ── JOIN CTA 1 ── */}
      <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="tg-btn tg-btn-big">
        <TelegramIcon size={26} />
        <span>Yogesh Tech XAU-USD Free Access</span>
      </a>

      {/* ── WHAT YOU GET ── */}
      <section className="tg-card">
        <h2 className="tg-sec-heading"><span>🚀</span> WHAT YOU GET INSIDE FOR FREE</h2>
        <ul className="tg-feature-list">
          <li><span className="fl-icon">🥇</span> Daily XAUUSD High-Probability Trade Setups</li>
          <li><span className="fl-icon">⚡</span> Gold Trading Opportunities Throughout The Day</li>
          <li><span className="fl-icon">📊</span> Daily NAS100 &amp; US30 Trade Levels</li>
          <li><span className="fl-icon">🌍</span> Forex Pair Trade Setups</li>
          <li><span className="fl-icon">🎯</span> Complete Market Analysis Before Every Session</li>
          <li><span className="fl-icon">📍</span> Live Entry Zones • SL • Target Updates</li>
          <li><span className="fl-icon">🧠</span> ICT • SMC • Algorithmic Concepts</li>
          <li><span className="fl-icon">💬</span> Trade Management &amp; Market Updates</li>
        </ul>
      </section>

      {/* ── EVERY DAY INSIDE ── */}
      <section className="tg-card tg-card-glow">
        <h2 className="tg-sec-heading"><span>📢</span> EVERY DAY INSIDE TELEGRAM</h2>
        <div className="tg-daily-grid">
          <div className="tg-daily-item"><span>🚨</span><p>Morning Bias</p></div>
          <div className="tg-daily-item"><span>📈</span><p>Gold Trade Setups</p></div>
          <div className="tg-daily-item"><span>⚡</span><p>Intraday Updates</p></div>
          <div className="tg-daily-item"><span>🎯</span><p>Target Updates</p></div>
          <div className="tg-daily-item"><span>📊</span><p>Market Analysis</p></div>
          <div className="tg-daily-item"><span>🔥</span><p>Live Trade Management</p></div>
        </div>
      </section>

      {/* ── JOIN CTA 2 ── */}
      <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="tg-btn tg-btn-big tg-btn-final">
        <TelegramIcon size={26} />
        <span>Join Telegram</span>
      </a>

      {/* ── FLOATING TELEGRAM BUTTON ── */}
      <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="tg-float" aria-label="Join Telegram">
        <TelegramIcon size={28} />
      </a>

    </div>
  );
};

export default TelegramPage;
