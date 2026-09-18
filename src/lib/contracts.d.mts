import type { Technique, TechniqueContract, DecisionPath } from "./types";
export function contractFor(technique: Technique, paths: DecisionPath[], release: { contractVersion: string; provenance: string }): TechniqueContract;
