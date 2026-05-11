import { useState } from 'react';
import { LORE_ENTRIES } from '../content/lore';
import './LoreSection.css';

export default function LoreSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="lore" className="lore-section">
      <div className="container">
        <header className="lore-header">
          <h2>לור ועולם המשחק</h2>
          <p className="muted">
            העולם של Everguard נרקם מסודות, פולחנים וכוחות שמקורם בחשכה. הנה חלק מהידע שנחשף למהלכי המימדים.
          </p>
        </header>

        <ul className="lore-list" role="list">
          {LORE_ENTRIES.map((entry) => {
            const isOpen = openId === entry.id;
            return (
              <li key={entry.id} className="lore-item">
                <button
                  className="lore-trigger"
                  onClick={() => toggle(entry.id)}
                  aria-expanded={isOpen}
                  aria-controls={`lore-body-${entry.id}`}
                >
                  <span className="lore-title">{entry.title}</span>
                  <span className="lore-chevron" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  id={`lore-body-${entry.id}`}
                  className={`lore-body ${isOpen ? 'open' : ''}`}
                  role="region"
                >
                  <div className="lore-text">
                    {entry.body.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
