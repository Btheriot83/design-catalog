"use client";

import { FolioNumber } from "@/components/motion/FolioNumber";

export function NumberPopIn({
  value,
  className = "",
  pad = 0,
}: {
  value: number | string;
  className?: string;
  pad?: number;
}) {
  const str =
    typeof value === "number" && pad > 0
      ? String(value).padStart(pad, "0")
      : String(value);
  return <FolioNumber value={str} className={className} />;
}
