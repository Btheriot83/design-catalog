"use client";

import Link from "next/link";
import type { ResourceCategory } from "@/lib/types";

const CATEGORY_LABELS: Record<ResourceCategory | "all", string> = {
  all: "All",
  transitions: "Transitions",
  shaders: "Shaders",
  animation: "Animation",
  examples: "Examples",
  easing: "Easing",
  "icons-illustration": "Icons / illustration",
  textures: "Textures",
  "3d": "3D",
  reference: "Reference",
};

const ORDER: Array<ResourceCategory | "all"> = [
  "all",
  "transitions",
  "animation",
  "easing",
  "shaders",
  "examples",
  "textures",
  "3d",
  "icons-illustration",
  "reference",
];

export function ResourceFilter({
  current,
  counts,
}: {
  current?: string;
  counts: Record<string, number>;
}) {
  const active = current && current !== "all" ? current : "all";

  function href(key: string) {
    if (key === "all") return "/resources";
    return `/resources?cat=${encodeURIComponent(key)}`;
  }

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {ORDER.map((key) => {
        const count = key === "all" ? counts.all : (counts[key] ?? 0);
        if (key !== "all" && count === 0) return null;
        const isActive = active === key;
        return (
          <Link
            key={key}
            href={href(key)}
            className={
              isActive
                ? "border border-ink bg-ink px-3 py-1.5 font-sans text-sm text-paper"
                : "border border-hairline bg-card px-3 py-1.5 font-sans text-sm text-studio-ink press-shadow hover:border-ink hover:text-ink"
            }
          >
            {CATEGORY_LABELS[key]}
            <span className="ml-1.5 font-mono text-[11px] opacity-70">{count}</span>
          </Link>
        );
      })}
    </div>
  );
}
