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
        description="A craft / anti-slop designer directory and letterpress technique desk—Quiet Folio, not a SaaS landing."
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
          The{" "}
          <Link
            href="/designers"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            designers directory
          </Link>{" "}
          expands beyond technique authors into ~50 public craft voices—bios and
          outbound links from public sources only. Status{" "}
          <span className="text-ink">directory</span> means credits without a
          technique set yet. No endorsement.
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

        <section className="border border-hairline bg-card p-5 press-shadow">
          <h2 className="eyebrow text-ink">Credits</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed">
            <li>
              <span className="text-ink">Anshu Chimala</span>
              {" — "}
              <a
                href="https://anshu.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-hairline hover:decoration-ink"
              >
                anshu.dev
              </a>
              {", "}
              <a
                href="https://x.com/anshuc"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-hairline hover:decoration-ink"
              >
                X
              </a>
              {", "}
              <a
                href="https://github.com/achimala"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-hairline hover:decoration-ink"
              >
                GitHub
              </a>
              {" · "}
              <Link
                href="/designers/anshu-chimala"
                className="text-ink underline decoration-hairline hover:decoration-ink"
              >
                entry
              </Link>
            </li>
            <li>
              <span className="text-ink">Nate Parrott</span>
              {" — "}
              <a
                href="https://nateparrott.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-hairline hover:decoration-ink"
              >
                site
              </a>
              {", "}
              <a
                href="https://x.com/nateparrott"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-hairline hover:decoration-ink"
              >
                X
              </a>
              {", "}
              <a
                href="https://github.com/nate-parrott"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-hairline hover:decoration-ink"
              >
                GitHub
              </a>
              {" · "}
              <Link
                href="/designers/nate-parrott"
                className="text-ink underline decoration-hairline hover:decoration-ink"
              >
                entry
              </Link>
            </li>
            <li>
              <span className="text-ink">Greg Huntoon</span>
              {" — "}
              <a
                href="https://www.figma.com/@greghuntoon"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-hairline hover:decoration-ink"
              >
                Figma
              </a>
              {", "}
              <a
                href="https://x.com/GregHuntoon"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-hairline hover:decoration-ink"
              >
                X
              </a>
              {", "}
              <a
                href="https://github.com/greghuntoon-figma/tc-ebc"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-hairline hover:decoration-ink"
              >
                TC-EBC
              </a>
              {" · "}
              <Link
                href="/designers/greg-huntoon"
                className="text-ink underline decoration-hairline hover:decoration-ink"
              >
                entry
              </Link>
            </li>
            <li>
              <span className="text-ink">Transitions.dev</span>
              {" — Jakub Antalik · free product motion recipes · "}
              <a
                href="https://transitions.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-hairline hover:decoration-ink"
              >
                transitions.dev
              </a>
              {" · "}
              <Link href="/motion" className="text-ink underline decoration-hairline hover:decoration-ink">
                motion lab
              </Link>
            </li>
            <li>
              <span className="text-ink">Brandon Theriot</span>
              {" — built and maintains this catalog · "}
              <Link
                href="/designers/brandon-theriot"
                className="text-ink underline decoration-hairline hover:decoration-ink"
              >
                builder entry
              </Link>
              {", "}
              <a
                href="https://github.com/Btheriot83/design-catalog"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-hairline hover:decoration-ink"
              >
                repo
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-faint">
            Linking does not imply affiliation, sponsorship, or endorsement by
            any cited person or organization.
          </p>
        </section>

        <p className="text-sm text-studio-ink">
          Motion recipes adapted from free{" "}
          <a
            href="https://transitions.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            transitions.dev
          </a>{" "}
          free recipes by Jakub Antalik (texts-reveal, number-pop-in, tabs-sliding,
          restrained card-tilt, success-check, skeleton-reveal)—Quiet Folio ink craft, not SaaS shimmer. Pro not used.
        </p>

        <p className="text-faint">
          Next.js App Router · TypeScript · Tailwind · Source Serif 4 + IBM
          Plex Sans · paper grain + ink mark.
        </p>
      </div>
    </div>
  );
}
