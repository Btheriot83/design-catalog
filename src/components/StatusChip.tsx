import type { Designer } from "@/lib/types";

const labels: Record<Designer["status"], string> = {
  complete: "Complete",
  partial: "Partial",
  stub: "Stub",
  curator: "Builder",
};

export function StatusChip({ status }: { status: Designer["status"] }) {
  const filled = status === "complete";
  const builder = status === "curator";
  return (
    <span
      className={
        filled
          ? "inline-block border border-ink bg-ink px-2 py-0.5 font-sans text-[10px] uppercase tracking-[0.16em] text-paper"
          : builder
            ? "inline-block border border-ink px-2 py-0.5 font-sans text-[10px] uppercase tracking-[0.16em] text-ink"
            : "inline-block border border-hairline px-2 py-0.5 font-sans text-[10px] uppercase tracking-[0.16em] text-studio-ink"
      }
    >
      {labels[status]}
    </span>
  );
}
