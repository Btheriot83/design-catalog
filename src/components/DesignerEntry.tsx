import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { StatusChip } from "@/components/StatusChip";
import { TechniqueCard } from "@/components/TechniqueCard";
import type { Designer, Technique } from "@/lib/types";

export function DesignerEntry({
  designer,
  techniques,
  stagesTitle,
}: {
  designer: Designer;
  techniques: Technique[];
  stagesTitle: string;
}) {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <StatusChip status={designer.status} />
        <span className="folio-num text-3xl text-ink/40">
          {String(techniques.length).padStart(2, "0")}
        </span>
        <span className="eyebrow">techniques</span>
      </div>
      <PageHeader title={designer.name} description={designer.role} />

      <div className="mb-12 max-w-xl space-y-4 font-sans text-base leading-relaxed text-studio-ink">
        <p>{designer.bio}</p>
        <ul className="flex flex-wrap gap-4 text-sm">
          {designer.links.map((l) => (
            <li key={l.url}>
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-hairline hover:text-ink hover:decoration-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {designer.highlights && designer.highlights.length > 0 ? (
        <section className="mb-12 border border-hairline bg-card p-5 press-shadow sm:p-6">
          <h2 className="eyebrow text-ink">Highlights</h2>
          <ul className="mt-4 space-y-2.5 font-sans text-sm leading-relaxed text-studio-ink">
            {designer.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="text-faint">·</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {designer.stages ? (
        <section className="mb-14">
          <h2 className="mb-5 font-serif text-2xl text-ink">{stagesTitle}</h2>
          <ol className="space-y-5 border-t border-ink pt-5">
            {designer.stages.map((s, i) => (
              <li key={s.id} className="grid grid-cols-[2.5rem_1fr] gap-3">
                <span className="folio-num text-2xl text-ink/60">{i + 1}</span>
                <div>
                  <h3 className="font-serif text-lg text-ink">{s.title}</h3>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-studio-ink">
                    {s.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <section>
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="font-serif text-2xl text-ink">
            {techniques.length} techniques
          </h2>
          <Link
            href={`/techniques?designer=${designer.slug}`}
            className="font-sans text-sm text-faint hover:text-ink"
          >
            Filtered index →
          </Link>
        </div>
        <hr className="rule-double mb-4" />
        <div>
          {techniques.map((t) => (
            <TechniqueCard key={t.slug} technique={t} />
          ))}
        </div>
      </section>
    </div>
  );
}
