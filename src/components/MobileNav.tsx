import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

const NAV_ITEMS = [
  { href: '#about', label: 'על המחנה' },
  { href: '#ethos', label: 'ערכים' },
  { href: '#lore', label: 'לור' },
  { href: '#players', label: 'דמויות' },
  { href: '#gallery', label: 'גלריה' },
  { href: '#join', label: 'הצטרפות' },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on route change or Escape
  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  const handleLinkClick = useCallback(() => setOpen(false), []);

  return (
    <div className="mobile-nav">
      <button
        className="hamburger-btn"
        aria-label="פתח תפריט ניווט"
        aria-expanded={open}
        aria-controls="mobile-drawer"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <div
          className="mobile-drawer-overlay open"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        id="mobile-drawer"
        className={`mobile-drawer ${open ? 'open' : ''}`}
        aria-label="ניווט מובייל"
      >
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-title">Haron Hatzot</span>
          <button
            className="mobile-drawer-close"
            aria-label="סגור תפריט"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <ul className="mobile-drawer-list" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleLinkClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
