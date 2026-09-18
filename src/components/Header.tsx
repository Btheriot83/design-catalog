import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="site-header border-b border-hairline bg-paper">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/ink-mark-sm.png"
            alt=""
            width={32}
            height={32}
            className="opacity-90 transition-opacity group-hover:opacity-100"
            unoptimized
          />
          <span className="font-serif text-xl tracking-tight text-ink">
            Design Catalog
          </span>
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}
