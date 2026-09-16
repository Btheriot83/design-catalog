"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/techniques", label: "Techniques" },
  { href: "/examples", label: "Examples" },
  { href: "/prompts", label: "Prompts" },
  { href: "/compare", label: "Guide" },
  { href: "/guides", label: "Guides" },
  { href: "/designers", label: "Designers" },
  { href: "/sources", label: "Sources" },
  { href: "/resources", label: "Resources" },
  { href: "/agents", label: "Agents" },
  { href: "/about", label: "About" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap justify-end gap-x-3.5 gap-y-1.5 font-sans text-[12px] tracking-wide sm:gap-x-4 sm:text-[13px]">
      {links.map((l) => {
        const active =
          pathname === l.href || pathname.startsWith(l.href + "/");
        return (
          <Link
            key={l.href}
            href={l.href}
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
    </nav>
  );
}
