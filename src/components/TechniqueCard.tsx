import Link from "next/link";
import type { Technique } from "@/lib/types";
import { StageBadge } from "./StageBadge";

export function TechniqueCard({ technique }: { technique: Technique }) {
  const num = String(technique.number).padStart(2, "0");
  return (
    <Link
      href={`/techniques/${technique.slug}`}
      className="group block border-b border-hairline py-5 first:pt-0 last:border-0"
    >
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex min-w-0 items-baseline gap-3">
          <span className="shrink-0 font-mono text-sm tabular-nums text-faint">
            {num}
          </span>
          <h3 className="font-serif text-xl leading-snug text-ink group-hover:underline group-hover:decoration-hairline group-hover:underline-offset-4">
            {technique.title}
          </h3>
        </div>
        <StageBadge stage={technique.stage} />
      </div>
      <p className="mt-2 pl-9 font-sans text-sm leading-relaxed text-studio-ink line-clamp-2">
        {technique.principle}
      </p>
    </Link>
  );
}
