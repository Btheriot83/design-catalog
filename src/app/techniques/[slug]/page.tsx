import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PromptBlock } from "@/components/PromptBlock";
import { StageBadge } from "@/components/StageBadge";
import { getAllTechniques, getTechnique } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllTechniques().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTechnique(slug);
  if (!t) return { title: "Technique" };
  return { title: t.title };
}

export default async function TechniquePage({ params }: Props) {
  const { slug } = await params;
  const technique = getTechnique(slug);
  if (!technique) notFound();

  const related = technique.related
    .map((s) => getTechnique(s))
    .filter(Boolean);

  const num = String(technique.number).padStart(2, "0");

  return (
    <article>
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <StageBadge stage={technique.stage} />
        <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink/40">
          Technique {num}
        </span>
      </div>

      <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
        {technique.title}
      </h1>

      <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink/70">
        {technique.principle}
      </p>

      <section className="mt-12">
        <h2 className="mb-4 font-serif text-2xl text-ink">Procedure</h2>
        <ol className="space-y-3 border-l border-ink/15 pl-6 font-sans text-base leading-relaxed text-ink/75">
          {technique.procedure.map((step, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-6 top-0 -translate-x-full font-mono text-xs text-ink/35">
                {i + 1}.
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 font-serif text-2xl text-ink">Example prompts</h2>
        <div className="space-y-4">
          {technique.examplePrompts.map((p, i) => (
            <PromptBlock key={i} label={`Prompt ${i + 1}`}>
              {p}
            </PromptBlock>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 font-serif text-2xl text-ink">Tips</h2>
        <ul className="space-y-2 font-sans text-base leading-relaxed text-ink/75">
          {technique.tips.map((tip, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ochre" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-ink/10 pt-8">
        <h2 className="mb-3 font-serif text-xl text-ink">Sources</h2>
        <ul className="space-y-2 font-sans text-sm">
          {technique.sourceUrls.map((url) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-ink/70 underline decoration-ink/20 hover:text-ochre"
              >
                {url}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {related.length > 0 ? (
        <section className="mt-10">
          <h2 className="mb-3 font-serif text-xl text-ink">Related</h2>
          <ul className="flex flex-wrap gap-3 font-sans text-sm">
            {related.map(
              (r) =>
                r && (
                  <li key={r.slug}>
                    <Link
                      href={`/techniques/${r.slug}`}
                      className="border border-ink/15 px-3 py-1.5 hover:border-ochre hover:text-ochre"
                    >
                      {String(r.number).padStart(2, "0")} · {r.title}
                    </Link>
                  </li>
                ),
            )}
          </ul>
        </section>
      ) : null}

      <p className="mt-12 font-sans text-sm text-ink/45">
        <Link href="/techniques" className="hover:text-ochre">
          ← All techniques
        </Link>
        {" · "}
        <Link href="/designers/anshu-chimala" className="hover:text-ochre">
          Anshu Chimala
        </Link>
      </p>
    </article>
  );
}
