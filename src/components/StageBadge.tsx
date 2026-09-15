import type { Stage } from "@/lib/types";

export function StageBadge({ stage }: { stage: Stage }) {
  return (
    <span className="inline-block font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-studio-ink">
      {stage}
    </span>
  );
}
