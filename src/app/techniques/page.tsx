import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TechniqueCard } from "@/components/TechniqueCard";
import { getTechniquesByStage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Techniques",
};

export default function TechniquesPage() {
  const byStage = getTechniquesByStage();

  return (
    <div>
      <PageHeader
        kicker="Techniques"
        title="Eight ways past average slop"
        description="Discover variety, Define identity, Deliver restraint. Numbered as in Anshu’s essay."
      />
      <div className="space-y-12">
        {byStage.map(({ stage, techniques }) => (
          <section key={stage}>
            <h2 className="mb-4 border-b border-ink/10 pb-2 font-serif text-2xl text-ink">
              {stage}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
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
