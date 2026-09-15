import Link from "next/link";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="border-b border-hairline bg-paper">
      <div className="mx-auto flex max-w-3xl items-baseline justify-between gap-6 px-5 py-5 sm:px-8">
        <Link href="/" className="font-serif text-xl tracking-tight text-ink">
          Design Catalog
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}
