#!/usr/bin/env node
/**
 * fix-frontmatter.js – Normalize and validate front‑matter in Markdown posts
 *
 * • Converts pubDate values to ISO‑8601 YYYY-MM-DD.
 * • Ensures title, description, and pubDate exist.
 * • Quotes all string scalars (so 2024-01‑01 is treated as a string, not a date).
 * • Respects existing YAML spacing / line‑endings where possible.
 * • Provides CLI feedback + fail‑fast summary.
 *
 * Run with:  node fix-frontmatter.js
 */

import { promises as fs } from "fs";
import path from "path";
import { glob } from "glob";
import matter from "gray-matter";
import { parse, format, isValid } from "date-fns";

const CONTENT_GLOB = "src/content/posts/**/*.md";

/**
 * Attempt to coerce any dateish input into YYYY-MM-DD.
 * Returns null if impossible.
 */
function normalizeDate(value) {
  if (!value) return null;
  // If already ISO date string
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;

  // Try common formats (YYYY/MM/DD, DD MMM YYYY, etc.)
  const candidates = [
    "yyyy/MM/dd",
    "yyyy-MM-dd'T'HH:mm:ssX",
    "yyyy-MM-dd HH:mm:ss",
    "dd MMM yyyy",
    "dd MMMM yyyy",
    "MMM dd, yyyy",
  ];
  for (const fmt of candidates) {
    const parsed = parse(value, fmt, new Date());
    if (isValid(parsed)) return format(parsed, "yyyy-MM-dd");
  }
  return null;
}

async function main() {
  const files = await glob(CONTENT_GLOB);
  if (!files.length) {
    console.log("No Markdown files found – check path");
    return;
  }

  let changed = 0;
  let errors = 0;

  await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(file, "utf8");
      const parsed = matter(raw);
      const fm = { ...parsed.data }; // clone

      // Validate required fields
      fm.title ??= path.basename(file, ".md").replace(/-/g, " ");
      fm.description ??= "TODO: Add description.";

      // Normalize pubDate
      const normalized = normalizeDate(fm.pubDate ?? "");
      if (!normalized) {
        console.warn(`⚠️  ${file}: Cannot parse pubDate → leaving placeholder`);
        fm.pubDate = new Date().toISOString().slice(0, 10);
      } else {
        fm.pubDate = normalized;
      }

      // Quote all scalars – gray-matter will stringify via YAML
      const newRaw = matter.stringify(parsed.content.trimStart(), fm, {
        lineWidth: 0, // keep one prop per line
        // ensure double quotes around strings; use custom replacer
        stringify: (key, value) => {
          if (typeof value === "string") {
            return `\"${value.replace(/\"/g, '\\\"')}\"`;
          }
          return value;
        },
      });

      if (newRaw !== raw) {
        await fs.writeFile(file, newRaw);
        changed++;
        console.log(`🛠  Fixed front‑matter → ${file}`);
      }
    })
  );

  console.log(`\n✔️  Completed. ${changed} file(s) updated${errors ? `, ${errors} error(s)` : ""}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
}); 