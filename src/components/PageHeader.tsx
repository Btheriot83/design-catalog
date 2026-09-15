export function PageHeader({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <header className="mb-12">
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h1 className="max-w-2xl font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-[2.75rem]">
        {title}
      </h1>
      <hr className="rule-double mt-6 max-w-xs" />
      {description ? (
        <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-studio-ink">
          {description}
        </p>
      ) : null}
    </header>
  );
}
