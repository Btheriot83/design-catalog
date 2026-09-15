# Design Catalog

A craft / anti-slop **designer directory** plus a letterpress study desk of AI design techniques—**Anshu Chimala** (Discover → Define → Deliver), with **partial** catalogs of **Nate Parrott**’s Claude Design practices and **Greg Huntoon**’s TC-EBC prompt framework. Public sources only; no endorsement.

**Live:** https://design-catalog-three.vercel.app

## For agents (start here)

Do **not** scrape HTML. Fetch static JSON:

| Surface | URL |
|---------|-----|
| Index | https://design-catalog-three.vercel.app/data/index.json |
| Techniques | …/data/techniques.json · …/data/techniques/{slug}.json |
| Designers | …/data/designers.json · …/data/designers/{slug}.json |
| Prompts | …/data/prompts.json |
| Sources | …/data/sources.json |
| Schemas | …/schema/technique.schema.json · designer.schema.json |
| llms.txt | https://design-catalog-three.vercel.app/llms.txt |
| Agent guide | [docs/FOR_AGENTS.md](docs/FOR_AGENTS.md) (also [GitHub raw](https://raw.githubusercontent.com/Btheriot83/design-catalog/main/docs/FOR_AGENTS.md)) |

Human page: [/agents](https://design-catalog-three.vercel.app/agents). Directory: [/designers](https://design-catalog-three.vercel.app/designers). Field guide: [/compare](https://design-catalog-three.vercel.app/compare). Guides: [/guides](https://design-catalog-three.vercel.app/guides). Gauntlet log: `docs/GAUNTLET.md`.

**Workflow:** (a) fetch index → (b) pick technique by stage/job → (c) copy prompts → (d) run Discover→Define→Deliver with `DISCOVER.md` / `DEFINE.md` / `DELIVER.md`.

**Build Games / Anshu 1–8** and **Tileboard** (chore-app) canonical URLs are in `docs/FOR_AGENTS.md` and `data/index.json` → `anshuMapping` / `canonicalApps`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Source Serif 4 + IBM Plex Sans (next/font)
- Quiet Folio tokens: paper `#FAF9F7` · ink `#221C24` · studioInk `#6F6470` · hairline `#E8E3E8`

## Develop

```bash
npm install
npm run generate:data   # writes public/data/*.json
npm run dev
```

## Build

```bash
npm run build   # runs prebuild → generate:data, then next build
```

## Content

Typed JSON under `content/` — designers (technique authors + directory credits), techniques, sources. Do not invent unpublished Substack posts or paywalled quotes. No endorsement implied by any citation.

Also see `docs/REDESIGN.md` and `docs/CRITIC_LOOP.md`.

## Disclaimer

Independent project. No affiliation or endorsement implied by any citation. See `/sources`.
