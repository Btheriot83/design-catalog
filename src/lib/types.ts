export type Stage = "Discover" | "Define" | "Deliver";

export interface Technique {
  slug: string;
  number: number;
  stage: Stage;
  title: string;
  principle: string;
  procedure: string[];
  examplePrompts: string[];
  tips: string[];
  sourceUrls: string[];
  related: string[];
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
}

export interface Source {
  title: string;
  url: string;
  kind: string;
  note?: string;
}
