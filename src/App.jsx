import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import logoImg from './assets/logo.png';
import HomePage from './pages/HomePage';
import TelegramPage from './pages/TelegramPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page">
      {/* ═══ STICKY HEADER (Same on all pages) ═══ */}
      <header className="sticky-header">
        <img src={logoImg} alt="Yogesh Tech" className="header-logo" />
      </header>

      {/* ═══ PAGE CONTENT ═══ */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/telegram" element={<TelegramPage />} />
      </Routes>
      
      {/* ═══ FOOTER ═══ */}
      <Footer />
    </div>
  );
}

export default App;
