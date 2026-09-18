# Gauntlet Loop — Design Catalog craft desk

Local QA helper closed: owner Codex task `01a0a3ae-4de5-7502-aac5-661d011be3fb`; `next-server` PID `27628`; ran Fri Sep 18 13:16:59 2026 through browser QA; stopped cleanly and port 3000 was confirmed closed.

## Current handoff · 2026-09-18

Current truth: the three-round implementation is complete on branch `codex/agent-tool-self-redesign` from base `9700e8567d0acbf8d6bb6dcea1fbee6366e61050`. The final round repaired the transparent phone Explore menu and removed the slow blurred Agents-page entrance found during browser QA. No implementation-agent verification was accepted as evidence; all gates below were run by the coordinator.

Owner: Brandon. Coordinator: Codex task `01a0a3ae-4de5-7502-aac5-661d011be3fb`. Implementer: the single reused GPT-6 Astra low-reasoning agent. Checkout `/Users/brandontheriot/projects/design-catalog`; branch and base SHA verified above.

Authorized scope delivered: compact agent contracts and one coherent Quiet Folio product redesign. Shared contract synthesis, six curated decision paths, stable release metadata/hash, deterministic validator, problem-first home/finder, two-entry comparison, illustrative hierarchy specimen, contract details, native navigation/controls, and explicit route/clipboard feedback are implemented.

Coordinator checks passed after the final implementation round: `npm run validate:data`, `npm run lint`, `npx tsc --noEmit`, `npm run build` (192 static pages), and `git diff --check`. The validator generated twice in isolated temporary directories and byte-compared the exports while checking schemas, slugs, references, contracts, and agent briefings for all 85 techniques.

Observed browser QA passed at desktop and 390×844: home problem paths, search, combined filters, empty state, two-technique comparison, detailed agent contract, successful clipboard feedback, native Explore menu, and no horizontal overflow. Keyboard entry focused the skip link and moved from the expanded Explore summary into its first link. Reduced-motion emulation matched and left no spatial or blocking animation (only the 150 ms opacity hover on the decorative logo). The repaired phone menu is opaque, bounded, scrollable, and overflow-free; Agents primary content is legible immediately.

Next: coordinator commits, pushes, opens and merges the PR after required checks, then verifies the exact production revision and repeats production smoke QA. No editorial media publication or paid provider authority inferred.

**Goal:** Dense anti-slop craft desk — more techniques, more example prompts (+ why), stronger field guides. Public sources only; no endorsement; no invented paywalled quotes.

**Bar (critic inspects real files/pages):**
1. Best local technique pages: `seed-strings`, `critic-subagents`, `remove-ai-tells` + rendered structure in `src/app/techniques/[slug]/page.tsx` (procedure, prompts+why, workedExamples, checklist, antiPatterns).
2. Lenny/Anshu essay density (public parts): https://www.lennysnewsletter.com/p/how-to-turn-your-ai-into-a-world
3. `/compare` field guide + `docs/CRITIC_LOOP.md` quality notes.

**Hard rules:** Public sources · cite `sourceUrls` · Quiet Folio paper/ink · `generate:data` + `npm run build` before push · no force-push · builder never grades itself.

**Baseline (pre-loop):** ~24 techniques · ~40 example prompts · 50 designers (most directory-only) · `/compare` · `/examples`.

**Live progress:** this file. Hook Farm / viral-corpus out of scope.

---

## Loops (summary)

| # | Piece | Critic winner | Score /10 | Biggest gap |
|---|-------|---------------|-----------|-------------|
| 1 | Rauno · depth + choreography | ours≈local bar; **Lenny wins visuals** | 7.5 | No image-led demos like Lenny |
| 2 | Emil · purpose + restraint | ours≈local bar; Lenny wins visuals | 7.5 | Essay still more example-dense |
| 3 | Maggie · status + metaphors | bar (narrow) | 7.0 | Metaphor pages still text-only |
| 4 | Schoger · hierarchy/space/borders | bar → fixed toward local | 7.0 | Public tips < paid book depth (honest) |
| 5 | Victor / Chimero / Jakub | bar → fixed toward local | 7.0 | Talk/essay paraphrase vs Lenny screenshots |
| 6 | Deepen Nate thins (prompts+why) | bar (Nate pages still shorter than Anshu best) | 6.5 | Fewer before/after pairs than seed-strings |
| 7 | Deepen Greg TC-EBC + Anshu packs | bar (TC-EBC still shorter) | 6.5 | TC-EBC lacks Lenny-style narrative examples |
| 8 | New `/guides` field pages | ours≈`/compare` quality | 7.5 | Guides are checklists, not essay demos |
| 9 | Homepage / nav / techniques IA | ours≈desk; Lenny N/A | 7.5 | Directory still mostly directory-only voices |
| 10 | Smoothing + final desk critic | **bar (Lenny)** overall | 7.0 | Visual worked examples + paywalled Deliver |

**Honest desk score vs bar after loop 10: ~7.0 / 10.** Structure and prompt count beat baseline hard; Lenny still wins on image-led density and interactive demos.

---

## Loop detail

### Loop 1 — Rauno craft techniques
- **Pieces:** `designing-depth`, `stagger-choreograph-motion`; designer `rauno-freiberg` → partial; source `rauno.me/craft/depth`
- **Builder:** Two Define-stage techniques at seed-strings structural shape (procedure, 2 prompts+why, 3 worked examples, checklist, anti-patterns)
- **Fresh critic:** Structural parity with best local pages (avg ~4.0kb vs bar ~4.3kb). **Winner:** ours≈local bar; Lenny still wins visuals
- **Biggest gap:** Image-led / interactive worked examples
- **Score:** 7.5 / 10

### Loop 2 — Emil motion craft
- **Pieces:** `purposeful-motion`, `animation-restraint`; designer `emil-kowalski` → partial; sources great-animations + you-dont-need-animations
- **Builder:** Purpose/frequency/performance/interruptibility/reduced-motion encoded as procedures + kill-list prompts
- **Fresh critic:** Matches local bar structure; Quiet Folio-safe (no purple motion chrome)
- **Biggest gap:** Lenny essay packs more consecutive worked demos per scroll
- **Score:** 7.5 / 10

### Loop 3 — Maggie garden craft
- **Pieces:** `garden-status-labels`, `illustrate-the-invisible`; designer `maggie-appleton` → partial; sources garden-history + drawinginvisibles1
- **Builder:** Epistemic status vocabulary + source→target metaphor frames before UI
- **Fresh critic:** First pass under density bar → deepened tips/examples. Still text-only vs Maggie’s illustrated essays
- **Biggest gap:** Cannot ship her illustrations; metaphor teaching stays textual
- **Score:** 7.0 / 10

### Loop 4 — Refactoring UI public tips (Schoger)
- **Pieces:** `hierarchy-with-weight`, `start-with-whitespace`, `fewer-borders`; designer `steve-schoger` → partial
- **Builder:** Public Medium tips + refactoringui.com only—no paid-book quotes
- **Fresh critic:** First pass thin on whitespace/borders → deepened prompts+why+examples to ≥local floor
- **Biggest gap:** Paid book depth intentionally not reproduced
- **Score:** 7.0 / 10

### Loop 5 — Victor · Chimero · Jakub
- **Pieces:** `alive-by-default`, `screens-want-honesty`, `transition-recipes-as-skills`; designers partial
- **Builder:** Dead-fish aliveness, screens’ grain = flux (2013 essay URL fixed), free transitions.dev recipes as agent skills
- **Fresh critic:** Transition recipe page needed interruptibility/skeleton example → fixed
- **Biggest gap:** Talk/essay paraphrase without Lenny-style embedded media
- **Score:** 7.0 / 10

### Loop 6 — Deepen Nate technique thins
- **Pieces:** `wireframe-first`, `ten-options-then-remix`, `last-mile-manual`, `keep-working-alongside`, `point-and-talk`, `design-system-from-assets`, `thinking-before-prompt`, plus earlier bumps to `sketch-what-you-cant-describe`, `give-real-context`, `specify-the-look`
- **Builder:** Extra example prompts + parallel `promptWhy`, before/after where missing, checklist ≥4
- **Fresh critic:** Improved but still shorter than Anshu best pages; **bar wins** on narrative density
- **Biggest gap:** Nate entries remain partial-catalog depth by design
- **Score:** 6.5 / 10

### Loop 7 — Deepen Greg TC-EBC + Anshu prompt packs
- **Pieces:** `tc-ebc-task/context/elements/behavior/constraints` extra prompts; `remove-ai-tells`, `cut-elements`, `hand-rewrite-copy` second prompts+why
- **Builder:** Observable Behavior/Elements/Context lines; Quiet Folio token second-pass kill-list; LOCKED_COPY block
- **Fresh critic:** TC-EBC still the shortest cluster vs seed-strings—**bar wins**; Anshu packs closer
- **Biggest gap:** No Lenny-length pantry narrative on each TC-EBC page (avoid duplication bloat)
- **Score:** 6.5 / 10

### Loop 8 — Field guides
- **Pieces:** `/guides` index, `/guides/anti-slop-desk`, `/guides/motion-craft`; `/compare` craft-directory stack section
- **Builder:** Stacking order + motion four-gate checklist linking new techniques; Quiet Folio letterpress chrome only
- **Fresh critic:** Matches `/compare` editorial quality; not Lenny essay density (appropriate for field guides)
- **Biggest gap:** Still checklists, not interactive demos
- **Score:** 7.5 / 10

### Loop 9 — Homepage / techniques IA
- **Pieces:** `src/app/page.tsx` craft-author door, `NavLinks` → Guides, `techniques/page.tsx` blurb, `generate-data` index description, README links
- **Builder:** Surface craft depth without purple AI chrome; stats doors unchanged
- **Fresh critic:** IA now admits craft techniques beyond Anshu/Nate/Greg; directory still mostly directory-only
- **Biggest gap:** ~40 designers still directory stubs (out of scope to fake-complete)
- **Score:** 7.5 / 10

### Loop 10 — Smoothing + final critic
- **Pieces:** Related-slug validation, sources.json coverage, regenerate:data, production build, push wave(s)
- **Builder:** No invented techniques; fix Chimero URL; ensure promptWhy∥examplePrompts; green build
- **Fresh critic (desk-wide):** Technique count and prompt count clear baseline; best pages hold local bar; **Lenny essay still wins** on visual worked examples, motion stills, and paywalled Deliver detail
- **Biggest gap:** Visual embeds + interactive demos + paywalled techniques 7–8 verbatim depth
- **Score:** 7.0 / 10

---

## End state (fill on push)

| Metric | Baseline | After loop 10 |
|--------|----------|---------------|
| Techniques | ~24 | **36** |
| Example prompts | ~40 | **83** |
| Guides pages | `/compare` only | `/guides`, anti-slop-desk, motion-craft + compare stack |
| Partial designers | 2 (+1 complete) | + Rauno, Emil, Maggie, Schoger, Bret, Frank, Jakub |
| SHA | `4cdfef5` | **`8f046b9`** |

## What still loses to Lenny
1. Image-led worked examples / motion stills  
2. Interactive demos in-essay  
3. Paywalled Deliver (tells/hand-rewrite) verbatim depth — we keep honest condensations only  


---

## Success report (loop 10 complete)

- **SHA:** `8f046b9` (from `4cdfef5`; no force-push)
- **Techniques:** 36 (was ~24)
- **Example prompts:** 83 (was ~40)
- **New guides/pages:** `/guides`, `/guides/anti-slop-desk`, `/guides/motion-craft`; `/compare` craft stack; nav Guides
- **GAUNTLET path:** `docs/GAUNTLET.md`
- **Honest score vs bar:** **7.0 / 10** — local technique structure often matches `seed-strings` / `critic-subagents`; Lenny still wins
- **What still loses to Lenny:** image-led worked examples, interactive demos, paywalled Deliver verbatim depth
- **Out of scope honored:** no hook-farm-site / viral-corpus / AZMDR touches
