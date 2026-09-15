import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PromptBlock } from "@/components/PromptBlock";
import { StageBadge } from "@/components/StageBadge";
import { getAllExamplePrompts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Prompts",
};

export default function PromptsPage() {
  const prompts = getAllExamplePrompts();

  return (
    <div>
      <PageHeader
        kicker="Prompt library"
        title="Copyable examples from the catalog"
        description="Prompts drawn from Anshu’s essay and the catalog’s procedure notes. Replace placeholder API keys. Taste still required."
      />
      <div className="space-y-10">
        {prompts.map((p) => (
          <section key={`${p.techniqueSlug}-${p.index}`} className="scroll-mt-8">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <StageBadge stage={p.stage} />
              <Link
                href={`/techniques/${p.techniqueSlug}`}
                className="font-sans text-sm text-ink/70 hover:text-ochre"
              >
                <span className="tabular-nums text-ink/35">
                  {String(p.techniqueNumber).padStart(2, "0")}
                </span>{" "}
                {p.techniqueTitle}
              </Link>
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
