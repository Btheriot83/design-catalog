import type { Metadata } from "next";
import Link from "next/link";
import paths from "../../../content/decision-paths.json";
import { getAllDesigners, getAllTechniques } from "@/lib/content";
import { TechniqueFinder } from "@/components/TechniqueFinder";
export const metadata: Metadata = { title: "Find a technique" };
type Props = { searchParams: Promise<{ q?: string; stage?: string; designer?: string; problem?: string }> };
export default async function TechniquesPage({ searchParams }: Props) {
  const params = await searchParams;
  const all = getAllTechniques();
  const authors = getAllDesigners().filter((d) => d.techniqueSlugs.length > 0);
  const problem = paths.find((p) => p.id === params.problem);
  const author = authors.find((d) => d.slug === params.designer);
  const query = typeof params.q === "string" ? params.q.trim().slice(0, 160) : "";
  const stage = ["Discover", "Define", "Deliver"].includes(params.stage ?? "") ? params.stage : "";
  const filtered = all.filter((t) => (!problem || [problem.start, problem.support].includes(t.slug)) && (!stage || t.stage === stage) && (!author || author.techniqueSlugs.includes(t.slug)) && query.toLowerCase().split(/\s+/).every((word) => `${t.title} ${t.principle} ${t.slug} ${t.agentContract?.useWhen.join(" ")}`.toLowerCase().includes(word)));
  if (problem) filtered.sort((a, b) => Number(b.slug === problem.start) - Number(a.slug === problem.start));
  return <div><div className="finder-heading"><p className="eyebrow">The technique finder</p><h1>What needs to be clearer?</h1><p>Choose a problem or search the catalog. Start with one technique; compare a second only if you need it.</p></div>
    <form action="/techniques" method="get" className="finder-controls"><div className="search-line"><label htmlFor="catalog-query" className="sr-only">Search techniques</label><input id="catalog-query" name="q" type="search" placeholder="Search a problem or technique…" defaultValue={query} maxLength={160} /><button className="ink-button" type="submit">Find <span aria-hidden="true">↗</span></button></div><div className="filter-line"><label>Problem<select name="problem" defaultValue={problem?.id ?? ""}><option value="">Any problem</option>{paths.map((p) => <option value={p.id} key={p.id}>{p.title}</option>)}</select></label><label>Stage<select name="stage" defaultValue={stage}><option value="">All stages</option>{["Discover", "Define", "Deliver"].map((s) => <option key={s}>{s}</option>)}</select></label><label>Author<select name="designer" defaultValue={author?.slug ?? ""}><option value="">All authors</option>{authors.map((d) => <option value={d.slug} key={d.slug}>{d.name}</option>)}</select></label></div><p className="lab-caption">Filters apply together when you press Find. <Link href="/techniques" className="text-link">Reset all</Link></p></form>
    {problem && <aside className="decision-note"><p className="eyebrow">Suggested sequence · editorial guidance</p><h2>{problem.title}</h2><p>Start with <Link className="text-link" href={`/techniques/${problem.start}`}>{all.find((t) => t.slug === problem.start)?.title}</Link>. Add the companion only if a separate problem remains.</p><p><strong>Stop when:</strong> {problem.stop}</p></aside>}
    <TechniqueFinder key={`${query}/${stage}/${author?.slug}/${problem?.id}`} techniques={filtered.map((t) => ({ slug: t.slug, number: t.number, title: t.title, stage: t.stage, principle: t.principle, author: authors.find((d) => d.techniqueSlugs.includes(t.slug))?.name ?? "Catalog", contract: t.agentContract! }))} />
  </div>;
}
