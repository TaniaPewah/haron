# חרון חצות · Haron Hatzot

Everguard LARP team website — a dark, immersive single-page experience with lore sections and player-character galleries.

## Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Custom CSS with CSS variables (dark eldritch theme)
- **Fonts:** UnifrakturMaguntia (display), Inter (body)
- **Routing:** react-router-dom (client-side routing for player detail pages)
- **Hosting:** Firebase Hosting

## Project Structure

```
src/
  assets/            # Event photos, videos (bundled by Vite)
  components/        # Reusable UI components
    Carousel.tsx
    LoreSection.tsx
    PlayerCard.tsx
    PlayerGallery.tsx
  content/           # Static content data
    site.ts          # Hero, nav, sections, footer
    lore.ts          # Lore entries (accordion content)
    players.ts       # Player / character records
  pages/             # Route-level pages
    PlayerPage.tsx   # Individual character detail page
  types/             # Shared TypeScript type definitions
    player.ts
    lore.ts
    index.ts
  utils/             # Helpers
    images.ts         # Character photo URL helpers
    parseContact.ts   # Contact info parsing (email / phone / URL)
public/
  characters/        # Player character portraits (static, filename-referenced)
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment

```bash
firebase deploy
```

## Content Editing

### Add a new player / character
1. Add a `PlayerRecord` to `src/content/players.ts`
2. Place the character portrait in `public/characters/{filename}` (JPG/PNG/SVG)
3. The card appears automatically in the gallery — clicking it opens the detail page
4. Contact info supports email, phone, and URLs (auto-detected and parsed)

### Add lore content
1. Add a `LoreEntry` to `src/content/lore.ts`
2. Choose category: `pantheon`, `history`, `culture`, `place`, `rules`
3. The accordion renders it on the home page automatically

### Edit site-wide content
Update `src/content/site.ts` — hero text, navigation, section headings, footer.

## Design Tokens (CSS Variables)

```css
--color-bg: #0b0a0d        /* abyssal background */
--color-bg-elev: #121017   /* elevated surfaces */
--color-ink: rgba(243,240,255,0.92)   /* primary text */
--color-ink-muted: rgba(243,240,255,0.7)   /* secondary text */
--color-accent: #b13cff     /* eldritch violet */
--color-accent-2: #ff2f6d   /* blood rose */
--font-display: 'UnifrakturMaguntia', serif;   /* ritual blackletter */
--font-body: Inter, ui-sans-serif, system-ui, sans-serif;
```

## Accessibility

- RTL Hebrew layout with semantic HTML
- `aria-expanded`, `aria-controls` on accordion triggers
- `role="list"` on card grids
- Focus-visible styles on all interactive elements
- Lazy loading on images

## Firebase Configuration

```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

SPA rewrites ensure deep links to `/player/{slug}` work correctly.

---

© חרון חצות · Everguard
