import { CopyButton } from "./CopyButton";

export function PromptBlock({
  children,
  label,
}: {
  children: string;
  label?: string;
}) {
  return (
    <figure className="border border-hairline bg-card">
      <div className="flex items-center justify-between gap-3 border-b border-hairline px-4 py-2">
        <figcaption className="font-sans text-[10px] uppercase tracking-[0.16em] text-faint">
          {label ?? "Prompt"}
        </figcaption>
        <CopyButton text={children} />
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap px-4 py-4 font-mono text-[13px] leading-relaxed text-ink">
        {children}
      </pre>
    </figure>
  );
}
