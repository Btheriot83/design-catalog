import { CopyButton } from "./CopyButton";
import type { TechniqueContract } from "@/lib/types";
export function AgentContract({ contract: c, slug }: { contract: TechniqueContract; slug: string }) {
  return <section id="agent-contract" className="agent-contract">
    <div className="section-heading"><h2>The compact contract</h2><a className="text-link" href={`/data/techniques/${slug}.json`}>JSON ↗</a></div><p className="lab-caption">Contract v{c.version} · Catalog editorial guidance · Acceptance below is a requirement, not a passed test.</p>
    <div className="contract-fit"><div><h3>Use when</h3>{c.useWhen.map((s) => <p key={s}>{s}</p>)}</div><div><h3>Avoid when</h3>{c.avoidWhen.map((s) => <p key={s}>{s}</p>)}</div></div>
    {c.comparison && <div className="contract-fit comparison-example"><div><h3>Less clear</h3><p>{c.comparison.bad}</p></div><div><h3>More clear</h3><p>{c.comparison.good}</p></div><p className="col-span-full"><strong>Comprehension impact:</strong> {c.comparison.impact}</p></div>}
    <details open><summary>Apply · framework-neutral recipe</summary><p><strong>Bring:</strong> {c.inputs.join("; ")}.</p><div className="recipe-heading"><span>Adapt to your product</span><CopyButton text={c.recipe} /></div><pre className="recipe-code"><code>{c.recipe}</code></pre><p><strong>Produce:</strong> {c.output}</p></details>
    <details><summary>Verify · acceptance and interface states</summary><ul>{c.acceptance.map((s) => <li key={s}>{s}</li>)}</ul><dl className="state-requirements">{Object.entries(c.stateRequirements).map(([state, requirement]) => <div key={state}><dt>{state.replace(/([A-Z])/g, " $1")}</dt><dd>{requirement}</dd></div>)}</dl><p>For non-interface work, mark an irrelevant state N/A with a reason. Never treat missing evidence as a pass.</p></details>
    <details><summary>Combine · limits and stopping rule</summary><p>{c.compatibility.rule}</p><ul>{c.compatibility.conflicts.map((s) => <li key={s}>{s}</li>)}</ul><p><strong>Stop:</strong> {c.compatibility.stop}</p></details><p className="lab-caption">{c.provenance.statement}</p>
  </section>;
}
