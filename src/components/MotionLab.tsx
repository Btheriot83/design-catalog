"use client";

import { useState } from "react";
import { CardTilt } from "@/components/motion/CardTilt";
import { FolioNumber } from "@/components/motion/FolioNumber";
import { SkeletonReveal } from "@/components/motion/SkeletonReveal";
import { TextsReveal as LineReveal } from "@/components/motion/TextsReveal";
import { TextsReveal } from "@/components/TextsReveal";

export function MotionLab() {
  const [copied, setCopied] = useState(false);
  const [skelKey, setSkelKey] = useState(0);
  const [count, setCount] = useState(24);

  return (
    <div className="space-y-14">
      <section>
        <p className="eyebrow mb-4 text-ink">texts-reveal</p>
        <LineReveal
          className="index-card p-6"
          line1={
            <span className="font-serif text-2xl font-normal text-ink">
              Letterpress headline
            </span>
          }
          line2={
            <span className="mt-2 block font-sans text-sm text-studio-ink">
              Staggered blur rise — first paint, respects reduced motion.
            </span>
          }
        />
      </section>

      <section>
        <p className="eyebrow mb-4 text-ink">number-pop-in</p>
        <div className="flex items-end gap-6">
          <FolioNumber
            key={count}
            value={String(count).padStart(2, "0")}
            className="text-6xl"
          />
          <button
            type="button"
            className="border border-hairline bg-card px-3 py-1.5 font-sans text-sm text-ink press-shadow hover:border-ink"
            onClick={() => setCount((c) => c + 1)}
          >
            Bump count
          </button>
        </div>
      </section>

      <section>
        <p className="eyebrow mb-4 text-ink">card-tilt · restrained</p>
        <CardTilt className="max-w-sm">
          <div className="index-card p-5">
            <p className="font-serif text-lg text-ink">Technique row feel</p>
            <p className="mt-2 font-sans text-sm text-studio-ink">
              ~3.5° lean — desk, not toy.
            </p>
          </div>
        </CardTilt>
      </section>

      <section>
        <p className="eyebrow mb-4 text-ink">success-check</p>
        <button
          type="button"
          className="inline-flex items-center gap-2 border border-ink bg-ink px-3 py-2 font-sans text-sm text-paper"
          onClick={() => {
            setCopied(false);
            requestAnimationFrame(() => setCopied(true));
          }}
        >
          {copied ? (
            <>
              <span className="t-success-check" data-state="in" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13.5 9.5 18 19 7"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Saved
            </>
          ) : (
            "Trigger check"
          )}
        </button>
      </section>

      <section>
        <p className="eyebrow mb-4 text-ink">skeleton-reveal</p>
        <button
          type="button"
          className="mb-4 border border-hairline bg-card px-3 py-1.5 font-sans text-sm press-shadow hover:border-ink"
          onClick={() => setSkelKey((k) => k + 1)}
        >
          Replay reveal
        </button>
        <SkeletonReveal key={skelKey} delayMs={280} bars={3}>
          <div className="border border-hairline bg-card p-4 font-sans text-sm text-studio-ink">
            Content after pulse — prompts filter uses the same recipe.
          </div>
        </SkeletonReveal>
      </section>

      <section>
        <p className="eyebrow mb-4 text-ink">page header stagger</p>
        <TextsReveal className="index-card p-5">
          <p className="eyebrow t-stagger-line t-stagger-line--1 mb-3">Lab</p>
          <p className="t-stagger-line t-stagger-line--2 font-serif text-xl text-ink">
            Flexible children reveal
          </p>
        </TextsReveal>
      </section>

      <p className="font-sans text-xs text-faint">
        Stage filter (tabs-sliding) on{" "}
        <a href="/techniques" className="underline decoration-hairline">
          /techniques
        </a>
        . Copy confirmation on every prompt block. Free recipes only.
      </p>
    </div>
  );
}
