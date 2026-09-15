"use client";

import Link from "next/link";
import type { Stage } from "@/lib/types";

const stages: Array<"All" | Stage> = ["All", "Discover", "Define", "Deliver"];

export function StageFilter({ current }: { current?: string }) {
  const active = current && current !== "All" ? current : "All";

  return (
    <div className="mb-8 flex flex-wrap gap-2 border-b border-hairline pb-4">
      {stages.map((s) => {
        const href =
          s === "All" ? "/techniques" : `/techniques?stage=${encodeURIComponent(s)}`;
        const isActive = active === s;
        return (
          <Link
            key={s}
            href={href}
            className={
              isActive
                ? "border border-ink bg-ink px-3 py-1.5 font-sans text-sm text-paper"
                : "border border-hairline bg-card px-3 py-1.5 font-sans text-sm text-studio-ink hover:border-ink hover:text-ink"
            }
          >
            {s}
          </Link>
        );
      })}
    </div>
  );
}
