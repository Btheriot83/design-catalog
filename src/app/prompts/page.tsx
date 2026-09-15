import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PromptsLibrary } from "@/components/PromptsLibrary";
import { getAllDesigners, getAllExamplePrompts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Prompts",
};

export default function PromptsPage() {
  const prompts = getAllExamplePrompts();
  const designers = getAllDesigners()
    .filter((d) => d.techniqueSlugs.length > 0)
    .map((d) => ({ slug: d.slug, name: d.name }));

  return (
    <div>
      <PageHeader
        eyebrow="Library"
        title="Prompt library"
        description={`${prompts.length} copyable examples—filter by designer and stage. Each card is an index card: copy is keyboard-friendly; “why” is the craft note.`}
      />
      <PromptsLibrary prompts={prompts} designers={designers} />
    </div>
  );
}
