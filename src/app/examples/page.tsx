import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { getAllTechniques } from "@/lib/content";

export const metadata: Metadata = {
  title: "Examples",
};

export default function ExamplesPage() {
  const techniques = getAllTechniques();

  const examples = techniques.flatMap((t) =>
    (t.workedExamples ?? []).map((ex) => ({
      techniqueNumber: t.number,
      techniqueTitle: t.title,
      techniqueSlug: t.slug,
      exampleTitle: ex.title,
    })),
  );

  const checklists = techniques
    .filter((t) => (t.checklist?.length ?? 0) > 0)
    .map((t) => ({
      techniqueNumber: t.number,
      techniqueTitle: t.title,
      techniqueSlug: t.slug,
      preview: t.checklist![0],
      count: t.checklist!.length,
    }));

  return (
    <div>
      <PageHeader
        eyebrow="Index"
        title="Worked examples & checklists"
        description={
          <>
            Every technique entry carries worked examples and a “done when”
            checklist. This page is the desk index—jump straight to the section
            on each technique, or browse the{" "}
            <Link
              href="/techniques"
              className="text-ink underline decoration-hairline hover:decoration-ink"
            >
              technique index
            </Link>
            .
          </>
        }
      />

      <section className="mb-16">
        <div className="mb-1 flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-2xl text-ink">Worked examples</h2>
          <span className="eyebrow">
            {String(examples.length).padStart(2, "0")} entries
          </span>
        </div>
        <hr className="rule-double mb-6" />
        <ol className="space-y-4">
          {examples.map((ex, i) => (
            <li
              key={`${ex.techniqueSlug}-${i}`}
              className="grid grid-cols-[3.25rem_1fr] gap-x-3 border-b border-hairline pb-4 last:border-0 sm:grid-cols-[4rem_1fr] sm:gap-x-5"
            >
              <span className="folio-num text-2xl text-ink/70 sm:text-3xl">
                {String(ex.techniqueNumber).padStart(2, "0")}
              </span>
              <div className="min-w-0 pt-1">
                <Link
                  href={`/techniques/${ex.techniqueSlug}#worked-examples`}
                  className="font-serif text-lg leading-snug text-ink hover:underline hover:decoration-hairline hover:underline-offset-4"
                >
                  {ex.exampleTitle}
                </Link>
                <p className="mt-1 font-sans text-sm text-studio-ink">
                  <span className="text-faint">from</span> {ex.techniqueTitle}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <div className="mb-1 flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-2xl text-ink">Checklists</h2>
          <span className="eyebrow">
            {String(checklists.length).padStart(2, "0")} techniques
          </span>
        </div>
        <hr className="rule-double mb-6" />
        <ol className="space-y-4">
          {checklists.map((c) => (
            <li
              key={c.techniqueSlug}
              className="grid grid-cols-[3.25rem_1fr] gap-x-3 border-b border-hairline pb-4 last:border-0 sm:grid-cols-[4rem_1fr] sm:gap-x-5"
            >
              <span className="folio-num text-2xl text-ink/70 sm:text-3xl">
                {String(c.techniqueNumber).padStart(2, "0")}
              </span>
              <div className="min-w-0 pt-1">
                <Link
                  href={`/techniques/${c.techniqueSlug}#checklist`}
                  className="font-serif text-lg leading-snug text-ink hover:underline hover:decoration-hairline hover:underline-offset-4"
                >
                  {c.techniqueTitle}
                </Link>
                <p className="mt-1 font-sans text-sm leading-relaxed text-studio-ink">
                  <span className="text-faint">
                    {c.count} item{c.count === 1 ? "" : "s"} ·{" "}
                  </span>
                  {c.preview}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
