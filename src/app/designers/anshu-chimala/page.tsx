import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { StatusChip } from "@/components/StatusChip";
import { TechniqueCard } from "@/components/TechniqueCard";
import { getAllTechniques, getDesigner } from "@/lib/content";

export const metadata: Metadata = {
  title: "Anshu Chimala",
};

export default function AnshuPage() {
  const designer = getDesigner("anshu-chimala");
  if (!designer) notFound();

  const techniques = getAllTechniques().filter((t) =>
    designer.techniqueSlugs.includes(t.slug),
  );

  return (
    <div>
      <div className="mb-3">
        <StatusChip status={designer.status} />
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

      {designer.stages ? (
        <section className="mb-14">
          <h2 className="mb-5 font-serif text-2xl text-ink">
            Stages · Double Diamond for agents
          </h2>
          <ol className="space-y-5 border-t border-hairline pt-5">
            {designer.stages.map((s, i) => (
              <li key={s.id} className="flex gap-4">
                <span className="w-6 shrink-0 font-mono text-sm tabular-nums text-faint">
                  {i + 1}
                </span>
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
          <h2 className="font-serif text-2xl text-ink">Eight techniques</h2>
          <Link
            href="/techniques"
            className="font-sans text-sm text-faint hover:text-ink"
          >
            Index →
          </Link>
        </div>
        <div className="border-t border-hairline">
          {techniques.map((t) => (
            <TechniqueCard key={t.slug} technique={t} />
          ))}
        </div>
      </section>
    </div>
  );
}
