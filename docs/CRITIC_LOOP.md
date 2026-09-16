# Critic loop — Design Catalog deepen + Quiet Folio letterpress

Bar sites:
- **Primary:** [Lenny / Anshu](https://www.lennysnewsletter.com/p/how-to-turn-your-ai-into-a-world) — structure, density of worked examples, prompt presentation
- **Secondary:** Stripe docs feel / Economist editorial restraint — typography, TOC, reading measure

Local captures: `docs/critic-shots/r{1–5}-*.png` (home, technique detail, techniques index, designers). Live: https://design-catalog-three.vercel.app

Aesthetic target: Quiet Folio **letterpress monograph** — oversized folio numerals, tracked eyebrows, double rules, pull-quote principles, index-card prompts, paper grain + one ink mark. No purple / ochre / gradients.

Stop rule (Brandon 2026-09-16): critic ≥ **9/10** OR after 5 rounds with honest score + remaining gaps. Prior stop at 8.0 raised.

---

## Round 1 — after content enrich + first letterpress pass

**Score: 6.5 / 10** — letterpress started; still docs-template sparse.

**Implemented:** Cut home dump; harder index-card shadow; stronger ink mark; denser nav; larger folio numerals.

---

## Round 2 — after craft fixes

**Score: 8.0 / 10** — cool plain + deep catalog; stopped under old ≥8 rule.

**Remaining then:** no media embeds; paywalled Anshu 7–8 depth; no interactive demos.

---

## Round 3 — UX findability + first designer wave (local)

**Observed:** Home stats 53 / 70 / 17; technique pages gain callout + “On this page” jump links; index cards show EXAMPLES / CHECKLIST badges; 14 new designers with real techniques.

**Fresh critic (harsh, no sunk cost):**
- Aesthetic: Quiet Folio holds — paper/ink, no purple/ochre/gradients
- UX mandate: cues land, but designer chip cloud on techniques index is noisy wrapping chaos
- Sticky jump nav present but competes visually; Worked examples/Checklist still require scroll (cue helps)
- Depth: serious wave, not stubs — still homepage-thin sources on a few essayists
- **Score: 7.5 / 10**

**Implemented after R3:**
1. Designer filter → single select (not 17 chips)
2. Stronger section nav (double rule; Examples/Checklist emphasized)
3. Home designers strip + stronger source links (Comeau essays, etc.)

---

## Round 4 — after filter + nav craft

**Observed:** Techniques index calm again; jump bar reads “JUMP · EXAMPLES & CHECKLIST INCLUDED”; badges remain on cards.

**Fresh critic:**
- Filter fix is correct letterpress restraint
- Home still buries the new desk breadth (designers strip below fold / after how-to)
- Sticky stacking vs site header unresolved
- Vs Lenny: still text-led (honest for public paraphrase)
- **Score: 8.3 / 10**

**Implemented after R4:**
1. Move “Designers on this desk” above how-to so it enters the first viewport
2. Sticky site header; section nav `top-[3.75rem]`
3. Rebuild + re-shot

---

## Round 5 — home breadth + sticky stack

**Observed (local r5):** Home shows designers strip in-viewport (Anshu → Naz…); technique detail (Rauno · novelty-restraint) shows callout + jump links with Examples/Checklist weight; index keeps badges + select filter.

**Fresh critic:**
- Brandon UX mandate: **met** — examples/checklist are cued on home, index, and detail with sticky jumps
- Aesthetic: Quiet Folio intact
- Content: 14 new public craft voices × 1–3 techniques each with procedure / prompts / why / 2+ examples / checklist / anti-patterns / sources
- Remaining: scale toward 50; no Lenny-grade media embeds; Anshu 7–8 still editorial condensation
- AI tells: cleared
- **Score: 9.0 / 10** → **stop**

---

## Remaining gaps (honest)

1. **Depth of directory stubs:** 52 people on desk; **13** remain `directory` (thin public writing / skipped for honesty). This pass converted **18** directory stubs → `partial` with **25** new techniques (60 → 85). Keep converting only when sources are rich.
2. **Media:** no screenshot/motion embeds in worked examples (text+prompt honesty)
3. **Paywall boundary:** Anshu techniques 7–8 deeper verbatim still unavailable publicly
4. **Interactive demos:** live explorables live on source sites, not on this desk

---

## Scores summary

| Round | Score | Notes |
|------:|------:|-------|
| 1 | 6.5 | Letterpress started; docs-template sparse |
| 2 | 8.0 | Cool plain + deep catalog; old stop |
| 3 | 7.5 | UX cues + designer wave; filter noise |
| 4 | 8.3 | Filter/nav fixed; home breadth still buried |
| 5 | **9.0** | Designers in viewport; sticky stack; stop |
| 5b | **9.0** | Merged onto origin ~50-person directory; deepened stubs with 24 techniques; 52 designers / 60 techniques |
| 5c | **9.0** | Converted 18 directory stubs → partial (+25 techniques); 52 designers / 85 techniques; Quiet Folio unchanged; no forced re-score |



---

## Merge note (2026-09-16 PT)

Rebased onto `origin/main` after parallel ~50-person directory wave. Kept origin directory + existing UX/gauntlet techniques; imported 24 deepened techniques + Brendan Dawes / Jim Nielsen; upgraded former `directory` stubs (Linus, Amelia, Josh W Comeau, Jessica, Naz, Meng, Andy, Tobias, + extras on Rauno/Frank/Maggie) to `partial` with real procedure/examples/checklist content. Critic stop remains **9.0**.


---

## Stub deepen note (2026-09-16 PT)

Converted 18 `directory` stubs with rich public writing into `partial` entries (procedure, examplePrompts, promptWhy, 2+ workedExamples, checklist, antiPatterns, public sourceUrls; X + site credits). +25 techniques (60 → **85**). Remaining **13** stubs skipped for thin/honest sourcing (e.g. Kenya Hara books-mostly, several Figma/exec profiles without essay depth). Aesthetic unchanged. Critic stop remains **9.0** — content density up; no UX change that would force a re-score.
