import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import paths from "../../content/decision-paths.json";
import release from "../../content/catalog-release.json";
import { contractFor } from "./contracts.mjs";
import type { CraftResource, Designer, ShipatonCatalog, ShipatonWinner, Source, Technique } from "./types";

const root = join(process.cwd(), "content");

function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, "utf8")) as T;
}

const statusRank: Record<Designer["status"], number> = {
  complete: 0,
  partial: 1,
  directory: 2,
  stub: 3,
  curator: 4,
};

export function getAllTechniques(): Technique[] {
  const dir = join(root, "techniques");
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => readJson<Technique>(join(dir, f)))
    .map((t) => ({ ...t, agentContract: contractFor(t, paths, release) }))
    .sort((a, b) => a.number - b.number);
}

export function getTechnique(slug: string): Technique | undefined {
  return getAllTechniques().find((t) => t.slug === slug);
}

export function getAllDesigners(): Designer[] {
  const dir = join(root, "designers");
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => readJson<Designer>(join(dir, f)))
    .sort((a, b) => {
      const rank = statusRank[a.status] - statusRank[b.status];
      if (rank !== 0) return rank;
      return a.name.localeCompare(b.name);
    });
}

export function getDesigner(slug: string): Designer | undefined {
  return getAllDesigners().find((d) => d.slug === slug);
}

export function getDesignerForTechnique(techniqueSlug: string): Designer | undefined {
  return getAllDesigners().find((d) => d.techniqueSlugs.includes(techniqueSlug));
}

export function getSources(): Source[] {
  return readJson<Source[]>(join(root, "sources.json"));
}

export function getTechniquesByStage() {
  const techniques = getAllTechniques();
  const stages = ["Discover", "Define", "Deliver"] as const;
  return stages.map((stage) => ({
    stage,
    techniques: techniques.filter((t) => t.stage === stage),
  }));
}

export function getAllExamplePrompts() {
  return getAllTechniques().flatMap((t) => {
    const designer = getDesignerForTechnique(t.slug);
    return t.examplePrompts.map((prompt, i) => ({
      techniqueSlug: t.slug,
      techniqueTitle: t.title,
      techniqueNumber: t.number,
      stage: t.stage,
      index: i + 1,
      prompt,
      why: t.promptWhy?.[i],
      designerSlug: designer?.slug,
      designerName: designer?.name,
    }));
  });
}

export function getResources(): CraftResource[] {
  return readJson<CraftResource[]>(join(root, "resources.json"));
}


export function getShipaton2025(): ShipatonCatalog {
  return readJson<ShipatonCatalog>(join(root, "shipaton-2025.json"));
}

export function getShipatonWinner(slug: string): ShipatonWinner | undefined {
  return getShipaton2025().winners.find((w) => w.slug === slug);
}

export function getShipatonByCategory() {
  const catalog = getShipaton2025();
  const order = [
    "Grand Prize",
    "#BuildInPublic",
    "Design",
    "Launch",
    "HAMM",
    "Peace",
    "Vibe Coding",
    "OneSignal",
    "Kotlin Multiplatform",
    "Internal",
  ];
  return order
    .map((category) => ({
      category,
      winners: catalog.winners
        .filter((w) => w.category === category)
        .sort((a, b) => a.place - b.place),
    }))
    .filter((g) => g.winners.length > 0);
}
