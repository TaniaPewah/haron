import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getPlayerBySlug } from '../content/players';
import { parseContactRaw } from '../utils/parseContact';
import { getCharacterPhotoSrc } from '../utils/images';
import './PlayerPage.css';

export function PlayerPage() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  if (!slug) return <Navigate to="/" replace />;

  const player = getPlayerBySlug(slug);
  if (!player) return <Navigate to="/" replace />;

  const contactLinks = parseContactRaw(player.contactRaw);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const photoSrc = player.photoFilename
    ? getCharacterPhotoSrc(player.photoFilename)
    : '/characters/placeholder-generic.jpg';

  return (
    <div className="player-page">
      <div className="player-page-inner">
        <div className="player-page-actions">
          <Link to="/" className="player-back-btn">
            <span aria-hidden="true">→</span> חזרה למחנה
          </Link>
          <button onClick={handleShare} className="player-share-btn">
            {copied ? 'הקישור הועתק!' : 'העתק קישור לדף'}
          </button>
        </div>

        <header className="player-page-header">
          <figure className="player-page-portrait">
            <img
              src={photoSrc}
              alt={`תמונת דמות: ${player.characterName}`}
              width="420"
              height="560"
              loading="eager"
              decoding="async"
            />
          </figure>

          <div className="player-page-titles">
            <h1 className="player-page-character-name">{player.characterName}</h1>
            <p className="player-page-player-name">{player.playerName}</p>
          </div>
        </header>

        <section className="player-page-bio" aria-labelledby="bio-heading">
          <h2 id="bio-heading">קצת על הדמות</h2>
          <div className="player-page-bio-text">
            {player.characterBio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {player.playerBio && (
          <section className="player-page-ooc" aria-labelledby="ooc-heading">
            <h2 id="ooc-heading">מילה מהשחקן</h2>
            <p>{player.playerBio}</p>
          </section>
        )}

        <section className="player-page-contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">יצירת קשר</h2>
          {contactLinks.length > 0 ? (
            <ul className="contact-list" role="list">
              {contactLinks.map((link, index) => (
                <li key={`${link.type}-${index}`}>
                  <span className="contact-icon" aria-hidden="true">{link.icon}</span>
                  <a
                    href={link.href}
                    className="contact-link"
                    aria-label={`יצירת קשר: ${link.label} (${link.type})`}
                    target={link.type === 'email' || link.type === 'url' ? '_blank' : undefined}
                    rel={link.type === 'email' || link.type === 'url' ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted">אין פרטי יצירת קשר זמינים</p>
          )}
        </section>
      </div>
    </div>
  );
}
