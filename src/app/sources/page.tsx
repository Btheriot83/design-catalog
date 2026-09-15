import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { getSources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sources",
};

export default function SourcesPage() {
  const sources = getSources();

  return (
    <div>
      <PageHeader
        title="Sources"
        description="Citations, provenance, and the no-endorsement line."
      />

      <aside className="mb-10 border border-hairline bg-ghost p-5">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-ink">
          No endorsement
        </p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-studio-ink">
          Design Catalog is an independent editorial project. Linking to a
          person, publication, company, model, or repository does{" "}
          <strong className="font-medium text-ink">not</strong> imply
          affiliation, sponsorship, partnership, or endorsement by any cited
          party—including Anshu Chimala, Lenny’s Newsletter, Apple, Y Combinator,
          Sakana AI, fal.ai, Anthropic, Figma, or the maintainers of
          design-slop-cop. Technique summaries are our own editorial
          condensations of publicly available writing; they are not authorized
          transcripts. We do not invent or attribute unpublished Substack posts.
        </p>
      </aside>

      <ul className="divide-y divide-hairline border-t border-hairline">
        {sources.map((s) => (
          <li key={s.url} className="py-5">
            <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-faint">
              {s.kind}
            </p>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block font-serif text-xl text-ink hover:underline hover:decoration-hairline"
            >
              {s.title}
            </a>
            <p className="mt-1 break-all font-mono text-xs text-faint">
              {s.url}
            </p>
            {s.note ? (
              <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-studio-ink">
                {s.note}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
