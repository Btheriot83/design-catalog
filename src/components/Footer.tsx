import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-hairline">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-5 py-10 sm:flex-row sm:items-baseline sm:justify-between sm:px-8">
        <p className="font-sans text-sm text-studio-ink">
          Craft / anti-slop directory · Built by{" "}
          <Link
            href="/designers/brandon-theriot"
            className="text-ink underline decoration-hairline hover:decoration-ink"
          >
            Brandon Theriot
          </Link>
          {" · "}
          <a
            href="https://github.com/Btheriot83/design-catalog"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-hairline hover:text-ink hover:decoration-ink"
          >
            GitHub
          </a>
        </p>
        <p className="font-sans text-sm text-studio-ink">
          <Link href="/designers" className="hover:text-ink">
            Directory
          </Link>
          {" · "}
          <Link href="/sources" className="hover:text-ink">
            Sources
          </Link>
          {" · "}
          <Link href="/resources" className="hover:text-ink">
            Resources
          </Link>
          {" · "}
          <Link href="/agents" className="hover:text-ink">
            Agents
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
