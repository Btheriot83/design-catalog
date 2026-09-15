import Image from "next/image";
import Link from "next/link";
import {
  getAllDesigners,
  getAllTechniques,
  getTechniquesByStage,
} from "@/lib/content";

export default function HomePage() {
  const byStage = getTechniquesByStage();
  const techniques = getAllTechniques();
  const designers = getAllDesigners().filter((d) => d.status !== "stub");
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
        <p className="eyebrow mb-5">Letterpress study desk · Quiet Folio</p>
        <h1 className="max-w-2xl font-serif text-[2.6rem] leading-[1.08] tracking-tight text-ink sm:text-5xl sm:leading-[1.06]">
          Techniques for getting past average AI design
        </h1>
        <hr className="rule-double mt-8 max-w-[14rem]" />
        <p className="mt-7 max-w-xl font-sans text-base leading-relaxed text-studio-ink">
          A browsable monograph of craft notes—mostly from{" "}
          <Link
            href="/designers/anshu-chimala"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            Anshu Chimala
          </Link>
          , with partial sets from{" "}
          <Link
            href="/designers/nate-parrott"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            Nate Parrott
          </Link>{" "}
          and{" "}
          <Link
            href="/designers/greg-huntoon"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            Greg Huntoon
          </Link>
          . Public sources only. No endorsement.
        </p>
        <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-ink/80 py-6 sm:max-w-md">
          {[
            { k: "Techniques", v: techniques.length },
            { k: "Prompts", v: promptCount },
            { k: "Designers", v: designers.length },
          ].map((s) => (
            <div key={s.k}>
              <dt className="eyebrow">{s.k}</dt>
              <dd className="folio-num mt-1 text-4xl sm:text-5xl">{s.v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/techniques"
            className="inline-block border border-ink bg-ink px-4 py-2.5 font-sans text-sm text-paper hover:bg-transparent hover:text-ink"
          >
            Open the index
          </Link>
          <Link
            href="/compare"
            className="inline-block border border-ink/25 bg-card px-4 py-2.5 font-sans text-sm text-ink press-shadow hover:border-ink"
          >
            Field guide
          </Link>
          <Link
            href="/prompts"
            className="inline-block border border-ink/25 bg-card px-4 py-2.5 font-sans text-sm text-ink press-shadow hover:border-ink"
          >
            Prompt library
          </Link>
        </p>
      </section>

      <section className="mb-14 border border-ink/20 bg-card p-5 index-card sm:p-6">
        <p className="eyebrow text-ink">How to use this desk</p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-studio-ink">
          Discover broadly (seed / ambitious brief / TC-EBC Task+Context) → Define
          identity (critic, look, image/motion) → Deliver by subtraction (cut,
          kill tells, hand-rewrite). Full checklist in the{" "}
          <Link href="/compare" className="text-ink underline decoration-hairline">
            field guide
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
                <span className="folio-num text-2xl text-ink/45">
                  {String(list.length).padStart(2, "0")}
                </span>
              </div>
              <ol className="space-y-3 font-sans text-sm text-studio-ink">
                {list.map((t) => (
                  <li key={t.slug} className="flex gap-4">
                    <span className="folio-num w-12 shrink-0 text-2xl text-ink/75 sm:text-3xl">
                      {String(t.number).padStart(2, "0")}
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
