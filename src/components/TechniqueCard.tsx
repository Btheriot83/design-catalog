import Link from "next/link";
import type { Technique } from "@/lib/types";
import { StageBadge } from "./StageBadge";

export function TechniqueCard({ technique }: { technique: Technique }) {
  const num = String(technique.number).padStart(2, "0");
  return (
    <Link
      href={`/techniques/${technique.slug}`}
      className="group grid grid-cols-[4.5rem_1fr] gap-x-4 border-b border-hairline py-7 first:pt-1 last:border-0 sm:grid-cols-[5.5rem_1fr] sm:gap-x-6"
    >
      <span className="folio-num text-4xl text-ink/90 sm:text-5xl" aria-hidden>
        {num}
      </span>
      <div className="min-w-0 pt-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <h3 className="font-serif text-xl leading-snug text-ink group-hover:underline group-hover:decoration-hairline group-hover:underline-offset-4 sm:text-[1.35rem]">
            {technique.title}
          </h3>
          <StageBadge stage={technique.stage} />
        </div>
        <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-studio-ink line-clamp-2">
          {technique.principle}
        </p>
      </div>
    </Link>
  );
}
