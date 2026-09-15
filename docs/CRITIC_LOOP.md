# Critic loop — Design Catalog deepen + Quiet Folio letterpress

Bar sites:
- **Primary:** [Lenny / Anshu](https://www.lennysnewsletter.com/p/how-to-turn-your-ai-into-a-world) — structure, density of worked examples, prompt presentation
- **Secondary:** Stripe docs feel / Economist editorial restraint — typography, TOC, reading measure

Local captures: `docs/critic-shots/r{1,2}-*.png` (home, technique detail, prompts). Live at time of pass still showed the prior thin catalog; scores below are against **local** after deepen.

Aesthetic target: Quiet Folio **letterpress monograph** (seed `bacf3a1c…` → hash `dfb62175…f8c3`) — oversized folio numerals, tracked eyebrows, double rules, pull-quote principles, index-card prompts, paper grain + one ink mark. No purple / ochre / gradients.

---

## Round 1 — after content enrich + first letterpress pass

**Observed (local):** Home with Contents + full All-techniques dump (redundant); grain + faint mark; folio nums on cards; technique detail with pull-quote, worked examples, checklist, anti-patterns, index-card prompts; prompts library searchable.

**Fresh critic (no sunk cost):**
- Aesthetic name: Quiet Folio letterpress (early)
- Studio bar gaps: still reads partly like a **default docs template**—soft digital card shadows, crowded wrapping nav, home scroll of duplicate listings, ink mark too shy, prompt-library numerals undersized vs home
- AI tells: none of the vibe-purple/gradient class; residual “empty Tailwind calm”
- **Score: 6.5 / 10** vs Lenny density + editorial restraint

**Implemented:**
1. Cut home “All techniques” dump; keep Contents + “How to use this desk” card
2. Harder index-card shadow (offset weight, not blur glow); ink-leaning card border
3. Stronger ink mark opacity; darker stats rules; larger folio stats
4. Nav denser (“Guide”); eyebrow tracking 0.28em; StageBadge tracking match
5. Prompts folio numerals enlarged; technique watermark numeral stronger

---

## Round 2 — after craft fixes

**Observed:** Home is a true TOC monograph—stats, use card, staged Contents with oversized numerals, visible ink blotch. Technique pages remain dense (procedure → prompts+why → worked examples → checklist → anti-patterns). Prompts filterable with larger folio leads.

**Fresh critic:**
- Aesthetic: Letterpress Quiet Folio — cool plain, not empty plain
- Remaining gaps vs Lenny: no embedded before/after **screenshots** (essay’s visual density); techniques 7–8 deeper verbatim still paywalled; image/material identity is one mark (correct restraint) but never as rich as Lenny’s demos
- AI tells: cleared for chrome; copy is hand-set
- **Score: 8.0 / 10** vs bar (craft + depth). Diminishing returns on further chrome; next gains are media embeds / paywalled Deliver detail—not more UI chrome.

**Stop rule:** critic ≥ 8/10 → stop. Document remaining gaps below.

---

## Remaining gaps vs Lenny

1. Visual worked examples (screenshots / motion stills) — Lenny’s essay is image-led; we stay text+prompt for public paraphrase honesty
2. Techniques 7–8 paywalled beyond the technique names in free preview — kill-list / hand-rewrite are editorial condensations, not verbatim
3. No interactive demos on the desk itself (calorie tracker / crystal / suitcase live in the essay, not here)

---

## Scores summary

| Round | Score | Notes |
|------:|------:|-------|
| 1 | 6.5 | Letterpress started; still docs-template sparse |
| 2 | 8.0 | Cool plain + deep catalog; stop |
