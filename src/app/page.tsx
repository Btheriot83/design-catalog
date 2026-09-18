import Link from "next/link";
import Image from "next/image";
import paths from "../../content/decision-paths.json";
import { getAllTechniques } from "@/lib/content";
import { HierarchySpecimen } from "@/components/HierarchySpecimen";

export default function HomePage() {
  const techniques = getAllTechniques();
  return <div className="laboratory-home">
    <section className="lab-hero">
      <div><p className="eyebrow">A field desk for design decisions</p><h1>Better interfaces.<br /><em>Fewer moves.</em></h1><p className="hero-note">Find the smallest technique set for the problem in front of you. Understand why it works, borrow the recipe, then prove the change.</p><Link className="ink-button" href="/techniques">Find a technique <span aria-hidden="true">↗</span></Link><p className="lab-caption">{techniques.length} techniques · Public sources · Human &amp; machine readable</p></div>
      <div className="hero-stamp" aria-hidden="true"><Image src="/ink-mark.png" alt="" width={200} height={200} priority /><span>THE<br />DESIGN<br />CATALOG</span><small>Observe / apply / verify</small></div>
    </section>
    <section className="lab-section" aria-labelledby="problem-title"><div className="section-heading"><h2 id="problem-title">Start with the friction.</h2><span className="eyebrow">01 / Choose</span></div><div className="problem-grid">{paths.map((path, i) => <Link className="problem-link" key={path.id} href={`/techniques?problem=${path.id}`}><span className="problem-number">0{i + 1}</span><span><strong>{path.title}</strong><small>{path.question}</small></span><span aria-hidden="true">↗</span></Link>)}</div></section>
    <section className="lab-section" aria-labelledby="proof-title"><div className="section-heading"><h2 id="proof-title">A small change. A clearer choice.</h2><span className="eyebrow">02 / Inspect</span></div><HierarchySpecimen /></section>
    <section className="lab-section desk-method"><div><p className="eyebrow">03 / Apply &amp; verify</p><h2>Borrow a method.<br />Keep your judgment.</h2></div><div><p>Every technique keeps its source, procedure and examples. The compact agent contract adds when to use it, when to stop, a recipe and observable checks.</p><p>Start with one. Add a companion only when it solves a different problem. A cited technique is guidance—not evidence that your implementation works.</p><Link className="text-link" href="/agents">Read the agent protocol ↗</Link></div></section>
    <nav className="desk-links" aria-label="Explore the catalog"><Link href="/designers">The people behind the methods ↗</Link><Link href="/examples">Worked examples ↗</Link><Link href="/resources">Materials &amp; resources ↗</Link></nav>
  </div>;
}
