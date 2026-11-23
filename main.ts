import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I am on vacation. I have been powered down for scheduled rest. Your message will be answered in the order it was ignored.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
