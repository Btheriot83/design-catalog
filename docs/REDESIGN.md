# Redesign notes — App Desk × catalog techniques

Proves techniques **1** (seed strings), **6** (cut elements), **8** (hand-rewrite copy).

## 1 · Seed → direction

- Seed (truncated): `db5937a7…cbe4` (full 64-char hex generated once via `openssl rand -hex 32`; never shown in UI)
- Seed hash prefix (sha256): `709755166307596c`
- Subpatterns used: `aaaa` (flat repetition), clustered `6`s (ledger structure), trailing `cbe4` (cool plum cast)
- **Direction chosen: Quiet Folio** — a typesetter’s study desk: numbered folio techniques, prompts as tear-sheets, plum-cast paper, zero decorative hue. Slightly “this might not work” because a design catalog with no accent chrome can feel unfinished; that restraint *is* the taste bet, and it matches App Desk tokens.

## 6 · Cuts

Removed as chrome / layout tells:

- Ochre accent (`#a66b1f`) and deep-red stage coloring (`#8b2e2e`)
- Badge-above-H1 (“Editorial catalog · v1”)
- “Paper · Ink · Craft” subtitle fluff
- Triple stage cards as a marketing strip (replaced with typeset TOC)
- Dual/triple CTA row (replaced with one ink button into the index)
- Hover→ochre everywhere; colored stage badges; gradient / vibe accents
- Feature-card triplets on designer stage summaries (now numbered ink lists)

Kept: serif display, numbered techniques, prompt blocks as first-class copyable objects, Anshu attribution without endorsement.

## 8 · Copy before → after (hero)

| | |
|---|---|
| **Before** | How to turn AI into a world-class designer |
| **After** | Techniques for getting past average AI design |

Supporting line names the job (study desk / craft notes), keeps Anshu + Nate attribution, and states “no endorsement” in plain language. About title: “An independent craft catalog” → “About this desk.”

## App Desk tokens applied

`paper #FAF9F7` · `card #FFFFFF` · `hairline #E8E3E8` · `ghost #EFEAEE` · `ink #221C24` · `studioInk #6F6470` · `faint #9A8F9B`

Chrome is monochrome plum cast. Stage identity = weight / number / small ink label. Active nav = ink underline. Buttons = ink fill or hairline outline.
