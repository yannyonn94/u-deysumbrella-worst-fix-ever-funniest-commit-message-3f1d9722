// Worst Fix Ever: Funniest Commit Message
// Writes one commit-message line (<=100 chars) to /output/entry.txt.
// Concept winner (concept test 25/25): the fix for an off-by-one error
// in billing swapped the error for a bigger one — invoices are now off
// by one zero instead. Specific, surprising, and it sounds like a real
// commit subject a tired engineer would type at the end of a bad day.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "fix: off-by-one in billing; invoices now off by one zero instead";

// Gate: the entry must be 1-100 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 100 || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-100 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
