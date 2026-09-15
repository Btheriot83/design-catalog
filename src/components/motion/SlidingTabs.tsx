"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

export type TabItem = {
  key: string;
  label: string;
  href: string;
};

export function SlidingTabs({
  items,
  activeKey,
  className = "",
}: {
  items: TabItem[];
  activeKey: string;
  className?: string;
}) {
  const bar = useRef<HTMLDivElement>(null);
  const pill = useRef<HTMLSpanElement>(null);

  const moveTo = useCallback((tab: HTMLElement, animate: boolean) => {
    const p = pill.current;
    if (!p) return;
    if (!animate) {
      const prev = p.style.transition;
      p.style.transition = "none";
      p.style.transform = `translateX(${tab.offsetLeft}px)`;
      p.style.width = `${tab.offsetWidth}px`;
      void p.offsetWidth;
      p.style.transition = prev;
    } else {
      p.style.transform = `translateX(${tab.offsetLeft}px)`;
      p.style.width = `${tab.offsetWidth}px`;
    }
  }, []);

  useEffect(() => {
    const root = bar.current;
    if (!root) return;
    const active =
      (root.querySelector('[aria-selected="true"]') as HTMLElement | null) ||
      (root.querySelector(".t-tab") as HTMLElement | null);
    if (active) {
      requestAnimationFrame(() => moveTo(active, false));
    }
    const onResize = () => {
      const a =
        (root.querySelector('[aria-selected="true"]') as HTMLElement | null) ||
        (root.querySelector(".t-tab") as HTMLElement | null);
      if (a) moveTo(a, false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeKey, items, moveTo]);

  return (
    <div
      ref={bar}
      className={`t-tabs ${className}`.trim()}
      role="tablist"
      aria-label="Stage filter"
    >
      <span ref={pill} className="t-tabs-pill" aria-hidden="true" />
      {items.map((item) => {
        const selected = item.key === activeKey;
        return (
          <Link
            key={item.key}
            href={item.href}
            role="tab"
            aria-selected={selected}
            className="t-tab"
            onClick={(e) => {
              const el = e.currentTarget;
              moveTo(el, true);
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
