# Operations artifacts (legacy / paused)

Nothing here is a scheduled job. Design Catalog **and** Hook Farm publishing routines are paused. Clone GitHub repos; do not treat Cursor box paths as the only way to maintain either site.

## `hook-farm-sync-to-site.sh`

**Legacy / manual cross-repo handoff.** Preserved from the capture box so the steps are readable. **Not executed** as part of the Design Catalog preservation release. **Do not run it** unless an owner explicitly resumes Hook Farm publishing.

It does **not** update this Design Catalog repo. It copies a harvested corpus into [hook-farm-site](https://github.com/Btheriot83/hook-farm-site) and pushes that repo’s `main` (Vercel then redeploys https://hook-farm-site.vercel.app).

### Harvesting vs publishing

1. **Harvest** — produce/update a viral-corpus tree (`cards/`, optional `thumbs/`, `transcripts/`, `INDEX.md`, `SCHEMA.md`). That work is outside this catalog.
2. **Publish** — this script syncs that tree into `hook-farm-site/content/`, copies thumbs to `public/thumbs` (Vercel cannot deploy a symlink), optionally runs that site’s `scripts/generate-data.mjs`, commits, and **pushes `origin main`**.

Last verified Hook Farm card count: **1628** (not recounted in the 2026-11-07 catalog audit).

### Prerequisites (if ever run by hand)

- A corpus directory with `cards/`
- A git clone of `Btheriot83/hook-farm-site` and permission to push `main`
- Node, if that repo still generates `public/data/`
- `rsync` optional (`cp` fallback is in the script)
- **Set env vars** instead of box defaults:

```bash
export HOOK_FARM_CORPUS=/path/to/viral-corpus
export HOOK_FARM_SITE=/path/to/hook-farm-site
# then, only if publishing is explicitly resumed:
# bash docs/operations/hook-farm-sync-to-site.sh
```

Historical defaults inside the script (`/workspace/viral-corpus`, `/workspace/hook-farm-site`) are Cursor-box paths from when it lived only on the box. They are not a maintenance route.

### Risks (read from the script; not theoretical)

- `--delete` / rm+cp **replaces** site card/thumb/transcript trees with the corpus
- **Direct `git push origin main`** on Hook Farm (no PR)
- Skips entirely if the site clone has dirty **non-content** files
- `git pull --ff-only … || true` continues after a failed pull
- `node scripts/generate-data.mjs || true` continues after a failed generate
- Preserves `_example.md.disabled` on the site if present

See [`../HANDOFF.md`](../HANDOFF.md).
