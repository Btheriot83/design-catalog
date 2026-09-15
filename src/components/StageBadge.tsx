import type { Stage } from "@/lib/types";

const styles: Record<Stage, string> = {
  Discover: "border-ochre/40 text-ochre",
  Define: "border-ink/30 text-ink/70",
  Deliver: "border-deep-red/40 text-deep-red",
};

export function StageBadge({ stage }: { stage: Stage }) {
  return (
    <span
      className={`inline-block border px-2 py-0.5 font-sans text-[10px] uppercase tracking-[0.2em] ${styles[stage]}`}
    >
      {stage}
    </span>
  );
}
