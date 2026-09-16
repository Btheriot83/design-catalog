import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "For agents",
  description:
    "Machine-readable Design Catalog surfaces — llms.txt, /data/*.json, schemas, and the agent field guide.",
};

const base = "https://design-catalog-three.vercel.app";

const files = [
  { label: "llms.txt", href: "/llms.txt", note: "Short agent briefing" },
  { label: "llms-full.txt", href: "/llms-full.txt", note: "Full briefing" },
  { label: "index.json", href: "/data/index.json", note: "Catalog overview + routes" },
  { label: "techniques.json", href: "/data/techniques.json", note: "All techniques" },
  { label: "prompts.json", href: "/data/prompts.json", note: "Flattened prompt library" },
  { label: "designers.json", href: "/data/designers.json", note: "Designer entries" },
  { label: "sources.json", href: "/data/sources.json", note: "Citations" },
  { label: "resources.json", href: "/data/resources.json", note: "Free craft resources desk" },
  {
    label: "technique.schema.json",
    href: "/schema/technique.schema.json",
    note: "JSON Schema",
  },
  {
    label: "designer.schema.json",
    href: "/schema/designer.schema.json",
    note: "JSON Schema",
  },
];

export default function AgentsPage() {
  return (
    <div className="max-w-xl">
      <PageHeader
        eyebrow="Machine-readable"
        title="For agents"
        description="Fetch JSON and llms.txt — do not scrape HTML. Quiet Folio desk, no AI chrome."
      />

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-ink">Surfaces</h2>
        <hr className="rule-double mt-4 mb-5 max-w-[10rem]" />
        <ul className="space-y-3 font-sans text-sm leading-relaxed text-studio-ink">
          {files.map((f) => (
            <li key={f.href} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
              <a
                href={f.href}
                className="font-mono text-xs text-ink underline decoration-hairline hover:decoration-ink"
              >
                {f.label}
              </a>
              <span>{f.note}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 font-sans text-sm text-studio-ink">
          Optional aliases:{" "}
          <code className="font-mono text-xs text-ink">/api/index</code>,{" "}
          <code className="font-mono text-xs text-ink">/api/techniques</code>,{" "}
          <code className="font-mono text-xs text-ink">/api/designers</code>,{" "}
          <code className="font-mono text-xs text-ink">/api/prompts</code>,{" "}
          <code className="font-mono text-xs text-ink">/api/sources</code>,{" "}
          <code className="font-mono text-xs text-ink">/api/resources</code>
          {" "}(prefer static <code className="font-mono text-xs text-ink">/data/</code> for CDN).
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-ink">Free craft resources</h2>
        <hr className="rule-double mt-4 mb-5 max-w-[10rem]" />
        <p className="font-sans text-sm leading-relaxed text-studio-ink">
          Curated free-first links for transitions, shaders, easing, examples, and textures.
          Prefer JSON over scraping.
        </p>
        <ul className="mt-4 space-y-2 font-sans text-sm text-studio-ink">
          <li>
            <Link href="/resources" className="text-ink underline decoration-hairline hover:decoration-ink">
              /resources
            </Link>
            {" — human filter desk"}
          </li>
          <li>
            <a
              href="/data/resources.json"
              className="font-mono text-xs text-ink underline decoration-hairline hover:decoration-ink"
            >
              /data/resources.json
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-ink">Guide</h2>
        <hr className="rule-double mt-4 mb-5 max-w-[10rem]" />
        <p className="font-sans text-sm leading-relaxed text-studio-ink">
          How to fetch the index, pick by stage, copy prompts, and run Discover → Define →
          Deliver (including Tileboard / Anshu 1–8):
        </p>
        <ul className="mt-4 space-y-2 font-sans text-sm text-studio-ink">
          <li>
            <a
              href="https://raw.githubusercontent.com/Btheriot83/design-catalog/main/docs/FOR_AGENTS.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-hairline hover:decoration-ink"
            >
              docs/FOR_AGENTS.md (GitHub raw)
            </a>
          </li>
          <li>
            <Link href="/compare" className="text-ink underline decoration-hairline hover:decoration-ink">
              Field guide (/compare)
            </Link>
            {" — human checklist + agent artifacts"}
          </li>
        </ul>
      </section>

      <aside className="border border-hairline bg-ghost/80 p-5">
        <p className="eyebrow text-ink">Base URL</p>
        <p className="mt-3 font-mono text-xs leading-relaxed text-ink break-all">{base}</p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-studio-ink">
          Independent project. Public sources only; no endorsement. See{" "}
          <Link href="/sources" className="text-ink underline decoration-hairline">
            Sources
          </Link>
          .
        </p>
      </aside>
    </div>
  );
}
