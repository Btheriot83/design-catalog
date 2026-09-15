"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Flexible stagger wrapper (children with .t-stagger-line). */
export function TextsReveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "header" | "section";
}) {
  const ref = useRef<HTMLElement | null>(null);

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
    <Tag ref={ref as never} className={`t-stagger ${className}`.trim()}>
      {children}
    </Tag>
  );
}
