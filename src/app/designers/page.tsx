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
  return status === "complete" || status === "partial";
}

export default function DesignersPage() {
  const designers = getAllDesigners();

  return (
    <div>
      <PageHeader
        title="Designers"
        description="Complete entries ship full technique sets. Partial catalogs one public source so far. Stubs mark next candidates—public sources only."
      />
      <ul className="divide-y divide-hairline border-t border-hairline">
        {designers.map((d) => (
          <li key={d.slug} className="py-8">
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
              <StatusChip status={d.status} />
            </div>
            <p className="mt-1 font-sans text-sm text-studio-ink">{d.role}</p>
            <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-studio-ink">
              {d.bio}
            </p>
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
        ))}
      </ul>
    </div>
  );
}
