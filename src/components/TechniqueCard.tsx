import Link from "next/link";
import type { Technique } from "@/lib/types";
import { StageBadge } from "./StageBadge";

export function TechniqueCard({ technique }: { technique: Technique }) {
  const num = String(technique.number).padStart(2, "0");
  return (
    <Link
      href={`/techniques/${technique.slug}`}
      className="group block border border-ink/12 bg-paper-raised p-5 transition-colors hover:border-ochre/50"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-serif text-3xl tabular-nums text-ink/25 group-hover:text-ochre/60">
          {num}
        </span>
        <StageBadge stage={technique.stage} />
      </div>
      <h3 className="mt-3 font-serif text-xl leading-snug text-ink group-hover:text-ochre">
        {technique.title}
      </h3>
      <p className="mt-2 line-clamp-3 font-sans text-sm leading-relaxed text-ink/60">
        {technique.principle}
      </p>
    </Link>
  );
}
