import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <PageHeader
        kicker="About"
        title="An independent craft catalog"
        description="Design Catalog collects AI design techniques with editorial clarity—paper, ink, and one restrained accent—so builders can escape average slop."
      />
      <div className="space-y-5 font-sans text-base leading-relaxed text-ink/75">
        <p>
          Version 1 centers{" "}
          <Link
            href="/designers/anshu-chimala"
            className="text-ink underline decoration-ochre/40 hover:text-ochre"
          >
            Anshu Chimala
          </Link>
          ’s eight techniques from his Sep 2026 guest essay in Lenny’s
          Newsletter. Stages follow his Discover → Define → Deliver framing.
        </p>
        <p>
          <Link
            href="/designers/nate-parrott"
            className="text-ink underline decoration-ochre/40 hover:text-ochre"
          >
            Nate Parrott
          </Link>{" "}
          is a partial catalog from one public Claude blog post on Claude
          Design.{" "}
          <Link href="/designers" className="underline hover:text-ochre">
            David Kossnick
          </Link>{" "}
          (TC-EBC / Figma) remains the next stub candidate. We do not invent
          unpublished Substack posts or attribute work that isn’t public.
        </p>
        <p>
          This site is not affiliated with Anshu, Nate, Lenny’s Newsletter,
          Apple, YC, fal.ai, Sakana AI, Anthropic, Figma, or any cited tool. See{" "}
          <Link href="/sources" className="underline hover:text-ochre">
            Sources
          </Link>{" "}
          for the full disclaimer.
        </p>
        <p className="text-ink/50">
          Built for Brandon Theriot · Next.js App Router · TypeScript ·
          Tailwind · Source Serif 4 + IBM Plex Sans.
        </p>
      </div>
    </div>
  );
}
