import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NumberPopIn } from "@/components/NumberPopIn";
import { PromptBlock } from "@/components/PromptBlock";
import { TextsReveal } from "@/components/TextsReveal";
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

  const pairs = (technique.pairsWellWith ?? [])
    .map((s) => getTechnique(s))
    .filter(Boolean);

  const designer = getDesignerForTechnique(technique.slug);
  const num = String(technique.number).padStart(2, "0");

  return (
    <article>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">
            Technique {num}
            {designer ? ` · ${designer.name}` : ""}
          </p>
          <StageBadge stage={technique.stage} />
        </div>
        <span className="folio-num text-7xl text-ink/25 sm:text-8xl" aria-hidden>
          <NumberPopIn value={technique.number} pad={2} />
        </span>
      </div>

      <TextsReveal>
        <h1
          className="t-stagger-line t-stagger-line--1 max-w-2xl font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-[2.75rem]"
          style={{ viewTransitionName: `tech-${technique.slug}` }}
        >
          {technique.title}
        </h1>
        <p className="pull-principle t-stagger-line t-stagger-line--2">{technique.principle}</p>
      </TextsReveal>

      <section className="mt-14">
        <h2 className="eyebrow mb-5 text-ink">Procedure</h2>
        <ol className="space-y-5 border-t border-ink pt-6">
          {technique.procedure.map((step, i) => (
            <li key={i} className="grid grid-cols-[3rem_1fr] gap-3">
              <span className="folio-num text-2xl text-ink/70">{i + 1}</span>
              <span className="pt-1 font-sans text-base leading-relaxed text-studio-ink">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="eyebrow mb-5 text-ink">Example prompts</h2>
        <div className="space-y-4">
          {technique.examplePrompts.map((p, i) => (
            <PromptBlock
              key={i}
              label={`Prompt ${i + 1}`}
              why={technique.promptWhy?.[i]}
            >
              {p}
            </PromptBlock>
          ))}
        </div>
      </section>

      {technique.workedExamples && technique.workedExamples.length > 0 ? (
        <section className="mt-14">
          <h2 className="eyebrow mb-5 text-ink">Worked examples</h2>
          <div className="space-y-6">
            {technique.workedExamples.map((ex, i) => (
              <div
                key={i}
                className="border border-hairline bg-card p-5 press-shadow sm:p-6"
              >
                <h3 className="font-serif text-xl text-ink">{ex.title}</h3>
                {ex.before || ex.after ? (
                  <dl className="mt-4 space-y-3 border-l border-ink pl-4 font-sans text-sm leading-relaxed">
                    {ex.before ? (
                      <div>
                        <dt className="eyebrow text-faint">Before</dt>
                        <dd className="mt-1 text-studio-ink">{ex.before}</dd>
                      </div>
                    ) : null}
                    {ex.after ? (
                      <div>
                        <dt className="eyebrow text-faint">After</dt>
                        <dd className="mt-1 text-studio-ink">{ex.after}</dd>
                      </div>
                    ) : null}
                  </dl>
                ) : null}
                <p className="mt-4 font-sans text-sm leading-relaxed text-studio-ink">
                  {ex.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {technique.checklist && technique.checklist.length > 0 ? (
        <section className="mt-14">
          <h2 className="eyebrow mb-5 text-ink">Done when</h2>
          <ul className="space-y-3 border-t border-hairline pt-5">
            {technique.checklist.map((c, i) => (
              <li
                key={i}
                className="flex gap-3 font-sans text-sm leading-relaxed text-ink"
              >
                <span className="mt-0.5 font-mono text-xs text-faint">☐</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {technique.antiPatterns && technique.antiPatterns.length > 0 ? (
        <section className="mt-14">
          <h2 className="eyebrow mb-5 text-ink">If you skip this</h2>
          <ul className="space-y-3 bg-ghost/80 px-5 py-5">
            {technique.antiPatterns.map((a, i) => (
              <li
                key={i}
                className="flex gap-3 font-sans text-sm leading-relaxed text-studio-ink"
              >
                <span className="text-faint">—</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-14">
        <h2 className="eyebrow mb-4 text-ink">Tips</h2>
        <ul className="space-y-2.5 font-sans text-sm leading-relaxed text-faint">
          {technique.tips.map((tip, i) => (
            <li key={i} className="flex gap-3">
              <span>·</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border-t border-ink pt-8">
        <h2 className="eyebrow mb-4 text-ink">Sources</h2>
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

      {pairs.length > 0 ? (
        <section className="mt-10">
          <h2 className="eyebrow mb-3 text-ink">Pairs well with</h2>
          <ul className="space-y-2 font-sans text-sm">
            {pairs.map(
              (r) =>
                r && (
                  <li key={r.slug}>
                    <Link
                      href={`/techniques/${r.slug}`}
                      className="text-ink hover:underline hover:decoration-hairline"
                    >
                      <span className="folio-num mr-2 text-lg text-ink/60">
                        {String(r.number).padStart(2, "0")}
                      </span>
                      {r.title}
                    </Link>
                  </li>
                ),
            )}
          </ul>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="mt-10">
          <h2 className="eyebrow mb-3 text-ink">Related</h2>
          <ul className="space-y-2 font-sans text-sm">
            {related.map(
              (r) =>
                r && (
                  <li key={r.slug}>
                    <Link
                      href={`/techniques/${r.slug}`}
                      className="text-ink hover:underline hover:decoration-hairline"
                    >
                      <span className="folio-num mr-2 text-lg text-ink/60">
                        {String(r.number).padStart(2, "0")}
                      </span>
                      {r.title}
                    </Link>
                  </li>
                ),
            )}
          </ul>
        </section>
      ) : null}

      <p className="mt-14 font-sans text-sm text-faint">
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
