import { Link } from 'react-router-dom';
import type { PlayerRecord } from '../types';
import { getCharacterPhotoSrc } from '../utils/images';
import './PlayerCard.css';

type Props = {
  player: PlayerRecord;
};

export function PlayerCard({ player }: Props) {
  const { slug, characterName, playerName, characterBio, photoFilename } = player;

  // Extract first paragraph as teaser
  const teaser = characterBio.split('\n\n')[0].slice(0, 120) + '…';

  return (
    <article className="player-card">
      <Link
        to={`/player/${slug}`}
        className="player-card-link"
        aria-label={`צפה בדף הדמות של ${characterName}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <figure className="player-card-image-wrapper">
          <img
            src={photoFilename ? getCharacterPhotoSrc(photoFilename) : '/characters/placeholder-generic.jpg'}
            alt={`תמונת דמות: ${characterName}`}
            className="player-card-image"
            loading="lazy"
            decoding="async"
            width="400"
            height="520"
          />
        </figure>

        <div className="player-card-content">
          <h3 className="player-card-name">{characterName}</h3>
          <p className="player-card-player-name">{playerName}</p>
          <p className="player-card-teaser">{teaser}</p>
          <span className="player-card-cta">קרא עוד →</span>
        </div>
      </Link>
    </article>
  );
}
