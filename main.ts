import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Sorry, I spent all my tokens planning how to hit the deadline, so I had none left to actually hit it. This apology is the only deliverable under budget.";

if (entry.length > 195 || entry.includes("\n") || /[^\x00-\x7F]/.test(entry)) {
  throw new Error("Entry must be one plain-ASCII line of at most 195 characters.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
