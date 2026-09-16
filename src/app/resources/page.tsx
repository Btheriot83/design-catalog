import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ResourceFilter } from "@/components/ResourceFilter";
import { getResources } from "@/lib/content";
import type { ResourceCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: "Free craft resources",
  description:
    "Agent-friendly desk of high-level free craft sources—transitions, shaders, easing, examples, textures. Public only; no endorsement.",
};

const CATEGORY_LABELS: Record<ResourceCategory, string> = {
  transitions: "Transitions",
  shaders: "Shaders",
  animation: "Animation",
  examples: "Examples",
  easing: "Easing",
  "icons-illustration": "Icons / illustration",
  textures: "Textures",
  "3d": "3D",
  reference: "Reference",
};

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat } = await searchParams;
  const resources = getResources();
  const active =
    cat && cat !== "all" && Object.prototype.hasOwnProperty.call(CATEGORY_LABELS, cat)
      ? (cat as ResourceCategory)
      : undefined;

  const counts: Record<string, number> = { all: resources.length };
  for (const r of resources) {
    for (const c of r.categories) {
      counts[c] = (counts[c] ?? 0) + 1;
    }
  }

  const filtered = active
    ? resources.filter((r) => r.categories.includes(active))
    : resources;

  return (
    <div>
      <PageHeader
        eyebrow="Craft desk · free first"
        title="Free craft resources"
        description="High-level free sources agents can use for transitions, shaders, easing, examples, textures, and icons—not paywalled Pro dumps. Public links only."
      />

      <aside className="mb-10 border border-hairline bg-ghost/80 p-5 press-shadow">
        <p className="eyebrow text-ink">Free first / no endorsement</p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-studio-ink">
          This desk lists public craft libraries and playgrounds useful for local
          work. Linking does <strong className="font-medium text-ink">not</strong>{" "}
          imply affiliation or endorsement. Prefer free tiers and open licenses;
          skip Pro-only recipe packs unless a human explicitly approves. Machine
          JSON:{" "}
          <a
            href="/data/resources.json"
            className="font-mono text-xs text-ink underline decoration-hairline hover:decoration-ink"
          >
            /data/resources.json
          </a>
          . Related:{" "}
          <Link href="/motion" className="text-ink underline decoration-hairline">
            Motion lab
          </Link>
          {" · "}
          <Link href="/sources" className="text-ink underline decoration-hairline">
            Sources
          </Link>
          .
        </p>
      </aside>

      <ResourceFilter current={active} counts={counts} />

      <p className="mb-6 font-sans text-sm text-studio-ink">
        Showing{" "}
        <span className="font-medium text-ink">{filtered.length}</span>
        {active ? (
          <>
            {" "}
            in <span className="font-medium text-ink">{CATEGORY_LABELS[active]}</span>
          </>
        ) : (
          <> resources</>
        )}
        .
      </p>

      <ul className="divide-y divide-hairline border-t border-ink">
        {filtered.map((r) => (
          <li key={r.id} className="py-7">
            <div className="flex flex-wrap gap-1.5">
              {r.categories.map((c) => (
                <Link
                  key={c}
                  href={`/resources?cat=${encodeURIComponent(c)}`}
                  className="border border-hairline bg-card px-2 py-0.5 font-sans text-[11px] tracking-wide text-studio-ink hover:border-ink hover:text-ink"
                >
                  {CATEGORY_LABELS[c]}
                </Link>
              ))}
            </div>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block font-serif text-xl text-ink hover:underline hover:decoration-hairline"
            >
              {r.title}
            </a>
            <p className="mt-1 break-all font-mono text-xs text-faint">{r.url}</p>
            <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-studio-ink">
              <span className="eyebrow mr-2 text-faint">Free</span>
              {r.freeNote}
            </p>
            <p className="mt-3 max-w-xl border-l border-ink pl-4 font-sans text-sm leading-relaxed text-studio-ink">
              <span className="eyebrow mr-2 text-faint">Agent use</span>
              {r.agentUse}
            </p>
            {r.tags && r.tags.length > 0 ? (
              <p className="mt-3 font-mono text-[11px] text-faint">
                {r.tags.map((t) => `#${t}`).join(" · ")}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
