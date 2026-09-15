"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(false);
      // reflow restart for success-check replay
      requestAnimationFrame(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      });
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          void onCopy();
        }
      }}
      aria-label={copied ? "Copied" : "Copy prompt"}
      className="inline-flex items-center gap-1.5 border border-hairline bg-card px-2.5 py-1 font-sans text-[11px] uppercase tracking-[0.16em] text-studio-ink hover:border-ink hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      {copied ? (
        <>
          <span
            key="check"
            className="t-success-check"
            data-state="in"
            aria-hidden="true"
          >
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
          Copied
        </>
      ) : (
        "Copy"
      )}
    </button>
  );
}
