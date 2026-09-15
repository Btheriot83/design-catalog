import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { StatusChip } from "@/components/StatusChip";
import { getAllDesigners } from "@/lib/content";
import type { Designer } from "@/lib/types";

export const metadata: Metadata = {
  title: "Designers",
};

function hasEntryPage(status: Designer["status"]) {
  return (
    status === "complete" || status === "partial" || status === "curator"
  );
}

function DesignerRow({ d }: { d: Designer }) {
  return (
    <li className="py-8">
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
          {d.status !== "curator" ? (
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
        {d.links.map((l) => (
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
  );
}

export default function DesignersPage() {
  const designers = getAllDesigners();
  const sources = designers.filter((d) => d.status !== "curator");
  const builders = designers.filter((d) => d.status === "curator");

  return (
    <div>
      <PageHeader
        eyebrow="People"
        title="Designers"
        description="Complete entries ship full technique sets. Partial catalogs one public source so far. Credits at the end name who built this desk."
      />
      <ul className="divide-y divide-hairline border-t border-ink">
        {sources.map((d) => (
          <DesignerRow key={d.slug} d={d} />
        ))}
      </ul>

      {builders.length > 0 ? (
        <section className="mt-6">
          <div className="mb-2 flex items-baseline justify-between gap-4 border-t border-ink pt-8">
            <h2 className="font-serif text-xl text-ink">Built by</h2>
            <span className="eyebrow">Credits</span>
          </div>
          <ul className="divide-y divide-hairline">
            {builders.map((d) => (
              <DesignerRow key={d.slug} d={d} />
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
