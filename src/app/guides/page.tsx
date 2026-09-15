import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Guides",
};

const guides = [
  {
    href: "/compare",
    num: "01",
    title: "Field guide · Discover → Define → Deliver",
    blurb:
      "Stage checklist for running the catalog on real work—Anshu lanes plus Nate/Greg prompts.",
  },
  {
    href: "/guides/anti-slop-desk",
    num: "02",
    title: "Anti-slop craft desk",
    blurb:
      "How to stack directory craft (Rauno, Emil, Maggie, Schoger, Victor, Chimero, Jakub) with the core technique sets.",
  },
  {
    href: "/guides/motion-craft",
    num: "03",
    title: "Motion craft without circus chrome",
    blurb:
      "Purpose → frequency → recipe → restraint. Wire Emil + Rauno + transitions.dev free recipes.",
  },
  {
    href: "/examples",
    num: "04",
    title: "Worked examples index",
    blurb: "Before/after and body examples pulled from technique pages.",
  },
];

export default function GuidesIndexPage() {
  return (
    <div className="max-w-xl">
      <PageHeader
        eyebrow="Field notes"
        title="Guides"
        description="Short craft desks—not marketing. Public sources only; no endorsement."
      />
      <ol className="space-y-8">
        {guides.map((g) => (
          <li key={g.href} className="grid grid-cols-[3rem_1fr] gap-3 border-t border-hairline pt-6">
            <span className="folio-num text-2xl text-ink/70">{g.num}</span>
            <div>
              <Link
                href={g.href}
                className="font-serif text-xl text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink"
              >
                {g.title}
              </Link>
              <p className="mt-2 font-sans text-sm leading-relaxed text-studio-ink">
                {g.blurb}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
