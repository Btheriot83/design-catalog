"use client";

import { SlidingTabs } from "@/components/motion/SlidingTabs";
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
    <div className="mb-4 border-b border-hairline pb-4">
      <SlidingTabs
        activeKey={active}
        items={stages.map((s) => ({
          key: s,
          label: s,
          href: href(s),
        }))}
      />
    </div>
  );
}
