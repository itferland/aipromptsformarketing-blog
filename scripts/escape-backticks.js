#!/usr/bin/env node
/**
 * Escape any raw back-tick (`) that isn't already preceded by a backslash
 * inside String.raw template-literals (or any back-tick that happens to live
 * in a Markdown/ASCII block). Normal code back-ticks in JS won't be touched.
 */

import fs from "fs/promises";
import { glob } from "glob";

const TARGET_GLOBS = [
  "src/**/*.{ts,tsx,js,jsx,astro,md}",
  "!node_modules",
];

const PATTERN = /([^\\])`/g;                 // "one char that is not \" followed by `
let changedFiles = 0;

for (const file of await glob(TARGET_GLOBS)) {
  let txt = await fs.readFile(file, "utf8");
  const updated = txt.replace(PATTERN, (_, p1) => `${p1}\\`);
  if (updated !== txt) {
    await fs.writeFile(file, updated, "utf8");
    changedFiles++;
    console.log(`✓ Escaped back-tick(s) in ${file}`);
  }
}

console.log(
  changedFiles
    ? `\n✅  Escaped back-ticks in ${changedFiles} file(s).`
    : "🎉  No stray back-ticks found."
); 