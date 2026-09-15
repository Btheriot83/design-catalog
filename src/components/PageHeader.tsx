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
    <header className="mb-10 border-b border-ink/10 pb-8">
      {kicker ? (
        <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.22em] text-ochre">
          {kicker}
        </p>
      ) : null}
      <h1 className="font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-ink/65">
          {description}
        </p>
      ) : null}
    </header>
  );
}
