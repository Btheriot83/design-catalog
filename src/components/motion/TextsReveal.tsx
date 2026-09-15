"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function TextsReveal({
  line1,
  line2,
  className = "",
}: {
  line1: ReactNode;
  line2?: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("is-shown");
      return;
    }
    el.classList.remove("is-shown");
    void el.offsetHeight;
    const id = requestAnimationFrame(() => el.classList.add("is-shown"));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div ref={ref} className={`t-stagger ${className}`.trim()}>
      <strong className="t-stagger-line t-stagger-line--1">{line1}</strong>
      {line2 ? (
        <span className="t-stagger-line t-stagger-line--2">{line2}</span>
      ) : null}
    </div>
  );
}
