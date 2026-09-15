import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-hairline bg-paper">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-serif text-lg text-ink">Design Catalog</p>
          <p className="mt-1 max-w-md font-sans text-sm leading-relaxed text-studio-ink">
            Independent study desk of AI design craft. Not affiliated with or
            endorsed by the designers, publications, or tools cited.
          </p>
        </div>
        <p className="font-sans text-xs text-faint">
          <Link href="/sources" className="hover:text-ink">
            Sources &amp; disclaimer
          </Link>
        </p>
      </div>
    </footer>
  );
}
