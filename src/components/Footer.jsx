export default function Footer() {
  const cols = [
    {
      heading: 'About',
      links: ['About'],
    },
    {
      heading: 'How to Apply',
      links: ['How to Apply'],
    },
    {
      heading: 'Judges',
      links: ['Jury', 'Selection Committee'],
    },
    {
      heading: 'Awards',
      links: ['Winners', 'Finalists', 'Ceremony'],
    },
    {
      heading: 'News and Media',
      links: ['News', 'Newsletter', 'Reports', 'Media Centre'],
    },
    {
      heading: 'Programme',
      links: ['Beyond2020', 'Engagements'],
    },
    {
      heading: 'Other',
      links: ['Contact', 'FAQ', 'T&Cs', 'Privacy Policy'],
    },
  ];

  const socials = ['f', 'in', '𝕏', '📷', '▶', '♪'];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand + socials */}
        <div className="footer-brand">
          <div className="brand-url">zayedsustainabilityprize.com</div>
          <div className="footer-socials">
            {socials.map((s, i) => (
              <span key={i} className="social-icon">{s}</span>
            ))}
          </div>
        </div>

        {/* Links grid */}
        <div className="footer-links-grid">
          {cols.map(col => (
            <div className="footer-col" key={col.heading}>
              <h5>{col.heading}</h5>
              <ul>
                {col.links.map(link => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 VARAHI. All rights reserved.
      </div>
    </footer>
  );
}