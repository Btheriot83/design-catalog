import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DesignerEntry } from "@/components/DesignerEntry";
import { getAllTechniques, getDesigner } from "@/lib/content";

export const metadata: Metadata = { title: "Greg Huntoon" };

export default function GregPage() {
  const designer = getDesigner("greg-huntoon");
  if (!designer) notFound();
  const techniques = getAllTechniques().filter((t) =>
    designer.techniqueSlugs.includes(t.slug),
  );
  return (
    <DesignerEntry
      designer={designer}
      techniques={techniques}
      stagesTitle="Stages · TC-EBC mapped"
    />
  );
}
