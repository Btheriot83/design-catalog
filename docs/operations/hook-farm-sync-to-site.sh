#!/usr/bin/env bash
# LEGACY / MANUAL cross-repo handoff (preserved 2026-11-07 in design-catalog).
# Routine is paused. Do not schedule. Do not run as Design Catalog maintenance.
# Harvesting a corpus and publishing hook-farm-site are separate steps.
# This script only publishes: corpus → hook-farm-site content/ → git push main
# → Vercel redeploys https://hook-farm-site.vercel.app (not this catalog).
# Historical box defaults below; set HOOK_FARM_CORPUS and HOOK_FARM_SITE.
# See docs/operations/README.md and docs/HANDOFF.md.
#
# Bridge: viral-corpus → hook-farm-site content/ → push main → Vercel redeploy
set -euo pipefail

SRC="${HOOK_FARM_CORPUS:-/workspace/viral-corpus}"
REPO="${HOOK_FARM_SITE:-/workspace/hook-farm-site}"
CONTENT="$REPO/content"

# Prefer rsync; fall back to rm+cp when apt/rsync unavailable on the box
sync_tree() {
  local src="$1" dest="$2"
  shift 2
  mkdir -p "$dest"
  if command -v rsync >/dev/null 2>&1; then
    rsync -a --delete "$@" "$src" "$dest"
  else
    # Best-effort delete+copy (excludes only applied for cards via caller)
    find "$dest" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
    if [[ -d "$src" ]] && [[ -n "$(ls -A "$src" 2>/dev/null || true)" ]]; then
      cp -a "$src." "$dest/"
    fi
  fi
}

if [[ ! -d "$SRC/cards" ]]; then
  echo "ERROR: corpus missing at $SRC" >&2
  exit 1
fi
if [[ ! -d "$REPO/.git" ]]; then
  echo "ERROR: site repo missing at $REPO — clone Btheriot83/hook-farm-site first" >&2
  exit 1
fi

cd "$REPO"
# Avoid stomping an in-progress redesign with dirty UI work
if [[ -n "$(git status --porcelain | grep -v '^??' | grep -v '^ M content/' | grep -v '^M  content/' || true)" ]]; then
  OTHER=$(git status --porcelain | grep -v ' content/' | grep -v '^?? content/' || true)
  if [[ -n "$OTHER" ]]; then
    echo "SKIP: site repo has non-content local changes; not syncing" >&2
    echo "$OTHER" >&2
    exit 0
  fi
fi

git pull --ff-only origin main 2>/dev/null || git pull --ff-only || true

mkdir -p "$CONTENT/cards" "$CONTENT/thumbs" "$CONTENT/transcripts"

KEEP_EXAMPLE=""
if [[ -f "$CONTENT/cards/_example.md.disabled" ]]; then
  KEEP_EXAMPLE=$(mktemp)
  cp "$CONTENT/cards/_example.md.disabled" "$KEEP_EXAMPLE"
fi

if command -v rsync >/dev/null 2>&1; then
  rsync -a --delete \
    --exclude='.gitkeep' \
    --exclude='_example.md.disabled' \
    --exclude='*.disabled' \
    "$SRC/cards/" "$CONTENT/cards/"
else
  find "$CONTENT/cards" -mindepth 1 -maxdepth 1 \
    ! -name '.gitkeep' ! -name '_example.md.disabled' ! -name '*.disabled' \
    -exec rm -rf {} +
  cp -a "$SRC/cards/." "$CONTENT/cards/"
  # drop corpus disabled files if any leaked
  find "$CONTENT/cards" -name '*.disabled' ! -name '_example.md.disabled' -delete 2>/dev/null || true
fi

if command -v rsync >/dev/null 2>&1; then
  rsync -a --delete "$SRC/thumbs/" "$CONTENT/thumbs/" 2>/dev/null || true
  rsync -a --delete "$SRC/transcripts/" "$CONTENT/transcripts/" 2>/dev/null || true
else
  rm -rf "$CONTENT/thumbs" "$CONTENT/transcripts"
  mkdir -p "$CONTENT/thumbs" "$CONTENT/transcripts"
  [[ -d "$SRC/thumbs" ]] && cp -a "$SRC/thumbs/." "$CONTENT/thumbs/" || true
  [[ -d "$SRC/transcripts" ]] && cp -a "$SRC/transcripts/." "$CONTENT/transcripts/" || true
fi

cp "$SRC/INDEX.md" "$CONTENT/INDEX.md"
cp "$SRC/SCHEMA.md" "$CONTENT/SCHEMA.md"
[[ -f "$SRC/AGENTS.md" ]] && cp "$SRC/AGENTS.md" "$CONTENT/AGENTS.md"
[[ -f "$SRC/CRITIQUE.md" ]] && cp "$SRC/CRITIQUE.md" "$CONTENT/CRITIQUE.md"
[[ -f "$SRC/TOP_CREATORS.md" ]] && cp "$SRC/TOP_CREATORS.md" "$CONTENT/TOP_CREATORS.md"

touch "$CONTENT/cards/.gitkeep"
if [[ -n "$KEEP_EXAMPLE" ]]; then
  cp "$KEEP_EXAMPLE" "$CONTENT/cards/_example.md.disabled"
  rm -f "$KEEP_EXAMPLE"
fi

BEFORE=$(git rev-parse --short HEAD)
CARD_COUNT=$(find "$CONTENT/cards" -type f \( -name '*.md' -o -name '*.json' \) ! -name '*.disabled' | wc -l | tr -d ' ')

if [[ -z "$(git status --porcelain content/)" ]]; then
  echo "NOOP: content already matches corpus ($CARD_COUNT cards) @ $BEFORE"
  exit 0
fi

# Vercel cannot deploy symlink public/thumbs → content/thumbs
mkdir -p "$REPO/public/thumbs"
if command -v rsync >/dev/null 2>&1; then
  rsync -a --delete "$CONTENT/thumbs/" "$REPO/public/thumbs/"
else
  rm -rf "$REPO/public/thumbs"
  mkdir -p "$REPO/public/thumbs"
  cp -a "$CONTENT/thumbs/." "$REPO/public/thumbs/" 2>/dev/null || true
fi

# Keep agent JSON in sync with content
if [[ -f "$REPO/scripts/generate-data.mjs" ]]; then
  (cd "$REPO" && node scripts/generate-data.mjs) || true
fi

git add content/ public/thumbs/ public/data/ public/llms.txt 2>/dev/null || git add content/ public/thumbs/

git commit -m "content: sync Hook Farm harvest ($(date -u +%Y-%m-%dT%H%MZ), ${CARD_COUNT} cards)"
git push origin main
AFTER=$(git rev-parse --short HEAD)
echo "PUSHED: $BEFORE → $AFTER · $CARD_COUNT cards · Vercel will redeploy"
