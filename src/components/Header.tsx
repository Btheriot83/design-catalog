import Link from "next/link";

const links = [
  { href: "/designers", label: "Designers" },
  { href: "/techniques", label: "Techniques" },
  { href: "/prompts", label: "Prompts" },
  { href: "/sources", label: "Sources" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="border-b border-ink/15 bg-paper">
      <div className="mx-auto flex max-w-5xl items-baseline justify-between gap-6 px-5 py-5 sm:px-8">
        <Link href="/" className="group">
          <span className="font-serif text-xl tracking-tight text-ink group-hover:text-ochre">
            Design Catalog
          </span>
          <span className="mt-0.5 block font-sans text-[11px] uppercase tracking-[0.18em] text-ink/50">
            Paper · Ink · Craft
          </span>
        </Link>
        <nav className="flex flex-wrap justify-end gap-x-5 gap-y-2 font-sans text-sm text-ink/70">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-ochre transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
