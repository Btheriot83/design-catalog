"use client";
import Link from "next/link";
export default function Error({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return <div className="empty-desk" role="alert"><h2>The technique desk could not open.</h2><p>Your search remains in the page address. Try again, or return to the catalog.</p><div className="desk-links"><button className="ink-button" onClick={() => retry()}>Try again</button><Link className="text-link" href="/techniques">Open the full catalog</Link></div></div>;
}
