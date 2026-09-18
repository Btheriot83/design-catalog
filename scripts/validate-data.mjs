#!/usr/bin/env node
// No network and no writes to tracked artifacts. Generation is compared in owned temporary directories.
import { mkdtempSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { execFileSync } from "node:child_process";
import assert from "node:assert/strict";
const root = resolve(import.meta.dirname, "..");
const temporary = mkdtempSync(join(tmpdir(), "design-catalog-validation-"));
const read = (dir, name) => JSON.parse(readFileSync(join(dir, name), "utf8"));
const files = (dir, prefix = "") => readdirSync(join(dir, prefix), { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name)).flatMap((entry) => entry.isDirectory() ? files(dir, join(prefix, entry.name)) : [join(prefix, entry.name)]);
// Implements the keywords used by the local technique schema; unknown keywords are not silently evaluated.
function validate(value, schema, at) {
  const kind = value === null ? "null" : Array.isArray(value) ? "array" : typeof value === "number" && Number.isInteger(value) ? "integer" : typeof value;
  if (schema.type) assert([].concat(schema.type).some((type) => type === kind || (type === "number" && kind === "integer")), `${at}: type`);
  if (schema.const !== undefined) assert.deepEqual(value, schema.const, `${at}: const`);
  if (schema.enum) assert(schema.enum.includes(value), `${at}: enum`);
  if (typeof value === "string") {
    if (schema.minLength) assert(value.length >= schema.minLength, `${at}: minLength`);
    if (schema.pattern) assert(new RegExp(schema.pattern).test(value), `${at}: pattern`);
    if (schema.format === "uri") assert(new URL(value).protocol, `${at}: URI`);
  }
  if (typeof value === "number" && schema.minimum !== undefined) assert(value >= schema.minimum, `${at}: minimum`);
  if (Array.isArray(value)) {
    if (schema.minItems) assert(value.length >= schema.minItems, `${at}: minItems`);
    if (schema.items) value.forEach((item, i) => validate(item, schema.items, `${at}[${i}]`));
  } else if (value && typeof value === "object") {
    for (const name of schema.required ?? []) assert(Object.hasOwn(value, name), `${at}: missing ${name}`);
    for (const [name, item] of Object.entries(value)) {
      const child = schema.properties?.[name];
      if (child) validate(item, child, `${at}.${name}`);
      else if (schema.additionalProperties === false) assert.fail(`${at}: unexpected ${name}`);
      else if (schema.additionalProperties && typeof schema.additionalProperties === "object") validate(item, schema.additionalProperties, `${at}.${name}`);
    }
  }
}
try {
  const first = join(temporary, "first");
  const second = join(temporary, "second");
  for (const out of [first, second]) execFileSync(process.execPath, [join(root, "scripts/generate-data.mjs")], { env: { ...process.env, CATALOG_OUTPUT_DIR: out }, stdio: "pipe" });
  assert.deepEqual(files(first), files(second));
  for (const name of files(first)) assert.equal(readFileSync(join(first, name), "utf8"), readFileSync(join(second, name), "utf8"), `Nondeterministic: ${name}`);
  const index = read(first, "index.json");
  const techniques = read(first, "techniques.json");
  const schema = read(join(root, "public/schema"), "technique.schema.json");
  const slugs = new Set(techniques.map((t) => t.slug));
  assert.equal(slugs.size, techniques.length, "Duplicate technique slug");
  assert.equal(index.techniqueCount, techniques.length);
  for (const t of techniques) {
    validate(t, schema, t.slug);
    const c = t.agentContract;
    assert.equal(c.version, index.contractVersion);
    for (const key of ["useWhen", "avoidWhen", "inputs", "acceptance"]) assert(c[key]?.length && c[key].every((s) => typeof s === "string" && s.trim()), `${t.slug}: ${key}`);
    assert(c.recipe.trim() && c.output.trim() && c.provenance.statement.trim());
    assert.deepEqual(c.provenance.sources, t.sourceUrls);
    for (const state of ["responsive", "accessibility", "keyboard", "reducedMotion", "loading", "empty", "error", "interruption", "stateChange"]) assert(c.stateRequirements[state]?.trim(), `${t.slug}: ${state}`);
    for (const related of [...t.related, ...(t.pairsWellWith ?? []), ...c.compatibility.candidates]) assert(slugs.has(related), `${t.slug}: missing ${related}`);
    if (t.promptWhy) assert.equal(t.promptWhy.length, t.examplePrompts.length, `${t.slug}: prompt explanations`);
    assert.deepEqual(read(first, `techniques/${t.slug}.json`), t);
  }
  for (const path of index.decisionPaths) for (const slug of [path.start, path.support]) assert(slugs.has(slug), `Decision path ${path.id}: missing ${slug}`);
  for (const file of ["llms.txt", "llms-full.txt"]) {
    const text = readFileSync(join(root, "public", file), "utf8");
    for (const route of ["/data/index.json", "/data/techniques", "agentContract", "decisionPaths"]) assert(text.includes(route), `${file}: missing ${route}`);
    for (const match of text.matchAll(/https:\/\/design-catalog-three\.vercel\.app\/(data|schema)\/([a-z0-9/.-]+\.json)/g)) {
      const path = match[1] === "data" ? join(first, match[2]) : join(root, "public/schema", match[2]);
      JSON.parse(readFileSync(path, "utf8"));
    }
  }
  console.log(`Deterministic JSON, links, contracts and agent briefings: ${techniques.length} techniques.`);
} finally {
  rmSync(temporary, { recursive: true, force: true });
}
