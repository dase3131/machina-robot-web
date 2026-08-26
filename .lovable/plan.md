# MACHINA Website Redesign Plan

## Goal
Redesign the full MACHINA landing page with a new visual direction, playful/immersive interactions, and a visitor journey optimized for partner and sponsor inquiries.

## Current State
- Single-page landing: Header → Hero → Company Banner → About → Agenda → Quote → Why Attend → Hall of Fame → Waitlist Form → Footer.
- Existing identity: warm ivory background (#f7f3e1), deep navy text, Geist Mono + Inter, subtle grid pattern, Spline 3D robot hero.
- Hero already has interactive robot controls (Idle / Wave / Hold Logo).
- Waitlist form is the main CTA; partner/sponsor path is not explicit.

## Proposed Approach

### Phase 1 — Define the New Visual Direction
Capture the current homepage and generate three rendered design directions that move away from the current ivory/navy editorial look while staying premium and tech-forward. Each direction will be monochrome-dominant with a single accent, as requested.

Direction options to explore:
1. **"Liquid Metal"** — near-black background, brushed silver/steel typography, sharp cuts, robot as a glowing object in a dark stage.
2. **"Blueprint Factory"** — keep the grid DNA but invert to navy canvas with cream ink, technical dimension lines, and workshop/assembly metaphors.
3. **"Signal / Noise"** — high-contrast black and white, scan-line and data-glitch motion accents, terminal-style UI, robot as a broadcast signal.

The user picks one direction; we lock the palette, type pair, and layout system, then implement.

### Phase 2 — Restructure the Page for Partner/Sponsor Journey
Reorder and rewrite sections so a potential partner understands value quickly and reaches out:

1. **Hero** — bold new statement + robot, with two CTAs: "Partner with MACHINA" (primary) and "Explore the agenda" (secondary).
2. **Social Proof Strip** — company logos, now with partner names and metrics where possible.
3. **Why MACHINA** — concise value proposition for partners: audience quality, deal flow, media reach.
4. **2027 Vision / Brochure Teaser** — pull key themes from the 2027 plan once accessible; use a flip-card or expandable panel.
5. **Agenda** — keep the interactive two-panel layout, but theme tracks aligned with sponsor verticals.
6. **Hall of Fame + MACHINA Speakers** — retain grid, add hover-triggered bio overlays and "Invite this speaker" partner hooks.
7. **Partner Tiers / Opportunities** — new section: headline sponsor, stage partner, demo floor, media partner; each as an interactive card.
8. **Contact / Inquiry Form** — replace generic waitlist with a partner-focused form (Name, Company, Email, Partnership interest, Message).
9. **Footer** — contact, socials, past-event proof.

### Phase 3 — Playful / Immersive Interactions
- **Cursor spotlight** on dark sections (existing spotlight component reused).
- **Magnetic buttons** and link hover states.
- **Scroll-driven robot reactions** — robot looks toward or gestures based on scroll position (if Spline events allow).
- **Kinetic typography** — large titles that split, mask, or slide on scroll.
- **Interactive partner cards** — tilt-on-hover 3D cards with detail reveal.
- **Agenda accordion** — keep click-to-reveal but add smoother AnimatePresence transitions and progress indicator.
- **Logo marquee** — speed reacts to scroll velocity.

### Phase 4 — Content & Assets
- Update all 2025/2026 references to 2027 where the plan confirms it.
- Replace waitlist copy with partner/sponsor language.
- Source or generate placeholder imagery for the new direction if needed.

### Phase 5 — Verify
- Build and check for console/runtime errors.
- Test the partner form submission flow.
- Confirm responsive behavior and performance of Spline + new motion.

## Deliverables
- Updated `src/index.css` with the chosen direction's design tokens.
- Refactored `src/pages/Index.tsx` with new section order.
- New/rewritten components for Hero, Partner Opportunities, and Inquiry Form.
- Enhanced interactions in existing Agenda, Hall of Fame, and Company Banner components.
- Build-verified, preview-ready site.
