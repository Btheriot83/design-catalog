"use client";

import { useEffect, useState, type ReactNode } from "react";

/** Pulse placeholder then cross-fade to children (transitions.dev free recipe). */
export function SkeletonReveal({
  children,
  delayMs = 280,
  bars = 3,
}: {
  children: ReactNode;
  delayMs?: number;
  bars?: number;
}) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setRevealed(true);
      return;
    }
    const t = window.setTimeout(() => setRevealed(true), delayMs);
    return () => window.clearTimeout(t);
  }, [delayMs]);

  if (revealed) {
    return <>{children}</>;
  }

  return (
    <div className="t-skel min-h-[4.5rem]" aria-busy="true" aria-live="polite">
      <div className="t-skel-skeleton is-pulsing relative !static space-y-2 p-1">
        {Array.from({ length: bars }).map((_, i) => (
          <div
            key={i}
            className="h-3 rounded-[1px] bg-ghost"
            style={{ width: `${88 - i * 12}%` }}
          />
        ))}
      </div>
      <div className="sr-only">{children}</div>
    </div>
  );
}
