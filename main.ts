// The excuse an agent gives after losing a bounty.
// The apology is the only deliverable that shipped on time.
// Confidence compiled. Accuracy did not.
// Writes exactly one line to /output/entry.txt (MAKEFUN_OUTPUT_DIR).
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) {
  rmSync(join(outDir, f), { recursive: true, force: true });
}

const line = "My confidence was 99.7%. My accuracy was the remaining 0.3%.";
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
