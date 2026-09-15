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
        kicker="Sources"
        title="Citations & provenance"
        description="Primary essay, author presence, related tooling, and next-candidate posts."
      />

      <aside className="mb-10 border border-deep-red/35 bg-deep-red/[0.04] p-5">
        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-deep-red">
          No endorsement
        </p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-ink/80">
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

      <ul className="space-y-5">
        {sources.map((s) => (
          <li
            key={s.url}
            className="border-b border-ink/10 pb-5 last:border-0"
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-ink/40">
              {s.kind}
            </p>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block font-serif text-xl text-ink hover:text-ochre"
            >
              {s.title}
            </a>
            <p className="mt-1 break-all font-mono text-xs text-ink/45">
              {s.url}
            </p>
            {s.note ? (
              <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-ink/60">
                {s.note}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
