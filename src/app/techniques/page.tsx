import type { Metadata } from "next";
import { DesignerFilter } from "@/components/DesignerFilter";
import { PageHeader } from "@/components/PageHeader";
import { StageFilter } from "@/components/StageFilter";
import { TechniqueCard } from "@/components/TechniqueCard";
import {
  getAllDesigners,
  getAllTechniques,
  getDesigner,
  getTechniquesByStage,
} from "@/lib/content";
import type { Stage } from "@/lib/types";

export const metadata: Metadata = {
  title: "Techniques",
};

type Props = {
  searchParams: Promise<{ stage?: string; designer?: string }>;
};

const stages: Stage[] = ["Discover", "Define", "Deliver"];

export default async function TechniquesPage({ searchParams }: Props) {
  const { stage: stageParam, designer: designerParam } = await searchParams;
  const filter =
    stageParam && stages.includes(stageParam as Stage)
      ? (stageParam as Stage)
      : undefined;
  const designer = designerParam ? getDesigner(designerParam) : undefined;

  let techniques = getAllTechniques();
  if (designer) {
    techniques = techniques.filter((t) =>
      designer.techniqueSlugs.includes(t.slug),
    );
  }
  if (filter) {
    techniques = techniques.filter((t) => t.stage === filter);
  }

  const byStage = (["Discover", "Define", "Deliver"] as const)
    .map((stage) => ({
      stage,
      techniques: techniques.filter((t) => t.stage === stage),
    }))
    .filter((g) => g.techniques.length > 0);

  const designers = getAllDesigners()
    .filter((d) => d.techniqueSlugs.length > 0)
    .map((d) => ({ slug: d.slug, name: d.name }));

  return (
    <div>
      <PageHeader
        eyebrow="Index"
        title="Technique index"
        description={`${techniques.length} technique${techniques.length === 1 ? "" : "s"}${filter ? ` in ${filter}` : ""}${designer ? ` · ${designer.name}` : ""}—procedures, prompts, worked examples, and checklists.`}
      />
      <StageFilter current={filter ?? "All"} designer={designer?.slug} />
      <DesignerFilter
        designers={designers}
        current={designer?.slug}
        stage={filter}
      />
      <div className="space-y-14">
        {byStage.map(({ stage, techniques: list }) => (
          <section key={stage}>
            <div className="mb-1 flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-2xl text-ink">{stage}</h2>
              <span className="eyebrow">
                {String(list.length).padStart(2, "0")} entries
              </span>
            </div>
            <hr className="rule-double mb-4" />
            <div>
              {list.map((t) => (
                <TechniqueCard key={t.slug} technique={t} />
              ))}
            </div>
          </section>
        ))}
        {byStage.length === 0 ? (
          <p className="font-sans text-sm text-studio-ink">No techniques match.</p>
        ) : null}
      </div>
    </div>
  );
}
