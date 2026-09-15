"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
  type PointerEvent as REPointerEvent,
} from "react";

const MAX = 3.5; // letterpress desk, not toy

export function CardTilt({
  children,
  className = "",
  enabled = true,
}: {
  children: ReactNode;
  className?: string;
  enabled?: boolean;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => {
    const w = wrap.current;
    const c = card.current;
    if (!w || !c) return;
    w.classList.remove("is-hover");
    c.classList.remove("is-tilting");
    c.style.setProperty("--tilt-rx", "0deg");
    c.style.setProperty("--tilt-ry", "0deg");
  }, []);

  const track = useCallback(
    (e: REPointerEvent<HTMLDivElement>) => {
      if (!enabled) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (window.matchMedia("(hover: none)").matches && e.pointerType === "touch")
        return;
      const w = wrap.current;
      const c = card.current;
      if (!w || !c) return;
      const r = w.getBoundingClientRect();
      const px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      const py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
      w.classList.add("is-hover");
      c.classList.add("is-tilting");
      c.style.setProperty("--tilt-ry", `${((px - 0.5) * MAX).toFixed(2)}deg`);
      c.style.setProperty("--tilt-rx", `${((0.5 - py) * MAX).toFixed(2)}deg`);
      c.style.setProperty("--tilt-gx", `${(px * 100).toFixed(1)}%`);
      c.style.setProperty("--tilt-gy", `${(py * 100).toFixed(1)}%`);
    },
    [enabled],
  );

  useEffect(() => {
    if (!enabled) reset();
  }, [enabled, reset]);

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={wrap}
      className={`t-tilt ${className}`.trim()}
      onPointerMove={track}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") reset();
      }}
      onPointerUp={reset}
      onPointerCancel={reset}
    >
      <div ref={card} className="t-tilt-card">
        {children}
        <div className="t-tilt-glare" aria-hidden />
      </div>
    </div>
  );
}
