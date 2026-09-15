import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="max-w-xl">
      <PageHeader
        eyebrow="Colophon"
        title="About this desk"
        description="A letterpress reading room for AI design craft—Quiet Folio, not a SaaS landing."
      />
      <div className="space-y-5 font-sans text-base leading-relaxed text-studio-ink">
        <p>
          The spine is{" "}
          <Link
            href="/designers/anshu-chimala"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            Anshu Chimala
          </Link>
          ’s eight techniques from his Sep 2026 guest essay in Lenny’s
          Newsletter, framed as Discover → Define → Deliver.
        </p>
        <p>
          <Link
            href="/designers/nate-parrott"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            Nate Parrott
          </Link>{" "}
          appears as a partial catalog from one public Claude Design post.{" "}
          <Link
            href="/designers/greg-huntoon"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            Greg Huntoon
          </Link>{" "}
          contributes a partial TC-EBC set from the Figma blog (an earlier stub
          mis-named David Kossnick; authorship corrected). We do not invent
          unpublished posts.
        </p>
        <p>
          Visual direction applies the catalog to itself: seed-string Quiet
          Folio, cut chrome, hand-rewritten hero, critic loops. See{" "}
          <Link
            href="/compare"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            Field guide
          </Link>{" "}
          and{" "}
          <Link
            href="/sources"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            Sources
          </Link>
          .
        </p>
        <p className="text-faint">
          Built for Brandon Theriot · Next.js App Router · TypeScript ·
          Tailwind · Source Serif 4 + IBM Plex Sans · paper grain + ink mark.
        </p>
      </div>
    </div>
  );
}
