import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Anti-slop craft desk",
};

export default function AntiSlopDeskGuide() {
  return (
    <div className="max-w-xl">
      <PageHeader
        eyebrow="Guide 02"
        title="Anti-slop craft desk"
        description="A stacking order for using this catalog when the goal is craft density—not more purple chrome."
      />

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-ink">Stack, don’t smear</h2>
        <hr className="rule-double mt-4 mb-5 max-w-[10rem]" />
        <ol className="space-y-4 font-sans text-sm leading-relaxed text-studio-ink">
          <li className="grid grid-cols-[2.5rem_1fr] gap-2">
            <span className="folio-num text-xl">01</span>
            <span>
              Pick a stage lane from the{" "}
              <Link href="/compare" className="text-ink underline decoration-hairline">
                field guide
              </Link>
              . Don’t run Discover entropy and Deliver kill-lists in the same thrash.
            </span>
          </li>
          <li className="grid grid-cols-[2.5rem_1fr] gap-2">
            <span className="folio-num text-xl">02</span>
            <span>
              Lock identity early:{" "}
              <Link href="/techniques/seed-strings" className="text-ink underline decoration-hairline">
                seed-strings
              </Link>
              ,{" "}
              <Link href="/techniques/specify-the-look" className="text-ink underline decoration-hairline">
                specify-the-look
              </Link>
              , or{" "}
              <Link href="/techniques/hierarchy-with-weight" className="text-ink underline decoration-hairline">
                hierarchy-with-weight
              </Link>
              .
            </span>
          </li>
          <li className="grid grid-cols-[2.5rem_1fr] gap-2">
            <span className="folio-num text-xl">03</span>
            <span>
              Explain before chrome:{" "}
              <Link href="/techniques/illustrate-the-invisible" className="text-ink underline decoration-hairline">
                illustrate-the-invisible
              </Link>{" "}
              or{" "}
              <Link href="/techniques/screens-want-honesty" className="text-ink underline decoration-hairline">
                screens-want-honesty
              </Link>
              .
            </span>
          </li>
          <li className="grid grid-cols-[2.5rem_1fr] gap-2">
            <span className="folio-num text-xl">04</span>
            <span>
              Depth and motion only with purpose:{" "}
              <Link href="/techniques/designing-depth" className="text-ink underline decoration-hairline">
                designing-depth
              </Link>
              ,{" "}
              <Link href="/guides/motion-craft" className="text-ink underline decoration-hairline">
                motion craft
              </Link>
              .
            </span>
          </li>
          <li className="grid grid-cols-[2.5rem_1fr] gap-2">
            <span className="folio-num text-xl">05</span>
            <span>
              Deliver scrub:{" "}
              <Link href="/techniques/cut-elements" className="text-ink underline decoration-hairline">
                cut
              </Link>
              ,{" "}
              <Link href="/techniques/remove-ai-tells" className="text-ink underline decoration-hairline">
                kill-list
              </Link>
              ,{" "}
              <Link href="/techniques/fewer-borders" className="text-ink underline decoration-hairline">
                fewer borders
              </Link>
              ,{" "}
              <Link href="/techniques/hand-rewrite-copy" className="text-ink underline decoration-hairline">
                hand-rewrite
              </Link>
              . Label honesty with{" "}
              <Link href="/techniques/garden-status-labels" className="text-ink underline decoration-hairline">
                garden-status-labels
              </Link>
              .
            </span>
          </li>
          <li className="grid grid-cols-[2.5rem_1fr] gap-2">
            <span className="folio-num text-xl">06</span>
            <span>
              Taste loop:{" "}
              <Link href="/techniques/critic-subagents" className="text-ink underline decoration-hairline">
                critic-subagents
              </Link>{" "}
              on screenshots only—fresh context, stop rule outside the critic (
              <code className="font-mono text-xs text-ink">docs/CRITIC_LOOP.md</code>,{" "}
              <code className="font-mono text-xs text-ink">docs/GAUNTLET.md</code>).
            </span>
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-ink">Directory voices now on the desk</h2>
        <hr className="rule-double mt-4 mb-5 max-w-[10rem]" />
        <ul className="space-y-3 font-sans text-sm leading-relaxed text-studio-ink">
          <li>
            <Link href="/designers/rauno-freiberg" className="text-ink underline decoration-hairline">
              Rauno
            </Link>{" "}
            — depth + choreography
          </li>
          <li>
            <Link href="/designers/emil-kowalski" className="text-ink underline decoration-hairline">
              Emil
            </Link>{" "}
            — purpose + restraint
          </li>
          <li>
            <Link href="/designers/maggie-appleton" className="text-ink underline decoration-hairline">
              Maggie
            </Link>{" "}
            — status labels + metaphors
          </li>
          <li>
            <Link href="/designers/steve-schoger" className="text-ink underline decoration-hairline">
              Schoger / Refactoring UI tips
            </Link>{" "}
            — hierarchy, space, borders
          </li>
          <li>
            <Link href="/designers/bret-victor" className="text-ink underline decoration-hairline">
              Bret Victor
            </Link>{" "}
            — alive by default
          </li>
          <li>
            <Link href="/designers/frank-chimero" className="text-ink underline decoration-hairline">
              Frank Chimero
            </Link>{" "}
            — screens want flux
          </li>
          <li>
            <Link href="/designers/jakub-antalik" className="text-ink underline decoration-hairline">
              Jakub
            </Link>{" "}
            — transition recipes as skills
          </li>
        </ul>
        <p className="mt-4 font-sans text-sm text-studio-ink">
          Credits and outbound links only—no endorsement. Prefer public essays cited on each
          technique’s Sources.
        </p>
      </section>

      <aside className="border border-hairline bg-ghost/80 p-5">
        <p className="eyebrow text-ink">Still loses to Lenny</p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-studio-ink">
          Visual, image-led worked examples and interactive demos in the essay remain denser than
          this text+prompt desk. We stay paraphrase-honest on paywalled Deliver detail.
        </p>
      </aside>
    </div>
  );
}
