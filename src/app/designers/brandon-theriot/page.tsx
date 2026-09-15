import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DesignerEntry } from "@/components/DesignerEntry";
import { getAllTechniques, getDesigner } from "@/lib/content";

export const metadata: Metadata = { title: "Brandon Theriot" };

export default function BrandonPage() {
  const designer = getDesigner("brandon-theriot");
  if (!designer) notFound();
  const techniques = getAllTechniques().filter((t) =>
    designer.techniqueSlugs.includes(t.slug),
  );
  return (
    <DesignerEntry
      designer={designer}
      techniques={techniques}
      stagesTitle="Stages"
    />
  );
}
