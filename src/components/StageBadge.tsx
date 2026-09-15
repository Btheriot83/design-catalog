import type { Stage } from "@/lib/types";

export function StageBadge({ stage }: { stage: Stage }) {
  return (
    <span className="inline-block font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-studio-ink">
      {stage}
    </span>
  );
}
