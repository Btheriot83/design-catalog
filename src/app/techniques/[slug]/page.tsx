import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PromptBlock } from "@/components/PromptBlock";
import { StageBadge } from "@/components/StageBadge";
import {
  getAllTechniques,
  getDesignerForTechnique,
  getTechnique,
} from "@/lib/content";

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

  const designer = getDesignerForTechnique(technique.slug);
  const num = String(technique.number).padStart(2, "0");

  return (
    <article>
      <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-mono text-sm tabular-nums text-faint">
          {num}
        </span>
        <StageBadge stage={technique.stage} />
      </div>

      <h1 className="max-w-2xl font-serif text-4xl leading-tight tracking-tight text-ink sm:text-[2.75rem]">
        {technique.title}
      </h1>

      <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-studio-ink">
        {technique.principle}
      </p>

      <section className="mt-12">
        <h2 className="mb-5 font-serif text-2xl text-ink">Procedure</h2>
        <ol className="space-y-4">
          {technique.procedure.map((step, i) => (
            <li key={i} className="flex gap-4 font-sans text-base leading-relaxed text-ink">
              <span className="mt-0.5 w-6 shrink-0 font-mono text-sm tabular-nums text-faint">
                {i + 1}
              </span>
              <span className="text-studio-ink">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="mb-5 font-serif text-2xl text-ink">Example prompts</h2>
        <div className="space-y-3">
          {technique.examplePrompts.map((p, i) => (
            <PromptBlock key={i} label={`Prompt ${i + 1}`}>
              {p}
            </PromptBlock>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 font-serif text-xl text-ink">Tips</h2>
        <ul className="space-y-2 font-sans text-sm leading-relaxed text-faint">
          {technique.tips.map((tip, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-faint">·</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-hairline pt-8">
        <h2 className="mb-3 font-serif text-lg text-ink">Sources</h2>
        <ul className="space-y-2 font-sans text-sm">
          {technique.sourceUrls.map((url) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-studio-ink underline decoration-hairline hover:text-ink hover:decoration-ink"
              >
                {url}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {related.length > 0 ? (
        <section className="mt-10">
          <h2 className="mb-3 font-serif text-lg text-ink">Related</h2>
          <ul className="space-y-2 font-sans text-sm">
            {related.map(
              (r) =>
                r && (
                  <li key={r.slug}>
                    <Link
                      href={`/techniques/${r.slug}`}
                      className="text-ink hover:underline hover:decoration-hairline"
                    >
                      <span className="font-mono text-xs text-faint">
                        {String(r.number).padStart(2, "0")}
                      </span>{" "}
                      {r.title}
                    </Link>
                  </li>
                ),
            )}
          </ul>
        </section>
      ) : null}

      <p className="mt-12 font-sans text-sm text-faint">
        <Link href="/techniques" className="hover:text-ink">
          ← Technique index
        </Link>
        {designer ? (
          <>
            {" · "}
            <Link
              href={`/designers/${designer.slug}`}
              className="hover:text-ink"
            >
              {designer.name}
            </Link>
          </>
        ) : null}
      </p>
    </article>
  );
}
