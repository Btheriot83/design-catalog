/** Shared by server pages and the deterministic static exporter. */
export function contractFor(technique, paths, release) {
  const path = paths.find((p) => p.start === technique.slug || p.support === technique.slug);
  return {
    version: release.contractVersion,
    provenance: { kind: "editorial-synthesis", statement: release.provenance, sources: technique.sourceUrls },
    decisionPath: path?.id ?? null,
    useWhen: path ? [path.question] : [`The current ${technique.stage.toLowerCase()} task needs this specific principle: ${technique.principle}`],
    avoidWhen: [path?.avoid ?? technique.antiPatterns?.[0] ?? "The task is already solved or this intervention cannot be tied to an observable user outcome."],
    inputs: ["A concrete user problem and the current artifact", "Constraints, existing behavior and source attribution to preserve"],
    output: `A bounded application of “${technique.title}” with before/after evidence and remaining limitations.`,
    recipe: path?.recipe ?? technique.procedure.map((step, i) => `${i + 1}. ${step}`).join("\n"),
    acceptance: [path?.acceptance ?? `Show the before/after artifact and explain how “${technique.title}” improves the named user task.`, ...(technique.checklist ?? []).slice(0, 3)],
    stateRequirements: {
      responsive: "Check 390px and desktop plus 200% zoom; preserve reading order, wrap long text and keep actions reachable.",
      accessibility: "Use semantic headings and native controls, visible labels and focus; normal text contrast at least 4.5:1.",
      keyboard: "Complete the primary action using Tab, Shift+Tab, Enter and Space; no pointer-only information or focus trap.",
      reducedMotion: "Remove nonessential movement; preserve all state and information without waiting for animation.",
      loading: "Show pending feedback only during real work; retain context and allow navigation away.",
      empty: "Distinguish no content from no matching results; explain how to proceed or reset filters.",
      error: "Explain the failed action, retain user input and offer recovery; never claim success on failure.",
      interruption: "A newer action wins; cancel or ignore stale results and keep controls responsive.",
      stateChange: "Announce important results politely without moving focus unexpectedly."
    },
    compatibility: {
      candidates: technique.pairsWellWith ?? [],
      rule: "Start with one technique. Add at most one companion for a distinct unsolved problem; candidates are suggestions, not verified compatibility.",
      conflicts: ["Two techniques changing the same visual role require an explicit winner.", "Do not combine multiple entrance or attention effects on one target.", "Aesthetic subtraction must not remove semantics, feedback or attribution."],
      stop: path?.stop ?? "Stop when the named task is clearer and acceptance evidence is recorded; do not add polish without a problem."
    },
    comparison: path ? { bad: path.bad, good: path.good, impact: path.stop } : null
  };
}
