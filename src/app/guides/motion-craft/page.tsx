import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Motion craft",
};

export default function MotionCraftGuide() {
  return (
    <div className="max-w-xl">
      <PageHeader
        eyebrow="Guide 03"
        title="Motion craft without circus chrome"
        description="A four-gate checklist before any animation ships on Quiet Folio work."
      />

      <ol className="mb-12 space-y-6 font-sans text-sm leading-relaxed text-studio-ink">
        <li className="grid grid-cols-[2.5rem_1fr] gap-2">
          <span className="folio-num text-xl">01</span>
          <span>
            <strong className="text-ink">Purpose</strong> —{" "}
            <Link href="/techniques/purposeful-motion" className="text-ink underline decoration-hairline">
              purposeful-motion
            </Link>
            . One sentence or delete.
          </span>
        </li>
        <li className="grid grid-cols-[2.5rem_1fr] gap-2">
          <span className="folio-num text-xl">02</span>
          <span>
            <strong className="text-ink">Frequency</strong> —{" "}
            <Link href="/techniques/animation-restraint" className="text-ink underline decoration-hairline">
              animation-restraint
            </Link>
            . Daily/keyboard → none.
          </span>
        </li>
        <li className="grid grid-cols-[2.5rem_1fr] gap-2">
          <span className="folio-num text-xl">03</span>
          <span>
            <strong className="text-ink">Choreography</strong> —{" "}
            <Link href="/techniques/stagger-choreograph-motion" className="text-ink underline decoration-hairline">
              stagger-choreograph-motion
            </Link>{" "}
            +{" "}
            <Link href="/techniques/designing-depth" className="text-ink underline decoration-hairline">
              designing-depth
            </Link>
            .
          </span>
        </li>
        <li className="grid grid-cols-[2.5rem_1fr] gap-2">
          <span className="folio-num text-xl">04</span>
          <span>
            <strong className="text-ink">Recipe</strong> —{" "}
            <Link href="/techniques/transition-recipes-as-skills" className="text-ink underline decoration-hairline">
              transition-recipes-as-skills
            </Link>{" "}
            (free{" "}
            <Link href="/motion" className="text-ink underline decoration-hairline">
              /motion
            </Link>{" "}
            lab patterns). No Pro snippets. Reduced-motion required.
          </span>
        </li>
      </ol>

      <aside className="border border-hairline bg-ghost/80 p-5">
        <p className="eyebrow text-ink">Alive ≠ animated</p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-studio-ink">
          See{" "}
          <Link href="/techniques/alive-by-default" className="text-ink underline decoration-hairline">
            alive-by-default
          </Link>{" "}
          and{" "}
          <Link href="/techniques/make-it-alive" className="text-ink underline decoration-hairline">
            make-it-alive
          </Link>
          : state change beats bounce.
        </p>
      </aside>
    </div>
  );
}
