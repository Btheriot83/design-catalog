"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { StatusChip } from "@/components/StatusChip";
import type { Designer } from "@/lib/types";

function hasEntryPage(status: Designer["status"]) {
  return (
    status === "complete" ||
    status === "partial" ||
    status === "curator" ||
    status === "directory"
  );
}

function outboundLinks(d: Designer) {
  const prefer = ["X", "Site", "Personal / blog", "transitions.dev"];
  const ranked = [...d.links].sort((a, b) => {
    const ai = prefer.findIndex((p) => a.label === p || a.label.startsWith(p));
    const bi = prefer.findIndex((p) => b.label === p || b.label.startsWith(p));
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });
  return ranked.slice(0, 4);
}

type Filter = "all" | "techniques" | "directory" | "builder";

export function DesignersDirectory({ designers }: { designers: Designer[] }) {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return designers.filter((d) => {
      if (filter === "techniques" && d.techniqueSlugs.length === 0) return false;
      if (filter === "directory" && d.status !== "directory") return false;
      if (filter === "builder" && d.status !== "curator") return false;
      if (!needle) return true;
      const hay = [
        d.name,
        d.role,
        d.bio,
        ...(d.highlights ?? []),
        ...d.links.map((l) => l.label),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(needle);
    });
  }, [designers, q, filter]);

  const techniques = designers.filter((d) => d.techniqueSlugs.length > 0);
  const directory = designers.filter((d) => d.status === "directory");
  const builders = designers.filter((d) => d.status === "curator");

  return (
    <div>
      <div className="mb-6 border border-ink/20 bg-card p-4 press-shadow sm:p-5">
        <p className="eyebrow text-ink">Credit strip</p>
        <p className="mt-2 font-sans text-sm leading-relaxed text-studio-ink">
          Public sources only. No endorsement, affiliation, or sponsorship
          implied by any listing. Outbound links go to each person&apos;s own
          site or profiles—verify there.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <label className="block min-w-0 flex-1">
          <span className="eyebrow">Search directory</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Name, role, craft…"
            className="mt-2 w-full border border-hairline bg-paper px-3 py-2.5 font-sans text-sm text-ink outline-none placeholder:text-faint focus:border-ink"
          />
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter">
          {(
            [
              ["all", `All · ${designers.length}`],
              ["techniques", `Techniques · ${techniques.length}`],
              ["directory", `Directory · ${directory.length}`],
              ["builder", `Built by · ${builders.length}`],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={
                filter === id
                  ? "border border-ink bg-ink px-3 py-1.5 font-sans text-xs uppercase tracking-[0.12em] text-paper"
                  : "border border-hairline bg-card px-3 py-1.5 font-sans text-xs uppercase tracking-[0.12em] text-studio-ink press-shadow hover:border-ink hover:text-ink"
              }
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-3 flex items-baseline justify-between gap-3 border-b border-ink pb-2">
        <span className="font-serif text-lg text-ink">
          {filtered.length === designers.length
            ? "Letterpress roll"
            : `${filtered.length} match${filtered.length === 1 ? "" : "es"}`}
        </span>
        <span className="eyebrow">{String(filtered.length).padStart(2, "0")}</span>
      </p>

      {filtered.length === 0 ? (
        <p className="py-10 font-sans text-sm text-studio-ink">
          No entries match. Clear search or switch filter.
        </p>
      ) : (
        <ul className="divide-y divide-hairline">
          {filtered.map((d) => (
            <li key={d.slug} className="py-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-serif text-2xl text-ink">
                  {hasEntryPage(d.status) ? (
                    <Link
                      href={`/designers/${d.slug}`}
                      className="hover:underline hover:decoration-hairline"
                    >
                      {d.name}
                    </Link>
                  ) : (
                    d.name
                  )}
                </h2>
                <div className="flex items-center gap-3">
                  {d.techniqueSlugs.length > 0 ? (
                    <span className="folio-num text-2xl text-ink/50">
                      {String(d.techniqueSlugs.length).padStart(2, "0")}
                    </span>
                  ) : null}
                  <StatusChip status={d.status} />
                </div>
              </div>
              <p className="mt-1 font-sans text-sm text-studio-ink">{d.role}</p>
              <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-studio-ink">
                {d.bio}
              </p>
              {d.highlights && d.highlights.length > 0 ? (
                <ul className="mt-4 max-w-xl space-y-1.5 border-l border-hairline pl-4 font-sans text-sm text-studio-ink">
                  {d.highlights.slice(0, 3).map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-sans text-sm">
                {outboundLinks(d).map((l) => (
                  <li key={l.url}>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-studio-ink underline decoration-hairline hover:text-ink hover:decoration-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                {hasEntryPage(d.status) ? (
                  <li>
                    <Link
                      href={`/designers/${d.slug}`}
                      className="text-ink underline decoration-hairline hover:decoration-ink"
                    >
                      Open entry
                    </Link>
                  </li>
                ) : null}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
