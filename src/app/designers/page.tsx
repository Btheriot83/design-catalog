import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { getAllDesigners } from "@/lib/content";
import type { Designer } from "@/lib/types";

export const metadata: Metadata = {
  title: "Designers",
};

function statusLabel(status: Designer["status"]) {
  if (status === "complete") return "Complete";
  if (status === "partial") return "Partial · in progress";
  return "Stub · next";
}

function hasEntryPage(status: Designer["status"]) {
  return status === "complete" || status === "partial";
}

export default function DesignersPage() {
  const designers = getAllDesigners();

  return (
    <div>
      <PageHeader
        kicker="Designers"
        title="Who’s in the catalog"
        description="Complete entries ship with full technique sets. Partial entries catalog one public source so far. Stubs mark next candidates with public sources only."
      />
      <ul className="space-y-4">
        {designers.map((d) => (
          <li
            key={d.slug}
            className="border border-ink/12 bg-paper-raised p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-serif text-2xl text-ink">
                {hasEntryPage(d.status) ? (
                  <Link
                    href={`/designers/${d.slug}`}
                    className="hover:text-ochre"
                  >
                    {d.name}
                  </Link>
                ) : (
                  d.name
                )}
              </h2>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink/45">
                {statusLabel(d.status)}
              </span>
            </div>
            <p className="mt-1 font-sans text-sm text-ochre/90">{d.role}</p>
            <p className="mt-3 max-w-3xl font-sans text-sm leading-relaxed text-ink/65">
              {d.bio}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-sans text-sm">
              {d.links.map((l) => (
                <li key={l.url}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink/70 underline decoration-ink/20 hover:text-ochre"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              {hasEntryPage(d.status) ? (
                <li>
                  <Link
                    href={`/designers/${d.slug}`}
                    className="text-ochre hover:underline"
                  >
                    Open entry →
                  </Link>
                </li>
              ) : null}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
