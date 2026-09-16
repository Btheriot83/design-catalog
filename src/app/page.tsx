import Image from "next/image";
import Link from "next/link";
import { FolioNumber } from "@/components/motion/FolioNumber";
import { TextsReveal } from "@/components/motion/TextsReveal";
import {
  getAllDesigners,
  getAllTechniques,
  getTechniquesByStage,
} from "@/lib/content";

export default function HomePage() {
  const byStage = getTechniquesByStage();
  const techniques = getAllTechniques();
  const techniqueAuthors = getAllDesigners().filter(
    (d) => d.status === "complete" || d.status === "partial",
  );
  const directoryCount = getAllDesigners().filter(
    (d) => d.status === "directory" || d.status === "complete" || d.status === "partial" || d.status === "curator",
  ).length;
  const promptCount = techniques.reduce(
    (n, t) => n + t.examplePrompts.length,
    0,
  );

  return (
    <div>
      <section className="relative mb-16 overflow-hidden pb-2">
        <Image
          src="/ink-mark.png"
          alt=""
          width={420}
          height={420}
          className="pointer-events-none absolute -right-16 -top-16 w-56 opacity-[0.28] sm:-right-10 sm:w-72 sm:opacity-[0.32]"
          unoptimized
          priority
        />
        <p className="eyebrow mb-5">Craft desk · anti-slop directory</p>
        <TextsReveal
          className="max-w-2xl"
          line1={
            <span className="font-serif text-[2.6rem] font-normal leading-[1.08] tracking-tight text-ink sm:text-5xl sm:leading-[1.06]">
              A quiet directory of craft designers—and techniques that outrun average AI
            </span>
          }
          line2={
            <span className="mt-7 block max-w-xl font-sans text-base font-normal leading-relaxed text-studio-ink">
              Browse a letterpress roll of public craft voices, then dig into
              technique sets from{" "}
              <Link
                href="/designers/anshu-chimala"
                className="text-ink underline decoration-hairline hover:decoration-ink"
              >
                Anshu
              </Link>
              ,{" "}
              <Link
                href="/designers/nate-parrott"
                className="text-ink underline decoration-hairline hover:decoration-ink"
              >
                Nate
              </Link>
              ,{" "}
              <Link
                href="/designers/greg-huntoon"
                className="text-ink underline decoration-hairline hover:decoration-ink"
              >
                Greg
              </Link>
              , plus craft techniques from{" "}
              <Link
                href="/guides/anti-slop-desk"
                className="text-ink underline decoration-hairline hover:decoration-ink"
              >
                Rauno, Emil, Maggie, Schoger, Victor, Chimero, Jakub
              </Link>
              . Credits and outbound links only—no endorsement.
            </span>
          }
        />
        <hr className="rule-double mt-8 max-w-[14rem]" />
        {/* Stats as doors — make-it-alive + cut-elements: counts navigate; drop duplicate CTAs */}
        <dl className="mt-10 grid grid-cols-3 gap-3 border-y border-ink/80 py-5 sm:max-w-md sm:gap-4 sm:py-6">
          {[
            {
              k: "Techniques",
              v: String(techniques.length).padStart(2, "0"),
              href: "/techniques",
              hint: "Open technique index",
            },
            {
              k: "Prompts",
              v: String(promptCount),
              href: "/prompts",
              hint: "Open prompt library",
            },
            {
              k: "Directory",
              v: String(directoryCount),
              href: "/designers",
              hint: "Open designer directory",
            },
          ].map((s) => (
            <div key={s.k}>
              <dt>
                <Link
                  href={s.href}
                  className="group block rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                  aria-label={s.hint}
                >
                  <span className="eyebrow text-studio-ink transition-colors group-hover:text-ink group-focus-visible:text-ink">
                    {s.k}
                  </span>
                  <span className="mt-1 block text-4xl sm:text-5xl">
                    <FolioNumber
                      value={s.v}
                      className="text-4xl underline decoration-transparent underline-offset-8 transition-[text-decoration-color] group-hover:decoration-ink/50 group-focus-visible:decoration-ink/50 sm:text-5xl"
                    />
                  </span>
                </Link>
              </dt>
            </div>
          ))}
        </dl>
        <p className="mt-3 font-sans text-[11px] tracking-wide text-faint">
          Press a count to open it · or jump to{" "}
          <Link
            href="/examples"
            className="text-studio-ink underline decoration-hairline hover:text-ink hover:decoration-ink"
          >
            examples &amp; checklists
          </Link>
          {" · "}
          <Link
            href="/resources"
            className="text-studio-ink underline decoration-hairline hover:text-ink hover:decoration-ink"
          >
            free craft resources
          </Link>
          .
        </p>
        <p className="mt-4 font-sans text-sm text-studio-ink">
          Technique authors on desk:{" "}
          {techniqueAuthors.map((d, i) => (
            <span key={d.slug}>
              {i > 0 ? ", " : ""}
              <Link
                href={`/designers/${d.slug}`}
                className="text-ink underline decoration-hairline hover:decoration-ink"
              >
                {d.name}
              </Link>
            </span>
          ))}
          .
        </p>
      </section>

      <section className="mb-14 border border-ink/20 bg-card p-5 index-card sm:p-6">
        <p className="eyebrow text-ink">How to use this desk</p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-studio-ink">
          Start with the{" "}
          <Link href="/designers" className="text-ink underline decoration-hairline">
            designer directory
          </Link>{" "}
          for outbound craft credits, or run Discover broadly (seed / ambitious
          brief / TC-EBC Task+Context) → Define identity (critic, look,
          image/motion) → Deliver by subtraction (cut, kill tells, hand-rewrite).
          Full checklist in the{" "}
          <Link href="/compare" className="text-ink underline decoration-hairline">
            field guide
          </Link>
          . For worked examples and done-when lists, see{" "}
          <Link href="/examples" className="text-ink underline decoration-hairline">
            Examples
          </Link>
          .
        </p>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-serif text-2xl text-ink">Contents</h2>
          <span className="eyebrow">By stage · {techniques.length} entries</span>
        </div>
        <div className="space-y-12">
          {byStage.map(({ stage, techniques: list }) => (
            <div key={stage}>
              <div className="mb-4 flex items-baseline gap-3 border-b border-ink pb-2">
                <h3 className="font-serif text-xl tracking-tight text-ink">
                  {stage}
                </h3>
                <FolioNumber
                  value={String(list.length).padStart(2, "0")}
                  className="text-2xl text-ink/45"
                />
              </div>
              <ol className="space-y-3 font-sans text-sm text-studio-ink">
                {list.map((t) => (
                  <li key={t.slug} className="flex gap-4">
                    <span className="w-12 shrink-0 text-2xl text-ink/75 sm:text-3xl">
                      <FolioNumber
                        value={String(t.number).padStart(2, "0")}
                        className="text-2xl text-ink/75 sm:text-3xl"
                      />
                    </span>
                    <Link
                      href={`/techniques/${t.slug}`}
                      className="pt-1.5 text-[15px] leading-snug text-ink hover:underline hover:decoration-hairline hover:underline-offset-4"
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
    </div>
  );
}
