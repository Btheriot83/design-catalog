import Link from "next/link";
import { TechniqueCard } from "@/components/TechniqueCard";
import { getAllTechniques, getTechniquesByStage } from "@/lib/content";

export default function HomePage() {
  const byStage = getTechniquesByStage();
  const count = getAllTechniques().length;

  return (
    <div>
      <section className="mb-14">
        <h1 className="max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight text-ink sm:text-5xl">
          Techniques for getting past average AI design
        </h1>
        <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-studio-ink">
          A browsable study desk of craft notes—mostly from{" "}
          <Link
            href="/designers/anshu-chimala"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            Anshu Chimala
          </Link>
          , with a partial set from{" "}
          <Link
            href="/designers/nate-parrott"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            Nate Parrott
          </Link>
          . Public sources only. No endorsement.
        </p>
        <p className="mt-8">
          <Link
            href="/techniques"
            className="inline-block border border-ink bg-ink px-4 py-2.5 font-sans text-sm text-paper hover:bg-transparent hover:text-ink"
          >
            Open the index · {count} techniques
          </Link>
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 font-serif text-2xl text-ink">Contents</h2>
        <div className="space-y-8">
          {byStage.map(({ stage, techniques }) => (
            <div key={stage}>
              <div className="mb-3 flex items-baseline gap-3 border-b border-hairline pb-2">
                <h3 className="font-serif text-lg text-ink">{stage}</h3>
                <span className="font-mono text-xs tabular-nums text-faint">
                  {techniques.length}
                </span>
              </div>
              <ol className="space-y-1.5 font-sans text-sm text-studio-ink">
                {techniques.map((t) => (
                  <li key={t.slug} className="flex gap-3">
                    <span className="w-6 shrink-0 font-mono text-xs tabular-nums text-faint">
                      {String(t.number).padStart(2, "0")}
                    </span>
                    <Link
                      href={`/techniques/${t.slug}`}
                      className="text-ink hover:underline hover:decoration-hairline hover:underline-offset-4"
                    >
                      {t.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 font-serif text-2xl text-ink">All techniques</h2>
        <p className="mb-6 font-sans text-sm text-faint">
          Numbered in catalog order.
        </p>
        <div className="border-t border-hairline">
          {getAllTechniques().map((t) => (
            <TechniqueCard key={t.slug} technique={t} />
          ))}
        </div>
      </section>
    </div>
  );
}
