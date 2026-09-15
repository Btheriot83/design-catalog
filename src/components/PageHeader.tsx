export function PageHeader({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-10 border-b border-hairline pb-8">
      {kicker ? (
        <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.18em] text-faint">
          {kicker}
        </p>
      ) : null}
      <h1 className="font-serif text-4xl leading-tight tracking-tight text-ink sm:text-[2.75rem]">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-studio-ink">
          {description}
        </p>
      ) : null}
    </header>
  );
}
