"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/techniques", label: "Techniques" },
  { href: "/agents", label: "Agents" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="desk-nav">
      {links.map((l) => {
        const active =
          pathname === l.href || pathname.startsWith(l.href + "/");
        return (
          <Link
            key={l.href}
            href={l.href}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "font-medium text-ink underline decoration-ink underline-offset-[5px]"
                : "text-studio-ink hover:text-ink"
            }
          >
            {l.label}
          </Link>
        );
      })}
      <details className="desk-menu" key={pathname}><summary>Explore</summary><div>{[
        ["/examples", "Examples"], ["/prompts", "Prompts"], ["/compare", "Field guide"], ["/guides", "Guides"], ["/designers", "Designers"], ["/sources", "Sources"], ["/resources", "Resources"], ["/shipaton-2025", "Shipaton"], ["/motion", "Motion lab"], ["/about", "About"],
      ].map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}</div></details>
    </nav>
  );
}
