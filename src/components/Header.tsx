import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="border-b border-hairline bg-paper/80 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-6 px-5 py-5 sm:px-8">
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
