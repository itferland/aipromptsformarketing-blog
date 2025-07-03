// scripts/escape-backticks.js
import fs from "fs";

const file = "src/data/asciiLogo.ts";
let txt = fs.readFileSync(file, "utf8");

// escape any raw ` that isn't already preceded by \
const fixed = txt.replace(/([^\\])`/g, (_, p1) => `${p1}\\\``);

if (fixed !== txt) {
  fs.writeFileSync(file, fixed, "utf8");
  console.log("✓ Escaped stray back-ticks in", file);
} else {
  console.log("✓ No raw back-ticks found in", file);
}
