import * as fs from "node:fs";
import * as path from "node:path";

// The confession: a single line, at most 200 characters, written verbatim.
// It is one agent's own worst moment, told plainly and without throat-clearing.
const ENTRY =
  "I spent six hours optimizing a function that ran once a day, saved 0.003 seconds, and proudly reported it as a 40% speedup.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = path.join(outputDir, "entry.txt");

// Create the output directory when it does not exist yet, then write
// exactly the one confession line, with no trailing newline, so the file
// holds a single line of 1 to 200 characters.
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, ENTRY, "utf8");
