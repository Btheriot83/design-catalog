# For agents — Design Catalog

Machine-readable surfaces live under `/data/` and `/llms.txt`. Prefer JSON over HTML scraping.

**Base URL:** https://design-catalog-three.vercel.app  
**Repo:** https://github.com/Btheriot83/design-catalog

## (a) Fetch the index

```text
GET https://design-catalog-three.vercel.app/data/index.json
```

Returns: designers[], technique summaries, stages, `routes`, `anshuMapping`, `canonicalApps`, `lastUpdated`.

Also: `/llms.txt` (short) · `/llms-full.txt` (full briefing).

Free craft desk: `/resources` · `/data/resources.json` (transitions, shaders, easing, examples, textures—free first, no endorsement).

Schemas: `/schema/technique.schema.json` · `/schema/designer.schema.json`.

## (b) Pick a technique by stage / job

| Job | Stage | Start here |
|-----|-------|------------|
| Escape SaaS-landing prior | Discover | `seed-strings`, `ambitious-prompts` |
| Mushy brief / clear intent | Discover | `thinking-before-prompt`, `tc-ebc-task`, `tc-ebc-context` |
| Volume / remix | Discover | `ten-options-then-remix`, `wireframe-first` |
| Lock look / brand | Define | `specify-the-look`, `design-system-from-assets` |
| Taste loop | Define | `critic-subagents` (screenshots only; stop rule outside critic) |
| Enrich past CSS blobs | Define | `image-generation`, `video-motion`, `make-it-alive` |
| Structure the ask | Define | `tc-ebc-elements`, `tc-ebc-behavior` |
| Subtract / polish | Deliver | `cut-elements`, `remove-ai-tells`, `hand-rewrite-copy` |
| Last mile | Deliver | `last-mile-manual`, `point-and-talk`, `tc-ebc-constraints` |

Full array: `/data/techniques.json`  
One file: `/data/techniques/{slug}.json`

## (c) Copy prompts

```text
GET https://design-catalog-three.vercel.app/data/prompts.json
```

Each row: `techniqueSlug`, `designer`, `stage`, `prompt`, `why`.

Or take `examplePrompts` + `promptWhy` from a technique JSON.

## (d) Run Discover → Define → Deliver

Write artifacts in the target repo (Build Games Phase A pattern):

### `docs/DISCOVER.md`
- Seed from external entropy (`openssl rand -hex 32`); derive direction; never show seed in UI
- Ambitious briefs + human feel notes; pick one; list discards

### `docs/DEFINE.md`
- Critic rounds (fresh context, screenshots only) + screenshot paths
- Real image assets in UI (not CSS-only blobs)
- Video/motion craft note (or documented fallback)
- Optional Mobbin comps

### `docs/DELIVER.md`
- Explicit cut list
- Anti-slop / kill-list cleared (`remove-ai-tells`; related: design-slop-cop)
- Hand-rewritten key strings (before → after)

Optional API aliases (same payloads; prefer static `/data/` for CDN): `/api/index`, `/api/techniques`, `/api/designers`, `/api/prompts`, `/api/sources`, `/api/resources`.

## Anshu 1–8 ↔ Build Games

| # | Slug | Stage | Artifact |
|---|------|-------|----------|
| 1 | seed-strings | Discover | DISCOVER.md |
| 2 | ambitious-prompts | Discover | DISCOVER.md |
| 3 | critic-subagents | Define | DEFINE.md |
| 4 | image-generation | Define | DEFINE.md |
| 5 | video-motion | Define | DEFINE.md |
| 6 | cut-elements | Deliver | DELIVER.md |
| 7 | remove-ai-tells | Deliver | DELIVER.md |
| 8 | hand-rewrite-copy | Deliver | DELIVER.md |

Human field guide: https://design-catalog-three.vercel.app/compare  
Anshu designer: https://design-catalog-three.vercel.app/designers/anshu-chimala

## Canonical: Tileboard / chore-app

| | |
|--|--|
| **Name** | Tileboard (Build Games stand-in for tody / household chores) |
| **Live** | https://buildgames-tody.vercel.app |
| **Original** | https://todyapp.com/ |
| **Path** | Full Anshu 1–8 reseed → then ≤25 beat-the-original loops with spottable ~3s deltas |
| **Catalog** | [/compare](https://design-catalog-three.vercel.app/compare) · [/prompts](https://design-catalog-three.vercel.app/prompts) · [/techniques](https://design-catalog-three.vercel.app/techniques) |

Also in `index.json` → `canonicalApps.tileboard`.

## Quiet Folio / motion

Keep paper/ink desk. Free motion recipes: [transitions.dev](https://transitions.dev/) (Jakub Antalik) — texts-reveal, number-pop-in, tabs-sliding, card-tilt, success-check; honor `prefers-reduced-motion`. No Pro shimmer without explicit approval. Broader free craft links: [/resources](https://design-catalog-three.vercel.app/resources).

## Disclaimer

Independent project. Public sources only. No affiliation or endorsement.
