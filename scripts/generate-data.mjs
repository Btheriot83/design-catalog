#!/usr/bin/env node
/**
 * Build-time export of catalog JSON for agents/CDN.
 * Run via: npm run generate:data (also hooked as prebuild).
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const contentRoot = join(root, "content");
const publicData = join(root, "public", "data");
const baseUrl = "https://design-catalog-three.vercel.app";

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function writeJson(path, data) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function loadTechniques() {
  const dir = join(contentRoot, "techniques");
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => readJson(join(dir, f)))
    .sort((a, b) => a.number - b.number);
}

const statusRank = { complete: 0, partial: 1, directory: 2, stub: 3, curator: 4 };

function loadDesigners() {
  const dir = join(contentRoot, "designers");
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => readJson(join(dir, f)))
    .sort((a, b) => {
      const rank = (statusRank[a.status] ?? 9) - (statusRank[b.status] ?? 9);
      if (rank !== 0) return rank;
      return a.name.localeCompare(b.name);
    });
}

function designerForTechnique(designers, techniqueSlug) {
  return designers.find((d) => d.techniqueSlugs?.includes(techniqueSlug));
}

function resetDir(dir) {
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
}

const techniques = loadTechniques();
const designers = loadDesigners();
const sources = readJson(join(contentRoot, "sources.json"));
const resources = readJson(join(contentRoot, "resources.json"));
const lastUpdated = new Date().toISOString();

resetDir(join(publicData, "techniques"));
resetDir(join(publicData, "designers"));

const stages = ["Discover", "Define", "Deliver"];
const index = {
  name: "Design Catalog",
  description:
    "Letterpress study desk of AI design techniques (Anshu, Nate, Greg + craft directory voices). Public sources only; no endorsement.",
  baseUrl,
  lastUpdated,
  techniqueCount: techniques.length,
  designerCount: designers.length,
  sourceCount: sources.length,
  resourceCount: resources.length,
  stages: stages.map((stage) => ({
    id: stage,
    techniqueCount: techniques.filter((t) => t.stage === stage).length,
    techniqueSlugs: techniques.filter((t) => t.stage === stage).map((t) => t.slug),
  })),
  designers: designers.map((d) => ({
    slug: d.slug,
    name: d.name,
    status: d.status,
    techniqueCount: d.techniqueSlugs?.length ?? 0,
    url: `${baseUrl}/designers/${d.slug}`,
    json: `${baseUrl}/data/designers/${d.slug}.json`,
  })),
  techniques: techniques.map((t) => {
    const d = designerForTechnique(designers, t.slug);
    return {
      slug: t.slug,
      number: t.number,
      title: t.title,
      stage: t.stage,
      designerSlug: d?.slug ?? null,
      designerName: d?.name ?? null,
      url: `${baseUrl}/techniques/${t.slug}`,
      json: `${baseUrl}/data/techniques/${t.slug}.json`,
    };
  }),
  routes: {
    human: {
      home: `${baseUrl}/`,
      techniques: `${baseUrl}/techniques`,
      prompts: `${baseUrl}/prompts`,
      compare: `${baseUrl}/compare`,
      designers: `${baseUrl}/designers`,
      sources: `${baseUrl}/sources`,
      resources: `${baseUrl}/resources`,
      agents: `${baseUrl}/agents`,
      about: `${baseUrl}/about`,
      motion: `${baseUrl}/motion`,
    },
    machine: {
      llmsTxt: `${baseUrl}/llms.txt`,
      llmsFullTxt: `${baseUrl}/llms-full.txt`,
      index: `${baseUrl}/data/index.json`,
      techniques: `${baseUrl}/data/techniques.json`,
      designers: `${baseUrl}/data/designers.json`,
      prompts: `${baseUrl}/data/prompts.json`,
      sources: `${baseUrl}/data/sources.json`,
      resources: `${baseUrl}/data/resources.json`,
      techniqueSchema: `${baseUrl}/schema/technique.schema.json`,
      designerSchema: `${baseUrl}/schema/designer.schema.json`,
      forAgentsMd:
        "https://raw.githubusercontent.com/Btheriot83/design-catalog/main/docs/FOR_AGENTS.md",
      api: {
        index: `${baseUrl}/api/index`,
        techniques: `${baseUrl}/api/techniques`,
        designers: `${baseUrl}/api/designers`,
        prompts: `${baseUrl}/api/prompts`,
        sources: `${baseUrl}/api/sources`,
        resources: `${baseUrl}/api/resources`,
      },
    },
  },
  anshuMapping: {
    note: "Build Games Phase A runs Anshu techniques 1–8 once per app; artifacts DISCOVER.md / DEFINE.md / DELIVER.md.",
    techniques: [
      { number: 1, slug: "seed-strings", stage: "Discover", artifact: "docs/DISCOVER.md" },
      { number: 2, slug: "ambitious-prompts", stage: "Discover", artifact: "docs/DISCOVER.md" },
      { number: 3, slug: "critic-subagents", stage: "Define", artifact: "docs/DEFINE.md" },
      { number: 4, slug: "image-generation", stage: "Define", artifact: "docs/DEFINE.md" },
      { number: 5, slug: "video-motion", stage: "Define", artifact: "docs/DEFINE.md" },
      { number: 6, slug: "cut-elements", stage: "Deliver", artifact: "docs/DELIVER.md" },
      { number: 7, slug: "remove-ai-tells", stage: "Deliver", artifact: "docs/DELIVER.md" },
      { number: 8, slug: "hand-rewrite-copy", stage: "Deliver", artifact: "docs/DELIVER.md" },
    ],
  },
  canonicalApps: {
    tileboard: {
      name: "Tileboard",
      job: "Household chore PWA (Build Games stand-in for tody)",
      live: "https://buildgames-tody.vercel.app",
      original: "https://todyapp.com/",
      improvementPath:
        "Full Anshu 1–8 reseed (DISCOVER→DEFINE→DELIVER) then ≤25 beat-the-original loops with spottable deltas.",
      catalog: {
        fieldGuide: `${baseUrl}/compare`,
        prompts: `${baseUrl}/prompts`,
        techniques: `${baseUrl}/techniques`,
        anshu: `${baseUrl}/designers/anshu-chimala`,
      },
    },
  },
  disclaimer:
    "Independent project. Public sources only. No affiliation or endorsement implied by any citation.",
};

writeJson(join(publicData, "index.json"), index);
writeJson(join(publicData, "techniques.json"), techniques);
writeJson(join(publicData, "designers.json"), designers);
writeJson(join(publicData, "sources.json"), sources);
writeJson(join(publicData, "resources.json"), resources);

for (const t of techniques) {
  writeJson(join(publicData, "techniques", `${t.slug}.json`), t);
}
for (const d of designers) {
  writeJson(join(publicData, "designers", `${d.slug}.json`), d);
}

const prompts = techniques.flatMap((t) => {
  const d = designerForTechnique(designers, t.slug);
  return (t.examplePrompts || []).map((prompt, i) => ({
    techniqueSlug: t.slug,
    techniqueTitle: t.title,
    techniqueNumber: t.number,
    stage: t.stage,
    index: i + 1,
    prompt,
    why: t.promptWhy?.[i] ?? null,
    designerSlug: d?.slug ?? null,
    designerName: d?.name ?? null,
    techniqueUrl: `${baseUrl}/techniques/${t.slug}`,
    techniqueJson: `${baseUrl}/data/techniques/${t.slug}.json`,
  }));
});
writeJson(join(publicData, "prompts.json"), prompts);

console.log(
  `generate:data → ${techniques.length} techniques, ${designers.length} designers, ${prompts.length} prompts, ${sources.length} sources, ${resources.length} resources`
);
