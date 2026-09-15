export type Stage = "Discover" | "Define" | "Deliver";

export interface WorkedExample {
  title: string;
  body: string;
  before?: string;
  after?: string;
}

export interface Technique {
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

export interface Designer {
  slug: string;
  name: string;
  status: "complete" | "partial" | "stub";
  role: string;
  bio: string;
  links: { label: string; url: string }[];
  techniqueSlugs: string[];
  stages?: { id: Stage; title: string; summary: string }[];
  /** Short highlight bullets for the designer page */
  highlights?: string[];
}

export interface Source {
  title: string;
  url: string;
  kind: string;
  note?: string;
  coverage?: string;
}
