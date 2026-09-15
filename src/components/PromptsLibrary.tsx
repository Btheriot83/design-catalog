"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PromptBlock } from "./PromptBlock";

type Item = {
  techniqueSlug: string;
  techniqueTitle: string;
  techniqueNumber: number;
  stage: string;
  index: number;
  prompt: string;
  why?: string;
  designerSlug?: string;
  designerName?: string;
};

export function PromptsLibrary({
  prompts,
  designers,
}: {
  prompts: Item[];
  designers: { slug: string; name: string }[];
}) {
  const [q, setQ] = useState("");
  const [stage, setStage] = useState<string>("All");
  const [designer, setDesigner] = useState<string>("All");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return prompts.filter((p) => {
      if (stage !== "All" && p.stage !== stage) return false;
      if (designer !== "All" && p.designerSlug !== designer) return false;
      if (!needle) return true;
      return (
        p.prompt.toLowerCase().includes(needle) ||
        p.techniqueTitle.toLowerCase().includes(needle) ||
        (p.why?.toLowerCase().includes(needle) ?? false) ||
        (p.designerName?.toLowerCase().includes(needle) ?? false)
      );
    });
  }, [prompts, q, stage, designer]);

  return (
    <div>
      <div className="mb-8 space-y-4 border border-hairline bg-card p-4 press-shadow sm:p-5">
        <label className="block">
          <span className="eyebrow">Search</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter by text, technique, designer…"
            className="mt-2 w-full border border-hairline bg-paper px-3 py-2.5 font-sans text-sm text-ink placeholder:text-faint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          />
        </label>
        <div className="flex flex-wrap gap-4">
          <label className="font-sans text-sm text-studio-ink">
            <span className="eyebrow mr-2">Stage</span>
            <select
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="mt-1 border border-hairline bg-paper px-2 py-1.5 text-ink"
            >
              {["All", "Discover", "Define", "Deliver"].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
          <label className="font-sans text-sm text-studio-ink">
            <span className="eyebrow mr-2">Designer</span>
            <select
              value={designer}
              onChange={(e) => setDesigner(e.target.value)}
              className="mt-1 border border-hairline bg-paper px-2 py-1.5 text-ink"
            >
              <option value="All">All</option>
              {designers.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.name}
                </option>
              ))}
            </select>
          </label>
          <p className="ml-auto self-end font-mono text-xs tabular-nums text-faint">
            {filtered.length} / {prompts.length}
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {filtered.map((p) => (
          <section
            key={`${p.techniqueSlug}-${p.index}`}
            className="scroll-mt-8"
          >
            <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="folio-num text-4xl text-ink/85 sm:text-5xl">
                {String(p.techniqueNumber).padStart(2, "0")}
              </span>
              <Link
                href={`/techniques/${p.techniqueSlug}`}
                className="font-serif text-lg text-ink hover:underline hover:decoration-hairline"
              >
                {p.techniqueTitle}
              </Link>
              <span className="eyebrow">{p.stage}</span>
              {p.designerName ? (
                <span className="font-sans text-sm text-faint">{p.designerName}</span>
              ) : null}
            </div>
            <PromptBlock label={`Example ${p.index}`} why={p.why}>
              {p.prompt}
            </PromptBlock>
          </section>
        ))}
        {filtered.length === 0 ? (
          <p className="font-sans text-sm text-studio-ink">No prompts match.</p>
        ) : null}
      </div>
    </div>
  );
}
