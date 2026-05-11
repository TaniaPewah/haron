import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { siteContent } from './content/site';
import Carousel from './components/Carousel';
import LoreSection from './components/LoreSection';
import { PlayerGallery } from './components/PlayerGallery';
import { PlayerPage } from './pages/PlayerPage';
import { useEffect, useState } from 'react';
import { SkipLink } from './components/SkipLink';
import { MobileNav } from './components/MobileNav';

function HomePage() {
  const [localImages, setLocalImages] = useState<readonly string[]>([]);
  const { hero, nav, about, ethos, logistics, join, gallery, footer } = siteContent;

  useEffect(() => {
    const modules = import.meta.glob('/src/assets/photos/*.{png,jpg,jpeg,webp,gif}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
    const urls = Object.values(modules);
    setLocalImages(urls);
  }, []);

  return (
    <>
      <SkipLink />

      <header className="hero">
        {hero.videoSrc && (
          <video className="hero-video" autoPlay loop muted playsInline>
            <source src={hero.videoSrc} />
          </video>
        )}
        <nav className="topnav" aria-label="ניווט ראשי">
          <MobileNav />
          <ul className="navlist" role="menubar">
            {nav.map((item) => (
              <li key={item.href} role="none"><a href={item.href} role="menuitem">{item.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="hero-inner">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="title display">{hero.title}</h1>
          <p className="tagline">{hero.tagline}</p>
          <div className="cta">
            <a className="btn btn-primary" href="#join">{hero.ctaPrimary}</a>
            <a className="btn btn-secondary" href="#about">{hero.ctaSecondary}</a>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section id="gallery" className="section section-gallery section-gallery-first">
          <div className="container">
            <h2>{gallery.heading}</h2>
            <p className="muted">{gallery.description}</p>
          </div>
          {localImages.length > 0 && (
            <div className="gallery-outer">
              <Carousel images={localImages} />
            </div>
          )}
        </section>

        <section id="about" className="section section-about">
          <div className="container">
            <h2>{about.heading}</h2>
            {about.trailerSrc ? (
              <figure className="about-trailer">
                <video
                  className="about-trailer-video"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={about.trailerLabel}
                >
                  <source src={about.trailerSrc} type="video/mp4" />
                </video>
              </figure>
            ) : null}
            <p className="lead">{about.body}</p>
          </div>
        </section>

        <section id="ethos" className="section section-ethos">
          <div className="container">
            <h2>{ethos.heading}</h2>
            <ul className="list">
              {ethos.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <LoreSection />

        <PlayerGallery />

        <section id="join" className="section section-join">
          <div className="container">
            <h2>{join.heading}</h2>
            <p className="lead">{join.body}</p>
            <div className="cta">
              <a className="btn btn-primary" href="mailto:haron-hatzot@everguard.example">{join.primary}</a>
              <a className="btn btn-secondary" href="#about">{join.secondary}</a>
            </div>
          </div>
        </section>

        <section className="section section-logistics">
          <div className="container">
            <h2>{logistics.heading}</h2>
            <ul className="list">
              {logistics.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <small>{footer.smallPrint}</small>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <div className="site">
      <div className="veil-stars" aria-hidden="true" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player/:slug" element={<PlayerPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
