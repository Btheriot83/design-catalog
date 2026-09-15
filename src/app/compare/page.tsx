import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Field guide",
};

export default function ComparePage() {
  return (
    <div className="max-w-xl">
      <PageHeader
        eyebrow="How we use this"
        title="Field guide"
        description="A short Discover → Define → Deliver checklist for running the catalog on real work—not a marketing summary of the essays."
      />

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-ink">Before you open the model</h2>
        <hr className="rule-double mt-4 mb-5 max-w-[10rem]" />
        <ol className="space-y-4 font-sans text-sm leading-relaxed text-studio-ink">
          <li className="grid grid-cols-[2.5rem_1fr] gap-2">
            <span className="folio-num text-xl">01</span>
            <span>
              Write the job in one sentence: who it’s for, what “done” looks like, what you refuse (default aesthetics, fake stats, purple chrome).
            </span>
          </li>
          <li className="grid grid-cols-[2.5rem_1fr] gap-2">
            <span className="folio-num text-xl">02</span>
            <span>
              Pick a lane: exploring (Discover), deepening identity (Define), or shipping polish (Deliver). Don’t mix all three in one thrash session.
            </span>
          </li>
          <li className="grid grid-cols-[2.5rem_1fr] gap-2">
            <span className="folio-num text-xl">03</span>
            <span>
              Open{" "}
              <Link href="/prompts" className="text-ink underline decoration-hairline">
                Prompts
              </Link>{" "}
              filtered to that stage—or jump a designer entry if you’re deliberately studying one voice.
            </span>
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-ink">Discover</h2>
        <hr className="rule-double mt-4 mb-5 max-w-[10rem]" />
        <ul className="space-y-3 font-sans text-sm leading-relaxed text-studio-ink">
          <li>
            ☐{" "}
            <Link href="/techniques/seed-strings" className="text-ink underline decoration-hairline">
              Seed
            </Link>{" "}
            or{" "}
            <Link href="/techniques/ambitious-prompts" className="text-ink underline decoration-hairline">
              ambitious brief
            </Link>{" "}
            so you leave the SaaS-landing prior.
          </li>
          <li>
            ☐{" "}
            <Link href="/techniques/thinking-before-prompt" className="text-ink underline decoration-hairline">
              Think offline
            </Link>{" "}
            /{" "}
            <Link href="/techniques/tc-ebc-task" className="text-ink underline decoration-hairline">
              TC-EBC Task+Context
            </Link>{" "}
            if the ask is mushy.
          </li>
          <li>
            ☐ Volume when stuck:{" "}
            <Link href="/techniques/ten-options-then-remix" className="text-ink underline decoration-hairline">
              ten options → remix
            </Link>{" "}
            or{" "}
            <Link href="/techniques/wireframe-first" className="text-ink underline decoration-hairline">
              wireframe-first
            </Link>
            .
          </li>
          <li>☐ Keep losers; retest on newer models later.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-ink">Define</h2>
        <hr className="rule-double mt-4 mb-5 max-w-[10rem]" />
        <ul className="space-y-3 font-sans text-sm leading-relaxed text-studio-ink">
          <li>
            ☐ Lock look:{" "}
            <Link href="/techniques/specify-the-look" className="text-ink underline decoration-hairline">
              specify
            </Link>{" "}
            /{" "}
            <Link href="/techniques/design-system-from-assets" className="text-ink underline decoration-hairline">
              system from assets
            </Link>
            .
          </li>
          <li>
            ☐ Enrich past CSS blobs:{" "}
            <Link href="/techniques/image-generation" className="text-ink underline decoration-hairline">
              image
            </Link>
            ,{" "}
            <Link href="/techniques/video-motion" className="text-ink underline decoration-hairline">
              video
            </Link>
            , or{" "}
            <Link href="/techniques/make-it-alive" className="text-ink underline decoration-hairline">
              make it alive
            </Link>
            .
          </li>
          <li>
            ☐ Taste loop:{" "}
            <Link href="/techniques/critic-subagents" className="text-ink underline decoration-hairline">
              critic subagent
            </Link>{" "}
            on screenshots only—stop rule outside the critic.
          </li>
          <li>
            ☐ Structure the ask:{" "}
            <Link href="/techniques/tc-ebc-elements" className="text-ink underline decoration-hairline">
              Elements
            </Link>{" "}
            +{" "}
            <Link href="/techniques/tc-ebc-behavior" className="text-ink underline decoration-hairline">
              Behavior
            </Link>
            .
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-ink">Deliver</h2>
        <hr className="rule-double mt-4 mb-5 max-w-[10rem]" />
        <ul className="space-y-3 font-sans text-sm leading-relaxed text-studio-ink">
          <li>
            ☐{" "}
            <Link href="/techniques/cut-elements" className="text-ink underline decoration-hairline">
              Cut
            </Link>{" "}
            anything without a job.
          </li>
          <li>
            ☐{" "}
            <Link href="/techniques/remove-ai-tells" className="text-ink underline decoration-hairline">
              Kill-list scrub
            </Link>
            .
          </li>
          <li>
            ☐{" "}
            <Link href="/techniques/hand-rewrite-copy" className="text-ink underline decoration-hairline">
              Hand-rewrite
            </Link>{" "}
            high-leverage strings; protect them.
          </li>
          <li>
            ☐ Last mile:{" "}
            <Link href="/techniques/last-mile-manual" className="text-ink underline decoration-hairline">
              manual
            </Link>{" "}
            /{" "}
            <Link href="/techniques/point-and-talk" className="text-ink underline decoration-hairline">
              point-and-talk
            </Link>
            —not token nudges.
          </li>
          <li>
            ☐ Revisions:{" "}
            <Link href="/techniques/tc-ebc-constraints" className="text-ink underline decoration-hairline">
              Constraints
            </Link>{" "}
            name what not to touch.
          </li>
        </ul>
      </section>

      <aside className="border border-hairline bg-ghost/80 p-5">
        <p className="eyebrow text-ink">Bar we’re chasing</p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-studio-ink">
          Density of worked examples and copyable prompts like Anshu’s Lenny essay; typographic restraint like a good docs site or editorial page—not a SaaS landing. Scores live in{" "}
          <code className="font-mono text-xs text-ink">docs/CRITIC_LOOP.md</code>.
        </p>
      </aside>
    </div>
  );
}
