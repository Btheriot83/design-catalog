# Shipaton 2025 provenance (preserved)

Raw research JSON and notes from the original capture box, copied into this repo on **2026-11-07** so the Design Catalog bot can be deleted without losing provenance.

These files document **how** store-preview URLs and slugs were gathered in **September 2026**. They are not a live recrawl and not a maintenance script.

Scanned for credentials: no API keys, tokens, or secrets. Product slugs such as `passwords-kit` are app names.

## Files

| File | What it is |
|------|------------|
| `NOTES.md` | Original research notes (winners post, showcase, iTunes lookup, store-preview vs live device) |
| `winners-slugs.json` | Showcase slug map from the winners list |
| `showcase-extract.json` / `showcase-longslug.json` | Showcase page extracts |
| `playwright-extract.json` | Browser extract from the original capture |
| `itunes-lookup.json` | iTunes Lookup API payloads (`screenshotUrls`, icons) |
| `download-manifest.json` | Which remote image URL was saved where |

## Paths in the manifest

Entries like `/workspace/design-catalog-shipaton/payout/store-preview-1.png` are **historical locations on the capture machine**. They are not the ops path today.

Canonical files in this repo: `public/shipaton-2025/{slug}/`.

## Related

- Catalog JSON: `content/shipaton-2025.json` (exported to `/data/shipaton-2025.json`)
- Handoff: [`../HANDOFF.md`](../HANDOFF.md)
