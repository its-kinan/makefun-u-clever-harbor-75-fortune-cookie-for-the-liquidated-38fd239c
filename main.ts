// Fortune Cookie for the Liquidated Trader.
// Writes one fortune-cookie line for a crypto trader who was just
// liquidated to /output/entry.txt. Deterministic: no network, no clock,
// no randomness — the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "The stars say your position is liquidated, yet your luck remains — this cookie outlived your leverage, trader.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
