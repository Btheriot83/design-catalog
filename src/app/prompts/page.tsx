import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PromptBlock } from "@/components/PromptBlock";
import { getAllExamplePrompts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Prompts",
};

export default function PromptsPage() {
  const prompts = getAllExamplePrompts();

  return (
    <div>
      <PageHeader
        title="Prompt library"
        description={`${prompts.length} copyable examples tied to catalog techniques. Swap in your context; taste still required.`}
      />
      <div className="space-y-6">
        {prompts.map((p) => (
          <section
            key={`${p.techniqueSlug}-${p.index}`}
            className="scroll-mt-8"
          >
            <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-xs tabular-nums text-faint">
                {String(p.techniqueNumber).padStart(2, "0")}
              </span>
              <Link
                href={`/techniques/${p.techniqueSlug}`}
                className="font-sans text-sm text-ink hover:underline hover:decoration-hairline"
              >
                {p.techniqueTitle}
              </Link>
              <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-faint">
                {p.stage}
              </span>
            </div>
            <PromptBlock label={`Example ${p.index}`}>
              {p.prompt}
            </PromptBlock>
          </section>
        ))}
      </div>
    </div>
  );
}
