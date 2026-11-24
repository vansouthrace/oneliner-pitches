import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "A dating app, but for your unread emails: swipe right on the ones you'll actually answer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
