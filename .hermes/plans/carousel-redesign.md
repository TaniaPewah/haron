# Carousel Redesign Plan

## Goal
Move the photo carousel to be the **second section** after the hero, and redesign it to look like a Swiper component (similar to tzorfim-raanana.org.il style).

## Key Design Decisions

1. **Position**: Gallery section (`#gallery`) moves from position 5 to position 2 — right after the hero and before `#about`
2. **Library**: Install real `swiper` package for professional touch/swipe, loop, centered-slide behavior
3. **Visual style**: Dark theme matching the eldritch aesthetic — accent borders, subtle glow, dark overlay
4. **Swiper config**:
   - `slidesPerView: "auto"` with `centeredSlides: true`
   - Partial slide peek on both edges (`peek` via padding)
   - `loop: true` for infinite scroll
   - `autoplay` with reverse-bounce (ping-pong) animation
   - `pagination` (clickable dots)
   - `navigation` (prev/next arrows)
   - `grabCursor` for drag affordance
5. **Accessibility**: `aria-roledescription="carousel"`, reduced-motion support, keyboard navigation

## Files to Modify
- `src/App.tsx` — reorder sections (gallery after hero)
- `src/components/Carousel.tsx` — rewrite using Swiper
- `src/components/Carousel.css` — rewrite with Swiper dark theme
- `package.json` — add `swiper` dependency

## Implementation Order
1. Install `swiper`
2. Rewrite Carousel.tsx with Swiper React components
3. Rewrite Carousel.css for dark Swiper theme
4. Reorder App.tsx sections
5. Build and verify
6. Commit + push

## Rejected Alternatives
- Custom swipe implementation: too much code, Swiper does it better
- Keep current single-slide carousel: does not match tzorfim reference
