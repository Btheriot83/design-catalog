"use client";

import Link from "next/link";

export function DesignerFilter({
  designers,
  current,
  basePath = "/techniques",
  stage,
}: {
  designers: { slug: string; name: string }[];
  current?: string;
  basePath?: string;
  stage?: string;
}) {
  function href(slug?: string) {
    const params = new URLSearchParams();
    if (stage) params.set("stage", stage);
    if (slug) params.set("designer", slug);
    const q = params.toString();
    return q ? `${basePath}?${q}` : basePath;
  }

  const items = [{ slug: undefined as string | undefined, name: "All designers" }, ...designers.map((d) => ({ slug: d.slug as string | undefined, name: d.name }))];

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {items.map((d) => {
        const isActive = (current ?? undefined) === d.slug || (!current && !d.slug);
        return (
          <Link
            key={d.slug ?? "all"}
            href={href(d.slug)}
            className={
              isActive
                ? "border border-ink bg-ink px-3 py-1.5 font-sans text-sm text-paper"
                : "border border-hairline bg-card px-3 py-1.5 font-sans text-sm text-studio-ink press-shadow hover:border-ink hover:text-ink"
            }
          >
            {d.name}
          </Link>
        );
      })}
    </div>
  );
}
