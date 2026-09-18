# For agents — Design Catalog

Machine-readable surfaces live under `/data/` and `/llms.txt`. Prefer JSON over HTML scraping.

**Base URL:** https://design-catalog-three.vercel.app  
**Repo:** https://github.com/Btheriot83/design-catalog

## (a) Fetch the index

```text
GET https://design-catalog-three.vercel.app/data/index.json
```

Returns: designers[], technique summaries, stages, `routes`, `anshuMapping`, `canonicalApps`, `lastUpdated`, `decisionPaths`, `contractVersion` and `contentHash`. `lastUpdated` is the explicit editorial release date; generation does not change it. `contentHash` identifies the exported input content.

## Compact protocol (default)

1. Name a concrete user problem. Match `index.decisionPaths` (also `/data/decision-paths.json`) and start with one technique. The six curated paths cover hierarchy, vague briefs, feedback, motion, responsive layout and restraint; they do not claim to classify the entire catalog.
2. Read the technique's `agentContract`: use/avoid, inputs, output, framework-neutral recipe, acceptance and provenance. Contracts are Catalog editorial synthesis of cited public material, not quotations or author-endorsed specifications. Entries outside the six paths derive their recipe/checks from the existing procedure/checklist.
3. Add at most one companion for a distinct remaining problem. Candidate pairings are suggestions, not verified compatibility. Choose an explicit winner when two methods alter the same role; never stack attention effects.
4. Collect before/after evidence against `acceptance` and each applicable `stateRequirements` entry: responsive, accessibility, keyboard, reducedMotion, loading, empty, error, interruption and stateChange. For non-interface work, record N/A with a reason. Never turn missing evidence into a pass.
5. Report the result and remaining failures; stop at `compatibility.stop`. Existing prompts, source attribution, slugs and APIs remain available.

The human finder at `/techniques` supports shareable `q`, `problem`, `stage` and `designer` query parameters. Search matches all entered words against title, slug, principle and use guidance. Filters intersect and apply on Find. Comparing at most two entries is local to the current result set; navigation resets the comparison. Reset removes all filters.

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

## (d) Optional full-project Discover → Define → Deliver

Use this historical workflow only when the project needs all three stages. A bounded repair does not require a full reseed, generated media or a critic loop.

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

## Maintaining contracts

Edit `content/decision-paths.json` and `content/catalog-release.json`; the shared `src/lib/contracts.mjs` produces the same contracts for server pages and static JSON. Advance the release date intentionally when content changes; change the semantic contract version when its meaning changes. Existing technique fields remain unchanged, with additive `agentContract`.

`npm run generate:data` refreshes public exports. `npm run validate:data` generates twice in isolated temporary directories, compares bytes, checks contracts, source parity, slug references, prompt explanations and machine briefing links without network requests or tracked-file writes. This validates the data contract, not design quality or browser behavior. The technique schema allows legacy source documents without a contract; exports must contain one.

## Disclaimer

Independent project. Public sources only. No affiliation or endorsement.
