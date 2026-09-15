import { CopyButton } from "./CopyButton";

export function PromptBlock({
  children,
  label,
  why,
}: {
  children: string;
  label?: string;
  why?: string;
}) {
  return (
    <figure className="index-card overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-hairline bg-ghost/60 px-4 py-2.5">
        <figcaption className="eyebrow text-studio-ink">{label ?? "Prompt"}</figcaption>
        <CopyButton text={children} />
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap px-4 py-4 font-mono text-[13px] leading-relaxed text-ink sm:px-5 sm:py-5">
        {children}
      </pre>
      {why ? (
        <figcaption className="border-t border-hairline px-4 py-3 font-sans text-sm leading-relaxed text-studio-ink sm:px-5">
          <span className="eyebrow mr-2 text-faint">Why</span>
          {why}
        </figcaption>
      ) : null}
    </figure>
  );
}
