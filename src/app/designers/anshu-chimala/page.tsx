import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
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
      <PageHeader
        kicker="Designer"
        title={designer.name}
        description={designer.role}
      />

      <div className="mb-12 max-w-2xl space-y-4 font-sans text-base leading-relaxed text-ink/75">
        <p>{designer.bio}</p>
        <ul className="flex flex-wrap gap-4 text-sm">
          {designer.links.map((l) => (
            <li key={l.url}>
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-ochre/40 hover:text-ochre"
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
          <div className="grid gap-4 sm:grid-cols-3">
            {designer.stages.map((s) => (
              <div
                key={s.id}
                className="border border-ink/12 bg-paper-raised p-5"
              >
                <h3 className="font-serif text-xl text-ink">{s.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink/60">
                  {s.summary}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section>
        <div className="mb-5 flex items-end justify-between">
          <h2 className="font-serif text-2xl text-ink">Eight techniques</h2>
          <Link
            href="/techniques"
            className="font-sans text-sm text-ink/50 hover:text-ochre"
          >
            All techniques →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {techniques.map((t) => (
            <TechniqueCard key={t.slug} technique={t} />
          ))}
        </div>
      </section>
    </div>
  );
}
