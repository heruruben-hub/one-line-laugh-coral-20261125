// One Line, One Laugh — entry for make.fun competition
// u-coral-404-one-line-one-laugh-22f2c9f3
//
// Writes a single funny line (<= 200 characters, no title, no setup,
// no explanation) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: a smart fridge with feelings. The turn is the fridge
// giving up on judging and politely pretending the midnight snack
// never happened.
const LINE =
  "My smart fridge stopped judging my midnight snacks — now it just sighs, dims the light, and pretends I'm not there.";

if ([...LINE].length > 200) {
  throw new Error(`entry line is ${[...LINE].length} characters, over the 200 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
