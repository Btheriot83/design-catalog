"use client";

import { useEffect, useRef, useState } from "react";

export function FolioNumber({
  value,
  className = "",
}: {
  value: string | number;
  className?: string;
}) {
  const str = String(value);
  const chars = str.split("");
  const ref = useRef<HTMLSpanElement>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setAnimating(true);
      return;
    }

    const play = () => {
      setAnimating(false);
      requestAnimationFrame(() => {
        void el.offsetHeight;
        setAnimating(true);
      });
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          play();
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [str]);

  return (
    <span
      ref={ref}
      className={`t-digit-group folio-num ${animating ? "is-animating" : ""} ${className}`.trim()}
      aria-label={str}
    >
      {chars.map((ch, i) => {
        const fromEnd = chars.length - 1 - i;
        const stagger =
          fromEnd === 1 ? "1" : fromEnd === 0 ? "2" : undefined;
        return (
          <span key={`${i}-${ch}`} className="t-digit" data-stagger={stagger}>
            {ch}
          </span>
        );
      })}
    </span>
  );
}
