import Link from "next/link";
import type { ShipatonWinner } from "@/lib/types";
import { CardTilt } from "@/components/motion/CardTilt";

function placeLabel(place: number) {
  if (place === 1) return "1st";
  if (place === 2) return "2nd";
  if (place === 3) return "3rd";
  return `${place}th`;
}

export function ShipatonWinnerCard({ winner }: { winner: ShipatonWinner }) {
  const thumb =
    winner.screenshots.find((s) => s.kind === "store-preview") ??
    winner.screenshots[0];

  return (
    <CardTilt className="border-b border-hairline last:border-0">
      <article className="grid gap-4 bg-card/30 py-7 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
        <Link
          href={`/shipaton-2025/${winner.slug}`}
          className="relative mx-auto block h-[9.5rem] w-[5.4rem] overflow-hidden rounded-[1.1rem] border border-hairline bg-ghost press-shadow sm:mx-0"
          style={{ viewTransitionName: `shipaton-${winner.slug}` }}
        >
          {thumb ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumb.path}
              alt=""
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <span className="flex h-full items-center justify-center font-serif text-2xl text-faint">
              {String(winner.place).padStart(2, "0")}
            </span>
          )}
        </Link>

        <div className="min-w-0 pt-0.5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
            <h3 className="font-serif text-xl leading-snug text-ink sm:text-[1.35rem]">
              <Link
                href={`/shipaton-2025/${winner.slug}`}
                className="hover:underline hover:decoration-hairline hover:underline-offset-4"
              >
                {winner.name}
              </Link>
            </h3>
            <span className="font-sans text-[11px] tracking-wide text-faint">
              {placeLabel(winner.place)} · {winner.category}
            </span>
          </div>
          <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-studio-ink">
            {winner.oneLiner}
          </p>
          <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-sans text-[11px] tracking-wide text-faint">
            {winner.appStoreUrl ? (
              <a
                href={winner.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-hairline hover:decoration-ink"
              >
                App Store
              </a>
            ) : null}
            {winner.playStoreUrl ? (
              <a
                href={winner.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-hairline hover:decoration-ink"
              >
                Play Store
              </a>
            ) : null}
            <a
              href={winner.showcaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-hairline hover:text-ink hover:decoration-ink"
            >
              Showcase
            </a>
            {winner.marketingSiteUrl ? (
              <a
                href={winner.marketingSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-hairline hover:text-ink hover:decoration-ink"
              >
                Site
              </a>
            ) : null}
            <Link
              href={`/shipaton-2025/${winner.slug}`}
              className="underline decoration-hairline hover:text-ink hover:decoration-ink"
            >
              Detail
            </Link>
          </p>
          {winner.screenshots.length > 1 ? (
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {winner.screenshots.slice(0, 4).map((s) => (
                <Link
                  key={s.path}
                  href={`/shipaton-2025/${winner.slug}`}
                  className="relative h-16 w-9 shrink-0 overflow-hidden rounded-md border border-hairline bg-ghost"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.path}
                    alt=""
                    className="h-full w-full object-cover object-top"
                  />
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </CardTilt>
  );
}
