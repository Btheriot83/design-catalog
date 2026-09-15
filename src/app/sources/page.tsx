import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { getDesigner, getSources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sources",
};

export default function SourcesPage() {
  const sources = getSources();

  return (
    <div>
      <PageHeader
        eyebrow="Provenance"
        title="Sources"
        description="Citations, what’s covered in public text, and honest paywalled gaps. No endorsement."
      />

      <aside className="mb-10 border border-hairline bg-ghost/80 p-5 press-shadow">
        <p className="eyebrow text-ink">No endorsement</p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-studio-ink">
          Design Catalog is an independent editorial project. Linking to a
          person, publication, company, model, or repository does{" "}
          <strong className="font-medium text-ink">not</strong> imply
          affiliation, sponsorship, partnership, or endorsement by any cited
          party—including Anshu Chimala, Lenny’s Newsletter, Nate Parrott,
          Anthropic, Greg Huntoon, Figma, Apple, Y Combinator, Sakana AI,
          fal.ai, or the maintainers of design-slop-cop. Technique summaries are
          editorial condensations of publicly available writing—not authorized
          transcripts. We do not invent unpublished Substack posts or paywalled
          quotes. Catalogued by{" "}
          <Link
            href="/designers/brandon-theriot"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            Brandon Theriot
          </Link>
          .
        </p>
      </aside>

      <ul className="divide-y divide-hairline border-t border-ink">
        {sources.map((s) => {
          const person = s.designerSlug
            ? getDesigner(s.designerSlug)
            : undefined;
          return (
            <li key={s.url} className="py-7">
              <p className="eyebrow">{s.kind}</p>
              {person ? (
                <p className="mt-2 font-sans text-sm text-studio-ink">
                  Person ·{" "}
                  <Link
                    href={`/designers/${person.slug}`}
                    className="text-ink underline decoration-hairline hover:decoration-ink"
                  >
                    {person.name}
                  </Link>
                </p>
              ) : null}
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-serif text-xl text-ink hover:underline hover:decoration-hairline"
              >
                {s.title}
              </a>
              <p className="mt-1 break-all font-mono text-xs text-faint">
                {s.url}
              </p>
              {s.note ? (
                <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-studio-ink">
                  {s.note}
                </p>
              ) : null}
              {s.coverage ? (
                <p className="mt-3 max-w-xl border-l border-ink pl-4 font-sans text-sm leading-relaxed text-studio-ink">
                  <span className="eyebrow mr-2 text-faint">Coverage</span>
                  {s.coverage}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
