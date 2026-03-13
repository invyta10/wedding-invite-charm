

# Wedding Invitation Website for Alayza & John

## Overview
Build a fully interactive wedding invitation website with an envelope-opening animation on the landing page that reveals a multi-section wedding invitation. The design will use a luxury pastel/cream aesthetic with floral accents and smooth CSS animations.

## Technical Approach
- **No Framer Motion** — the project doesn't have it installed. All animations will use CSS keyframes + Tailwind, which are sufficient for envelope open, card slide-out, and section fade-ins.
- All content in a single-page layout with scroll-based reveals after the envelope opens.

## Files to Create/Modify

### 1. `src/index.css` — Extended Design System
- Add wedding color palette (cream, blush pink, gold, sage green)
- Add custom keyframes: envelope-flap-open, card-slide-up, fade-in-up, float (for floral elements)
- Import elegant serif font (Playfair Display) via Google Fonts in `index.html`

### 2. `index.html` — Add Google Fonts
- Add Playfair Display + Great Vibes (script font for names)

### 3. `src/pages/Index.tsx` — Main Page
- State: `isOpened` (boolean) to toggle between envelope view and invitation view
- **Envelope View**: Full-screen cream background, centered envelope SVG/CSS with wax seal, floral corner decorations, "Click to Open" text, click handler triggers animation
- **Invitation View**: Scrollable multi-section layout revealed after envelope opens

### 4. `src/components/wedding/EnvelopeLanding.tsx`
- Envelope built with CSS (body, flap, wax seal)
- On click: flap rotates open via CSS animation, invitation card slides up/out
- After animation completes (~1.5s), callback to parent to switch to full invitation view
- Floral SVG decorations in corners
- "Click to Open" pulsing text below

### 5. `src/components/wedding/HeroSection.tsx`
- "Alayza & John" in Great Vibes script font, large
- Wedding date with decorative dividers
- Floral ornament graphics
- Fade-in animation on mount

### 6. `src/components/wedding/WeddingDetails.tsx`
- Ceremony date, time, venue name, address
- "View on Map" button (links to Google Maps placeholder)
- Elegant card layout with gold accents

### 7. `src/components/wedding/EventTimeline.tsx`
- Vertical timeline with events: Engagement, Mehendi, Sangeet, Wedding, Reception
- Each with date, time, icon
- Alternating left/right layout on desktop, linear on mobile

### 8. `src/components/wedding/GallerySection.tsx`
- Grid of placeholder couple photos (using gradient placeholders with romantic colors)
- Masonry-style or uniform grid with hover zoom effect

### 9. `src/components/wedding/RSVPSection.tsx`
- Form with: Name input, Number of guests (select), Attend/Not Attend toggle buttons
- Styled with wedding theme
- Toast notification on submit

### 10. `src/components/wedding/Footer.tsx`
- "Thank You" message in script font
- Wedding hashtag: #AlayzaAndJohn
- Floral divider

## Design Tokens
- **Colors**: Cream (#FFF8F0), Blush (#F4C2C2), Gold (#C9A96E), Sage (#A8B5A2), Deep Rose (#B76E79)
- **Fonts**: Playfair Display (headings), Great Vibes (names/script), Inter (body)
- **Animations**: All CSS-based, smooth ease-in-out curves, staggered reveals

## Responsive Strategy
- Envelope scales down on mobile
- Timeline goes single-column on mobile
- Gallery adjusts to 2-col on mobile
- All sections have proper padding/spacing at all breakpoints

