import { PlayerCard } from './PlayerCard';
import { PLAYERS } from '../content/players';
import './PlayerGallery.css';

export function PlayerGallery() {
  return (
    <section id="players" className="player-section">
      <div className="container">
        <header className="player-section-header">
          <h2>דמויות המחנה</h2>
          <p className="muted">
            כל דמות בחרון חצות נושאת סיפור, סוד ומחיר. לחצו על כרטיס כדי ללמוד עוד.
          </p>
        </header>

        <ul className="player-grid" role="list">
          {PLAYERS.map((player) => (
            <li key={player.slug}>
              <PlayerCard player={player} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
