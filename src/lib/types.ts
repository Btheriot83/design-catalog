export type Stage = "Discover" | "Define" | "Deliver";

export interface WorkedExample {
  title: string;
  body: string;
  before?: string;
  after?: string;
}

export interface Technique {
  agentContract?: TechniqueContract;
  slug: string;
  number: number;
  stage: Stage;
  title: string;
  principle: string;
  procedure: string[];
  examplePrompts: string[];
  /** Parallel to examplePrompts — one-liner on why the prompt works */
  promptWhy?: string[];
  tips: string[];
  sourceUrls: string[];
  related: string[];
  /** Soft cross-links shown as “pairs well with” */
  pairsWellWith?: string[];
  workedExamples?: WorkedExample[];
  antiPatterns?: string[];
  checklist?: string[];
}

export interface DecisionPath {
  id: string; title: string; question: string; start: string; support: string;
  stop: string; avoid: string; acceptance: string; bad: string; good: string; recipe: string;
}

export interface TechniqueContract {
  version: string;
  provenance: { kind: string; statement: string; sources: string[] };
  decisionPath: string | null;
  useWhen: string[]; avoidWhen: string[]; inputs: string[]; output: string;
  recipe: string; acceptance: string[]; stateRequirements: Record<string, string>;
  compatibility: { candidates: string[]; rule: string; conflicts: string[]; stop: string };
  comparison: { bad: string; good: string; impact: string } | null;
}

export type DesignerStatus =
  | "complete"
  | "partial"
  | "stub"
  | "curator"
  | "directory";

export interface Designer {
  slug: string;
  name: string;
  status: DesignerStatus;
  role: string;
  bio: string;
  links: { label: string; url: string }[];
  techniqueSlugs: string[];
  stages?: { id: Stage; title: string; summary: string }[];
  /** Short highlight bullets for the designer page */
  highlights?: string[];
  /** Optional personal site; UI skips null/empty */
  personalSite?: string | null;
}

export interface Source {
  title: string;
  url: string;
  kind: string;
  note?: string;
  coverage?: string;
  /** Optional person slug for provenance UI */
  designerSlug?: string;
}

export type ResourceCategory =
  | "transitions"
  | "shaders"
  | "animation"
  | "examples"
  | "easing"
  | "icons-illustration"
  | "textures"
  | "3d"
  | "reference";

export interface CraftResource {
  id: string;
  slug: string;
  title: string;
  url: string;
  categories: ResourceCategory[];
  freeNote: string;
  agentUse: string;
  tags?: string[];
}

export interface ShipatonScreenshot {
  path: string;
  kind: "store-preview" | "marketing-site" | "mockup";
  label: string;
  widthNote?: string;
}

export interface ShipatonWinner {
  name: string;
  slug: string;
  category: string;
  place: number;
  oneLiner: string;
  showcaseSlug: string;
  appStoreUrl: string | null;
  playStoreUrl: string | null;
  showcaseUrl: string;
  marketingSiteUrl: string | null;
  screenshots: ShipatonScreenshot[];
  marketingScreenshotTodo?: { url: string; note: string } | null;
  sources?: { revenueCat: string; showcase: string };
}

export interface ShipatonCatalog {
  year: number;
  title: string;
  description: string;
  sources: string[];
  disclaimer: string;
  winnerCount: number;
  winners: ShipatonWinner[];
  budgetTripMockups: {
    sectionTitle: string;
    note: string;
    nameProposals: { name: string; why: string }[];
    screens: { id: string; title: string; path: string }[];
  };
}
