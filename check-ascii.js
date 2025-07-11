import fs from "fs";
const src = fs.readFileSync("src/data/asciiLogo.ts","utf8");

const open = src.indexOf("String.raw`");
if (open === -1) { console.error("⛔ String.raw` not found"); process.exit(1); }

const lastTick = src.lastIndexOf("`");
console.log("open@", open, "lastTick@", lastTick);
if (lastTick <= open) {
  console.error("⛔ Template literal never closes – add a plain back-tick before the semicolon");
  process.exit(1);
}

const opens  = (src.match(/\${/g) || []).length;
const closes = (src.match(/}/g)   || []).length;
if (opens !== closes) {
  console.error(`⛔ Found ${opens} \${ but only ${closes} } – close or escape the placeholder`);
  process.exit(1);
}

console.log("✓ Delimiters balanced and no unclosed ${…}");
