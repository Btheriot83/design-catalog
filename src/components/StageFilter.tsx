"use client";

import Link from "next/link";
import type { Stage } from "@/lib/types";

const stages: Array<"All" | Stage> = ["All", "Discover", "Define", "Deliver"];

export function StageFilter({
  current,
  designer,
  basePath = "/techniques",
}: {
  current?: string;
  designer?: string;
  basePath?: string;
}) {
  const active = current && current !== "All" ? current : "All";

  function href(s: "All" | Stage) {
    const params = new URLSearchParams();
    if (s !== "All") params.set("stage", s);
    if (designer) params.set("designer", designer);
    const q = params.toString();
    return q ? `${basePath}?${q}` : basePath;
  }

  return (
    <div className="mb-4 flex flex-wrap gap-2 border-b border-hairline pb-4">
      {stages.map((s) => {
        const isActive = active === s;
        return (
          <Link
            key={s}
            href={href(s)}
            className={
              isActive
                ? "border border-ink bg-ink px-3 py-1.5 font-sans text-sm text-paper"
                : "border border-hairline bg-card px-3 py-1.5 font-sans text-sm text-studio-ink press-shadow hover:border-ink hover:text-ink"
            }
          >
            {s}
          </Link>
        );
      })}
    </div>
  );
}
