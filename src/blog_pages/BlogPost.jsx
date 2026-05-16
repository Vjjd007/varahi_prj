import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { posts } from '../data/posts';

function getImagePath(imageName) {
  return `${import.meta.env.BASE_URL}blog-img/${imageName}`;
}

// Get all images for a post
function getPostImages(post) {

  if (
    post.images &&
    Array.isArray(post.images) &&
    post.images.length > 0
  ) {

    return post.images.map((img) => ({

      ...img,

      src: img.src
        ? getImagePath(img.src)
        : getImagePath('img-1.jpg'),

    }));

  }

  return [
    {
      src: getImagePath('img-1.jpg'),
      alt: post.title.en,
      type: 'hero',
    },
  ];
}

export default function BlogPost() {

  const { slug } = useParams();

  const navigate = useNavigate();

  const { lang, setLang } = useLang();

  const post = posts.find((p) => p.slug === slug);

  const currentIdx = posts.findIndex((p) => p.slug === slug);

  const prevPost =
    currentIdx > 0
      ? posts[currentIdx - 1]
      : null;

  const nextPost =
    currentIdx < posts.length - 1
      ? posts[currentIdx + 1]
      : null;

  if (!post) {

    return (

      <div
        className="page-wrapper"
        style={{
          textAlign: 'center',
          paddingTop: 80,
        }}
      >

        <h2
          style={{
            color: 'var(--heading-color)',
          }}
        >
          Article not found
        </h2>

        <Link
          to="/"
          style={{
            color: 'var(--primary-color)',
            marginTop: 16,
            display: 'inline-block',
          }}
        >
          ← Back to all articles
        </Link>

      </div>
    );
  }

  const body = post.body?.[lang] || [];

  const bullets = post.bullets?.[lang] || [];

  const postImages = getPostImages(post);

  return (

    <div
      className="page-wrapper"
      lang={lang}
    >

      {/* Top bar */}
      <div className="top-bar">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          {lang === 'ta'
            ? '← திரும்பு'
            : '← Back'}
        </button>

        <div className="translate-group">

          <span className="translate-label">

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 8l6 6M4 14l6-6 2-2M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />
            </svg>

            Translate:

          </span>

          <button
            className={`translate-btn ${lang === 'en'
              ? 'active'
              : ''
              }`}
            onClick={() => setLang('en')}
          >
            English
          </button>

          <button
            className={`translate-btn ${lang === 'ta'
              ? 'active'
              : ''
              }`}
            onClick={() => setLang('ta')}
          >
            தமிழ்
          </button>

        </div>

      </div>

      {/* Two-column layout */}
      <div className="content-grid">

        {/* LEFT: Article */}
        <article className="article-section">

          {/* Category + date + share */}
          <div className="article-date-share">

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >

              <span
                className="post-category-badge"
                style={{
                  background: post.heroColor,
                }}
              >
                {post.category}
              </span>

              <span className="article-date">
                {post.date?.[lang]}
              </span>

            </div>

            <div className="share-row">

              <span>
                {lang === 'ta'
                  ? 'பகிர்'
                  : 'Share'}
              </span>

              <span
                className="share-icon"
                title="Facebook"
              >
                f
              </span>

              <span
                className="share-icon"
                title="LinkedIn"
              >
                in
              </span>

              <span
                className="share-icon"
                title="X"
              >
                𝕏
              </span>

            </div>

          </div>

          {/* Title */}
          <h1 className="article-title">
            {post.title?.[lang]}
          </h1>

          {/* Images Gallery */}
          {postImages.map((image, index) => (

            <div
              key={index}
              className={`hero-placeholder ${image.type === 'gallery'
                ? 'gallery-image'
                : ''
                }`}
              style={{
                background: `linear-gradient(
                  135deg,
                  ${post.heroColor} 0%,
                  ${post.heroAccent} 100%
                )`,
              }}
            >

              <img
                src={image.src}
                alt={image.alt}
                className="hero-placeholder-image"
              />

              {index === 0 && (
                <div className="star-dots" />
              )}

            </div>

          ))}

          {/* Bullet highlights */}
          <div className="highlights-box">

            <ul>

              {bullets.map((b, i) => (

                <li key={i}>
                  {b}
                </li>

              ))}

            </ul>

          </div>

          {/* Body */}
          <div className="article-body">

            {body.map((block, i) => (

              block.type === 'lead' ? (

                <p
                  key={i}
                  style={{
                    fontWeight: 500,
                    color: '#222',
                  }}
                >
                  {block.text}
                </p>

              ) : (

                <p key={i}>
                  {block.text}
                </p>

              )

            ))}

          </div>

          {/* Prev / Next navigation */}
          <div className="post-nav">

            {prevPost ? (

              <Link
                to={`/blog/${prevPost.slug}`}
                className="post-nav-btn post-nav-prev"
              >

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>

                <div>

                  <div className="post-nav-label">
                    {lang === 'ta'
                      ? 'முந்தைய'
                      : 'Previous'}
                  </div>

                  <div className="post-nav-title">
                    {prevPost.title?.[lang]}
                  </div>

                </div>

              </Link>

            ) : (
              <div />
            )}

            {nextPost ? (

              <Link
                to={`/blog/${nextPost.slug}`}
                className="post-nav-btn post-nav-next"
              >

                <div
                  style={{
                    textAlign: 'right',
                  }}
                >

                  <div className="post-nav-label">
                    {lang === 'ta'
                      ? 'அடுத்தது'
                      : 'Next'}
                  </div>

                  <div className="post-nav-title">
                    {nextPost.title?.[lang]}
                  </div>

                </div>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>

              </Link>

            ) : (
              <div />
            )}

          </div>

        </article>

        {/* RIGHT: empty sidebar */}
        <aside
          className="right-sidebar"
          aria-hidden="true"
        />

      </div>

    </div>
  );
}