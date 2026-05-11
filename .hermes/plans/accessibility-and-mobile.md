# Plan: Mobile-First Layout & Accessibility (a11y)

## Goal
Ensure the entire Haron Hatzot website is fully responsive, touch-friendly, and WCAG-compliant.

## Tasks
1. **HTML & Meta**
   - Set `lang="he"` on `<html>`.
2. **Global CSS (`index.css`, `App.css`)**
   - Add `.visually-hidden` utility.
   - Add `skip-link` styles.
   - Increase section vertical padding (`4rem`+).
   - Increase horizontal padding in `.container` for mobile.
   - Mobile navigation (hamburger / drawer).
3. **Component CSS**
   - **Carousel**: fluid height (`min(60vh, Xpx)`), larger touch targets.
   - **Lore**: ensure expand button is ≥ 44 px tall.
   - **Cards / Gallery**: fluid gap sizing.
   - **PlayerPage**: larger back/share buttons.
4. **Component A11y**
   - `SkipLink` component.
   - `MobileNav` component (hamburger + slide-out drawer).
   - Carousel: `aria-roledescription`, `aria-label`, live region.
   - LoreSection: `aria-expanded`, `aria-controls`.
   - All images: meaningful `alt` text (update `PlayerCard`).
   - `PlayerGallery`: `role="list"` semantics.
5. **Build & Validate**
   - `npm run build` (zero errors).
   - Screenshot / manual spot-check.
6. **README Update**
   - Document a11y & responsive design choices.

## Out of Scope
- Full WCAG 2.1 Auditing (contrast calculations, screen-reader testing).
- Dark-mode toggle.
