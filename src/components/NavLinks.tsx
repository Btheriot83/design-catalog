"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/techniques", label: "Techniques" },
  { href: "/prompts", label: "Prompts" },
  { href: "/designers", label: "Designers" },
  { href: "/sources", label: "Sources" },
  { href: "/about", label: "About" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap justify-end gap-x-5 gap-y-2 font-sans text-sm">
      {links.map((l) => {
        const active =
          pathname === l.href || pathname.startsWith(l.href + "/");
        return (
          <Link
            key={l.href}
            href={l.href}
            className={
              active
                ? "font-medium text-ink underline decoration-ink underline-offset-[6px]"
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
