"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="border border-hairline bg-card px-2.5 py-1 font-sans text-[11px] uppercase tracking-[0.12em] text-studio-ink hover:border-ink hover:text-ink"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
