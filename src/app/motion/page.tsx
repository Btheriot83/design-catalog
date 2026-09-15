import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { MotionLab } from "@/components/MotionLab";

export const metadata: Metadata = {
  title: "Motion lab",
};

export default function MotionPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Extra · free recipes"
        title="Motion lab"
        description="Quiet Folio wiring of transitions.dev free recipes. Primary use is product chrome—this page is a restrained reference desk."
      />
      <p className="mb-10 font-sans text-sm text-studio-ink">
        Source:{" "}
        <a
          href="https://transitions.dev/"
          className="text-ink underline decoration-hairline"
          target="_blank"
          rel="noopener noreferrer"
        >
          transitions.dev
        </a>{" "}
        (Jakub Antalik). See also{" "}
        <Link href="/techniques/make-it-alive" className="text-ink underline decoration-hairline">
          Make it alive
        </Link>{" "}
        and{" "}
        <Link href="/techniques/video-motion" className="text-ink underline decoration-hairline">
          Video motion
        </Link>
        .
      </p>
      <MotionLab />
    </div>
  );
}
