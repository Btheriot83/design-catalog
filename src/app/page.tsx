import Link from "next/link";
import { TechniqueCard } from "@/components/TechniqueCard";
import { getAllTechniques, getTechniquesByStage } from "@/lib/content";

export default function HomePage() {
  const byStage = getTechniquesByStage();
  const count = getAllTechniques().length;

  return (
    <div>
      <section className="mb-14 max-w-3xl">
        <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.22em] text-ochre">
          Editorial catalog · v1
        </p>
        <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-6xl">
          How to turn AI into a world-class designer
        </h1>
        <p className="mt-6 font-sans text-lg leading-relaxed text-ink/70">
          Eight techniques from{" "}
          <Link
            href="/designers/anshu-chimala"
            className="text-ink underline decoration-ochre/50 hover:text-ochre"
          >
            Anshu Chimala
          </Link>
          —Apple eng/design leadership, YC founder—mapped across Discover,
          Define, and Deliver. A Double Diamond–inspired process for agent
          teams, not committees of next tokens.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 font-sans text-sm">
          <Link
            href="/techniques"
            className="border border-ink bg-ink px-4 py-2 text-paper hover:border-ochre hover:bg-ochre"
          >
            Browse {count} techniques
          </Link>
          <Link
            href="/prompts"
            className="border border-ink/25 px-4 py-2 text-ink hover:border-ochre hover:text-ochre"
          >
            Prompt library
          </Link>
          <Link
            href="/sources"
            className="border border-ink/25 px-4 py-2 text-ink hover:border-ochre hover:text-ochre"
          >
            Sources
          </Link>
        </div>
      </section>

      <section className="mb-16 grid gap-4 sm:grid-cols-3">
        {byStage.map(({ stage, techniques }) => (
          <div
            key={stage}
            className="border border-ink/12 bg-paper-raised p-5"
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink/45">
              Stage
            </p>
            <h2 className="mt-1 font-serif text-2xl text-ink">{stage}</h2>
            <p className="mt-2 font-sans text-sm text-ink/55">
              {techniques.length} technique
              {techniques.length === 1 ? "" : "s"}
            </p>
            <ul className="mt-4 space-y-1.5 font-sans text-sm text-ink/75">
              {techniques.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/techniques/${t.slug}`}
                    className="hover:text-ochre"
                  >
                    <span className="tabular-nums text-ink/35">
                      {String(t.number).padStart(2, "0")}
                    </span>{" "}
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl text-ink">All techniques</h2>
          <Link
            href="/techniques"
            className="font-sans text-sm text-ink/50 hover:text-ochre"
          >
            View index →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {getAllTechniques().map((t) => (
            <TechniqueCard key={t.slug} technique={t} />
          ))}
        </div>
      </section>
    </div>
  );
}
