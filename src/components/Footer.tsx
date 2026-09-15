import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-hairline">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-5 py-10 sm:flex-row sm:items-baseline sm:justify-between sm:px-8">
        <p className="eyebrow">Independent · No endorsement</p>
        <p className="font-sans text-sm text-studio-ink">
          <Link href="/sources" className="hover:text-ink">
            Sources
          </Link>
          {" · "}
          <Link href="/compare" className="hover:text-ink">
            Guide
          </Link>
          {" · "}
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
        </p>
      </div>
    </footer>
  );
}
