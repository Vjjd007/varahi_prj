import { useState } from 'react';
import { useLang } from '../context/LangContext';
import YearFilter from '../components/YearFilter';

export default function ArticlePage() {
  const { t, lang, setLang } = useLang();
  const [selectedYear, setSelectedYear] = useState('2026');

  return (
    <div className="page-wrapper" lang={lang}>
      {/* Back button + Translate buttons in one row */}
      <div className="top-bar">
        <button className="back-btn">{t.backBtn}</button>
        <div className="translate-group">
          <span className="translate-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 8l6 6M4 14l6-6 2-2M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/>
            </svg>
            Translate:
          </span>
          <button
            className={`translate-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => setLang('en')}
          >
            English
          </button>
          <button
            className={`translate-btn ${lang === 'ta' ? 'active' : ''}`}
            onClick={() => setLang('ta')}
          >
            தமிழ்
          </button>
        </div>
      </div>

      {/* Year Filter */}
      <YearFilter selected={selectedYear} onChange={setSelectedYear} />

      {/* Two-column grid */}
      <div className="content-grid">

        {/* ── LEFT: Article content ── */}
        <article className="article-section">

          {/* Date + Share */}
          <div className="article-date-share">
            <span className="article-date">{t.articleDate}</span>
            <div className="share-row">
              <span>{t.shareArticle}</span>
              <span className="share-icon" title="Facebook">f</span>
              <span className="share-icon" title="LinkedIn">in</span>
              <span className="share-icon" title="X (Twitter)">𝕏</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="article-title">{t.articleTitle}</h1>

          {/* Hero image placeholder (matches the award ceremony photo) */}
          <div className="hero-placeholder">
            <div className="star-dots" />
            <div className="hero-logo-text">
              VARAHI
            </div>
            <div className="hero-sub">جائزة زايد للاستدامة</div>
          </div>

          {/* Bullet highlights */}
          <div className="highlights-box">
            <ul>
              <li>{t.bullet1}</li>
              <li>{t.bullet2}</li>
              <li>{t.bullet3}</li>
            </ul>
          </div>

          {/* Body paragraphs */}
          <div className="article-body">
            <p>
              <strong>Abu Dhabi, United Arab Emirates, 13 January 2026:</strong>{' '}
              {t.para1}
            </p>
            <p>{t.para2}</p>
            <p>{t.para3}</p>
            <p>{t.para4}</p>
            <p>
              {t.para5.split('Global High Schools').length > 1 ? (
                <>
                  {t.para5.split('Global High Schools')[0]}
                  <strong>Global High Schools</strong>
                  {t.para5.split('Global High Schools')[1]}
                </>
              ) : t.para5}
            </p>
            <p>{t.para6}</p>
          </div>

        </article>

        {/* ── RIGHT: empty sidebar ── */}
        <aside className="right-sidebar" aria-hidden="true" />

      </div>
    </div>
  );
}
