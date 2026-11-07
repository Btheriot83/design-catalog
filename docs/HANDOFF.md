# Design Catalog — final preservation handoff

**Public site:** https://design-catalog-three.vercel.app  
**Repo:** https://github.com/Btheriot83/design-catalog  
**This file’s audit date:** 2026-11-07  
**Last editorial content / research:** 2026-09-18 (`content/catalog-release.json` → `contentUpdated`, git history through `41b8aef` plus the 2026-09-18 agent-design-tool work in `57a8d8e`).  

This is a **preservation and cleanup** record, not a new research pass. September capture notes stay September capture notes. Counts below were **recounted from the repo on 2026-11-07**; they were not re-researched from live marketing sites or stores.

**Maintenance is paused.** Keep the site and all assets up. No redesign, new mockups, subscriptions, harvesting, or other routine work. Do not treat ephemeral Cursor/box paths as the maintenance route — clone this GitHub repo.

## Safe for bot deletion?

**After this handoff is merged and a production Vercel deploy of `https://design-catalog-three.vercel.app` is confirmed**, the Design Catalog bot can be deleted. The site stays. This repo is the durable record.

A green `npm run build` on a branch is **not** a production deploy.

## Architecture

Next.js App Router (TypeScript, Tailwind CSS v4) study desk:

| Layer | Where |
|-------|--------|
| Editorial source | `content/` (designers, techniques, sources, resources, Shipaton catalog, decision paths, release metadata) |
| Build-time JSON export | `scripts/generate-data.mjs` → `public/data/` (also `prebuild`) |
| Human routes | `src/app/` |
| Agent contracts | `src/lib/contracts.mjs` (shared by pages and the exporter) |
| Deterministic checks | `scripts/validate-data.mjs` (no network; no writes to tracked files) |
| Schemas | `public/schema/technique.schema.json`, `public/schema/designer.schema.json` |

Quiet Folio tokens: paper `#FAF9F7` · ink `#221C24` · studioInk `#6F6470` · hairline `#E8E3E8`.

Do **not** scrape HTML. Prefer static JSON under `/data/` (CDN). `/api/*` aliases exist but are second choice.

`index.lastUpdated` is the **editorial content date** (2026-09-18). It is not the generation clock and not this audit date. `index.contractVersion` (1.0.0) is unchanged.

`index.contentHash` is a SHA-256 of exported inputs. It changes in this preservation release because Shipaton capture notes / Nearfar archive flags and release `maintenance` / `preservationAudit` fields are hashed inputs — not because techniques were re-researched.

- Production before this PR (`41b8aef`): `628ed847b55d5fdc1be5d2a115dd3327c5e9956635d65bea698f4bccf18fb33e`
- After `npm run generate:data` on this handoff: `1fadb1795f4aed9380f2b76cc9774e9a24520582ddca420ede99e207fd59881e`

Agent-design-tool additions from `57a8d8e` (compact contracts, decision paths, finder, specimen, native Explore menu) stay. This handoff does not revert them.

## Commands (verified in this repo)

```bash
npm install
npm run generate:data   # writes public/data/*.json from content/
npm run validate:data   # generate twice in temp dirs, byte-compare, contract/slug/briefing checks; no network
npm run lint
npx tsc --noEmit
npm run build           # prebuild → generate:data, then next build
npm run dev             # local preview only; not production
```

`validate:data` checks the data contract, not design quality or browser behavior.

## Data feeds

Base: `https://design-catalog-three.vercel.app`

| Surface | URL |
|---------|-----|
| Index | `/data/index.json` |
| Techniques | `/data/techniques.json` · `/data/techniques/{slug}.json` |
| Designers | `/data/designers.json` · `/data/designers/{slug}.json` |
| Prompts | `/data/prompts.json` |
| Sources | `/data/sources.json` |
| Resources | `/data/resources.json` |
| Shipaton 2025 | `/data/shipaton-2025.json` |
| Decision paths | `/data/decision-paths.json` |
| Schemas | `/schema/technique.schema.json` · `/schema/designer.schema.json` |
| Briefings | `/llms.txt` · `/llms-full.txt` |
| Agent guide | [`docs/FOR_AGENTS.md`](FOR_AGENTS.md) |
| This handoff | [`docs/HANDOFF.md`](HANDOFF.md) (GitHub raw after merge) |

Human: `/` `/techniques` `/agents` `/designers` `/prompts` `/compare` `/examples` `/guides` `/resources` `/shipaton-2025` `/shipaton-2025/budget-trip` `/sources` `/motion` `/about`.

Public-route probe on 2026-11-07 (production): those routes returned HTTP 200, including `/data/index.json`, `/llms.txt`, schemas, a technique page, a designer page, and a Shipaton winner page.

## Recount (repo data, 2026-11-07)

Recounted from `content/` on this audit date. Last time this catalog content was authored remains **2026-09-18**.

| Collection | Count | Notes |
|------------|------:|-------|
| Designers | **52** | 1 complete (`anshu-chimala`), 37 partial, **13 directory** (credits only, no technique set), 0 stub, 1 curator (`brandon-theriot`) |
| Techniques | **85** | |
| Resources | **37** | |
| Shipaton winners | **30** | `winnerCount` matches `winners.length` |
| Marketing-site screenshots | **20** | files under `public/shipaton-2025/*/marketing-site.png` |
| Store-preview screenshots | 116 | store gallery images, **not** live device UI |
| Sources | 46 | |

### Remaining directory entries (13)

Credits without a technique set — preserved, not converted in this release:

`cap-watkins`, `cassie-evans`, `david-hoang`, `imran-chaudhri`, `jason-yuan`, `jonnie-hallman`, `karri-saarinen`, `katie-dill`, `kenya-hara`, `linda-dong`, `noah-levin`, `pablo-stanley`, `yuhki-yamashita`.

There are **no** `stub` status designers left (earlier work converted stubs to `partial`).

## Craft gate (still in force)

Before any future mock or UI is marked **READY**:

1. Each screen cites **concrete Design Catalog techniques** (slugs, not vibes).
2. Source and implementation detail live in [`docs/TECHNIQUES.md`](TECHNIQUES.md) **or** an on-page note.
3. No generic phone shells as a finished craft example.
4. No brand cloning.

Paused maintenance does not waive the gate. The Nearfar budget-trip frames are **not** a passed example.

## Nearfar budget-trip mock

`/shipaton-2025/budget-trip` is an **archived concept**: parked, unapproved, **not a recommended craft reference**. The page and JSON stay; they are not removed, redesigned, or treated as READY. Private review feedback is not published here.

Agent field: `shipaton-2025.json` → `budgetTripMockups` (`status: archived`, `approved: false`, `recommendedCraftReference: false`).

## Shipaton 2025 capture gaps (historical, Sept 2026)

These are **capture outcomes from the original research**, not a 2026-11-07 re-check of those marketing sites.

| Outcome | Apps |
|---------|------|
| Marketing URL found; site returned HTTP 404 (no fake screenshot) | MoodHaven (`moodhaven.com`) |
| Marketing URL found; page failed to load (`ERR_TUNNEL_CONNECTION_FAILED` after retries) | Posturely (`www.posturely.app`) |
| No marketing URL found | tomo-japan, dayloop, shutter-declutter, napkinmatic, cooked-this, studient, steps-share, draw-it (8) |

Store previews are labeled store-preview in JSON and on pages: they are store gallery images, not live device UI.

Raw provenance (iTunes lookup, showcase extracts, download manifest, research notes) is under [`docs/shipaton-2025/`](shipaton-2025/README.md). Manifest paths such as `/workspace/design-catalog-shipaton/` are **historical box locations**. Canonical screenshot files are in `public/shipaton-2025/`.

## Hook Farm (separate product; routine paused)

Hook Farm is **not** this catalog. Harvesting a corpus and publishing the site are different steps.

| | |
|--|--|
| Site | https://hook-farm-site.vercel.app |
| Repo | https://github.com/Btheriot83/hook-farm-site |
| Last verified card count | **1628** (last verified state; not recounted in this audit) |
| Harvest | A viral-corpus / cards tree (markdown + thumbs + transcripts) |
| Publish | Copy harvest into `hook-farm-site` `content/`, generate that site’s data, commit, push `main` so Vercel redeploys Hook Farm |

Legacy script (preserved, **not executed** here): [`docs/operations/hook-farm-sync-to-site.sh`](operations/hook-farm-sync-to-site.sh) — see [`docs/operations/README.md`](operations/README.md).

**Prerequisites (if someone later runs it by hand):** a harvested corpus with `cards/`; a clone of `hook-farm-site` with git push access; Node if that repo still has `scripts/generate-data.mjs`; optional `rsync`. Set `HOOK_FARM_CORPUS` and `HOOK_FARM_SITE`. Do not rely on the script’s historical `/workspace/...` defaults.

**Risks (from reading the script):** `rsync --delete` (or rm+cp) makes site `content/cards|thumbs|transcripts` match the corpus; it **commits and pushes `origin main`** on the Hook Farm repo; it skips when non-content files are dirty; `git pull --ff-only … \|\| true` and `generate-data … \|\| true` swallow some failures; Vercel cannot deploy a thumbs symlink so it copies `content/thumbs` → `public/thumbs`. It does not modify this Design Catalog repo.

Routine stays **paused**. Do not schedule it. Do not alter the Hook Farm repo from this handoff.

## Deployment

Production hostname: **https://design-catalog-three.vercel.app** (existing Vercel project; keep it).

Remaining steps after this PR:

1. Review and merge to `main`.
2. Wait for Vercel to build **this** project (not Hook Farm).
3. Confirm production: `/`, `/agents`, `/data/index.json` (`lastUpdated` still `2026-09-18…`, `maintenance` paused, new `contentHash`), `/shipaton-2025/budget-trip` archived banner.
4. Only then is bot deletion safe. Do **not** delete the Vercel project or the GitHub repo.

## Small fixes in this release

- Machine `index.routes.human` now includes `/examples` and `/guides` (they already rendered; the index omitted them).
- Four Play Store URLs in the Shipaton JSON used HTML `&amp;` inside JSON strings; decoded to `&`.
- Nearfar/budget-trip copy marks the mock archived on the page and in JSON.
- Shipaton winner pages label marketing gaps as historical Sept 2026 capture notes, not live TODOs.

## What this release does not do

- No new techniques, designers, mockups, or marketing recapture
- No Hook Farm harvest or publish
- No claim that September marketing-site failures are still true today
- No restart of critic/gauntlet loops or subscriptions
