import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';

const navLinks = ['About', 'How to Apply', 'Judges', 'Awards', 'News and Media', 'Programmes'];

export default function Navbar() {
  const { lang, setLang } = useLang();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand" style={{ textDecoration: 'none' }}>
        <div className="brand-logo">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="19" stroke="#1a3a5c" strokeWidth="2"/>
            <path d="M20 8 C16 8, 12 12, 12 18 C12 26, 18 32, 20 34 C22 32, 28 26, 28 18 C28 12, 24 8, 20 8Z" fill="#1a3a5c" opacity="0.7"/>
            <circle cx="20" cy="15" r="4" fill="#1a3a5c"/>
          </svg>
        </div>
        <div className="brand-text">
          VARAHI
        </div>
      </Link>

      <ul className="navbar-links">
        {navLinks.map(link => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <span className="low-carbon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Low carbon
        </span>
       
      </div>
    </nav>
  );
}
