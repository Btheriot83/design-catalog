import Link from "next/link";
import type { Technique } from "@/lib/types";
import { CardTilt } from "@/components/motion/CardTilt";
import { FolioNumber } from "@/components/motion/FolioNumber";
import { StageBadge } from "./StageBadge";

export function TechniqueCard({
  technique,
  tilt = true,
}: {
  technique: Technique;
  /** Subtle 3D tilt — default on for letterpress desk */
  tilt?: boolean;
}) {
  const num = String(technique.number).padStart(2, "0");
  const exampleCount = technique.workedExamples?.length ?? 0;
  const hasChecklist = (technique.checklist?.length ?? 0) > 0;
  const metaParts: string[] = [];
  if (exampleCount > 0) {
    metaParts.push(
      `${exampleCount} example${exampleCount === 1 ? "" : "s"}`,
    );
  }
  if (hasChecklist) metaParts.push("checklist");

  const body = (
    <Link
      href={`/techniques/${technique.slug}`}
      className={
        tilt
          ? "group grid grid-cols-[4.5rem_1fr] gap-x-4 bg-card/30 py-7 sm:grid-cols-[5.5rem_1fr] sm:gap-x-6"
          : "group grid grid-cols-[4.5rem_1fr] gap-x-4 border-b border-hairline py-7 first:pt-1 last:border-0 sm:grid-cols-[5.5rem_1fr] sm:gap-x-6"
      }
      style={{ viewTransitionName: `tech-${technique.slug}` }}
    >
      <span className="folio-num text-4xl text-ink/90 sm:text-5xl" aria-hidden>
        <FolioNumber value={num} className="text-4xl sm:text-5xl" />
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
        {metaParts.length > 0 ? (
          <p className="mt-2.5 font-sans text-[11px] tracking-wide text-faint">
            {metaParts.join(" · ")}
          </p>
        ) : null}
      </div>
    </Link>
  );

  if (!tilt) return body;

  return (
    <CardTilt className="border-b border-hairline last:border-0">{body}</CardTilt>
  );
}
