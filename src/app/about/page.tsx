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
        title="About this desk"
        description="A quiet reading room for AI design craft—not a SaaS landing, not a vibe deck."
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
            href="/designers"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            David Kossnick
          </Link>{" "}
          stays a stub until there is a public source worth cataloging. We do
          not invent unpublished posts.
        </p>
        <p>
          This site is not affiliated with Anshu, Nate, Lenny’s Newsletter,
          Apple, YC, fal.ai, Sakana AI, Anthropic, Figma, or any cited tool.
          See{" "}
          <Link
            href="/sources"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            Sources
          </Link>{" "}
          for the disclaimer.
        </p>
        <p className="text-faint">
          Built for Brandon Theriot · Next.js App Router · TypeScript ·
          Tailwind · Source Serif 4 + IBM Plex Sans.
        </p>
      </div>
    </div>
  );
}
