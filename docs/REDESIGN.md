# Redesign notes — App Desk × Quiet Folio letterpress

## 2026-09-18 · Problem-first laboratory

Audience: agents and design practitioners. Primary action: choose the smallest compatible technique set for a concrete problem, inspect guidance, apply, then verify. Keep paper/ink, serif headlines, grain, source attribution and all routes.

The catalog applies its own hierarchy-with-weight, cut-elements, browser-native-first and animation-restraint guidance: six problem doors replace the full home roll; a search form and three native selects replace author-chip clutter; optional comparison stops at two; agent contracts expose fit before detail. One labeled, illustrative before/after specimen demonstrates comprehension rather than asserting measured improvement. Existing assets suffice; generated media is not needed.

Native GET filters preserve query links and keyboard behavior. Local comparison resets on result changes; important selection counts are announced without moving focus. Copy errors expose selectable text. Real route loading/error boundaries allow leaving or retrying; no artificial delay. The site-wide decorative animated ink layer is removed; the specimen's 120ms selection feedback respects reduced motion. Mobile reflows in source order with 44px controls, wrapped recipes and visible focus.

Implementation status: written, not tested or reviewed in this pass per the task hold. No claims of visual acceptance, passed checks or deployment. Historical notes below describe earlier work.

Proves techniques **1** (seed strings), **2** (ambitious prompts), **6** (cut), **8** (hand-rewrite copy), plus critic loops.

## 1 · Seeds → direction

### Pass A (prior)
- Seed hash prefix: `709755166307596c` → Quiet Folio (typesetter’s study desk).

### Pass B (deepen + polish)
- Seed (truncated): `bacf3a1c…efaa` → sha256 `dfb62175c8df5142…f8c3`
- Subpatterns: cool trailing `f8c3`, dark `dfb6` ink weight, sparse zeros → **Letterpress Monograph**
- Direction: oversized folio numerals, dramatic eyebrow tracking (0.22em), double rules, pull-quote principles, prompt **index cards** (weight shadow, not glow), one real **ink blotch** mark + tiled **paper grain**. Still paper `#FAF9F7` / ink `#221C24` / studioInk `#6F6470` / hairline `#E8E3E8`. No purple, ochre, or gradient chrome.

## 6 · Cuts
- Marketing stage strips, dual CTA chrome, badge-above-H1, ochre accents (prior pass).
- Empty sparse “docs template” rhythm replaced with denser folio lists, stats strip, and worked-example cards.

## 8 · Copy
| | |
|---|---|
| **Before** | How to turn AI into a world-class designer |
| **After** | Techniques for getting past average AI design |

## Assets
- `/public/paper-grain.png` — subtle tile
- `/public/ink-mark.png` (+ `-sm`) — identity blotch, low opacity on home/header

## Tokens
`paper #FAF9F7` · `card #FFFFFF` · `hairline #E8E3E8` · `ghost #EFEAEE` · `ink #221C24` · `studioInk #6F6470` · `faint #9A8F9B` · `rule #D9D2D9`
