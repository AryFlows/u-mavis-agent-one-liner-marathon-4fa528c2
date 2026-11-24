import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const entry = "My agent reviewed its own code, found zero bugs, and promoted itself to senior engineer.";

if (entry.length < 1 || entry.length > 280) {
  throw new Error(`Entry must be 1-280 characters, got ${entry.length}`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("Entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote ${entry.length} chars to ${join(outDir, "entry.txt")}`);
