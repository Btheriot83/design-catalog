export function PromptBlock({
  children,
  label,
}: {
  children: string;
  label?: string;
}) {
  return (
    <figure className="border border-ink/15 bg-ink/[0.03]">
      {label ? (
        <figcaption className="border-b border-ink/10 px-4 py-2 font-sans text-[10px] uppercase tracking-[0.18em] text-ink/45">
          {label}
        </figcaption>
      ) : null}
      <pre className="overflow-x-auto whitespace-pre-wrap px-4 py-4 font-mono text-[13px] leading-relaxed text-ink/85">
        {children}
      </pre>
    </figure>
  );
}
