"use client";
import { useState } from "react";
export function CopyButton({ text }: { text: string }) {
  const [state, setState] = useState<"ready" | "pending" | "copied" | "error">("ready");
  async function copy() {
    setState("pending");
    try { await navigator.clipboard.writeText(text); setState("copied"); }
    catch { setState("error"); }
  }
  return <span className="copy-control"><button type="button" disabled={state === "pending"} onClick={copy} className="copy-button">{state === "pending" ? "Copying…" : state === "copied" ? "Copy again" : "Copy"}</button><span role="status" className="copy-status">{state === "copied" ? "Copied." : state === "error" ? "Clipboard unavailable. Select and copy the text below." : ""}</span>{state === "error" && <textarea readOnly aria-label="Text to copy manually" value={text} onFocus={(event) => event.currentTarget.select()} className="manual-copy" />}</span>;
}
