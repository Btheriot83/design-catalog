import type { Metadata } from "next";
import { DesignersDirectory } from "@/components/DesignersDirectory";
import { PageHeader } from "@/components/PageHeader";
import { getAllDesigners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Designers",
};

export default function DesignersPage() {
  const designers = getAllDesigners();

  return (
    <div>
      <PageHeader
        eyebrow="Directory"
        title="Designers"
        description="A letterpress roll of craft voices against AI slop—technique authors first, then a verified public directory with outbound credits. No endorsement."
      />
      <DesignersDirectory designers={designers} />
    </div>
  );
}
