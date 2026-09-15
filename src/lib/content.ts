import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import type { Designer, Source, Technique } from "./types";

const root = join(process.cwd(), "content");

function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, "utf8")) as T;
}

export function getAllTechniques(): Technique[] {
  const dir = join(root, "techniques");
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => readJson<Technique>(join(dir, f)))
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
      if (a.status !== b.status) return a.status === "complete" ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
}

export function getDesigner(slug: string): Designer | undefined {
  return getAllDesigners().find((d) => d.slug === slug);
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
  return getAllTechniques().flatMap((t) =>
    t.examplePrompts.map((prompt, i) => ({
      techniqueSlug: t.slug,
      techniqueTitle: t.title,
      techniqueNumber: t.number,
      stage: t.stage,
      index: i + 1,
      prompt,
    })),
  );
}
