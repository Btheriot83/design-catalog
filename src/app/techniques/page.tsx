import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { StageFilter } from "@/components/StageFilter";
import { TechniqueCard } from "@/components/TechniqueCard";
import { getAllTechniques, getTechniquesByStage } from "@/lib/content";
import type { Stage } from "@/lib/types";

export const metadata: Metadata = {
  title: "Techniques",
};

type Props = {
  searchParams: Promise<{ stage?: string }>;
};

const stages: Stage[] = ["Discover", "Define", "Deliver"];

export default async function TechniquesPage({ searchParams }: Props) {
  const { stage: stageParam } = await searchParams;
  const filter =
    stageParam && stages.includes(stageParam as Stage)
      ? (stageParam as Stage)
      : undefined;

  const byStage = getTechniquesByStage().filter(
    ({ stage }) => !filter || stage === filter,
  );
  const count = filter
    ? byStage[0]?.techniques.length ?? 0
    : getAllTechniques().length;

  return (
    <div>
      <PageHeader
        title="Technique index"
        description={`${count} technique${count === 1 ? "" : "s"}${filter ? ` in ${filter}` : " across Discover, Define, and Deliver"}—procedures, prompts, and tips for escaping average output.`}
      />
      <StageFilter current={filter ?? "All"} />
      <div className="space-y-12">
        {byStage.map(({ stage, techniques }) => (
          <section key={stage}>
            <h2 className="mb-1 font-serif text-2xl text-ink">{stage}</h2>
            <p className="mb-4 font-mono text-xs tabular-nums text-faint">
              {techniques.length} entries
            </p>
            <div className="border-t border-hairline">
              {techniques.map((t) => (
                <TechniqueCard key={t.slug} technique={t} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
