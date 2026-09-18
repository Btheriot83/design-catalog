import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { getShipaton2025, getShipatonWinner } from "@/lib/content";

function placeLabel(place: number) {
  if (place === 1) return "1st";
  if (place === 2) return "2nd";
  if (place === 3) return "3rd";
  return `${place}th`;
}

export function generateStaticParams() {
  return getShipaton2025().winners.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = getShipatonWinner(slug);
  if (!w) return { title: "Not found" };
  return {
    title: `${w.name} · Shipaton 2025`,
    description: w.oneLiner,
  };
}

export default async function ShipatonWinnerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = getShipatonWinner(slug);
  if (!w) notFound();

  return (
    <div>
      <p className="mb-6 font-sans text-sm text-studio-ink">
        <Link href="/shipaton-2025" className="underline decoration-hairline hover:text-ink hover:decoration-ink">
          ← Shipaton 2025
        </Link>
      </p>

      <PageHeader
        eyebrow={`${placeLabel(w.place)} · ${w.category}`}
        title={w.name}
        description={w.oneLiner}
      />

      <div className="mb-10 flex flex-wrap gap-x-4 gap-y-2 font-sans text-sm text-studio-ink">
        {w.appStoreUrl ? (
          <a href={w.appStoreUrl} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-hairline hover:decoration-ink">
            App Store
          </a>
        ) : (
          <span className="text-faint">App Store — not found</span>
        )}
        {w.playStoreUrl ? (
          <a href={w.playStoreUrl} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-hairline hover:decoration-ink">
            Play Store
          </a>
        ) : null}
        <a href={w.showcaseUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-hairline hover:text-ink hover:decoration-ink">
          Showcase
        </a>
        {w.marketingSiteUrl ? (
          <a href={w.marketingSiteUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-hairline hover:text-ink hover:decoration-ink">
            Marketing site
          </a>
        ) : null}
      </div>

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-ink">Store previews</h2>
        <hr className="rule-double mt-4 mb-5 max-w-[10rem]" />
        <p className="mb-6 font-sans text-sm leading-relaxed text-studio-ink">
          Official store gallery images — labeled as store preview, not live device UI.
        </p>
        {w.screenshots.length === 0 ? (
          <p className="font-sans text-sm text-faint">No store previews captured yet.</p>
        ) : (
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {w.screenshots.map((s) => (
              <li key={s.path} className="overflow-hidden rounded-[1.25rem] border border-hairline bg-ghost press-shadow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.path} alt={s.label} className="w-full object-cover object-top" />
                <p className="border-t border-hairline px-2 py-2 font-sans text-[10px] tracking-wide text-faint">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {w.marketingScreenshotTodo ? (
        <aside className="mb-10 border border-dashed border-hairline p-4">
          <p className="eyebrow text-ink">Marketing capture TODO</p>
          <p className="mt-2 font-sans text-sm text-studio-ink">
            {w.marketingScreenshotTodo.note}:{" "}
            <a href={w.marketingScreenshotTodo.url} className="font-mono text-xs text-ink underline decoration-hairline" target="_blank" rel="noopener noreferrer">
              {w.marketingScreenshotTodo.url}
            </a>
          </p>
        </aside>
      ) : null}

      <aside className="border border-hairline bg-ghost/80 p-5">
        <p className="eyebrow text-ink">Provenance</p>
        <ul className="mt-3 space-y-1 font-sans text-sm text-studio-ink">
          <li>
            <a href="https://www.revenuecat.com/blog/company/shipaton-2025-winners/" target="_blank" rel="noopener noreferrer" className="underline decoration-hairline hover:text-ink">
              RevenueCat · Shipaton 2025 winners
            </a>
          </li>
          <li>
            <a href={w.showcaseUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-hairline hover:text-ink">
              Shipaton Showcase
            </a>
          </li>
        </ul>
        <p className="mt-3 font-sans text-xs leading-relaxed text-faint">
          Independent design study. No affiliation or endorsement implied.
        </p>
      </aside>
    </div>
  );
}
