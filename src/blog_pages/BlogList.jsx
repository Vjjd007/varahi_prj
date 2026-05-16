import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { posts } from '../data/posts';
import YearFilter from '../components/YearFilter';
import fallbackImg from '../assets/images/img-1.jpg';

const CATEGORY_COLORS = {
  Awards: '#1a3a5c',
  Energy: '#1b4332',
  Health: '#4a1942',
  Innovation: '#7a4500',
  Environment: '#0a3d62',
};

const FALLBACK_CARD_IMAGE = fallbackImg;

function getCardImage(post) {

  if (
    post.images &&
    Array.isArray(post.images) &&
    post.images.length > 0
  ) {

    return new URL(
      `../assets/images/${post.images[0].src}`,
      import.meta.url
    ).href;

  }

  return FALLBACK_CARD_IMAGE;

}
export default function BlogList() {
  const { lang, setLang, t } = useLang();
  const [selectedYear, setSelectedYear] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const filtered = selectedYear === 'all'
    ? posts
    : selectedYear === 'Upcoming'
      ? []
      : posts.filter(p => p.year === selectedYear);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / cardsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const pageStart = (safePage - 1) * cardsPerPage;
  const visiblePosts = filtered.slice(pageStart, pageStart + cardsPerPage);
  const hasMultiplePages = filtered.length > cardsPerPage;

  return (
    <div className="page-wrapper" lang={lang}>

      {/* Top bar: translate */}
      <div className="top-bar" style={{ marginBottom: 0 }}>
        <div className="translate-group" style={{ marginLeft: 'auto' }}>
          <span className="translate-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 8l6 6M4 14l6-6 2-2M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />
            </svg>
            Translate:
          </span>
          <button className={`translate-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>English</button>
          <button className={`translate-btn ${lang === 'ta' ? 'active' : ''}`} onClick={() => setLang('ta')}>தமிழ்</button>
        </div>
      </div>

      {/* Hero section */}
      <div className="blog-list-hero">
        <div className="blog-list-hero-badge">News &amp; Media</div>
        <h1 className="blog-list-hero-title">
          {lang === 'ta' ? 'செய்திகள் மற்றும் கட்டுரைகள்' : 'News & Articles'}
        </h1>
        <p className="blog-list-hero-sub">
          {lang === 'ta'
            ? 'ஜாயெட் நிலைத்தன்மை பரிசின் சமீபத்திய செய்திகள், வெற்றியாளர் கதைகள் மற்றும் நிலைத்தன்மை கண்டுபிடிப்புகள்'
            : 'Latest announcements, winner stories and sustainability innovations from the Zayed Prize'}
        </p>
      </div>

      {/* Year filter */}
      <YearFilter selected={selectedYear} onChange={setSelectedYear} />

      {/* Cards grid */}
      {filtered.length === 0 ? (
        <div className="blog-empty">
          <span>🗓️</span>
          <p>{lang === 'ta' ? 'வரவிருக்கும் கட்டுரைகள் விரைவில் வரும்.' : 'Upcoming articles coming soon.'}</p>
        </div>
      ) : (
        <>
          <div className="blog-grid">
            {visiblePosts.map((post, i) => (
              <Link
                to={`/blog/${post.slug}`}
                className="blog-card"
                key={post.id}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Card hero */}
                <div className="blog-card-hero blog-card-hero-image">
                  <img
                    src={getCardImage(post)}
                    alt="Zayed Sustainability Prize card visual"
                    className="blog-card-hero-image-el"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = FALLBACK_CARD_IMAGE;
                    }}
                  />
                  <div
                    className="blog-card-hero-overlay"
                    style={{ background: `linear-gradient(135deg, ${post.heroColor} 0%, ${post.heroAccent} 100%)` }}
                  />
                  <div className="blog-card-star-dots" />
                  <span
                    className="blog-card-category"
                    style={{ background: CATEGORY_COLORS[post.category] || '#1a3a5c' }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-card-date">{post.date[lang]}</span>
                    <span className="blog-card-year-badge">{post.year}</span>
                  </div>
                  <h2 className="blog-card-title">{post.title[lang]}</h2>
                  <p className="blog-card-summary">{post.summary[lang]}</p>
                  <div className="blog-card-read-more">
                    {lang === 'ta' ? 'மேலும் படிக்க' : 'Read more'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {hasMultiplePages && (
            <div className="blog-pagination">
              <button
                type="button"
                className="pagination-btn"
                onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
                disabled={safePage === 1}
              >
                {lang === 'ta' ? 'முந்தைய' : 'Prev'}
              </button>
              <span className="pagination-status">
                {safePage} / {totalPages}
              </span>
              <button
                type="button"
                className="pagination-btn"
                onClick={() => setCurrentPage(page => Math.min(page + 1, totalPages))}
                disabled={safePage === totalPages}
              >
                {lang === 'ta' ? 'அடுத்தது' : 'Next'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}