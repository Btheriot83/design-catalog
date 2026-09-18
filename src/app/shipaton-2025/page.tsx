import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ShipatonWinnerCard } from "@/components/ShipatonWinnerCard";
import { getShipaton2025, getShipatonByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Shipaton 2025",
  description:
    "Design study catalog of Shipaton 2025 winners — awards, one-liners, store links, and store-preview screenshots. Public sources only; no endorsement.",
};

export default function Shipaton2025Page() {
  const catalog = getShipaton2025();
  const groups = getShipatonByCategory();
  const withShots = catalog.winners.filter((w) => w.screenshots.length > 0).length;

  return (
    <div>
      <PageHeader
        eyebrow="Hackathon study desk · 2025"
        title="Shipaton 2025 winners"
        description="Craft catalog of RevenueCat Shipaton 2025 award winners — store previews, showcase links, and a budget-trip mockup study. Public sources only; no endorsement."
      />

      <aside className="mb-10 border border-hairline bg-ghost/80 p-5 press-shadow">
        <p className="eyebrow text-ink">Sources / disclaimer</p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-studio-ink">
          Drawn from the{" "}
          <a
            href="https://www.revenuecat.com/blog/company/shipaton-2025-winners/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            RevenueCat winners post
          </a>{" "}
          and{" "}
          <a
            href="https://apps.shipaton.com/winners"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            Shipaton Showcase
          </a>
          . Screenshots are{" "}
          <strong className="font-medium text-ink">store gallery previews</strong>,
          not live device captures.{" "}
          {catalog.winnerCount} winners · {withShots} with store previews. Machine
          JSON:{" "}
          <a
            href="/data/shipaton-2025.json"
            className="font-mono text-xs text-ink underline decoration-hairline hover:decoration-ink"
          >
            /data/shipaton-2025.json
          </a>
          .
        </p>
        <p className="mt-3 font-sans text-sm text-studio-ink">
          <Link
            href="/shipaton-2025/budget-trip"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            Budget trip mockups
          </Link>
          {" — concept only (Outlay / Nearfar / Leaveby)."}
        </p>
      </aside>

      {groups.map((g) => (
        <section key={g.category} className="mb-14">
          <h2 className="font-serif text-2xl text-ink">{g.category}</h2>
          <hr className="rule-double mt-4 mb-2 max-w-[10rem]" />
          <ul>
            {g.winners.map((w) => (
              <li key={w.slug}>
                <ShipatonWinnerCard winner={w} />
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="mb-6 border border-hairline bg-card/40 p-6 press-shadow">
        <p className="eyebrow text-ink">Also in this section</p>
        <h2 className="mt-3 font-serif text-2xl text-ink">Budget trip mockups</h2>
        <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-studio-ink">
          {catalog.budgetTripMockups.note}
        </p>
        <p className="mt-4 font-sans text-sm text-studio-ink">
          Working names:{" "}
          {catalog.budgetTripMockups.nameProposals.map((n, i) => (
            <span key={n.name}>
              {i > 0 ? " · " : null}
              <strong className="font-medium text-ink">{n.name}</strong>
            </span>
          ))}
        </p>
        <Link
          href="/shipaton-2025/budget-trip"
          className="mt-5 inline-block font-sans text-sm text-ink underline decoration-hairline hover:decoration-ink"
        >
          Open mockup frames →
        </Link>
      </section>
    </div>
  );
}
