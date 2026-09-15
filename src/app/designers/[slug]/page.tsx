import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DesignerEntry } from "@/components/DesignerEntry";
import { getAllDesigners, getAllTechniques, getDesigner } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllDesigners().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const designer = getDesigner(slug);
  if (!designer) return { title: "Designer" };
  return { title: designer.name };
}

function stagesTitleFor(slug: string, status: string) {
  if (slug === "anshu-chimala") return "Stages · Double Diamond for agents";
  if (status === "directory") return "Stages";
  return "Stages";
}

export default async function DesignerSlugPage({ params }: Props) {
  const { slug } = await params;
  const designer = getDesigner(slug);
  if (!designer) notFound();

  // Stub entries without a real page would 404; directory/complete/partial/curator open.
  if (designer.status === "stub") notFound();

  const techniques = getAllTechniques().filter((t) =>
    designer.techniqueSlugs.includes(t.slug),
  );

  return (
    <DesignerEntry
      designer={designer}
      techniques={techniques}
      stagesTitle={stagesTitleFor(designer.slug, designer.status)}
    />
  );
}
